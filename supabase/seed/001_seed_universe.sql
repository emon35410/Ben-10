-- ============================================================================
-- BEN 10 CHARACTER UNIVERSE - SEED DATA
-- Included Series: Ben 10 (2005), Ben 10: Alien Force, Ben 10: Ultimate Alien
-- ============================================================================

-- 1. INSERT THE THREE CANONICAL SERIES
INSERT INTO series (id, name, slug, continuity, release_year, description, banner_url) VALUES
('11111111-1111-1111-1111-111111111101', 'Ben 10 (2005)', 'ben-10-2005', 'Prime Timeline', 2005, 'The original series follows 10-year-old Ben Tennyson, his cousin Gwen, and their Grandpa Max on a summer road trip where Ben discovers the Omnitrix.', '/series/ben10-original.jpg'),
('11111111-1111-1111-1111-111111111102', 'Ben 10: Alien Force', 'ben-10-alien-force', 'Prime Timeline', 2008, 'Set five years after the original series, a 15-year-old Ben puts the Omnitrix back on to combat a secret Highbreed invasion alongside Gwen and Kevin Levin.', '/series/alien-force.jpg'),
('11111111-1111-1111-1111-111111111103', 'Ben 10: Ultimate Alien', 'ben-10-ultimate-alien', 'Prime Timeline', 2010, 'Following the destruction of the Omnitrix, 16-year-old Ben wields the Ultimatrix, granting evolved "Ultimate" alien forms while his secret identity is exposed to the world.', '/series/ultimate-alien.jpg')
ON CONFLICT (slug) DO NOTHING;

-- 2. INSERT SPECIES RECORDS
INSERT INTO species (id, name, homeworld, description) VALUES
('22222222-2222-2222-2222-222222222201', 'Pyronite', 'Pyros', 'Magma-based lifeforms capable of extreme pyrokinesis, flight via fire propulsion, and thermal energy manipulation.'),
('22222222-2222-2222-2222-222222222202', 'Petrosapien', 'Petropia', 'Silicon-based crystalline beings with near-invulnerable crystal bodies capable of weaponizing shards and manipulating crystal structures.'),
('22222222-2222-2222-2222-222222222203', 'Kineceleran', 'Kinet', 'Hyper-accelerated bipedal raptor-like species able to manipulate friction and run at speeds exceeding 500 mph.'),
('22222222-2222-2222-2222-222222222204', 'Methanosian', 'Methanos', 'Plant-methane humanoid beings possessing regenerative bio-matter, root control, and spontaneous combustible gas projection.'),
('22222222-2222-2222-2222-222222222205', 'Sonorosian', 'Sonorosia', 'Living silicone-based sound waves residing within containment suits, capable of sonic sonic shouts and self-duplication.'),
('22222222-2222-2222-2222-222222222206', 'Chimera Sui Generis', 'Vilgaxia (formerly Murray)', 'Massive squid-faced conqueror species known for superhuman strength, tentacle facial dexterity, and cybernetic adaptability.'),
('22222222-2222-2222-2222-222222222207', 'Osmosian', 'Earth / Osmos V', 'Human mutants capable of absorbing matter, energy, and genetic traits from others via physical contact.'),
('22222222-2222-2222-2222-222222222208', 'Anodite / Human Hybrid', 'Earth / Anodyne', 'Beings infused with Mana (life energy), capable of reality manipulation, energy constructs, and teleportation.')
ON CONFLICT (name) DO NOTHING;

-- 3. INSERT CHARACTERS
INSERT INTO characters (id, name, slug, species_id, homeworld, summary, role, status) VALUES
('33333333-3333-3333-3333-333333333301', 'Heatblast', 'heatblast', '22222222-2222-2222-2222-222222222201', 'Pyros', 'The first alien form unlocked by Ben Tennyson from the Omnitrix. A magma-based Pyronite with total mastery over fire projection, absorption, and thermal constructs.', 'alien', 'published'),
('33333333-3333-3333-3333-333333333302', 'Swampfire', 'swampfire', '22222222-2222-2222-2222-222222222204', 'Methanos', 'A Methanosian transformation introduced in Alien Force. Combines methane-fueled pyrokinesis with extreme chlorokinetic plant manipulation and rapid cellular regeneration.', 'alien', 'published'),
('33333333-3333-3333-3333-333333333303', 'Ultimate Echo Echo', 'ultimate-echo-echo', '22222222-2222-2222-2222-222222222205', 'Sonorosia (Simulated War Evolution)', 'The hyper-evolved form of Echo Echo through the Ultimatrix evolutionary function. Sacrifices bio-duplication for flying sonic disks generating devastating forcefields.', 'alien', 'published'),
('33333333-3333-3333-3333-333333333304', 'Vilgax', 'vilgax', '22222222-2222-2222-2222-222222222206', 'Vilgaxia', 'The warlord of Vilgaxia and recurring galactic conqueror who seeks to claim the Omnitrix and conquer the universe across all three eras.', 'villain', 'published'),
('33333333-3333-3333-3333-333333333305', 'Kevin Levin', 'kevin-levin', '22222222-2222-2222-2222-222222222207', 'Earth', 'An Osmosian who began as a troubled rogue absorbing Omnitrix energy in the 2005 series, evolving into a steadfast hero and ally in Alien Force and Ultimate Alien.', 'hero', 'published'),
('33333333-3333-3333-3333-333333333306', 'Gwen Tennyson', 'gwen-tennyson', '22222222-2222-2222-2222-222222222208', 'Earth', 'Ben''s cousin whose magical aptitude was revealed in the original series, unlocking her innate Anodite heritage to manipulate powerful pink mana shields and constructs.', 'hero', 'published')
ON CONFLICT (slug) DO NOTHING;

-- 4. INSERT SOURCES (For Evidence Citations)
INSERT INTO sources (id, url, title, publisher, source_type, reliability_notes) VALUES
('44444444-4444-4444-4444-444444444401', 'https://en.wikipedia.org/wiki/Ben_10_(2005_TV_series)', 'Ben 10 Pilot: And Then There Were 10', 'Cartoon Network', 'tv_episode', 'Official televised pilot episode canonical broadcast.'),
('44444444-4444-4444-4444-444444444402', 'https://en.wikipedia.org/wiki/Ben_10:_Alien_Force', 'Ben 10: Alien Force Premiere: Ben 10 Returns', 'Cartoon Network', 'tv_episode', 'Official televised season 1 premiere.'),
('44444444-4444-4444-4444-444444444403', 'https://en.wikipedia.org/wiki/Ben_10:_Ultimate_Alien', 'Ben 10: Ultimate Alien Episode: Too Hot to Handle', 'Cartoon Network', 'tv_episode', 'Official televised episode showcasing Ultimatrix evolution.')
ON CONFLICT DO NOTHING;

-- 5. INSERT FACT SOURCES (Traceable Claims)
INSERT INTO fact_sources (entity_type, entity_id, fact_key, source_id, supporting_excerpt, confidence) VALUES
('character', '33333333-3333-3333-3333-333333333301', 'first_transformation', '44444444-4444-4444-4444-444444444401', 'Ben accidentally activates the Omnitrix faceplate and transforms into a fire alien that causes a forest fire.', 1.00),
('character', '33333333-3333-3333-3333-333333333302', 'regeneration_ability', '44444444-4444-4444-4444-444444444402', 'Swampfire reattaches his severed limb and regenerates through floorboards against the DNAliens.', 0.98),
('character', '33333333-3333-3333-3333-333333333303', 'sonic_disk_force', '44444444-4444-4444-4444-444444444403', 'Ultimate Echo Echo deploys sound disks to trap and contain Pandor within a high-frequency acoustic perimeter.', 0.95);
