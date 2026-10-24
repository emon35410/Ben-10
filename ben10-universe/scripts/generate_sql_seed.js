const fs = require('fs');
const path = require('path');

const { osAliens } = require('./data_os');
const { afAliens } = require('./data_af');
const { uaAliens } = require('./data_ua');
const { canonCharacters } = require('./data_canon');

const allCharacters = [
  ...osAliens,
  ...afAliens,
  ...uaAliens,
  ...canonCharacters
];

const speciesList = [
  { id: '22222222-2222-2222-2222-222222222201', name: 'Pyronite', homeworld: 'Pyros', description: 'Magma-based lifeforms capable of extreme pyrokinesis, flight via fire propulsion, and thermal energy manipulation.' },
  { id: '22222222-2222-2222-2222-222222222202', name: 'Petrosapien', homeworld: 'Petropia', description: 'Silicon-based crystalline beings with near-invulnerable crystal bodies capable of weaponizing shards and manipulating crystal structures.' },
  { id: '22222222-2222-2222-2222-222222222203', name: 'Kineceleran', homeworld: 'Kinet', description: 'Hyper-accelerated bipedal raptor-like species able to manipulate friction and run at speeds exceeding 500 mph.' },
  { id: '22222222-2222-2222-2222-222222222204', name: 'Methanosian', homeworld: 'Methanos', description: 'Plant-methane humanoid beings possessing regenerative bio-matter, root control, and spontaneous combustible gas projection.' },
  { id: '22222222-2222-2222-2222-222222222205', name: 'Sonorosian', homeworld: 'Sonorosia', description: 'Living silicone-based sound waves residing within containment suits, capable of sonic shouts and self-duplication.' },
  { id: '22222222-2222-2222-2222-222222222206', name: 'Chimera Sui Generis', homeworld: 'Vilgaxia (formerly Murray)', description: 'Massive squid-faced conqueror species known for superhuman strength, tentacle facial dexterity, and cybernetic adaptability.' },
  { id: '22222222-2222-2222-2222-222222222207', name: 'Osmosian', homeworld: 'Earth / Osmos V', description: 'Human mutants capable of absorbing matter, energy, and genetic traits from others via physical contact.' },
  { id: '22222222-2222-2222-2222-222222222208', name: 'Anodite / Human Hybrid', homeworld: 'Earth / Anodyne', description: 'Beings infused with Mana (life energy), capable of reality manipulation, energy constructs, and teleportation.' },
  { id: '22222222-2222-2222-2222-222222222209', name: 'Tetramand', homeworld: 'Khoros', description: 'Colossal four-armed red-skinned titans with immense kinetic punching strength.' },
  { id: '22222222-2222-2222-2222-222222222210', name: 'Galvanic Mechamorph', homeworld: 'Galvan B', description: 'Liquid nanite cybernetic beings capable of merging with and upgrading machinery.' },
  { id: '22222222-2222-2222-2222-222222222211', name: 'Vaxasaurian', homeworld: 'Terradino', description: 'Armored dinosaur bipeds capable of growing to 60 feet for destructive power.' },
  { id: '22222222-2222-2222-2222-222222222212', name: 'Necrofriggian', homeworld: 'Kilmamy', description: 'Phantom cryo-moth organisms capable of phasing through matter and radiating freeze breath.' },
  { id: '22222222-2222-2222-2222-222222222213', name: 'Celestialsapien', homeworld: 'Forge of Creation', description: 'Omnipotent cosmic beings whose bodies contain the starfield of space.' },
  { id: '22222222-2222-2222-2222-222222222214', name: 'Arburian Pelarota', homeworld: 'Arburia', description: 'Mammalian organisms with heavy back plates that curl into high-speed motorized spheres.' }
];

function escapeSql(str) {
  if (!str) return '';
  return str.replace(/'/g, "''");
}

let sql = `-- ============================================================================
-- BEN 10 CHARACTER UNIVERSE - SEED DATA (FULL CANONICAL ROSTER)
-- Included Series: Ben 10 (2005), Ben 10: Alien Force, Ben 10: Ultimate Alien
-- Total Canonical Characters: ${allCharacters.length}
-- ============================================================================

-- 1. INSERT THE THREE CANONICAL SERIES
INSERT INTO series (id, name, slug, continuity, release_year, description, banner_url) VALUES
('11111111-1111-1111-1111-111111111101', 'Ben 10 (2005)', 'ben-10-2005', 'Prime Timeline', 2005, 'The original series follows 10-year-old Ben Tennyson, his cousin Gwen, and their Grandpa Max on a summer road trip where Ben discovers the Omnitrix.', '/images/series/ben-10-2005.png'),
('11111111-1111-1111-1111-111111111102', 'Ben 10: Alien Force', 'ben-10-alien-force', 'Prime Timeline', 2008, 'Set five years after the original series, a 15-year-old Ben puts the Omnitrix back on to combat a secret Highbreed invasion alongside Gwen and Kevin Levin.', '/images/series/ben-10-alien-force.png'),
('11111111-1111-1111-1111-111111111103', 'Ben 10: Ultimate Alien', 'ben-10-ultimate-alien', 'Prime Timeline', 2010, 'Following the destruction of the Omnitrix, 16-year-old Ben wields the Ultimatrix, granting evolved "Ultimate" alien forms while his secret identity is exposed to the world.', '/images/series/ben-10-ultimate-alien.png')
ON CONFLICT (slug) DO NOTHING;

-- 2. INSERT SPECIES RECORDS
INSERT INTO species (id, name, homeworld, description) VALUES
${speciesList.map(s => `('${s.id}', '${escapeSql(s.name)}', '${escapeSql(s.homeworld)}', '${escapeSql(s.description)}')`).join(',\n')}
ON CONFLICT (name) DO NOTHING;

-- 3. INSERT CHARACTERS
INSERT INTO characters (name, slug, homeworld, summary, role, status) VALUES
${allCharacters.map(c => `('${escapeSql(c.name)}', '${escapeSql(c.slug)}', '${escapeSql(c.homeworld)}', '${escapeSql(c.summary)}', '${escapeSql(c.role)}', 'published')`).join(',\n')}
ON CONFLICT (slug) DO NOTHING;
`;

const outputPath = path.resolve(__dirname, '../../supabase/seed/001_seed_universe.sql');
fs.writeFileSync(outputPath, sql, 'utf-8');
console.log(`Generated ${outputPath} with all ${allCharacters.length} canonical characters!`);
