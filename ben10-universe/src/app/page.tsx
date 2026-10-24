import React from 'react';
import Link from 'next/link';
import { CANONICAL_SERIES, CANONICAL_CHARACTERS } from '@/lib/data';
import OmnitrixDial from '@/components/OmnitrixDial';
import CharacterCard from '@/components/CharacterCard';
import { 
  Search, 
  ArrowRight, 
  Shuffle, 
  Database
} from 'lucide-react';

export default function HomePage() {
  const featuredCharacters = CANONICAL_CHARACTERS.slice(0, 6);
  const randomSlug = 'heatblast';

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full sci-fi-grid">
        
        {/* Glow backdrop blur */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#A3FF12]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="text-center max-w-3xl mx-auto mb-12">
          
          {/* Continuity Scope Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101512] border border-[#1C271F] text-xs font-mono text-[#A3FF12] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#A3FF12] animate-pulse" />
            <span>PRIME TIMELINE TRILOGY • 2005 - 2012</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#E9EFE9] mb-4">
            BEN 10 <span className="text-[#A3FF12] omnitrix-glow-text">CHARACTER</span> UNIVERSE
          </h1>

          <p className="text-base sm:text-lg text-[#AAB5AD] leading-relaxed mb-8">
            The definitive public, evidence-backed fan encyclopedia. Explore transformations, 
            planetary homeworlds, powers, weaknesses, and lore strictly across the original three series.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/characters"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#A3FF12] text-[#0B0F0C] font-bold text-sm transition-all hover:scale-105 omnitrix-glow-sm"
            >
              <Search className="w-4 h-4" />
              <span>EXPLORE ALL CHARACTERS</span>
            </Link>

            <Link
              href={`/characters/${randomSlug}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#101512] hover:bg-[#1A211C] text-[#E9EFE9] border border-[#1C271F] hover:border-[#A3FF12]/50 font-mono text-sm transition-colors"
            >
              <Shuffle className="w-4 h-4 text-[#A3FF12]" />
              <span>RANDOM PROFILE</span>
            </Link>
          </div>

        </div>

        {/* Interactive Omnitrix Dial Widget */}
        <div className="mt-4">
          <OmnitrixDial />
        </div>

      </section>

      {/* Series Explorer Section */}
      <section className="py-16 bg-[#0B0F0C] border-y border-[#1C271F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-4 border-b border-[#1C271F]">
            <div>
              <span className="text-xs font-mono uppercase text-[#A3FF12] tracking-wider">
                CANONICAL SELECTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#E9EFE9] mt-1">
                The Three Canonical Series
              </h2>
            </div>
            <p className="text-xs font-mono text-[#AAB5AD] mt-2 sm:mt-0">
              *Excluded: Omniverse and 2016 Reboot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CANONICAL_SERIES.map((series) => (
              <div 
                key={series.id}
                className="group relative rounded-xl bg-[#101512] border border-[#1C271F] hover:border-[#A3FF12]/50 transition-all p-6 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(163,255,18,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#AAB5AD] mb-3">
                    <span className="text-[#A3FF12] bg-[#1A211C] px-2 py-0.5 rounded border border-[#1C271F]">
                      {series.releaseYear}
                    </span>
                    <span>{series.continuity}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#E9EFE9] group-hover:text-[#A3FF12] transition-colors mb-2">
                    {series.name}
                  </h3>

                  <p className="text-xs font-mono text-[#A3FF12]/80 italic mb-3">
                    &ldquo;{series.tagline}&rdquo;
                  </p>

                  <p className="text-xs text-[#AAB5AD] leading-relaxed mb-6">
                    {series.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C271F] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#AAB5AD]">
                    {series.characterCount} Documented Records
                  </span>
                  <Link
                    href={`/series/${series.slug}`}
                    className="flex items-center gap-1 text-xs font-mono font-medium text-[#A3FF12] hover:underline"
                  >
                    <span>View Roster</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Characters Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-4 border-b border-[#1C271F]">
          <div>
            <span className="text-xs font-mono uppercase text-[#A3FF12] tracking-wider">
              CURATED DOSSIERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#E9EFE9] mt-1">
              Featured Aliens, Heroes & Villains
            </h2>
          </div>
          <Link
            href="/characters"
            className="flex items-center gap-1.5 text-xs font-mono text-[#A3FF12] hover:underline mt-2 sm:mt-0"
          >
            <span>View Full Character Explorer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCharacters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>

      </section>

      {/* AI Pipeline & Rights Verification Status Strip */}
      <section className="py-12 bg-[#101512] border-t border-[#1C271F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-xl glass-panel-elevated p-6 border border-[#1C271F] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B0F0C] border border-[#A3FF12]/40 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6 text-[#A3FF12]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#E9EFE9]">
                  AI-Assisted Canon Research & Image Moderation Pipeline
                </h4>
                <p className="text-xs text-[#AAB5AD] mt-0.5">
                  Every power, weakness, and transformation record is verified against canonical episode broadcasts. Assets undergo manual copyright checks.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A211C] hover:bg-[#0B0F0C] text-[#A3FF12] border border-[#1C271F] hover:border-[#A3FF12]/40 font-mono text-xs transition-colors"
              >
                <span>Inspect Pipeline Queue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
