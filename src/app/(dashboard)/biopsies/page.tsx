'use client';

import React, { useState, useMemo } from 'react';
import { useClinicalStore } from '@/stores/useClinicalStore';
import { BiopsyEntry } from '@/types/clinical';
import {
  Microscope,
  Plus,
  Search,
  Filter,
  Download,
  Share2,
  CheckCircle2,
  AlertCircle,
  Clock,
  Activity,
  FileSpreadsheet,
  Layers,
  ChevronDown,
  Printer,
  Table
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BiopsyRegistryPage() {
  const biopsies = useClinicalStore((s) => s.biopsies);
  const addBiopsy = useClinicalStore((s) => s.addBiopsy);
  const activeRole = useClinicalStore((s) => s.activeRole);

  const [activeSheetTab, setActiveSheetTab] = useState<'ALL' | 'D9211_CT' | 'ROOM_922_USG'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);

  // New Biopsy Form State
  const [newCrNo, setNewCrNo] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newModality, setNewModality] = useState<'D9211_CT' | 'ROOM_922_USG'>('D9211_CT');
  const [newOrgan, setNewOrgan] = useState('');
  const [newNeedle, setNewNeedle] = useState('18G Coaxial');
  const [newCores, setNewCores] = useState(2);
  const [newOperator, setNewOperator] = useState('Dr. Choudhary (SR)');

  // Filtered biopsies
  const filteredBiopsies = useMemo(() => {
    return biopsies.filter((bx) => {
      const matchesSearch =
        bx.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bx.crNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bx.organ.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesModality =
        activeSheetTab === 'ALL' ||
        (activeSheetTab === 'D9211_CT' && (bx.organ.includes('Lung') || bx.organ.includes('Retroperitoneal') || bx.organ.includes('Bone') || bx.needleGauge.includes('Coaxial'))) ||
        (activeSheetTab === 'ROOM_922_USG' && (bx.organ.includes('Liver') || bx.organ.includes('Renal') || bx.organ.includes('Thyroid') || bx.organ.includes('Breast')));

      return matchesSearch && matchesModality;
    });
  }, [biopsies, searchTerm, activeSheetTab]);

  // Real-time Departmental Metrics for Formula Bar
  const totalCount = biopsies.length;
  const adequateCount = biopsies.filter((b) => b.diagnosticYield).length;
  const yieldPercentage = totalCount > 0 ? ((adequateCount / totalCount) * 100).toFixed(1) : '0';

  const handleCreateBiopsy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCrNo || !newName || !newOrgan) return;

    addBiopsy({
      id: `bx-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      station: newModality === 'D9211_CT' ? 'D9211_CT' : 'Room922_USG',
      crNo: newCrNo,
      name: newName,
      phone: newPhone || '9829000000',
      organ: newOrgan,
      needleGauge: newNeedle,
      coresCount: newCores,
      operatorResident: newOperator,
      pathLab: 'In-House SMS Pathology',
      status: 'Pending',
      diagnosticYield: true,
      histopathologyDiagnosis: 'Specimen placed in 10% neutral buffered formalin; dispatched to Pathology.'
    });

    setNewCrNo('');
    setNewName('');
    setNewOrgan('');
    setIsLogModalOpen(false);
  };

  const handleExportCsv = () => {
    const headers = ['Row,CR_Number,Patient_Name,Target_Organ,Needle_Gauge,Cores,Operator,Yield,Status,Date'];
    const rows = filteredBiopsies.map((b, idx) =>
      `${idx + 1},${b.crNo},${b.name},${b.organ},${b.needleGauge},${b.coresCount},${b.operatorResident},${b.diagnosticYield ? 'Conclusive' : 'Inadequate'},${b.status},${b.date}`
    );

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `SMS_IR_Biopsy_Registry_${activeSheetTab}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendWhatsAppRecall = (b: BiopsyEntry) => {
    const message = `*SMS HOSPITAL INTERVENTIONAL RADIOLOGY BIOPSY RECALL*
Patient: ${b.name} (CR: ${b.crNo})
Biopsy Date: ${b.date}
Organ/Site: ${b.organ}
Biopsy Operator: ${b.operatorResident}
Status: Histopathology report pending past 7 days.
Please coordinate with Central Pathology Lab (D-Block, SMS Hospital) for report dispatch.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/91${b.phone}?text=${encoded}`, '_blank');
  };

  return (
    <div className="space-y-3 pb-16">
      {/* Google Sheets Header & Formula Bar */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg shadow-xs overflow-hidden">
        {/* Menu Bar */}
        <div className="p-3 border-b border-[#DADCE0] flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center font-bold shadow-xs">
              <Microscope className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-heading font-medium text-base text-[#202124] tracking-tight">
                Biopsy Registry
              </h1>
              <p className="text-[11px] text-[#5F6368]">
                Diagnostic core yield tracking and pathology record
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-[#5F6368] absolute left-2.5 top-2" />
              <input
                type="text"
                placeholder="Find in sheet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1 rounded-full text-xs border border-[#DADCE0] bg-[#F8F9FA] text-[#202124] outline-none focus:bg-[#FFFFFF] focus:border-[#1A73E8]"
              />
            </div>

            <button
              onClick={handleExportCsv}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-xs font-medium text-[#202124] transition shadow-xs"
              title="Download CSV"
            >
              <Download className="w-3.5 h-3.5 text-[#5F6368]" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => setIsLogModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A73E8] hover:bg-[#1765CC] text-white text-xs font-medium transition shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Log Biopsy</span>
            </button>
          </div>
        </div>

        {/* Google Sheets Formula Bar */}
        <div className="px-3 py-2 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center gap-3 text-xs font-mono">
          <div className="px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#DADCE0] font-semibold text-[#5F6368] text-[11px]">
            fx
          </div>
          <div className="flex-1 text-[#202124] truncate">
            =DIVIDE(COUNTIF(Yield, &quot;Conclusive&quot;), COUNTA(Biopsies)) &rarr; <b className="text-[#137333]">{yieldPercentage}%</b> ({adequateCount}/{totalCount} Concordant Yield)
          </div>
          <div className="text-[11px] text-[#5F6368] font-sans">
            Target CIRSE Benchmark: &ge;85.0%
          </div>
        </div>
      </div>

      {/* Main Google Sheets Grid Container */}
      <div className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-lg overflow-x-auto shadow-xs">
        <table className="google-sheet-table select-none">
          <thead>
            {/* Column Letter Identifiers Row (A, B, C...) */}
            <tr className="bg-[#F8F9FA] text-[#80868B] text-[10px] text-center border-b border-[#E0E0E0]">
              <th className="w-10 border-r border-[#E0E0E0] py-0.5 font-normal">#</th>
              <th className="border-r border-[#E0E0E0] py-0.5 font-normal">A</th>
              <th className="border-r border-[#E0E0E0] py-0.5 font-normal">B</th>
              <th className="border-r border-[#E0E0E0] py-0.5 font-normal">C</th>
              <th className="border-r border-[#E0E0E0] py-0.5 font-normal">D</th>
              <th className="border-r border-[#E0E0E0] py-0.5 font-normal">E</th>
              <th className="border-r border-[#E0E0E0] py-0.5 font-normal">F</th>
              <th className="border-r border-[#E0E0E0] py-0.5 font-normal">G</th>
              <th className="py-0.5 font-normal">H</th>
            </tr>

            {/* Functional Clinical Column Titles */}
            <tr className="bg-[#F8F9FA] text-[#5F6368] text-[11px] font-semibold">
              <th className="google-sheet-th w-10 text-center">Row</th>
              <th className="google-sheet-th">CR Number</th>
              <th className="google-sheet-th">Patient Name</th>
              <th className="google-sheet-th">Target Organ / Lesion</th>
              <th className="google-sheet-th">Needle & Cores</th>
              <th className="google-sheet-th">Operating Radiologist</th>
              <th className="google-sheet-th text-center">Diagnostic Yield</th>
              <th className="google-sheet-th text-center">Histo Status</th>
              <th className="google-sheet-th text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBiopsies.map((bx, idx) => {
              const isSelected = selectedRowId === bx.id;

              return (
                <tr
                  key={bx.id}
                  onClick={() => setSelectedRowId(bx.id)}
                  className={cn(
                    'google-sheet-row cursor-pointer transition-colors',
                    isSelected ? 'bg-[#E8F0FE]' : (idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#FDFDFD]')
                  )}
                >
                  {/* Row Number */}
                  <td className="google-sheet-td w-10 text-center text-[#80868B] bg-[#F8F9FA] font-mono text-[10px]">
                    {idx + 1}
                  </td>

                  {/* CR Number */}
                  <td className="google-sheet-td font-mono font-medium text-[#202124]">
                    {bx.crNo}
                  </td>

                  {/* Patient Name */}
                  <td className="google-sheet-td font-medium text-[#202124]">
                    {bx.name}
                  </td>

                  {/* Organ */}
                  <td className="google-sheet-td text-[#202124]">
                    <span className="font-medium">{bx.organ}</span>
                  </td>

                  {/* Needle & Cores */}
                  <td className="google-sheet-td font-mono text-[11px] text-[#5F6368]">
                    {bx.needleGauge} • {bx.coresCount} cores
                  </td>

                  {/* Operator */}
                  <td className="google-sheet-td text-[#3C4043]">
                    {bx.operatorResident}
                  </td>

                  {/* Diagnostic Yield */}
                  <td className="google-sheet-td text-center">
                    {bx.diagnosticYield ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E6F4EA] text-[#137333]">
                        <CheckCircle2 className="w-3 h-3" />
                        Adequate (100%)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FCE8E6] text-[#C5221F]">
                        <AlertCircle className="w-3 h-3" />
                        Inadequate
                      </span>
                    )}
                  </td>

                  {/* Pathology Status */}
                  <td className="google-sheet-td text-center">
                    <span
                      className={cn(
                        'px-2 py-0.5 rounded-full text-[10px] font-medium',
                        bx.status === 'Report_Received'
                          ? 'bg-[#E6F4EA] text-[#137333]'
                          : bx.status === 'Pending'
                          ? 'bg-[#FEF7E0] text-[#B06000]'
                          : 'bg-[#F1F3F4] text-[#5F6368]'
                      )}
                    >
                      {bx.status.replace('_', ' ')}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="google-sheet-td text-center">
                    {bx.status === 'Pending' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSendWhatsAppRecall(bx);
                        }}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/30 text-[#075E54] text-[10px] font-medium transition"
                        title="Send Pathology Recall Notification via WhatsApp"
                      >
                        <Share2 className="w-2.5 h-2.5" />
                        <span>WhatsApp Recall</span>
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredBiopsies.length === 0 && (
          <div className="py-12 text-center text-[#5F6368] text-xs">
            No biopsy logs found in active sheet matching filter criteria.
          </div>
        )}

        {/* Google Sheets Worksheet Tabs Bar at Bottom */}
        <div className="bg-[#F8F9FA] border-t border-[#E0E0E0] p-1.5 flex items-center gap-1 text-xs">
          <button
            onClick={() => setActiveSheetTab('ALL')}
            className={cn(
              'px-3.5 py-1 rounded-t text-xs font-medium border-t-2 transition-all',
              activeSheetTab === 'ALL'
                ? 'bg-[#FFFFFF] border-[#1A73E8] text-[#1A73E8] shadow-xs'
                : 'border-transparent text-[#5F6368] hover:bg-[#E8EAED]'
            )}
          >
            All Biopsy Records ({totalCount})
          </button>

          <button
            onClick={() => setActiveSheetTab('D9211_CT')}
            className={cn(
              'px-3.5 py-1 rounded-t text-xs font-medium border-t-2 transition-all',
              activeSheetTab === 'D9211_CT'
                ? 'bg-[#FFFFFF] border-[#1A73E8] text-[#1A73E8] shadow-xs'
                : 'border-transparent text-[#5F6368] hover:bg-[#E8EAED]'
            )}
          >
            D9211 CT Guided Suite
          </button>

          <button
            onClick={() => setActiveSheetTab('ROOM_922_USG')}
            className={cn(
              'px-3.5 py-1 rounded-t text-xs font-medium border-t-2 transition-all',
              activeSheetTab === 'ROOM_922_USG'
                ? 'bg-[#FFFFFF] border-[#1A73E8] text-[#1A73E8] shadow-xs'
                : 'border-transparent text-[#5F6368] hover:bg-[#E8EAED]'
            )}
          >
            Room 922 USG Suite
          </button>
        </div>
      </div>

      {/* Log Biopsy Specimen Modal */}
      {isLogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <form
            onSubmit={handleCreateBiopsy}
            className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg max-w-md w-full p-5 shadow-xl text-[#202124] animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2 mb-3">
              <div className="flex items-center gap-2">
                <Microscope className="w-5 h-5 text-[#1A73E8]" />
                <h3 className="font-heading font-medium text-base text-[#202124]">
                  Log Interventional Biopsy Specimen
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsLogModalOpen(false)}
                className="text-[#5F6368] hover:text-[#202124] text-sm p-1 rounded-full hover:bg-[#F1F3F4]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">CR Number</label>
                  <input
                    type="text"
                    required
                    placeholder="CR-2026-XXXX"
                    value={newCrNo}
                    onChange={(e) => setNewCrNo(e.target.value)}
                    className="w-full p-2 rounded-md border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] outline-none focus:border-[#1A73E8]"
                  />
                </div>
                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Patient Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Patient Full Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full p-2 rounded-md border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] outline-none focus:border-[#1A73E8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Modality Suite</label>
                  <select
                    value={newModality}
                    onChange={(e) => setNewModality(e.target.value as any)}
                    className="w-full p-2 rounded-md border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] outline-none focus:border-[#1A73E8]"
                  >
                    <option value="D9211_CT">D9211 CT Guided</option>
                    <option value="ROOM_922_USG">Room 922 USG Guided</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Target Organ / Lesion</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lung RUL, Liver S6..."
                    value={newOrgan}
                    onChange={(e) => setNewOrgan(e.target.value)}
                    className="w-full p-2 rounded-md border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] outline-none focus:border-[#1A73E8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Needle Gauge</label>
                  <input
                    type="text"
                    value={newNeedle}
                    onChange={(e) => setNewNeedle(e.target.value)}
                    className="w-full p-2 rounded-md border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] outline-none focus:border-[#1A73E8]"
                  />
                </div>

                <div>
                  <label className="block text-[#5F6368] font-medium mb-1">Number of Cores</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={newCores}
                    onChange={(e) => setNewCores(parseInt(e.target.value) || 1)}
                    className="w-full p-2 rounded-md border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] outline-none focus:border-[#1A73E8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#5F6368] font-medium mb-1">Operating Radiologist</label>
                <input
                  type="text"
                  value={newOperator}
                  onChange={(e) => setNewOperator(e.target.value)}
                  className="w-full p-2 rounded-md border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] outline-none focus:border-[#1A73E8]"
                />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#DADCE0] flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsLogModalOpen(false)}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] border border-[#DADCE0] transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-full text-xs font-medium bg-[#1A73E8] hover:bg-[#1765CC] text-white transition shadow-xs"
              >
                Insert Record
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
