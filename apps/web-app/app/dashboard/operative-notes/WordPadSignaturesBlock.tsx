"use client";

import React from "react";

/**
 * Authentic 6-Faculty Signature Table from SMS Medical College IR Word documents.
 */
export function WordPadSignaturesBlock() {
  return (
    <div className="pt-6 border-t border-black/20 text-[10px] leading-tight">
      <div className="overflow-x-auto">
        <table className="w-full border-none">
          <tbody>
            <tr>
              <td className="w-1/3 align-top py-2 pr-2">
                <div className="font-bold">Dr Meenu Bagarhatta</div>
                <div className="text-black/80">Senior Professor &amp; Head</div>
              </td>
              <td className="w-1/3 align-top py-2 px-2">
                <div className="font-bold">Dr Rajkumar Yadav</div>
                <div className="text-black/80">Professor (DM - IR)</div>
              </td>
              <td className="w-1/3 align-top py-2 pl-2">
                <div className="font-bold">Dr Naresh Mangalhara</div>
                <div className="text-black/80">Associate Professor (PDCC IR)</div>
              </td>
            </tr>
            <tr>
              <td className="w-1/3 align-top py-2 pr-2">
                <div className="font-bold">Dr Shashank Sharma</div>
                <div className="text-black/80">Assistant Professor</div>
              </td>
              <td className="w-1/3 align-top py-2 px-2">
                <div className="font-bold">Dr. Alok Verma</div>
                <div className="text-black/80">Assistant Professor (PDCC IR)</div>
              </td>
              <td className="w-1/3 align-top py-2 pl-2">
                <div className="font-bold">Dr Ayush Khandelwal</div>
                <div className="text-black/80">Assistant Professor (PDCC IR)</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
