import { PROCEDURE_CONSENT_TEMPLATES } from "../../lib/consent/consentData";
import { EXTENSIVE_IR_PROCEDURES } from "../../lib/data/procedures";
import { ALL_MASTER_PROCEDURES } from "../../lib/masterCatalog";
import { normalizeProcedureCategory } from "./consentTemplateResolver";

export interface ProcedureCatalogEntry {
  id: string;
  name: string;
  category: string;
  code?: string;
}

export function buildAllProceduresCatalog(): ProcedureCatalogEntry[] {
  const list: ProcedureCatalogEntry[] = [];
  const seenIds = new Set<string>();

  Object.keys(PROCEDURE_CONSENT_TEMPLATES).forEach((key) => {
    const t = PROCEDURE_CONSENT_TEMPLATES[key];
    seenIds.add(key);
    list.push({
      id: key,
      name: t.nameEn,
      category: normalizeProcedureCategory(t.category),
      code: "STD-CONSENT",
    });
  });

  ALL_MASTER_PROCEDURES.forEach((p) => {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      list.push({
        id: p.id,
        name: p.title,
        category: normalizeProcedureCategory(p.categoryName),
        code: p.maayRghsCompatibility?.packageCode,
      });
    }
  });

  EXTENSIVE_IR_PROCEDURES.forEach((p) => {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      list.push({
        id: p.id,
        name: p.name,
        category: normalizeProcedureCategory(p.category),
        code: p.code,
      });
    }
  });

  return list;
}
