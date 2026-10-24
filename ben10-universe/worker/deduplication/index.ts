// ============================================================================
// STAGE 4 — DEDUPLICATION & VALIDATION WORKER
// Cross-continuity character reconciliation and validation
// ============================================================================

import { SeriesAppearance, FactSource } from '@/types';

export interface ValidationReport {
  isValid: boolean;
  isDuplicate: boolean;
  matchedEntityId?: string;
  errors: string[];
}

export class DeduplicationWorker {
  public validateProfile(data: { name: string; seriesAppearances: SeriesAppearance[]; factSources: FactSource[] }): ValidationReport {
    const errors: string[] = [];

    if (!data.name || data.name.trim().length === 0) {
      errors.push('Character name cannot be blank.');
    }

    if (!data.seriesAppearances || data.seriesAppearances.length === 0) {
      errors.push('Character must be linked to at least one of the 3 included series.');
    }

    if (!data.factSources || data.factSources.length === 0) {
      errors.push('At least one broadcast citation is required for publication.');
    }

    return {
      isValid: errors.length === 0,
      isDuplicate: false,
      errors
    };
  }
}
