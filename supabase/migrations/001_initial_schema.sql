-- ============================================================================
-- BEN 10 CHARACTER UNIVERSE - POSTGRESQL / SUPABASE INITIAL SCHEMA
-- Canonical Series: Ben 10 (2005), Ben 10: Alien Force, Ben 10: Ultimate Alien
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. SERIES TABLE
CREATE TABLE IF NOT EXISTS series (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    continuity VARCHAR(100) NOT NULL DEFAULT 'Prime Timeline',
    release_year INTEGER NOT NULL,
    description TEXT,
    banner_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. SPECIES TABLE
CREATE TABLE IF NOT EXISTS species (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    homeworld VARCHAR(100),
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. CHARACTERS TABLE (Core Identity)
CREATE TABLE IF NOT EXISTS characters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    species_id UUID REFERENCES species(id) ON DELETE SET NULL,
    homeworld VARCHAR(100),
    summary TEXT NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'alien' CHECK (role IN ('hero', 'alien', 'villain', 'ally', 'neutral')),
    status VARCHAR(50) NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'needs_review', 'approved', 'published', 'rejected')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. CHARACTER ALIASES TABLE
CREATE TABLE IF NOT EXISTS character_aliases (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    alias VARCHAR(150) NOT NULL,
    normalized_alias VARCHAR(150) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. CHARACTER SERIES TABLE (Continuity-specific portrayal across the 3 series)
CREATE TABLE IF NOT EXISTS character_series (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    series_id UUID NOT NULL REFERENCES series(id) ON DELETE CASCADE,
    version_name VARCHAR(150),
    description TEXT NOT NULL,
    first_appearance VARCHAR(150),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (character_id, series_id)
);

-- 6. ABILITIES TABLE (Powers, Weaknesses, Limitations)
CREATE TABLE IF NOT EXISTS abilities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    type VARCHAR(30) NOT NULL CHECK (type IN ('power', 'weakness', 'limitation')),
    name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    limitations TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. CHARACTER FORMS TABLE (Transformations, Ultimate Forms, Variants)
CREATE TABLE IF NOT EXISTS character_forms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    base_character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    form_character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    form_type VARCHAR(50) NOT NULL CHECK (form_type IN ('transformation', 'ultimate', 'variant', 'evolution')),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. CHARACTER RELATIONSHIPS TABLE
CREATE TABLE IF NOT EXISTS character_relationships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    target_character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    relationship_type VARCHAR(50) NOT NULL,
    evidence_source_id UUID,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. SOURCES TABLE (Authoritative & Fan Research Sources)
CREATE TABLE IF NOT EXISTS sources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    url TEXT,
    title VARCHAR(255) NOT NULL,
    publisher VARCHAR(150) NOT NULL,
    source_type VARCHAR(50) NOT NULL CHECK (source_type IN ('tv_episode', 'production_notes', 'encyclopedia', 'creator_statement', 'pop_up_edition')),
    accessed_at TIMESTAMPTZ DEFAULT NOW(),
    reliability_notes TEXT
);

-- 10. FACT SOURCES TABLE (Fact-level citations & confidence threshold)
CREATE TABLE IF NOT EXISTS fact_sources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_type VARCHAR(50) NOT NULL,
    entity_id UUID NOT NULL,
    fact_key VARCHAR(100) NOT NULL,
    source_id UUID NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
    supporting_excerpt TEXT NOT NULL,
    confidence NUMERIC(3, 2) NOT NULL DEFAULT 1.00 CHECK (confidence >= 0.0 AND confidence <= 1.0),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. CHARACTER IMAGES TABLE (Rights-reviewed galleries)
CREATE TABLE IF NOT EXISTS character_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    source_url TEXT NOT NULL,
    creator_or_rights_holder VARCHAR(255),
    license VARCHAR(100) NOT NULL DEFAULT 'Fan Editorial / Fair Use under Review',
    license_evidence_url TEXT,
    attribution_text TEXT NOT NULL,
    review_status VARCHAR(50) NOT NULL DEFAULT 'approved' CHECK (review_status IN ('pending', 'approved', 'rejected', 'flagged')),
    alt_text VARCHAR(255) NOT NULL,
    position INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. RESEARCH JOBS TABLE (AI Pipeline Queue)
CREATE TABLE IF NOT EXISTS research_jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_name VARCHAR(150) NOT NULL,
    series_id UUID REFERENCES series(id) ON DELETE SET NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'queued' CHECK (status IN ('queued', 'researching', 'image_review', 'needs_review', 'approved', 'published', 'failed', 'rejected')),
    attempts INTEGER DEFAULT 0,
    error_message TEXT,
    payload JSONB DEFAULT '{}'::jsonb,
    started_at TIMESTAMPTZ,
    finished_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. CONTENT REVISIONS TABLE (Audit & Rollback support)
CREATE TABLE IF NOT EXISTS content_revisions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_type VARCHAR(50) NOT NULL,
    entity_id UUID NOT NULL,
    old_data JSONB,
    new_data JSONB NOT NULL,
    reviewed_by VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. ADMIN PROFILES TABLE
CREATE TABLE IF NOT EXISTS admin_profiles (
    user_id UUID PRIMARY KEY,
    role VARCHAR(50) NOT NULL DEFAULT 'editor' CHECK (role IN ('admin', 'editor', 'moderator')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- INDEXES FOR FAST QUERYING AND SEARCH
CREATE INDEX IF NOT EXISTS idx_characters_slug ON characters(slug);
CREATE INDEX IF NOT EXISTS idx_characters_status ON characters(status);
CREATE INDEX IF NOT EXISTS idx_characters_role ON characters(role);
CREATE INDEX IF NOT EXISTS idx_character_aliases_normalized ON character_aliases(normalized_alias);
CREATE INDEX IF NOT EXISTS idx_character_series_series_id ON character_series(series_id);
CREATE INDEX IF NOT EXISTS idx_character_images_review_status ON character_images(review_status);
CREATE INDEX IF NOT EXISTS idx_research_jobs_status ON research_jobs(status);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE characters ENABLE ROW LEVEL SECURITY;
ALTER TABLE character_images ENABLE ROW LEVEL SECURITY;

-- Public users can only read published characters
CREATE POLICY "Public read published characters" ON characters
    FOR SELECT USING (status = 'published');

-- Public users can only view approved images
CREATE POLICY "Public read approved images" ON character_images
    FOR SELECT USING (review_status = 'approved');
