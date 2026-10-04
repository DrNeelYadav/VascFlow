"use client";

import React, { useState, useRef } from "react";
import { Camera, Image as ImageIcon, X, ZoomIn, Trash2 } from "lucide-react";

export interface AttachedPhoto {
  id: string;
  dataUrl: string;
  name: string;
  capturedAt: string;
}

interface ClinicalPhotoAttachmentProps {
  photos?: AttachedPhoto[];
  onChange?: (photos: AttachedPhoto[]) => void;
  maxPhotos?: number;
}

export function ClinicalPhotoAttachment({
  photos = [],
  onChange,
  maxPhotos = 3,
}: ClinicalPhotoAttachmentProps) {
  const [activePhotos, setActivePhotos] = useState<AttachedPhoto[]>(photos);
  const [zoomedPhoto, setZoomedPhoto] = useState<AttachedPhoto | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const remainingSlots = maxPhotos - activePhotos.length;
    const toProcess = Array.from(files).slice(0, remainingSlots);

    toProcess.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          const newPhoto: AttachedPhoto = {
            id: `photo-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
            dataUrl: result,
            name: file.name || `CT_Photo_${activePhotos.length + 1}.jpg`,
            capturedAt: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
          };
          setActivePhotos((prev) => {
            const updated = [...prev, newPhoto].slice(0, maxPhotos);
            onChange?.(updated);
            return updated;
          });
        }
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleRemove = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotos((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      onChange?.(updated);
      return updated;
    });
    if (zoomedPhoto?.id === id) setZoomedPhoto(null);
  };

  return (
    <div className="p-3.5 space-y-3 bg-slate-50/50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            Clinical Photos &amp; Requisition Attachments
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
            ({activePhotos.length}/{maxPhotos} max)
          </span>
        </div>

        {activePhotos.length < maxPhotos && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium cursor-pointer transition shadow-xs"
            aria-label="Take or Upload Clinical Photo"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Add Photo</span>
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        multiple
        onChange={handleCapture}
      />

      {activePhotos.length === 0 ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center cursor-pointer hover:border-blue-400 dark:hover:border-blue-600 transition group"
        >
          <ImageIcon className="w-6 h-6 mx-auto mb-1 text-slate-400 group-hover:text-blue-500 transition-colors" />
          <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
            Tap to capture or attach CT console photos / requisition slip
          </p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
            Supports direct mobile camera, iPad capture, or JPEG/PNG files
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {activePhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setZoomedPhoto(photo)}
              className="group relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-black aspect-video cursor-pointer shadow-xs"
              role="button"
              tabIndex={0}
              aria-label={`View photo ${idx + 1}: ${photo.name}`}
            >
              <img
                src={photo.dataUrl}
                alt={photo.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <ZoomIn className="w-4 h-4 text-white drop-shadow-md" />
              </div>
              <button
                type="button"
                onClick={(e) => handleRemove(photo.id, e)}
                className="absolute top-1 right-1 p-1 rounded-full bg-red-600/90 text-white hover:bg-red-700 transition min-w-[28px] min-h-[28px] flex items-center justify-center"
                aria-label={`Delete photo ${idx + 1}`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-1 text-[9px] text-white truncate">
                {photo.name} • {photo.capturedAt}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Zoom Modal */}
      {zoomedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setZoomedPhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-slate-800 border-b border-slate-700 flex items-center justify-between text-white">
              <span className="text-xs font-semibold truncate">{zoomedPhoto.name}</span>
              <button
                type="button"
                onClick={() => setZoomedPhoto(null)}
                className="p-1 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close zoomed photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 overflow-auto max-h-[calc(90vh-100px)] flex items-center justify-center bg-black">
              <img
                src={zoomedPhoto.dataUrl}
                alt={zoomedPhoto.name}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
