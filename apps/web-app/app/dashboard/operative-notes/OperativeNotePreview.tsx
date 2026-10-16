"use client";

import React from "react";
import { WordPadRibbon } from "./WordPadRibbon";
import { WordPadRuler } from "./WordPadRuler";
import { WordPadPaperSheet } from "./WordPadPaperSheet";
import { useOperativeNoteDocument } from "./useOperativeNoteDocument";
import { DraftRecoveryBanner } from "../common/DraftRecoveryBanner";
import { ProcedureNarrativeBuilder } from "./ProcedureNarrativeBuilder";

interface OperativeNotePreviewProps {
  docManager: ReturnType<typeof useOperativeNoteDocument>;
}

export function OperativeNotePreview({ docManager }: OperativeNotePreviewProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900 space-y-2">
      <div className="px-4 pt-2 flex items-center justify-between">
        <DraftRecoveryBanner
          lastSaved={docManager.draftVault.lastSaved}
          hasRecoveredDraft={docManager.draftVault.hasRecoveredDraft}
          onRestore={docManager.handleRestoreDraft}
          onDismiss={docManager.draftVault.dismissDraft}
        />
      </div>

      <WordPadRibbon
        selectedProcedureId={docManager.selectedProcedureId}
        onSelectProcedure={docManager.handleSelectProcedure}
        fontFamily={docManager.fontFamily}
        setFontFamily={docManager.setFontFamily}
        fontSize={docManager.fontSize}
        setFontSize={docManager.setFontSize}
        isBold={docManager.isBold}
        setIsBold={docManager.setIsBold}
        isItalic={docManager.isItalic}
        setIsItalic={docManager.setIsItalic}
        isUnderline={docManager.isUnderline}
        setIsUnderline={docManager.setIsUnderline}
        textAlign={docManager.textAlign}
        setTextAlign={docManager.setTextAlign}
        copyFeedback={docManager.copyFeedback}
        onCopy={docManager.handleCopy}
        onPrint={docManager.handlePrint}
        onDownloadDocx={docManager.handleDownloadDocx}
        onResetTemplate={docManager.handleResetTemplate}
      />
      <WordPadRuler />

      <div className="px-4 print:hidden">
        <ProcedureNarrativeBuilder
          procedureId={docManager.selectedProcedureId}
          onReplaceTechnique={(text) => docManager.handleFieldChange("technique", text)}
          onAppendText={(snippet) =>
            docManager.handleFieldChange(
              "technique",
              docManager.docData.technique ? `${docManager.docData.technique} ${snippet}` : snippet
            )
          }
        />
      </div>

      <WordPadPaperSheet
        data={docManager.docData}
        onChange={docManager.handleFieldChange}
        fontFamily={docManager.fontFamily}
        fontSize={docManager.fontSize}
        isBold={docManager.isBold}
        isItalic={docManager.isItalic}
        isUnderline={docManager.isUnderline}
        textAlign={docManager.textAlign}
      />
    </div>
  );
}
