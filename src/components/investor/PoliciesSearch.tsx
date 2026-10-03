"use client";

import React, { useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";

export function PoliciesSearch({ policies }: { policies: string[] }) {
  const [search, setSearch] = useState("");
  const filtered = policies.filter((p) =>
    p.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="relative w-full md:w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search policies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-background border border-border rounded-none pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="bg-background border border-border w-full mt-8">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-muted/50 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <div className="col-span-8 md:col-span-9">Policy Name</div>
          <div className="col-span-4 md:col-span-3 text-right">Action</div>
        </div>
        <div className="flex flex-col max-h-[600px] overflow-y-auto">
          {filtered.map((policy, idx) => (
            <a
              key={idx}
              href={`/pdfs/policies/${policy.replace(/ /g, "-")}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-12 gap-4 p-4 border-b border-border last:border-0 hover:bg-muted/30 transition-colors items-center"
            >
              <div className="col-span-8 md:col-span-9">
                <h3 className="font-bold text-sm md:text-base group-hover:text-primary transition-colors">
                  {policy}
                </h3>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1 block">
                  Corporate Governance
                </span>
              </div>
              <div className="col-span-4 md:col-span-3 text-right">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                  <span className="hidden sm:inline">View PDF</span>{" "}
                  <ArrowUpRight className="w-4 h-4 ml-1 sm:ml-2" />
                </span>
              </div>
            </a>
          ))}
          {filtered.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              No policies found matching your search.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
