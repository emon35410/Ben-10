import { NextRequest, NextResponse } from 'next/server';
import { CANONICAL_CHARACTERS } from '@/lib/data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase().trim() || '';

  if (!query) {
    return NextResponse.json({ results: [], count: 0 });
  }

  const results = CANONICAL_CHARACTERS.filter((c) => {
    const matchesName = c.name.toLowerCase().includes(query);
    const matchesAlias = c.aliases.some(a => a.toLowerCase().includes(query));
    const matchesSpecies = c.speciesName?.toLowerCase().includes(query);
    const matchesHomeworld = c.homeworld.toLowerCase().includes(query);
    const matchesAbility = c.abilities.some(ab => ab.name.toLowerCase().includes(query));
    return matchesName || matchesAlias || matchesSpecies || matchesHomeworld || matchesAbility;
  }).map((c) => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    role: c.role,
    species: c.speciesName,
    homeworld: c.homeworld,
    summary: c.summary,
    series: c.seriesAppearances.map(s => s.seriesName),
    imageUrl: c.primaryImage.imageUrl
  }));

  return NextResponse.json({
    results,
    count: results.length,
    query
  });
}
