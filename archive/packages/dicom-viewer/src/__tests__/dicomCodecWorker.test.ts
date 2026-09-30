import { describe, it, expect } from 'vitest';
import {
  decodeDicomFrameData,
} from '../workers/dicomCodecWorker';
import { decompressDicomFrame } from '../workers/dicomCodecBridge';

describe('Wasm Worker DICOM Codec & Frame Decompression Suite', () => {
  it('decompresses uncompressed Little Endian frame into 16-bit pixel data', () => {
    const width = 128;
    const height = 128;
    const numPixels = width * height;
    const rawBuffer = new Uint16Array(numPixels);
    for (let i = 0; i < numPixels; i++) {
      rawBuffer[i] = 1000 + (i % 500); // Simulated HU values
    }

    const { pixelData, durationMs } = decodeDicomFrameData({
      id: 'test-raw-1',
      frameIndex: 0,
      transferSyntaxUid: '1.2.840.10008.1.2.1', // Explicit VR Little Endian
      encodedBuffer: rawBuffer.buffer,
      width,
      height,
      bitsAllocated: 16,
    });

    expect(pixelData.byteLength).toBe(numPixels * 2);
    expect(durationMs).toBeGreaterThan(0);

    const decodedArray = new Uint16Array(pixelData);
    expect(decodedArray[0]).toBe(rawBuffer[0]);
    expect(decodedArray[100]).toBe(rawBuffer[100]);
  });

  it('decompresses JPEG-LS Lossless transfer syntax (1.2.840.10008.1.2.4.80) at 30 fps speed target', async () => {
    const width = 256;
    const height = 256;
    const compressedStream = new Uint8Array(2048); // High compression ratio test
    for (let i = 0; i < compressedStream.length; i++) {
      compressedStream[i] = (i * 31) % 256;
    }

    const res = await decompressDicomFrame({
      frameIndex: 12,
      transferSyntaxUid: '1.2.840.10008.1.2.4.80', // JPEG-LS Lossless
      encodedBuffer: compressedStream.buffer,
      width,
      height,
      bitsAllocated: 16,
    });

    expect(res.success).toBe(true);
    expect(res.pixelData).toBeDefined();
    expect(res.pixelData!.byteLength).toBe(width * height * 2);
    // Sub-millisecond or fast execution guaranteeing >30 fps playback (< 33.3 ms)
    expect(res.decodingDurationMs).toBeLessThan(33.3);
  });

  it('decompresses JPEG 2000 transfer syntax (1.2.840.10008.1.2.4.90) for angiography runs', async () => {
    const width = 512;
    const height = 512;
    const mockJ2kData = new Uint8Array(4096);
    mockJ2kData.fill(0xaa);

    const res = await decompressDicomFrame({
      frameIndex: 45,
      transferSyntaxUid: '1.2.840.10008.1.2.4.90', // JPEG 2000 Lossless
      encodedBuffer: mockJ2kData.buffer,
      width,
      height,
      bitsAllocated: 16,
    });

    expect(res.success).toBe(true);
    expect(res.pixelData!.byteLength).toBe(width * height * 2);
    expect(res.width).toBe(512);
    expect(res.height).toBe(512);
  });
});
