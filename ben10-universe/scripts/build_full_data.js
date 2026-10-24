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

console.log(`Total assembled characters: ${allCharacters.length}`);

// 1. Series List
const CANONICAL_SERIES = [
  {
    id: 'series-01',
    name: 'Ben 10 (2005)',
    slug: 'ben-10-2005',
    continuity: 'Prime Timeline',
    releaseYear: 2005,
    tagline: 'The Summer Vacation That Changed the Galaxy',
    description: 'During a cross-country summer road trip with his cousin Gwen and grandfather Max, 10-year-old Ben Tennyson discovers the mysterious alien watch known as the Omnitrix. The pod clamped onto his wrist grants him the DNA transformations of 10 distinct alien species, kicking off a series of battles against interstellar threats and mutant villains.',
    bannerUrl: '/images/series/ben-10-2005.png',
    characterCount: 26
  },
  {
    id: 'series-02',
    name: 'Ben 10: Alien Force',
    slug: 'ben-10-alien-force',
    continuity: 'Prime Timeline',
    releaseYear: 2008,
    tagline: 'Five Years Later. New Threats. Greater Responsibility.',
    description: 'Five years after removing the Omnitrix, 15-year-old Ben must put it back on when Grandpa Max mysteriously disappears while investigating a subterranean invasion. Joined by Gwen and former rival Kevin Levin, Ben unlocks a recalibrated playlist of ten new alien forms to stop the xenophobic Highbreed and their DNAlien minions.',
    bannerUrl: '/images/series/ben-10-alien-force.png',
    characterCount: 18
  },
  {
    id: 'series-03',
    name: 'Ben 10: Ultimate Alien',
    slug: 'ben-10-ultimate-alien',
    continuity: 'Prime Timeline',
    releaseYear: 2010,
    tagline: 'Identity Revealed. Alien Power Evolved.',
    description: 'Following the dramatic self-destruction of the Omnitrix, 16-year-old Ben wields the Ultimatrix: a gauntlet engineered by Albedo and modified by Azmuth. Now an international celebrity after his secret identity is publicly leaked, Ben battles the ruthless Osmosian warlord Aggregor and ancient cosmic terrors using hyper-evolved "Ultimate" alien forms.',
    bannerUrl: '/images/series/ben-10-ultimate-alien.png',
    characterCount: 35
  }
];

// 2. Species List
const CANONICAL_SPECIES = [
  { id: 'sp-01', name: 'Pyronite', homeworld: 'Pyros', description: 'A magma-based species from the burning star-planet Pyros. Their outer crust of red-brown volcanic rock shelters pure solar plasma, enabling controlled pyrokinesis, thermal absorption, and self-levitation.' },
  { id: 'sp-02', name: 'Petrosapien', homeworld: 'Petropia', description: 'Silicon-based crystalline humanoids whose diamond-hard bodies resist physical and energy harm, capable of projecting lethal razor-edged shards and reshaping crystalline terrain.' },
  { id: 'sp-03', name: 'Kineceleran', homeworld: 'Kinet', description: 'Sleek bipedal raptors from the turbulent planet Kinet. Born on roller-like spheres on their feet, they manipulate friction to achieve hyper-acceleration up to 500 mph.' },
  { id: 'sp-04', name: 'Tetramand', homeworld: 'Khoros', description: 'Four-armed, red-skinned titans hailing from the arid wastelands of Khoros. Known for colossal upper-body strength, shockwave claps, and high kinetic tolerance.' },
  { id: 'sp-05', name: 'Galvanic Mechamorph', homeworld: 'Galvan B', description: 'Synthetic organisms created accidentally by the Galvans. Composed of nanite fluid, they bond with and upgrade external technological systems beyond modern engineering limits.' },
  { id: 'sp-06', name: 'Methanosian', homeworld: 'Methanos', description: 'Plant-methane humanoid beings possessing rapid cellular regeneration, root manipulation, and ignition nodes that fire pressurized combustible gases.' },
  { id: 'sp-07', name: 'Vaxasaurian', homeworld: 'Terradino', description: 'Giant sauropod bipeds from the primeval planet Terradino. Capable of expanding their biological mass and skeletal density up to 60 feet tall for raw destructive power.' },
  { id: 'sp-08', name: 'Necrofriggian', homeworld: 'Kilmamy', description: 'Moth-like phantom organisms from the sub-zero planet Kilmamy. They can drop their body density to drift through solid walls and radiate cryogenic freeze breath.' },
  { id: 'sp-09', name: 'Sonorosian', homeworld: 'Sonorosia', description: 'Living sound waves contained inside flexible silicone containment suits. They harness amplified acoustic frequencies to shatter objects and can self-replicate indefinitely.' },
  { id: 'sp-10', name: 'Celestialsapien', homeworld: 'Forge of Creation', description: 'God-like cosmic entities whose bodies contain the starfield of space. Capable of rewriting reality and time, but immobilized until dual conflicting personalities reach internal consensus.' },
  { id: 'sp-11', name: 'Arburian Pelarota', homeworld: 'Arburia (Pre-destruction)', description: 'Armored, spherical mammals with heavy yellow back plates. They curl into a motorized sphere capable of bouncing, crushing debris, and deflecting laser fire.' },
  { id: 'sp-12', name: 'Chimera Sui Generis', homeworld: 'Vilgaxia (formerly Murray)', description: 'Cephalopod-featured humanoids with reinforced cartilage, tremendous physical prowess, and profound resistance to harsh interstellar environments.' },
  { id: 'sp-13', name: 'Osmosian', homeworld: 'Earth / Osmos V (Genetic Lineage)', description: 'Rare genetic strain capable of absorbing solid matter, energy currents, or foreign DNA matrices through skin contact to alter cellular composition.' },
  { id: 'sp-14', name: 'Anodite Hybrid', homeworld: 'Earth / Anodyne', description: 'Beings with latent spark of Anodite ancestry capable of tapping directly into Mana: the underlying radiant life energy of the cosmos.' },
  { id: 'sp-15', name: 'Vulpimancer', homeworld: 'Vulpin', description: 'Eyeless beast predators relying on supersonic thermographic quills and acute olfactory senses to track quarry in zero-visibility environments.' },
  { id: 'sp-16', name: 'Galvan', homeworld: 'Galvan Prime', description: 'Diminutive, hyper-intelligent amphibians possessing an expansive cerebral cortex capable of reverse-engineering and designing complex interstellar technology.' },
  { id: 'sp-17', name: 'Lepidopterran', homeworld: 'Lepidopterra', description: 'Insectoid organisms equipped with four wings for agile 360-degree flight and stalks capable of launching viscous, adhesive, and combustible chemical streams.' },
  { id: 'sp-18', name: 'Piscciss Volann', homeworld: 'Piscciss', description: 'Deep-ocean apex aquatic predators featuring bioluminescent lures, dense scales, and colossal hinged jaws capable of biting through solid steel.' },
  { id: 'sp-19', name: 'Ectonurite', homeworld: 'Anur Phaetos', description: 'Shadowy entities dwelling in the perpetual twilight of the Anur System. Capable of matter intangibility, flight, invisibility, and mental possession.' },
  { id: 'sp-20', name: 'Florauna', homeworld: 'Flors Verdance', description: 'Sentient floral organisms composed of interconnected vines, thorn appendages, and regenerative root networks that fire explosive plant seeds.' },
  { id: 'sp-21', name: 'Loboan', homeworld: 'Luna Lobo', description: 'Canine biped predators of the Anur System wielding quadrupedal sprint speeds and four-part hinged jaws that produce ultrasonic concussive soundwaves.' },
  { id: 'sp-22', name: 'Thep Khufan', homeworld: 'Anur Khufos', description: 'Mummified, bandage-like entities composed of high-tensile wraps resistant to radioactive Corrodium and capable of reshaping their bodies at will.' },
  { id: 'sp-23', name: 'Transylian', homeworld: 'Anur Transyl', description: 'Cybernetic, biomechanical juggernauts equipped with back-mounted electromagnetic conductor pylons channeling massive currents of electricity.' },
  { id: 'sp-24', name: 'Gourmand (Perk)', homeworld: 'Peptos XI', description: 'Green-skinned reptilian Gourmands whose pocket-dimension stomachs can ingest any non-organic substance and spit it out as explosive plasma.' },
  { id: 'sp-25', name: 'Gourmand (Murk)', homeworld: 'Peptos XI', description: 'Dark-skinned, spotted subspecies of the Gourmand race sharing the same omnivorous ingestion powers with slightly denser physical hide.' },
  { id: 'sp-26', name: 'Splixson', homeworld: 'Hathor', description: 'Sprightly humanoid organisms capable of autonomous mitosis duplication, creating independent duplicates that share physical sensory links.' },
  { id: 'sp-27', name: 'Opticoid', homeworld: 'Sightra', description: 'Torso-studded humanoid organisms with 360-degree sensory awareness, capable of channeling energy bursts from multiple ocular nodes into unified elemental blasts.' },
  { id: 'sp-28', name: "To'kustar", homeworld: 'Cosmic Storms', description: 'Ancient titans standing over a hundred feet tall, gestated inside unpredictable deep-space cosmic storms, wielding sheer planetary brawn and cosmic ray projection.' },
  { id: 'sp-29', name: 'Spheroid', homeworld: 'Scalpasc', description: 'Puffer-bipedal organisms with high-volume internal bladder sacks, capable of pressurizing and spewing continuous streams of corrosive acidic slime.' },
  { id: 'sp-30', name: 'Nosedeenian', homeworld: 'Nosideen', description: 'Miniature beings of living electrical current capable of traveling across power conduits, generating high-voltage discharge, and duplicating on overload.' },
  { id: 'sp-31', name: 'Polar Manzardill', homeworld: "X'Nelli", description: 'Cold-adapted reptiles capable of exhaling sub-zero vapor clouds that instantly freeze lava, armor, and surrounding moisture into crystalline ice.' },
  { id: 'sp-32', name: 'Aerophibian', homeworld: 'Aeropela', description: 'Air-and-sea manta bipeds engineered for supersonic aerodynamic flight and deep interstellar travel, firing concentrated neuroshock beams.' },
  { id: 'sp-33', name: 'Crystalsapien', homeworld: 'Petropia', description: 'Legendary silicate guardians possessing an internal crystalline matrix that absorbs ambient electromagnetic radiation and releases it as ultraviolet laser bursts.' },
  { id: 'sp-34', name: 'Cerebrocrustacean', homeworld: 'Encephalonus IV', description: 'Hyper-cerebral decapod crustaceans wielding high-level deductive logic and generating neuro-electric energy forcefields from their cranial plates.' },
  { id: 'sp-35', name: 'Arachnichimp', homeworld: 'Aranhaschimmia', description: 'Four-armed primate acrobats equipped with adhesive pads and high-tensile web-spinning tail glands capable of ensnaring heavy adversaries.' },
  { id: 'sp-36', name: 'Polymorph', homeworld: 'Viscosia', description: 'Shapeless, indestructible fluid entities controlled by an anti-gravity hovering projector, altering their molecular density from lubricant to corrosive acid.' },
  { id: 'sp-37', name: 'Biosovortian', homeworld: 'Attracta', description: 'Organisms with floating magnetic components capable of manipulating ferromagnetic metals, creating magnetic pulses, and drawing severed body parts together.' },
  { id: 'sp-38', name: 'Appoplexian', homeworld: 'Appoplexia', description: 'Feline gladiators boasting immense muscular density, retractable bone wrist claws, and an instinctual compulsion to confront any challenge physically.' },
  { id: 'sp-39', name: 'Nanochip Hybrid', homeworld: 'Hive World / Earth', description: 'A cybernetic fusion of microscopic alien nanochips and human DNA, allowing extreme micro-scale shrinking, winged agility, and bio-electric laser darts.' },
  { id: 'sp-40', name: 'Orishan', homeworld: 'Kiuana (Andromeda Galaxy)', description: 'Armored molluscoid humanoids from the Andromeda Galaxy with internal water turbines, projecting pressurized moisture jets from palm nozzles.' },
  { id: 'sp-41', name: 'Geochelone Aerio', homeworld: 'Aldabra (Andromeda Galaxy)', description: 'Ponderous chelonian intellectuals capable of rotating their flipper limbs to produce category-5 gale force winds, naturally immune to mana manipulation.' },
  { id: 'sp-42', name: 'Prypiatosian-B', homeworld: 'Prypiatos (Andromeda Galaxy)', description: 'Pure radioactive beings sealed inside thick lead-lined containment armor, capable of radiating searing nuclear thermal heat that melts through solid stone.' },
  { id: 'sp-43', name: 'Amperi', homeworld: 'Tesslos (Andromeda Galaxy)', description: 'Translucent aquatic-aerial organisms composed of nervous system energy, sensing electric impulses to read thoughts and traveling through electrical circuits.' },
  { id: 'sp-44', name: 'Talpaedan', homeworld: 'Terraexcava (Andromeda Galaxy)', description: 'Mechanical-exoskeleton armadillo humanoids equipped with pneumatic piston jackhammer forearms designed for rapid excavation and seismic shockwaves.' },
  { id: 'sp-45', name: 'Merlinisapien', homeworld: 'Unknown', description: 'Chameleon reptiles with full cellular chromatophore mimicry, rendering them invisible to the naked eye while attacking with barbed tail stingers.' },
  { id: 'sp-46', name: 'Citrakayah', homeworld: 'Chalybeas', description: 'Streamlined feline sprinters possessing dense shock-absorbing muscle tissue that permits sustained sprint speeds exceeding 400 miles per hour.' },
  { id: 'sp-47', name: 'Chronosapien', homeworld: 'Unknown (Temporal Dimension)', description: 'Biomechanical clockwork entities containing chronological gear matrices, able to slow time, accelerate local entropy, and project temporal beams.' },
  { id: 'sp-48', name: 'Oryctini', homeworld: 'Coleop Terra', description: 'Heavily-armored beetle bipeds equipped with high-tensile jaws that devour raw metal and minerals, converting them into focused laser charges launched from a forehead horn.' }
];

const fileHeader = `// ============================================================================
// BEN 10 CHARACTER UNIVERSE - CANONICAL DATA STORE
// Strictly includes: Ben 10 (2005), Ben 10: Alien Force, Ben 10: Ultimate Alien
// Real cartoon renders and broadcast assets from Cartoon Network / Fandom archive
// ============================================================================

import { Series, Species, Character, ResearchJob, ContentRevision } from '@/types';

export const CANONICAL_SERIES: Series[] = ${JSON.stringify(CANONICAL_SERIES, null, 2)};

export const CANONICAL_SPECIES: Species[] = ${JSON.stringify(CANONICAL_SPECIES, null, 2)};

export const CANONICAL_CHARACTERS: Character[] = ${JSON.stringify(allCharacters, null, 2)};

export const MOCK_RESEARCH_JOBS: ResearchJob[] = [
  {
    id: 'job-01',
    entityName: 'Cannonbolt',
    seriesSlug: 'ben-10-2005',
    status: 'approved',
    attempts: 1,
    factsFound: 6,
    imagesFound: 4,
    confidenceAverage: 0.98,
    startedAt: '2026-10-22T22:30:00Z',
    finishedAt: '2026-10-22T22:31:12Z',
    findings: {
      suggestedRole: 'alien',
      suggestedSpecies: 'Arburian Pelarota',
      homeworld: 'Arburia (Destroyed by Great One)',
      powers: ['Sphere Invulnerability', 'Kinetic Ricochet', 'High Speed Rolling'],
      weaknesses: ['Top-Heavy Stumble', 'Cannot Grip When Rolling'],
      sourceCount: 3
    }
  },
  {
    id: 'job-02',
    entityName: 'Vilgax',
    seriesSlug: 'ben-10-2005',
    status: 'approved',
    attempts: 1,
    factsFound: 9,
    imagesFound: 3,
    confidenceAverage: 1.00,
    startedAt: '2026-10-23T00:45:00Z',
    findings: {
      suggestedRole: 'villain',
      suggestedSpecies: 'Chimera Sui Generis',
      homeworld: 'Vilgaxia',
      powers: ['Cybernetic Implants', 'Ruby Ray of Ulo', 'Shield of Ziegel'],
      weaknesses: ['Extreme Arrogance', 'Vulnerable to Energy Inversion'],
      sourceCount: 5
    }
  }
];

export const MOCK_CONTENT_REVISIONS: ContentRevision[] = [
  {
    id: 'rev-01',
    entityType: 'character',
    entityId: 'char-heatblast',
    entityName: 'Heatblast',
    changeType: 'published',
    changedBy: 'Curator Admin (Omnitrix Council)',
    timestamp: '2026-10-23T01:50:00Z',
    details: 'Verified pilot episode citations and validated image rights under Fair Use Editorial.'
  }
];

// Helper query functions
export function getAllCharacters(): Character[] {
  return CANONICAL_CHARACTERS;
}

export function getCharacterBySlug(slug: string): Character | undefined {
  return CANONICAL_CHARACTERS.find(c => c.slug.toLowerCase() === slug.toLowerCase());
}

export function getCharactersBySeries(seriesSlug: string): Character[] {
  return CANONICAL_CHARACTERS.filter(c => 
    c.seriesAppearances.some(app => app.seriesSlug === seriesSlug)
  );
}

export function getCharactersByRole(role: string): Character[] {
  return CANONICAL_CHARACTERS.filter(c => c.role === role);
}

export function getSeriesBySlug(slug: string): Series | undefined {
  return CANONICAL_SERIES.find(s => s.slug === slug);
}
`;

const outputPath = path.resolve(__dirname, '../src/lib/data.ts');
fs.writeFileSync(outputPath, fileHeader, 'utf-8');
console.log(`Successfully generated ${outputPath}! Total characters written: ${allCharacters.length}`);
