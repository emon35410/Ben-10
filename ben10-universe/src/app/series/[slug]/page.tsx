import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSeriesBySlug, getCharactersBySeries, CANONICAL_SERIES } from '@/lib/data';
import CharacterCard from '@/components/CharacterCard';
import { Calendar, ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CANONICAL_SERIES.map((s) => ({
    slug: s.slug,
  }));
}

export default async function SeriesDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const series = getSeriesBySlug(resolvedParams.slug);

  if (!series) {
    notFound();
  }

  const characters = getCharactersBySeries(series.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumb */}
      <div className="flex items-center justify-between pb-4 border-b border-[#1C271F]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#AAB5AD] hover:text-[#A3FF12] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO UNIVERSE HUB</span>
        </Link>
        <span className="text-xs font-mono text-[#A3FF12] bg-[#101512] px-2.5 py-1 rounded-full border border-[#1C271F]">
          CANON CONTINUITY: {series.continuity}
        </span>
      </div>

      {/* Series Hero Banner */}
      <div className="rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-[#1C271F] relative overflow-hidden hud-border space-y-6">
        {/* Cartoon Broadcast Banner */}
        <div className="w-full h-52 sm:h-72 rounded-xl overflow-hidden border border-[#1C271F] relative bg-[#0B0F0C]">
          <img
            src={series.bannerUrl}
            alt={series.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101512] via-transparent to-transparent opacity-80" />
        </div>

        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A3FF12]">
            <Calendar className="w-4 h-4" />
            <span>ORIGINAL BROADCAST ERA: {series.releaseYear}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#E9EFE9] tracking-tight">
            {series.name}
          </h1>

          <p className="text-base font-mono text-[#A3FF12]/90 italic">
            &ldquo;{series.tagline}&rdquo;
          </p>

          <p className="text-sm text-[#AAB5AD] leading-relaxed">
            {series.description}
          </p>
        </div>
      </div>

      {/* Series Roster Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#1C271F]">
          <div>
            <h2 className="text-xl font-bold text-[#E9EFE9]">
              Verified Cast & Alien Profiles ({characters.length})
            </h2>
            <p className="text-xs text-[#AAB5AD] font-mono mt-0.5">
              Characters whose appearance or forms are documented in {series.name}.
            </p>
          </div>
          <Link
            href="/characters"
            className="text-xs font-mono text-[#A3FF12] hover:underline"
          >
            Open Global Filter
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      </div>

    </div>
  );
}
