export * from "./types";
export * from "./masterHardwareCatalog";

import { MASTER_HARDWARE_CATALOG } from "./masterHardwareCatalog";
import { MasterHardwareItem, HardwareCategory } from "./types";

export function getHardwareItemBySku(sku: string): MasterHardwareItem | undefined {
  return MASTER_HARDWARE_CATALOG.find((i) => i.sku === sku || i.rmsclMatchingCode === sku);
}

export function getHardwareByCategory(category: HardwareCategory): MasterHardwareItem[] {
  return MASTER_HARDWARE_CATALOG.filter((i) => i.category === category);
}

export function searchHardwareCatalog(query: string): MasterHardwareItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return MASTER_HARDWARE_CATALOG;
  return MASTER_HARDWARE_CATALOG.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.specification.toLowerCase().includes(q) ||
      item.manufacturer.toLowerCase().includes(q) ||
      item.brandName.toLowerCase().includes(q) ||
      item.sku.toLowerCase().includes(q) ||
      item.rmsclMatchingCode.toLowerCase().includes(q) ||
      item.clinicalIndications.toLowerCase().includes(q)
  );
}
