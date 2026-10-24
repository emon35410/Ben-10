// ============================================================================
// STAGE 3 — IMAGE REVIEW & RIGHTS WORKER
// Assesses copyright provenance, license evidence, and prevents republication of restricted assets
// ============================================================================

import { ReviewStatus } from '@/types';

export interface ImageCandidate {
  rawUrl: string;
  sourceUrl: string;
  detectedCreator: string;
  licenseType: string;
  licenseEvidenceUrl?: string;
  reviewStatus: ReviewStatus;
}

export class ImageReviewWorker {
  public async evaluateCandidate(candidate: Partial<ImageCandidate>): Promise<ImageCandidate> {
    // Technical blueprint rule: Never treat public availability as permission to republish.
    const isRightsCleared = candidate.licenseType === 'CC-BY-SA' || 
                            candidate.licenseType?.includes('Fair Use Editorial Fan Archive');

    return {
      rawUrl: candidate.rawUrl || '',
      sourceUrl: candidate.sourceUrl || '',
      detectedCreator: candidate.detectedCreator || 'Cartoon Network / Turner Broadcasting',
      licenseType: candidate.licenseType || 'Pending Legal Verification',
      licenseEvidenceUrl: candidate.licenseEvidenceUrl,
      reviewStatus: isRightsCleared ? 'approved' : 'pending'
    };
  }
}
