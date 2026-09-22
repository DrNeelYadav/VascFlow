import { describe, it, expect } from 'vitest';
import { extractVascularEntities } from '../../app/dashboard/report/components/VoiceDictationStudio';

describe('Hands-Free Voice Dictation NLP & Vascular Entity Extractor Suite', () => {
  it('extracts access site, sheath, catheter, embolic agent, and hemostasis device from clinical transcript', () => {
    const transcript =
      'Right common femoral artery access obtained. 6F sheath placed. Simmons 2 catheter used to engage celiac trunk. Embolized with Lipiodol and PVA particles. Hemostasis secured with Angio-Seal 6F.';

    const entities = extractVascularEntities(transcript);

    expect(entities.accessSite).toBe('Right Common Femoral Artery');
    expect(entities.sheathSize).toBe('6F');
    expect(entities.catheter).toBe('Simmons 2');
    expect(entities.embolicAgent).toBe('Lipiodol');
    expect(entities.hemostasisMethod).toBe('Angio-Seal 6F');
  });

  it('correctly extracts radial access and TR Band hemostasis', () => {
    const transcript =
      'Left radial artery accessed with 5 French introducer. Pigtail catheter positioned in ascending aorta. Hemostasis achieved using TR Band.';

    const entities = extractVascularEntities(transcript);

    expect(entities.accessSite).toBe('Left Radial Artery');
    expect(entities.sheathSize).toBe('5F');
    expect(entities.catheter).toBe('Pigtail');
    expect(entities.hemostasisMethod).toBe('Tr Band');
  });

  it('correctly extracts endovenous laser / VenaSeal and microcatheter', () => {
    const transcript =
      'Right internal jugular vein access. 7F sheath. Progreat microcatheter advanced. Coils and VenaSeal cyanoacrylate deployed. Manual compression for 15 minutes.';

    const entities = extractVascularEntities(transcript);

    expect(entities.accessSite).toBe('Right Internal Jugular Vein');
    expect(entities.sheathSize).toBe('7F');
    expect(entities.catheter).toBe('Progreat');
    expect(entities.embolicAgent).toBe('Coils');
    expect(entities.hemostasisMethod).toBe('Manual Compression');
  });

  it('handles empty or unrecognized transcript without crashing', () => {
    const entities = extractVascularEntities('The weather is sunny outside.');
    expect(entities.accessSite).toBeUndefined();
    expect(entities.sheathSize).toBeUndefined();
    expect(entities.catheter).toBeUndefined();
    expect(entities.embolicAgent).toBeUndefined();
    expect(entities.hemostasisMethod).toBeUndefined();
  });
});
