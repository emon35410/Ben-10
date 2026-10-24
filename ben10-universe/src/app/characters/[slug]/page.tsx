import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCharacterBySlug, CANONICAL_CHARACTERS } from '@/lib/data';
import StatRadar from '@/components/StatRadar';
import FactCitationBadge from '@/components/FactCitationBadge';
import RightsBadge from '@/components/RightsBadge';
import { 
  Zap, 
  Layers, 
  ArrowLeft, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles,
  GitBranch
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CANONICAL_CHARACTERS.map((char) => ({
    slug: char.slug,
  }));
}

export default async function CharacterProfilePage({ params }: Props) {
  const resolvedParams = await params;
  const character = getCharacterBySlug(resolvedParams.slug);

  if (!character) {
    notFound();
  }

  const powers = character.abilities.filter(a => a.type === 'power');
  const weaknesses = character.abilities.filter(a => a.type === 'weakness' || a.type === 'limitation');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Breadcrumb & Back Navigation */}
      <div className="flex items-center justify-between pb-4 border-b border-[#1C271F]">
        <Link
          href="/characters"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#AAB5AD] hover:text-[#A3FF12] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO CHARACTER ROSTER</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase bg-[#101512] text-[#A3FF12] border border-[#1C271F] px-2.5 py-1 rounded-full">
            STATUS: {character.status.toUpperCase()}
          </span>
          <span className="text-[10px] font-mono uppercase bg-[#101512] text-[#E9EFE9] border border-[#1C271F] px-2.5 py-1 rounded-full">
            ROLE: {character.role.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Main Profile Header Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Primary Character Image with Rights Review */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl bg-[#101512] border border-[#1C271F] overflow-hidden p-2 group">
            <div className="relative w-full h-80 sm:h-[420px] rounded-xl overflow-hidden bg-[radial-gradient(ellipse_at_center,_#1A211C_0%,_#101512_50%,_#0B0F0C_100%)] flex items-center justify-center p-4">
              <img
                src={character.primaryImage.imageUrl}
                alt={character.primaryImage.altText || character.name}
                className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101512] via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>

            {/* In-Card Title overlay */}
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[10px] font-mono tracking-widest text-[#A3FF12] uppercase bg-[#0B0F0C]/80 px-2 py-0.5 rounded border border-[#1C271F]">
                PRIMARY VISUAL ASSET
              </span>
            </div>
          </div>

          {/* Rights & Provenance Verification Badge */}
          <RightsBadge image={character.primaryImage} />
        </div>

        {/* Right: Identity, Summary & Fact Citations */}
        <div className="lg:col-span-7 space-y-6">
          
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#A3FF12]">
              <span>CODON MATRIX ID: {character.slug.toUpperCase()}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black text-[#E9EFE9] tracking-tight">
              {character.name}
            </h1>

            {/* Aliases */}
            {character.aliases.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="text-xs font-mono text-[#AAB5AD] mr-1">Known Aliases:</span>
                {character.aliases.map((alias, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-[#1A211C] border border-[#1C271F] text-[#E9EFE9]"
                  >
                    {alias}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="rounded-lg bg-[#101512] border border-[#1C271F] p-3">
              <span className="block text-[10px] font-mono uppercase text-[#AAB5AD]">SPECIES</span>
              <span className="text-sm font-bold text-[#E9EFE9]">
                {character.speciesName || 'Unclassified'}
              </span>
            </div>

            <div className="rounded-lg bg-[#101512] border border-[#1C271F] p-3">
              <span className="block text-[10px] font-mono uppercase text-[#AAB5AD]">HOMEWORLD</span>
              <span className="text-sm font-bold text-[#E9EFE9]">
                {character.homeworld}
              </span>
            </div>

            <div className="rounded-lg bg-[#101512] border border-[#1C271F] p-3 col-span-2 sm:col-span-1">
              <span className="block text-[10px] font-mono uppercase text-[#AAB5AD]">CANON CONTINUITY</span>
              <span className="text-sm font-bold text-[#A3FF12]">
                Prime Timeline
              </span>
            </div>
          </div>

          {/* Sourced Summary */}
          <div className="rounded-xl glass-panel p-5 border border-[#1C271F] space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase text-[#A3FF12] tracking-wider">
              CANONICAL PROFILE SUMMARY
            </h3>
            <p className="text-sm text-[#E9EFE9] leading-relaxed">
              {character.summary}
            </p>

            {/* Fact Citations for Summary */}
            {character.factSources.length > 0 && (
              <div className="pt-2 border-t border-[#1C271F] flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-[#AAB5AD]">Broadcast Evidence:</span>
                {character.factSources.map((fs) => (
                  <FactCitationBadge key={fs.id} factSource={fs} />
                ))}
              </div>
            )}
          </div>

          {/* Biometrics StatRadar */}
          <StatRadar stats={character.stats} characterName={character.name} />

        </div>

      </div>

      {/* Abilities Section: Powers & Weaknesses / Limitations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#1C271F]">
        
        {/* Documented Powers */}
        <div className="rounded-xl glass-panel p-6 border border-[#1C271F] space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#1C271F]">
            <Zap className="w-4 h-4 text-[#A3FF12]" />
            <h3 className="text-sm font-mono font-bold uppercase text-[#E9EFE9] tracking-wider">
              DOCUMENTED CANONICAL POWERS ({powers.length})
            </h3>
          </div>

          <div className="space-y-4">
            {powers.map((p) => (
              <div key={p.id} className="rounded-lg bg-[#101512] border border-[#1C271F] p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-[#A3FF12]">{p.name}</h4>
                  <span className="text-[10px] font-mono text-[#AAB5AD] bg-[#1A211C] px-2 py-0.5 rounded">
                    ACTIVE POWER
                  </span>
                </div>
                <p className="text-xs text-[#E9EFE9] leading-relaxed mb-2">
                  {p.description}
                </p>
                {p.limitations && (
                  <p className="text-[11px] text-[#AAB5AD] font-mono border-t border-[#1C271F] pt-2">
                    Condition: {p.limitations}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Documented Weaknesses & Limitations */}
        <div className="rounded-xl glass-panel p-6 border border-[#1C271F] space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#1C271F]">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <h3 className="text-sm font-mono font-bold uppercase text-[#E9EFE9] tracking-wider">
              WEAKNESSES, HAZARDS & UNKNOWN STATES ({weaknesses.length})
            </h3>
          </div>

          <div className="space-y-4">
            {weaknesses.map((w) => (
              <div 
                key={w.id} 
                className={`rounded-lg p-4 border ${
                  w.isUnknown 
                    ? 'bg-amber-950/20 border-amber-900/40 text-amber-300' 
                    : 'bg-red-950/20 border-red-900/40 text-red-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-[#E9EFE9]">{w.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0F0C] border border-[#1C271F]">
                    {w.isUnknown ? 'UNKNOWN STATE' : 'EXPLOITABLE FLAW'}
                  </span>
                </div>
                <p className="text-xs text-[#E9EFE9] leading-relaxed mb-2">
                  {w.description}
                </p>
                {w.limitations && (
                  <p className="text-[11px] font-mono text-[#AAB5AD] border-t border-red-900/30 pt-2">
                    Note: {w.limitations}
                  </p>
                )}
              </div>
            ))}

            {weaknesses.length === 0 && (
              <div className="rounded-lg bg-[#101512] border border-[#1C271F] p-4 text-center">
                <p className="text-xs text-[#AAB5AD] font-mono">
                  *Per technical blueprint guidelines, lack of listed weaknesses indicates an unverified status rather than invulnerability.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Series Appearances & Portrayals across the 3 Series */}
      <div className="rounded-xl glass-panel p-6 border border-[#1C271F] space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-[#1C271F]">
          <Layers className="w-4 h-4 text-[#A3FF12]" />
          <h3 className="text-sm font-mono font-bold uppercase text-[#E9EFE9] tracking-wider">
            SERIES PORTRAYALS & FIRST APPEARANCES
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {character.seriesAppearances.map((app) => (
            <div key={app.seriesId} className="rounded-lg bg-[#101512] border border-[#1C271F] p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <Link 
                    href={`/series/${app.seriesSlug}`} 
                    className="text-[#A3FF12] hover:underline font-bold"
                  >
                    {app.seriesName}
                  </Link>
                  {app.isSignatureAlien && (
                    <span className="text-[9px] bg-[#A3FF12]/10 text-[#A3FF12] border border-[#A3FF12]/30 px-1.5 py-0.5 rounded">
                      KEY ROSTER
                    </span>
                  )}
                </div>

                {app.versionName && (
                  <h4 className="text-xs font-bold text-[#E9EFE9] mb-1 font-mono">
                    {app.versionName}
                  </h4>
                )}

                <p className="text-xs text-[#AAB5AD] leading-relaxed mb-4">
                  {app.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#1C271F] text-[11px] font-mono text-[#AAB5AD]">
                First Episode: <strong className="text-[#E9EFE9]">{app.firstAppearanceEpisode}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forms & Evolutionary Lineage */}
      {character.forms.length > 0 && (
        <div className="rounded-xl glass-panel p-6 border border-[#1C271F] space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#1C271F]">
            <GitBranch className="w-4 h-4 text-[#A3FF12]" />
            <h3 className="text-sm font-mono font-bold uppercase text-[#E9EFE9] tracking-wider">
              EVOLUTIONARY FORMS & VARIANTS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {character.forms.map((form, idx) => (
              <div key={idx} className="rounded-lg bg-[#101512] border border-[#1C271F] p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#A3FF12] block">
                    {form.formType}
                  </span>
                  <h4 className="text-sm font-bold text-[#E9EFE9]">
                    {form.relatedCharacterName}
                  </h4>
                  <p className="text-xs text-[#AAB5AD] mt-1">
                    {form.notes}
                  </p>
                </div>
                <Link
                  href={`/characters/${form.relatedCharacterSlug}`}
                  className="px-3 py-1.5 rounded bg-[#1A211C] hover:bg-[#A3FF12] hover:text-[#0B0F0C] text-xs font-mono font-medium text-[#E9EFE9] border border-[#1C271F] transition-colors shrink-0 ml-4"
                >
                  View Form
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rights-Reviewed Gallery */}
      <div className="rounded-xl glass-panel p-6 border border-[#1C271F] space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#1C271F]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#A3FF12]" />
            <h3 className="text-sm font-mono font-bold uppercase text-[#E9EFE9] tracking-wider">
              RIGHTS-REVIEWED ASSET GALLERY ({character.gallery.length + 1})
            </h3>
          </div>
          <span className="text-xs font-mono text-[#AAB5AD]">
            Editorial Fair Use Verified
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Include primary image */}
          <div className="rounded-lg bg-[#101512] border border-[#1C271F] overflow-hidden p-2">
            <div className="w-full h-44 rounded bg-[#0B0F0C] overflow-hidden mb-2">
              <img
                src={character.primaryImage.imageUrl}
                alt={character.primaryImage.altText}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[10px] font-mono text-[#AAB5AD] truncate">
              {character.primaryImage.attributionText}
            </p>
          </div>

          {/* Additional gallery items */}
          {character.gallery.map((img) => (
            <div key={img.id} className="rounded-lg bg-[#101512] border border-[#1C271F] overflow-hidden p-2">
              <div className="w-full h-44 rounded bg-[#0B0F0C] overflow-hidden mb-2">
                <img
                  src={img.imageUrl}
                  alt={img.altText}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] font-mono text-[#AAB5AD] truncate">
                {img.attributionText}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sourced Evidence Table */}
      <div className="rounded-xl glass-panel p-6 border border-[#1C271F] space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-[#1C271F]">
          <CheckCircle2 className="w-4 h-4 text-[#A3FF12]" />
          <h3 className="text-sm font-mono font-bold uppercase text-[#E9EFE9] tracking-wider">
            CITATIONS & CANON BROADCAST AUDIT TRAIL
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#1C271F] text-[#AAB5AD]">
                <th className="pb-2">FACT CLAIM</th>
                <th className="pb-2">SOURCE TITLE</th>
                <th className="pb-2">PUBLISHER / EPISODE</th>
                <th className="pb-2">CONFIDENCE</th>
                <th className="pb-2 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1C271F]/60">
              {character.factSources.map((fs) => (
                <tr key={fs.id} className="text-[#E9EFE9]">
                  <td className="py-2.5 font-bold text-[#A3FF12]">{fs.factKey}</td>
                  <td className="py-2.5">{fs.sourceTitle}</td>
                  <td className="py-2.5 text-[#AAB5AD]">{fs.publisher}</td>
                  <td className="py-2.5">
                    <span className="px-2 py-0.5 rounded bg-[#101512] border border-[#1C271F] text-[#A3FF12]">
                      {Math.round(fs.confidence * 100)}%
                    </span>
                  </td>
                  <td className="py-2.5 text-right">
                    {fs.sourceUrl && (
                      <a
                        href={fs.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A3FF12] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Inspect</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
