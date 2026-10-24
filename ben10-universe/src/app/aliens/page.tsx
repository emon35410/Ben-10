import React from 'react';
import { getCharactersByRole, CANONICAL_SPECIES } from '@/lib/data';
import CharacterCard from '@/components/CharacterCard';
import { Cpu, Globe } from 'lucide-react';

export default function AliensDatabasePage() {
  const aliens = getCharactersByRole('alien');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="pb-6 border-b border-[#1C271F]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#A3FF12] uppercase mb-2">
          <Cpu className="w-4 h-4 text-[#A3FF12]" />
          <span>OMNITRIX & ULTIMATRIX CODON ARCHIVE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#E9EFE9] tracking-tight">
          Omnitrix Alien Database
        </h1>
        <p className="text-sm text-[#AAB5AD] mt-1">
          Catalog of genetic samples, alien transformations, and evolutionary forms across Ben 10 (2005), Alien Force, and Ultimate Alien.
        </p>
      </div>

      {/* Planetary Homeworld Reference Cards */}
      <div className="rounded-xl glass-panel p-5 border border-[#1C271F] space-y-3">
        <h3 className="text-xs font-mono font-bold uppercase text-[#A3FF12] tracking-wider flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5" />
          <span>CANONICAL HOMEWORLDS & SPECIES DIRECTORY</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
          {CANONICAL_SPECIES.slice(0, 8).map((sp) => (
            <div key={sp.id} className="rounded-lg bg-[#101512] border border-[#1C271F] p-2.5">
              <span className="text-xs font-bold text-[#E9EFE9] block truncate">{sp.name}</span>
              <span className="text-[10px] font-mono text-[#A3FF12] block truncate">Planet: {sp.homeworld}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Aliens Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1C271F]">
          <h2 className="text-lg font-bold text-[#E9EFE9]">
            Documented Alien Transformations ({aliens.length})
          </h2>
          <span className="text-xs font-mono text-[#AAB5AD]">
            100% Broadcast Sourced
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aliens.map((alien) => (
            <CharacterCard key={alien.id} character={alien} />
          ))}
        </div>
      </div>

    </div>
  );
}
