'use client';

import React, { useState } from 'react';
import { FactSource } from '@/types';
import { CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';

interface FactCitationBadgeProps {
  factSource: FactSource;
}

export default function FactCitationBadge({ factSource }: FactCitationBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const confidencePercent = Math.round(factSource.confidence * 100);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1A211C] hover:bg-[#101512] border border-[#1C271F] hover:border-[#A3FF12]/60 text-[11px] font-mono text-[#A3FF12] transition-colors cursor-pointer"
        aria-label="View source verification details"
      >
        <ShieldCheck className="w-3 h-3 text-[#A3FF12]" />
        <span>[Source: {factSource.publisher}]</span>
        <span className="text-[9px] text-[#AAB5AD] bg-[#101512] px-1 rounded">
          {confidencePercent}%
        </span>
      </button>

      {/* Tooltip Overlay */}
      {showTooltip && (
        <div className="absolute z-50 bottom-full left-0 mb-2 w-72 sm:w-80 p-3 rounded-lg glass-panel-elevated shadow-2xl border border-[#A3FF12]/40 text-left animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1C271F]">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#A3FF12] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Verified Canon Claim
            </span>
            <span className="text-[10px] font-mono text-[#AAB5AD]">
              Confidence: {confidencePercent}%
            </span>
          </div>

          <p className="text-xs font-semibold text-[#E9EFE9] mb-1">
            {factSource.sourceTitle}
          </p>

          <p className="text-[11px] text-[#AAB5AD] italic mb-2 leading-relaxed bg-[#101512] p-2 rounded border border-[#1C271F]">
            &ldquo;{factSource.supportingExcerpt}&rdquo;
          </p>

          <div className="flex items-center justify-between text-[10px] text-[#AAB5AD] font-mono pt-1">
            <span>Type: {factSource.sourceType.replace('_', ' ')}</span>
            {factSource.sourceUrl && (
              <a 
                href={factSource.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A3FF12] hover:underline flex items-center gap-0.5"
              >
                <span>View Reference</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
