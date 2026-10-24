// ============================================================================
// STAGE 1 — DISCOVERY WORKER
// Seed roster parsing, candidate character discovery & deduplication matching
// ============================================================================

import { CanonicalSeriesSlug } from '@/types';

export interface CandidateCharacter {
  name: string;
  normalizedName: string;
  seriesSlug: CanonicalSeriesSlug;
  discoveredFrom: string;
}

export class DiscoveryWorker {
  private knownEntities: Set<string>;

  constructor(existingEntityNames: string[]) {
    this.knownEntities = new Set(existingEntityNames.map(n => this.normalize(n)));
  }

  public normalize(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  public isDuplicate(candidateName: string): boolean {
    return this.knownEntities.has(this.normalize(candidateName));
  }

  public async discoverCandidates(series: CanonicalSeriesSlug): Promise<CandidateCharacter[]> {
    // In production, queries seed lists, episode credits, and fan wiki indexes
    const seedCandidates: CandidateCharacter[] = [
      { name: 'Cannonbolt', normalizedName: 'cannonbolt', seriesSlug: 'ben-10-2005', discoveredFrom: 'Season 2 Episode 2' },
      { name: 'Wildvine', normalizedName: 'wildvine', seriesSlug: 'ben-10-2005', discoveredFrom: 'Season 2 Episode 7' },
      { name: 'Humungousaur', normalizedName: 'humungousaur', seriesSlug: 'ben-10-alien-force', discoveredFrom: 'AF Season 1 Episode 2' },
      { name: 'Big Chill', normalizedName: 'bigchill', seriesSlug: 'ben-10-alien-force', discoveredFrom: 'AF Season 1 Episode 4' }
    ];

    return seedCandidates.filter(c => c.seriesSlug === series && !this.isDuplicate(c.name));
  }
}
