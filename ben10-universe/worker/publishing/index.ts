// ============================================================================
// STAGE 5 — PUBLISHING & AUDIT WORKER
// Transitions approved drafts to public database with immutable revision logs
// ============================================================================

import { Character, ContentRevision } from '@/types';

export class PublishingWorker {
  public publishCharacter(draft: Character, approvedBy: string): { publishedCharacter: Character; revision: ContentRevision } {
    const publishedCharacter: Character = {
      ...draft,
      status: 'published',
      updatedAt: new Date().toISOString()
    };

    const revision: ContentRevision = {
      id: `rev-${Date.now()}`,
      entityType: 'character',
      entityId: draft.id,
      entityName: draft.name,
      changeType: 'published',
      changedBy: approvedBy,
      timestamp: new Date().toISOString(),
      details: `Published to live encyclopedia following editorial verification of ${draft.factSources.length} citations.`
    };

    return {
      publishedCharacter,
      revision
    };
  }
}
