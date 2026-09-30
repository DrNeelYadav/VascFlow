import React from "react";

export default function DashboardLoading() {
  return (
    <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center p-8 space-y-4">
      <div className="w-8 h-8 border-2 border-[#1A73E8] border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-medium text-zinc-500">Loading clinical module...</span>
    </div>
  );
}
