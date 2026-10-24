'use client';

import React, { useState } from 'react';
import { CANONICAL_CHARACTERS } from '@/lib/data';
import { Scale, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ComparePage() {
  const [firstSlug, setFirstSlug] = useState('heatblast');
  const [secondSlug, setSecondSlug] = useState('swampfire');

  const char1 = CANONICAL_CHARACTERS.find(c => c.slug === firstSlug) || CANONICAL_CHARACTERS[0];
  const char2 = CANONICAL_CHARACTERS.find(c => c.slug === secondSlug) || CANONICAL_CHARACTERS[1];

  const statFields = [
    { key: 'strength', label: 'Physical Strength' },
    { key: 'speed', label: 'Velocity / Speed' },
    { key: 'durability', label: 'Armor / Durability' },
    { key: 'intelligence', label: 'Tactical Intellect' },
    { key: 'energyOutput', label: 'Energy Output' },
    { key: 'versatility', label: 'Combat Versatility' },
  ] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="pb-6 border-b border-[#1C271F]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#A3FF12] uppercase mb-2">
          <Scale className="w-4 h-4 text-[#A3FF12]" />
          <span>CANONICAL ATTRIBUTE COMPARISON ENGINE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#E9EFE9] tracking-tight">
          Character Comparison
        </h1>
        <p className="text-sm text-[#AAB5AD] mt-1">
          Side-by-side analysis of documented powers, limitations, and broadcast feats across the three canonical series.
        </p>
      </div>

      {/* Selectors Bar */}
      <div className="rounded-xl glass-panel p-5 border border-[#1C271F] grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono text-[#A3FF12] uppercase mb-2">
            SELECT SUBJECT ALPHA
          </label>
          <select
            value={firstSlug}
            onChange={(e) => setFirstSlug(e.target.value)}
            className="w-full bg-[#0B0F0C] border border-[#1C271F] focus:border-[#A3FF12] rounded-lg p-3 text-[#E9EFE9] font-mono text-sm outline-none"
          >
            {CANONICAL_CHARACTERS.map((c) => (
              <option key={c.id} value={c.slug} disabled={c.slug === secondSlug}>
                {c.name} ({c.speciesName || c.role})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono text-cyan-400 uppercase mb-2">
            SELECT SUBJECT BETA
          </label>
          <select
            value={secondSlug}
            onChange={(e) => setSecondSlug(e.target.value)}
            className="w-full bg-[#0B0F0C] border border-[#1C271F] focus:border-cyan-400 rounded-lg p-3 text-[#E9EFE9] font-mono text-sm outline-none"
          >
            {CANONICAL_CHARACTERS.map((c) => (
              <option key={c.id} value={c.slug} disabled={c.slug === firstSlug}>
                {c.name} ({c.speciesName || c.role})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Neutral Scientific Governance Notice */}
      <div className="rounded-lg bg-[#101512] border border-[#1C271F] p-4 text-xs font-mono text-[#AAB5AD] flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-[#A3FF12] shrink-0" />
        <p>
          <strong className="text-[#E9EFE9]">Objective Analysis Protocol:</strong> Per project technical blueprint Section 4, this comparison displays documented broadcast facts without declaring an unsupported universal winner. Match outcomes vary by environment, tactics, and Omnitrix operational state.
        </p>
      </div>

      {/* Comparison Cards & Attribute Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Subject Alpha Card */}
        <div className="rounded-xl glass-panel p-6 border border-[#A3FF12]/30 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#1C271F]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#A3FF12]">SUBJECT ALPHA</span>
              <h2 className="text-2xl font-black text-[#E9EFE9]">{char1.name}</h2>
            </div>
            <Link
              href={`/characters/${char1.slug}`}
              className="text-xs font-mono text-[#A3FF12] hover:underline flex items-center gap-1"
            >
              <span>View Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="w-full h-60 rounded-lg overflow-hidden bg-[radial-gradient(ellipse_at_center,_#1A211C_0%,_#101512_50%,_#0B0F0C_100%)] flex items-center justify-center p-3">
            <img
              src={char1.primaryImage.imageUrl}
              alt={char1.name}
              className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
            />
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between py-1 border-b border-[#1C271F]">
              <span className="text-[#AAB5AD]">SPECIES:</span>
              <span className="text-[#E9EFE9] font-bold">{char1.speciesName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1C271F]">
              <span className="text-[#AAB5AD]">HOMEWORLD:</span>
              <span className="text-[#E9EFE9] font-bold">{char1.homeworld}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1C271F]">
              <span className="text-[#AAB5AD]">PRIMARY DEBUT:</span>
              <span className="text-[#A3FF12] font-bold">{char1.seriesAppearances[0]?.seriesName}</span>
            </div>
          </div>

          {/* Key Powers */}
          <div className="pt-2">
            <h4 className="text-xs font-mono text-[#A3FF12] font-bold mb-2">DOCUMENTED POWERS</h4>
            <div className="space-y-1.5">
              {char1.abilities.filter(a => a.type === 'power').slice(0, 3).map(p => (
                <div key={p.id} className="p-2 rounded bg-[#101512] border border-[#1C271F] text-xs">
                  <div className="font-bold text-[#E9EFE9]">{p.name}</div>
                  <div className="text-[11px] text-[#AAB5AD] mt-0.5">{p.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Weaknesses */}
          <div className="pt-2">
            <h4 className="text-xs font-mono text-red-400 font-bold mb-2">DOCUMENTED WEAKNESSES</h4>
            <div className="space-y-1.5">
              {char1.abilities.filter(a => a.type === 'weakness' || a.type === 'limitation').slice(0, 2).map(w => (
                <div key={w.id} className="p-2 rounded bg-red-950/20 border border-red-900/30 text-xs text-red-300">
                  <div className="font-bold">{w.name}</div>
                  <div className="text-[11px] text-zinc-300 mt-0.5">{w.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subject Beta Card */}
        <div className="rounded-xl glass-panel p-6 border border-cyan-400/30 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#1C271F]">
            <div>
              <span className="text-[10px] font-mono uppercase text-cyan-400">SUBJECT BETA</span>
              <h2 className="text-2xl font-black text-[#E9EFE9]">{char2.name}</h2>
            </div>
            <Link
              href={`/characters/${char2.slug}`}
              className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>View Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="w-full h-60 rounded-lg overflow-hidden bg-[radial-gradient(ellipse_at_center,_#1A211C_0%,_#101512_50%,_#0B0F0C_100%)] flex items-center justify-center p-3">
            <img
              src={char2.primaryImage.imageUrl}
              alt={char2.name}
              className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
            />
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between py-1 border-b border-[#1C271F]">
              <span className="text-[#AAB5AD]">SPECIES:</span>
              <span className="text-[#E9EFE9] font-bold">{char2.speciesName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1C271F]">
              <span className="text-[#AAB5AD]">HOMEWORLD:</span>
              <span className="text-[#E9EFE9] font-bold">{char2.homeworld}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1C271F]">
              <span className="text-[#AAB5AD]">PRIMARY DEBUT:</span>
              <span className="text-cyan-400 font-bold">{char2.seriesAppearances[0]?.seriesName}</span>
            </div>
          </div>

          {/* Key Powers */}
          <div className="pt-2">
            <h4 className="text-xs font-mono text-cyan-400 font-bold mb-2">DOCUMENTED POWERS</h4>
            <div className="space-y-1.5">
              {char2.abilities.filter(a => a.type === 'power').slice(0, 3).map(p => (
                <div key={p.id} className="p-2 rounded bg-[#101512] border border-[#1C271F] text-xs">
                  <div className="font-bold text-[#E9EFE9]">{p.name}</div>
                  <div className="text-[11px] text-[#AAB5AD] mt-0.5">{p.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Weaknesses */}
          <div className="pt-2">
            <h4 className="text-xs font-mono text-red-400 font-bold mb-2">DOCUMENTED WEAKNESSES</h4>
            <div className="space-y-1.5">
              {char2.abilities.filter(a => a.type === 'weakness' || a.type === 'limitation').slice(0, 2).map(w => (
                <div key={w.id} className="p-2 rounded bg-red-950/20 border border-red-900/30 text-xs text-red-300">
                  <div className="font-bold">{w.name}</div>
                  <div className="text-[11px] text-zinc-300 mt-0.5">{w.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Head-to-Head Biometric Comparison Matrix */}
      <div className="rounded-xl glass-panel p-6 border border-[#1C271F] space-y-4">
        <h3 className="text-sm font-mono font-bold uppercase text-[#A3FF12] tracking-wider pb-3 border-b border-[#1C271F]">
          BIOMETRIC ATTRIBUTE COMPARISON MATRIX
        </h3>

        <div className="space-y-5">
          {statFields.map((field) => {
            const val1 = char1.stats[field.key];
            const val2 = char2.stats[field.key];
            return (
              <div key={field.key} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#A3FF12] font-bold">{char1.name}: {val1}%</span>
                  <span className="text-[#E9EFE9] uppercase">{field.label}</span>
                  <span className="text-cyan-400 font-bold">{char2.name}: {val2}%</span>
                </div>
                <div className="grid grid-cols-2 gap-2 h-2">
                  {/* Left Bar (Reverse fill towards right) */}
                  <div className="w-full bg-[#0B0F0C] rounded-full overflow-hidden flex justify-end">
                    <div 
                      className="h-full bg-[#A3FF12] rounded-full transition-all duration-500"
                      style={{ width: `${val1}%` }}
                    />
                  </div>
                  {/* Right Bar */}
                  <div className="w-full bg-[#0B0F0C] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cyan-400 rounded-full transition-all duration-500"
                      style={{ width: `${val2}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
