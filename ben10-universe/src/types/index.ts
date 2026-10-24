// ============================================================================
// BEN 10 CHARACTER UNIVERSE - TYPE DEFINITIONS
// Covers: Ben 10 (2005), Ben 10: Alien Force, Ben 10: Ultimate Alien
// ============================================================================

export type CanonicalSeriesSlug = 'ben-10-2005' | 'ben-10-alien-force' | 'ben-10-ultimate-alien';

export interface Series {
  id: string;
  name: string;
  slug: CanonicalSeriesSlug;
  continuity: string;
  releaseYear: number;
  description: string;
  bannerUrl: string;
  tagline: string;
  characterCount?: number;
}

export interface Species {
  id: string;
  name: string;
  homeworld: string;
  description: string;
}

export type CharacterRole = 'hero' | 'alien' | 'villain' | 'ally' | 'neutral';
export type PublicationStatus = 'draft' | 'needs_review' | 'approved' | 'published' | 'rejected';
export type AbilityType = 'power' | 'weakness' | 'limitation';
export type FormType = 'transformation' | 'ultimate' | 'variant' | 'evolution';
export type ReviewStatus = 'pending' | 'approved' | 'rejected' | 'flagged';
export type JobStatus = 'queued' | 'researching' | 'image_review' | 'needs_review' | 'approved' | 'published' | 'failed' | 'rejected';

export interface Ability {
  id: string;
  characterId: string;
  type: AbilityType;
  name: string;
  description: string;
  limitations?: string;
  isUnknown?: boolean;
}

export interface CharacterImage {
  id: string;
  characterId: string;
  imageUrl: string;
  sourceUrl: string;
  creatorOrRightsHolder: string;
  license: string;
  licenseEvidenceUrl?: string;
  attributionText: string;
  reviewStatus: ReviewStatus;
  altText: string;
  position: number;
  isPrimary?: boolean;
}

export interface FactSource {
  id: string;
  entityType: 'character' | 'ability' | 'species' | 'series';
  entityId: string;
  factKey: string;
  sourceTitle: string;
  sourceUrl: string;
  publisher: string;
  sourceType: 'tv_episode' | 'production_notes' | 'encyclopedia' | 'creator_statement' | 'pop_up_edition';
  supportingExcerpt: string;
  confidence: number; // 0.00 to 1.00
  verifiedDate: string;
}

export interface CharacterSeriesAppearance {
  seriesId: string;
  seriesSlug: CanonicalSeriesSlug;
  seriesName: string;
  versionName?: string;
  description: string;
  firstAppearanceEpisode: string;
  isSignatureAlien?: boolean;
}

export type SeriesAppearance = CharacterSeriesAppearance;

export interface CharacterFormRelation {
  relatedCharacterId: string;
  relatedCharacterName: string;
  relatedCharacterSlug: string;
  formType: FormType;
  notes: string;
}

export interface CharacterRelationship {
  targetCharacterId: string;
  targetCharacterName: string;
  targetCharacterSlug: string;
  relationshipType: 'arch-nemesis' | 'ally' | 'cousin' | 'mentor' | 'enemy' | 'genetic-donor' | 'counterpart';
  notes: string;
}

export interface CharacterStats {
  strength: number;      // 1 - 100
  speed: number;         // 1 - 100
  durability: number;    // 1 - 100
  intelligence: number;  // 1 - 100
  energyOutput: number;  // 1 - 100
  versatility: number;   // 1 - 100
}

export interface Character {
  id: string;
  name: string;
  slug: string;
  aliases: string[];
  speciesId?: string;
  speciesName?: string;
  homeworld: string;
  summary: string;
  role: CharacterRole;
  status: PublicationStatus;
  primaryImage: CharacterImage;
  gallery: CharacterImage[];
  abilities: Ability[];
  seriesAppearances: CharacterSeriesAppearance[];
  forms: CharacterFormRelation[];
  relationships: CharacterRelationship[];
  factSources: FactSource[];
  stats: CharacterStats;
  playlist?: 'original_10' | 'additional_os' | 'alien_force_10' | 'ultimate_forms' | 'andromeda_5' | 'villains' | 'allies';
  createdAt: string;
  updatedAt: string;
}

export interface ResearchJob {
  id: string;
  entityName: string;
  seriesSlug: CanonicalSeriesSlug;
  status: JobStatus;
  attempts: number;
  errorMessage?: string;
  factsFound: number;
  imagesFound: number;
  confidenceAverage: number;
  startedAt: string;
  finishedAt?: string;
  findings?: {
    suggestedRole: CharacterRole;
    suggestedSpecies: string;
    homeworld: string;
    powers: string[];
    weaknesses: string[];
    sourceCount: number;
  };
}

export interface ContentRevision {
  id: string;
  entityType: string;
  entityId: string;
  entityName: string;
  changeType: 'created' | 'published' | 'updated' | 'image_approved' | 'unpublish';
  changedBy: string;
  timestamp: string;
  details: string;
}

export interface FilterOptions {
  searchQuery: string;
  series: CanonicalSeriesSlug | 'all';
  role: CharacterRole | 'all';
  species: string | 'all';
  sortBy: 'name-asc' | 'name-desc' | 'power' | 'speed' | 'release';
}
