'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Character } from '@/types';
import { Zap, ArrowRight } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [imageError, setImageError] = useState(false);

  // Series tag helper
  const seriesTags = character.seriesAppearances.map(s => {
    if (s.seriesSlug === 'ben-10-2005') return { label: '2005', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/30' };
    if (s.seriesSlug === 'ben-10-alien-force') return { label: 'AF', color: 'border-lime-500/30 text-lime-400 bg-lime-950/30' };
    return { label: 'UA', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/30' };
  });

  const roleBadge = {
    hero: { label: 'Hero', bg: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/40' },
    alien: { label: 'Omnitrix Alien', bg: 'bg-[#A3FF12]/10 text-[#A3FF12] border-[#A3FF12]/30' },
    villain: { label: 'Antagonist', bg: 'bg-red-950/60 text-red-400 border-red-800/40' },
    ally: { label: 'Ally', bg: 'bg-blue-950/60 text-blue-400 border-blue-800/40' },
    neutral: { label: 'Neutral', bg: 'bg-zinc-800 text-zinc-300 border-zinc-700' }
  }[character.role];

  return (
    <div className="group relative rounded-xl bg-[#101512] border border-[#1C271F] hover:border-[#A3FF12]/50 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-[0_0_20px_rgba(163,255,18,0.15)] hover:-translate-y-1">
      
      {/* Image Area with Fallback */}
      <div className="relative w-full h-64 bg-[radial-gradient(ellipse_at_center,_#1A211C_0%,_#101512_60%,_#0B0F0C_100%)] overflow-hidden flex items-center justify-center border-b border-[#1C271F]">
        {!imageError ? (
          <img
            src={character.primaryImage.imageUrl}
            alt={character.primaryImage.altText || character.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-contain object-center p-3 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)]"
            loading="lazy"
          />
        ) : (
          /* High-tech Sci-Fi Fallback Silhouette */
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#1A211C] border border-[#A3FF12]/30 flex items-center justify-center mb-2">
              <Zap className="w-8 h-8 text-[#A3FF12]/60" />
            </div>
            <span className="text-xs font-mono text-[#AAB5AD] uppercase tracking-wider">
              {character.name}
            </span>
            <span className="text-[10px] text-zinc-500">Asset in Rights Review</span>
          </div>
        )}

        {/* Top Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${roleBadge.bg}`}>
            {roleBadge.label}
          </span>
        </div>

        {/* Series Appearances Badges (Top Right) */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
          {seriesTags.map((tag, idx) => (
            <span 
              key={idx} 
              className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${tag.color}`}
              title={`Appears in ${tag.label}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Linear Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101512] via-transparent to-transparent opacity-80" />
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Homeworld */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-lg font-bold text-[#E9EFE9] group-hover:text-[#A3FF12] transition-colors leading-tight">
              {character.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#AAB5AD] mb-3 font-mono">
            <span>{character.speciesName || 'Unknown Species'}</span>
            <span>•</span>
            <span>{character.homeworld}</span>
          </div>

          {/* Sourced Summary */}
          <p className="text-xs text-[#AAB5AD] line-clamp-2 leading-relaxed mb-4">
            {character.summary}
          </p>

          {/* Key Abilities Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {character.abilities.slice(0, 2).map((ab) => (
              <span 
                key={ab.id}
                className={`text-[11px] px-2 py-0.5 rounded font-mono ${
                  ab.type === 'power' 
                    ? 'bg-[#1A211C] text-[#E9EFE9] border border-[#1C271F]' 
                    : 'bg-red-950/20 text-red-300 border border-red-900/30'
                }`}
              >
                {ab.name}
              </span>
            ))}
            {character.abilities.length > 2 && (
              <span className="text-[10px] text-[#AAB5AD] px-1 py-0.5 self-center">
                +{character.abilities.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-[#1C271F] flex items-center justify-between">
          <div className="text-[11px] font-mono text-[#AAB5AD]">
            <span className="text-[#A3FF12]">{character.factSources.length}</span> sources cited
          </div>
          
          <Link
            href={`/characters/${character.slug}`}
            className="flex items-center gap-1 text-xs font-mono font-medium text-[#A3FF12] hover:underline group/btn"
          >
            <span>Explore Dossier</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>

    </div>
  );
}
