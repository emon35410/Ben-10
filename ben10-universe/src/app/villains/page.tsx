import React from 'react';
import { getCharactersByRole } from '@/lib/data';
import CharacterCard from '@/components/CharacterCard';
import { ShieldAlert, Skull } from 'lucide-react';

export default function VillainsArchivePage() {
  const villains = getCharactersByRole('villain');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="pb-6 border-b border-[#1C271F]">
        <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase mb-2">
          <Skull className="w-4 h-4 text-red-400" />
          <span>LEVEL 5 GALACTIC THREAT DOSSIERS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#E9EFE9] tracking-tight">
          Villains & Antagonists Archive
        </h1>
        <p className="text-sm text-[#AAB5AD] mt-1">
          Detailed profiles of galactic conquerors, rogue Osmosians, mutated scientists, and interdimensional warlords across the 2005 - 2012 prime timeline.
        </p>
      </div>

      {/* Threat Briefing Box */}
      <div className="rounded-xl bg-[#101512] border border-red-900/30 p-5 space-y-2">
        <h3 className="text-xs font-mono font-bold uppercase text-red-400 tracking-wider flex items-center gap-2">
          <ShieldAlert className="w-4 h-4" />
          <span>PLUMBERS&apos; INTERSTELLAR WANTED NOTICE</span>
        </h3>
        <p className="text-xs text-[#E9EFE9] leading-relaxed">
          The following entities have engaged in illegal planetary annexation, genetic experimentation, or attempted theft of the Omnitrix and Ultimatrix. All encounter protocols advise maximum defensive posture and immediate notification of the Plumbers&apos; Earth outpost.
        </p>
      </div>

      {/* Villains Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1C271F]">
          <h2 className="text-lg font-bold text-[#E9EFE9]">
            Active Antagonists ({villains.length})
          </h2>
          <span className="text-xs font-mono text-red-400">
            Threat Level: Omega
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {villains.map((villain) => (
            <CharacterCard key={villain.id} character={villain} />
          ))}
        </div>
      </div>

    </div>
  );
}
