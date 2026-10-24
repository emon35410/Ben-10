import { NextRequest, NextResponse } from 'next/server';
import { CANONICAL_CHARACTERS } from '@/lib/data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const series = searchParams.get('series');
  const role = searchParams.get('role');

  let results = [...CANONICAL_CHARACTERS];

  if (series) {
    results = results.filter(c => c.seriesAppearances.some(app => app.seriesSlug === series));
  }

  if (role) {
    results = results.filter(c => c.role === role);
  }

  return NextResponse.json({
    characters: results,
    total: results.length
  });
}
