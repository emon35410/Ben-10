'use client';

import React from 'react';
import Link from 'next/link';
import { CharacterImage } from '@/types';
import { ShieldAlert, ShieldCheck, Clock, Flag } from 'lucide-react';

interface RightsBadgeProps {
  image: CharacterImage;
}

export default function RightsBadge({ image }: RightsBadgeProps) {
  const statusConfig = {
    approved: {
      label: 'Rights Verified & Approved',
      color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40',
      icon: ShieldCheck
    },
    pending: {
      label: 'License Pending Review',
      color: 'text-amber-400 bg-amber-950/40 border-amber-800/40',
      icon: Clock
    },
    rejected: {
      label: 'Publication Restricted',
      color: 'text-red-400 bg-red-950/40 border-red-800/40',
      icon: ShieldAlert
    },
    flagged: {
      label: 'Takedown Under Review',
      color: 'text-orange-400 bg-orange-950/40 border-orange-800/40',
      icon: Flag
    }
  }[image.reviewStatus];

  const Icon = statusConfig.icon;

  return (
    <div className="rounded-lg bg-[#101512] border border-[#1C271F] p-3 text-xs space-y-1.5">
      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] font-mono ${statusConfig.color}`}>
          <Icon className="w-3 h-3" />
          {statusConfig.label}
        </span>
        <Link 
          href="/legal#removal" 
          className="text-[10px] text-[#AAB5AD] hover:text-red-400 font-mono transition-colors"
        >
          Request Takedown
        </Link>
      </div>

      <div className="text-[11px] text-[#AAB5AD] font-mono space-y-0.5 pt-1">
        <div>Rights Holder: <strong className="text-[#E9EFE9]">{image.creatorOrRightsHolder}</strong></div>
        <div>License: <span>{image.license}</span></div>
        {image.attributionText && (
          <div className="text-[10px] text-[#6e7d73]">Credit: {image.attributionText}</div>
        )}
      </div>
    </div>
  );
}
