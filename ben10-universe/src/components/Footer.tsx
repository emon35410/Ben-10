'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldAlert, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0F0C] border-t border-[#1C271F] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Project Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#101512] border border-[#A3FF12] flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#A3FF12] rounded-xs rotate-45"></div>
              </div>
              <span className="font-bold tracking-wider text-sm text-[#E9EFE9]">
                BEN 10 UNIVERSE
              </span>
            </div>
            <p className="text-xs text-[#AAB5AD] leading-relaxed">
              An unofficial, non-profit fan encyclopedia and AI-assisted research database dedicated strictly to the original prime trilogy: <strong className="text-[#E9EFE9]">Ben 10 (2005)</strong>, <strong className="text-[#E9EFE9]">Alien Force</strong>, and <strong className="text-[#E9EFE9]">Ultimate Alien</strong>.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#101512] border border-[#1C271F] text-[11px] text-[#AAB5AD] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF12]"></span>
              Excluded: Omniverse & 2016 Reboot
            </div>
          </div>

          {/* Column 2: Canonical Trilogy */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase text-[#A3FF12] tracking-wider mb-3">
              Included Series
            </h4>
            <ul className="space-y-2 text-xs text-[#AAB5AD]">
              <li>
                <Link href="/series/ben-10-2005" className="hover:text-[#A3FF12] transition-colors">
                  • Ben 10 (2005 Original Series)
                </Link>
              </li>
              <li>
                <Link href="/series/ben-10-alien-force" className="hover:text-[#A3FF12] transition-colors">
                  • Ben 10: Alien Force (2008)
                </Link>
              </li>
              <li>
                <Link href="/series/ben-10-ultimate-alien" className="hover:text-[#A3FF12] transition-colors">
                  • Ben 10: Ultimate Alien (2010)
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-[#6e7d73]">
                Strict continuity separation maintained per series.
              </li>
            </ul>
          </div>

          {/* Column 3: Archives & Explorers */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase text-[#A3FF12] tracking-wider mb-3">
              Database Explorers
            </h4>
            <ul className="space-y-2 text-xs text-[#AAB5AD]">
              <li>
                <Link href="/characters" className="hover:text-[#A3FF12] transition-colors">
                  • Complete Character Roster
                </Link>
              </li>
              <li>
                <Link href="/aliens" className="hover:text-[#A3FF12] transition-colors">
                  • Omnitrix Alien Transmutation
                </Link>
              </li>
              <li>
                <Link href="/villains" className="hover:text-[#A3FF12] transition-colors">
                  • Antagonist & Warlord Archive
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-[#A3FF12] transition-colors">
                  • Side-by-Side Sourced Comparison
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#A3FF12] transition-colors">
                  • AI Research & Rights Moderation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Rights, Governance & Legal */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase text-[#A3FF12] tracking-wider mb-3">
              Content Governance
            </h4>
            <p className="text-xs text-[#AAB5AD] mb-3 leading-relaxed">
              Every fact citation is tied to broadcast evidence. Image assets are reviewed under fair use editorial research guidelines.
            </p>
            <div className="space-y-1.5">
              <Link 
                href="/legal" 
                className="flex items-center gap-1.5 text-xs text-[#E9EFE9] hover:text-[#A3FF12] transition-colors"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-[#A3FF12]" />
                <span>Legal & Takedown Request</span>
              </Link>
              <Link 
                href="/legal#removal" 
                className="flex items-center gap-1.5 text-xs text-[#AAB5AD] hover:text-[#A3FF12] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Submit Fact Correction</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Disclaimer Banner Box */}
        <div className="rounded-lg bg-[#101512] border border-[#1C271F] p-4 text-xs text-[#AAB5AD] leading-relaxed mb-6">
          <p className="text-[#E9EFE9] font-medium mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            Unofficial Fan Project Notice & Copyright Attribution
          </p>
          <p>
            Ben 10, the Omnitrix, and all related characters, logos, and indicia are trademarks of and © <strong>Cartoon Network</strong>, a Warner Bros. Discovery company. This fan project is not affiliated with, endorsed, sponsored, or specifically approved by Cartoon Network or Warner Bros. Discovery. All copyrighted assets and trademarks belong to their respective owners and are referenced here solely for educational, non-commercial documentation and commentary under Fair Use doctrine.
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#AAB5AD] font-mono border-t border-[#1C271F] pt-6">
          <p>© 2026 Ben 10 Character Universe Project. Public Fan Research Initiative.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="/legal" className="hover:text-[#A3FF12]">Disclaimer</Link>
            <Link href="/legal#dmca" className="hover:text-[#A3FF12]">Image Takedown</Link>
            <Link href="/admin" className="hover:text-[#A3FF12]">Audit Queue</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
