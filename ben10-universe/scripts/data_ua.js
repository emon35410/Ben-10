const { createAlien } = require('./character_helper');

const uaAliens = [
  // 1. Water Hazard
  createAlien({
    id: 'char-water-hazard',
    name: 'Water Hazard',
    slug: 'water-hazard',
    aliases: ['Orishan Form', 'Hydro Warrior'],
    speciesId: 'sp-40',
    speciesName: 'Orishan',
    homeworld: 'Kiuana (Andromeda Galaxy)',
    summary: 'A red armored Orishan scanned from the Andromeda fugitive Bivalvan. Water Hazard can project high-pressure boiling or cold water jets from ports in his palms, absorb ambient atmospheric moisture, and withstand physical trauma with his chitinous shell.',
    playlist: 'andromeda_5',
    primaryImage: '/images/characters/water_hazard.png',
    firstEpisode: 'S01E06 - "Too Hot to Handle"',
    factExcerpt: 'Ben used Water Hazard to douse P\'andor\'s runaway radioactive reactor.',
    abilities: [
      { type: 'power', name: 'High-Pressure Palm Water Cannons', description: 'Projects torrents of water capable of pushing back heavy vehicles and extinguishing high-yield blazes.' },
      { type: 'power', name: 'Moisture Absorption & Hydrokinesis', description: 'Absorbs ambient humidity from the air and manipulates standing bodies of water.' },
      { type: 'power', name: 'Armored Chitin Exoskeleton', description: 'Resists physical trauma, blunt weapon impacts, and intense underwater pressures.' },
      { type: 'weakness', name: 'Vulnerability to High Voltage', description: 'His water output acts as a perfect electrical conductor, making him highly vulnerable to shock attacks.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'One of the five Andromeda aliens scanned by the Ultimatrix and frequently utilized by Ben.', isSignatureAlien: true }
    ],
    stats: { strength: 74, speed: 68, durability: 85, intelligence: 62, energyOutput: 84, versatility: 78 }
  }),

  // 2. Terraspin
  createAlien({
    id: 'char-terraspin',
    name: 'Terraspin',
    slug: 'terraspin',
    aliases: ['Geochelone Aerio Form', 'The Wind Turtle'],
    speciesId: 'sp-41',
    speciesName: 'Geochelone Aerio',
    homeworld: 'Aldabra (Andromeda Galaxy)',
    summary: 'A peaceful, turtle-like Geochelone Aerio from the Andromeda Galaxy (scanned from Galapagus). Terraspin retracts into his carapace and rotates his massive flippers like propeller blades, generating category-5 hurricanes and enjoying innate immunity to magic and mana.',
    playlist: 'andromeda_5',
    primaryImage: '/images/characters/terraspin.png',
    firstEpisode: 'S01E07 - "Escape from Aggregor"',
    factExcerpt: 'Ben transformed into Terraspin to stop Aggregor\'s mechanical tracking drones.',
    abilities: [
      { type: 'power', name: 'Propeller Hurricane Winds', description: 'Spins his heavy flipper fins to blow category-5 gale-force winds that deflect missiles and blow back enemies.' },
      { type: 'power', name: 'Helicopter Levitation Flight', description: 'Flies smoothly through the air by generating continuous downdraft through shell ventilation ports.' },
      { type: 'power', name: 'Innate Mana & Magic Immunity', description: 'His Geochelone Aerio biology is naturally impervious to magic spells and Anodite mana manipulation.' },
      { type: 'weakness', name: 'Clumsy Terrestrial Footing', description: 'When standing on two legs, his ponderous frame is slow and easily toppled on slick surfaces.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'One of the five Andromeda aliens scanned by the Ultimatrix.', isSignatureAlien: false }
    ],
    stats: { strength: 72, speed: 70, durability: 86, intelligence: 65, energyOutput: 80, versatility: 76 }
  }),

  // 3. NRG
  createAlien({
    id: 'char-nrg',
    name: 'NRG',
    slug: 'nrg',
    aliases: ['Prypiatosian-B Form', 'Radioactive Furnace'],
    speciesId: 'sp-42',
    speciesName: 'Prypiatosian-B',
    homeworld: 'Prypiatos (Andromeda Galaxy)',
    summary: 'A radioactive energy being from the Andromeda Galaxy (scanned from P\'andor) encased in a nearly indestructible lead furnace suit. NRG channels searing thermonuclear heat that melts rock, and can unleash his true radiant form when liberated from the suit.',
    playlist: 'andromeda_5',
    primaryImage: '/images/characters/nrg.png',
    firstEpisode: 'S01E06 - "Too Hot to Handle"',
    factExcerpt: 'Ben scanned P\'andor to add the Prypiatosian-B DNA to the Ultimatrix.',
    abilities: [
      { type: 'power', name: 'Thermonuclear Heat Projection', description: 'Heats his furnace armor and hands to temperatures that turn asphalt, steel, and stone to molten lava.' },
      { type: 'power', name: 'Indestructible Furnace Armor', description: 'His heavy lead containment suit withstands planetary bombardment and laser artillery without denting.' },
      { type: 'power', name: 'True Radiant Energy Form (Uncaged)', description: 'Outside his suit, he flies as pure radioactive plasma, absorbing energy and shooting nuclear blasts.' },
      { type: 'weakness', name: 'Lethal Radiation Hazard to Allies', description: 'Operating without his heavy suit exposes human allies like Gwen and Kevin to harmful gamma radiation.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'One of the five Andromeda aliens, serving as Ben\'s primary nuclear force.', isSignatureAlien: true }
    ],
    stats: { strength: 88, speed: 52, durability: 95, intelligence: 60, energyOutput: 96, versatility: 82 }
  }),

  // 4. AmpFibian
  createAlien({
    id: 'char-ampfibian',
    name: 'AmpFibian',
    slug: 'ampfibian',
    aliases: ['Amperi Form', 'Electric Jellyfish'],
    speciesId: 'sp-43',
    speciesName: 'Amperi',
    homeworld: 'Tesslos (Andromeda Galaxy)',
    summary: 'A translucent blue jellyfish-like Amperi from the Andromeda Galaxy (scanned from Ra\'ad). AmpFibian floats weightlessly through air and water, shoots bio-electric arcs, reads mental nervous impulses, and travels along electrical circuits.',
    playlist: 'andromeda_5',
    primaryImage: '/images/characters/ampfibian.png',
    firstEpisode: 'S01E11 - "Fused"',
    factExcerpt: 'Ben transformed into AmpFibian to merge with electrical lines and escape Aggregor.',
    abilities: [
      { type: 'power', name: 'Bio-Electric Arcs & Shockwaves', description: 'Projects high-voltage electrical bursts from his four tentacles that short-circuit machinery and stun enemies.' },
      { type: 'power', name: 'Electro-Phasing & Circuit Travel', description: 'Turns into electrical current to travel instantly through power grids and electronic hardware.' },
      { type: 'power', name: 'Neuro-Electrical Mind Reading', description: 'Senses the bio-electric pulses of living nervous systems to anticipate thoughts and actions.' },
      { type: 'weakness', name: 'Physical Fragility to Solid Impacts', description: 'His soft, boneless jellyfish body has low tolerance for heavy blunt kinetic bludgeoning.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'One of the five Andromeda aliens scanned by the Ultimatrix.', isSignatureAlien: false }
    ],
    stats: { strength: 45, speed: 88, durability: 55, intelligence: 72, energyOutput: 92, versatility: 88 }
  }),

  // 5. Armodrillo
  createAlien({
    id: 'char-armodrillo',
    name: 'Armodrillo',
    slug: 'armodrillo',
    aliases: ['Talpaedan Form', 'Earthquake Digger'],
    speciesId: 'sp-44',
    speciesName: 'Talpaedan',
    homeworld: 'Terraexcava (Andromeda Galaxy)',
    summary: 'A heavy yellow armored armadillo-like Talpaedan from the Andromeda Galaxy (scanned from Andreas). Armed with pneumatic jackhammer piston forearms, Armodrillo creates earthquakes, burrows through bedrock at high speed, and pulverizes enemy defenses.',
    playlist: 'andromeda_5',
    primaryImage: '/images/characters/armodrillo.png',
    firstEpisode: 'S01E08 - "Hero Time"',
    factExcerpt: 'Armodrillo used his jackhammer arms to tunnel beneath Captain Nemesis\'s vehicle and stop the robbery.',
    abilities: [
      { type: 'power', name: 'Pneumatic Jackhammer Piston Arms', description: 'Pumps the pistons on his elbows to deliver devastating high-frequency kinetic strikes.' },
      { type: 'power', name: 'Earthquake & Seismic Shockwaves', description: 'Slams his pistons into the ground to open fissures, collapse structures, and shatter rock.' },
      { type: 'power', name: 'Rapid Subterranean Burrowing', description: 'Digs through solid concrete and granite effortlessly, emerging behind enemies.' },
      { type: 'weakness', name: 'Heavy Metallic Clunkiness', description: 'His dense armored chassis is very heavy, hindering aerial agility and swimming.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'One of the five Andromeda aliens, serving as Ben\'s primary earth-manipulating powerhouse.', isSignatureAlien: true }
    ],
    stats: { strength: 92, speed: 55, durability: 90, intelligence: 55, energyOutput: 78, versatility: 75 }
  }),

  // 6. Chamalien
  createAlien({
    id: 'char-chamalien',
    name: 'Chamalien',
    slug: 'chamalien',
    aliases: ['Merlinisapien Form', 'Camouflage Infiltrator'],
    speciesId: 'sp-45',
    speciesName: 'Merlinisapien',
    homeworld: 'Unknown (Deep Galaxy)',
    summary: 'A chameleon-like Merlinisapien scanned from Prisoner 775 in Ultimate Alien. Chamalien blends seamlessly into any background, walks along ceilings, and strikes silently with a retractable venomous barb hidden inside his tail.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/chamalien.png',
    firstEpisode: 'S02E11 - "Prisoner Number 775 Is Missing"',
    factExcerpt: 'Ben scanned Prisoner 775 after Sub-Basement 35 was breached in Area 51.',
    abilities: [
      { type: 'power', name: 'Complete Optical Camouflage', description: 'Alters skin chromatophores instantly to become 100% invisible against any wall, floor, or backdrop.' },
      { type: 'power', name: 'Retractable Barbed Tail Stinger', description: 'Extends a razor-sharp bone stinger from the tip of his prehensile tail to pierce armor.' },
      { type: 'power', name: 'Wall Adhesion & Flexible Acrobatics', description: 'Climbs vertical walls and clings to ceilings with suction pads on his fingers.' },
      { type: 'weakness', name: 'Shadow Outline Under Direct Bright Light', description: 'Strong directional spotlights or fluorescent lighting can reveal his physical shadow on the ground.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Scanned in Season 2 of Ultimate Alien, becoming Ben\'s primary stealth infiltration alien.', isSignatureAlien: false }
    ],
    stats: { strength: 65, speed: 80, durability: 65, intelligence: 64, energyOutput: 35, versatility: 82 }
  }),

  // 7. Fasttrack
  createAlien({
    id: 'char-fasttrack',
    name: 'Fasttrack',
    slug: 'fasttrack',
    aliases: ['Citrakayah Form', 'Speed Runner'],
    speciesId: 'sp-46',
    speciesName: 'Citrakayah',
    homeworld: 'Chalybeas',
    summary: 'A feline Citrakayah with sleek aerodynamic black-and-blue fur and spike-tipped arms. Fasttrack combines speeds exceeding 400 mph with superior upper-body muscle density, allowing him to carry heavy allies across battlefields while sprinting.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/fasttrack.png',
    firstEpisode: 'S01E19 - "Basic Training"',
    factExcerpt: 'Ben transformed into Fasttrack to disarm a grenade and save Plumber cadets at the Academy.',
    abilities: [
      { type: 'power', name: 'Superhuman Running Velocity (400+ MPH)', description: 'Runs across land, up vertical facades, and over water barriers at immense velocity.' },
      { type: 'power', name: 'Enhanced Physical Upper-Body Brawn', description: 'Unlike XLR8, Fasttrack has the muscular strength to carry two full-grown allies while sprinting.' },
      { type: 'power', name: 'Kinetic Momentum Kicking', description: 'Channels sprint momentum into high-impact kicks that launch heavy opponents backwards.' },
      { type: 'weakness', name: 'Difficulty Decelerating on Slick Surfaces', description: 'Has trouble stopping his momentum abruptly on icy or wet terrain without sliding.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Introduced as Ben\'s primary speedster in Ultimate Alien.', isSignatureAlien: false }
    ],
    stats: { strength: 72, speed: 94, durability: 68, intelligence: 55, energyOutput: 30, versatility: 72 }
  }),

  // 8. Clockwork
  createAlien({
    id: 'char-clockwork',
    name: 'Clockwork',
    slug: 'clockwork',
    aliases: ['Chronosapien Form', 'Master of Time'],
    speciesId: 'sp-47',
    speciesName: 'Chronosapien',
    homeworld: 'Unknown (Temporal Dimension)',
    summary: 'A golden biomechanical Chronosapien filled with intricate internal chronological gears. By winding the key on his head, Clockwork can slow down time, reverse events, display holographic timelines of the past, and shoot green aging temporal rays.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/clockwork.png',
    firstEpisode: 'S02E09 - "Inspector 13"',
    factExcerpt: 'Ben unlocked Clockwork when the Techadon master Inspector 13 recalibrated the Ultimatrix.',
    abilities: [
      { type: 'power', name: 'Chronokinesis / Time Deceleration', description: 'Slows down the flow of local time to a crawl, allowing him to dodge bullets and reposition allies.' },
      { type: 'power', name: 'Temporal Aging Beam', description: 'Fires green chrono-energy from his chest and head that ages inorganic and biological matter to dust.' },
      { type: 'power', name: 'Retrocognitive Projection', description: 'Beams holographic light to replay past events that transpired in his current location.' },
      { type: 'weakness', name: 'Sluggish Physical Movement', description: 'When not manipulating time, his mechanical frame moves very slowly and has poor running speed.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Unlocked in Season 2 of Ultimate Alien, becoming Ben\'s primary temporal hero.', isSignatureAlien: false }
    ],
    stats: { strength: 65, speed: 35, durability: 85, intelligence: 80, energyOutput: 96, versatility: 90 }
  }),

  // 9. Eatle
  createAlien({
    id: 'char-eatle',
    name: 'Eatle',
    slug: 'eatle',
    aliases: ['Oryctini Form', 'Laser Beetle'],
    speciesId: 'sp-48',
    speciesName: 'Oryctini',
    homeworld: 'Coleop Terra',
    summary: 'A metallic rhinoceros-beetle humanoid Oryctini with steel-cutting jaws. Eatle devours solid rock, metal scrap, and debris, rapidly converting the ingested matter into high-powered energy charges fired as laser beams from his massive horn.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/eatle.png',
    firstEpisode: 'S02E14 - "A Knight to Remember"',
    factExcerpt: 'Eatle unlocked during the battle against the Forever Knights in the catacombs.',
    abilities: [
      { type: 'power', name: 'Solid Matter Ingestion & Digestion', description: 'His jaws bite through reinforced titanium and concrete, devouring matter into energy ammunition.' },
      { type: 'power', name: 'Horn Energy Laser Cannon', description: 'Fires concentrated laser beams from his massive forehead horn that cut through starship hulls.' },
      { type: 'power', name: 'Armored Charging Ram', description: 'Lowers his horn to charge at high speed, smashing through blast doors and stone ramparts.' },
      { type: 'weakness', name: 'Blindspot Behind Giant Horn', description: 'His large horn creates an optical blindspot directly above and behind his head.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Introduced in Ultimate Alien Season 2 as a durable matter-eating blaster.', isSignatureAlien: false }
    ],
    stats: { strength: 85, speed: 55, durability: 88, intelligence: 55, energyOutput: 88, versatility: 72 }
  }),

  // =========================================================================
  // ULTIMATE ALIENS (8 Hyper-Evolved Forms)
  // =========================================================================

  // 1. Ultimate Swampfire
  createAlien({
    id: 'char-ultimate-swampfire',
    name: 'Ultimate Swampfire',
    slug: 'ultimate-swampfire',
    aliases: ['Evolved Methanosian', 'Petrified Fire Titan'],
    speciesId: 'sp-06',
    speciesName: 'Evolved Methanosian',
    homeworld: 'Methanos (Simulated War Evolution)',
    summary: 'The hyper-evolved form of Swampfire through the Ultimatrix evolutionary matrix. Encased in fireproof petrified wood, Ultimate Swampfire sacrifices plant regeneration for blue thermal plasma bombs capable of underwater detonation.',
    playlist: 'ultimate_forms',
    primaryImage: '/images/characters/ultimate_swampfire.png',
    firstEpisode: 'S01E01 - "Fame"',
    factExcerpt: 'Ultimate Swampfire defeated the seven Vilgax bio-drones in the pilot episode of Ultimate Alien.',
    abilities: [
      { type: 'power', name: 'Blue Thermal Plasma Blasts', description: 'Fires intense blue fireballs that burn 3x hotter than standard methane fire and detonate underwater.' },
      { type: 'power', name: 'Fire-Spin Bomb Pods', description: 'Launches spinning blue incendiary pods from his arms that explode with devastating concussive thermal shock.' },
      { type: 'power', name: 'Petrified Wood Armor', description: 'Dense bark chassis resists immense physical trauma and laser fire without burning.' },
      { type: 'weakness', name: 'Loss of Elastic Regeneration', description: 'His hardened petrified wood body no longer regenerates severed limbs as quickly as base Swampfire.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Ben\'s signature flagship Ultimate form in Ultimate Alien.', isSignatureAlien: true }
    ],
    forms: [
      { relatedCharacterId: 'char-swampfire', relatedCharacterName: 'Swampfire', relatedCharacterSlug: 'swampfire', formType: 'transformation', notes: 'Base form of this evolutionary transformation.' }
    ],
    stats: { strength: 88, speed: 65, durability: 92, intelligence: 60, energyOutput: 98, versatility: 85 }
  }),

  // 2. Ultimate Echo Echo
  createAlien({
    id: 'char-ultimate-echo-echo',
    name: 'Ultimate Echo Echo',
    slug: 'ultimate-echo-echo',
    aliases: ['Evolved Sonorosian', 'Sonic Disk Master'],
    speciesId: 'sp-09',
    speciesName: 'Evolved Sonorosian',
    homeworld: 'Sonorosia (Simulated War Evolution)',
    summary: 'The hyper-evolved form of Echo Echo. Transformed into a tall, metallic blue robotic organism, Ultimate Echo Echo sacrifices biological self-duplication for dozens of levitating sonic disks that generate devastating acoustic forcefields.',
    playlist: 'ultimate_forms',
    primaryImage: '/images/characters/ultimate_echo_echo.png',
    firstEpisode: 'S01E06 - "Too Hot to Handle"',
    factExcerpt: 'Ultimate Echo Echo deployed his sonic disks to contain P\'andor inside an impenetrable acoustic sound cage.',
    abilities: [
      { type: 'power', name: 'Levitating Sonic Disks', description: 'Deploys dozens of floating sound disks that fly independently and focus pinpoint acoustic beams.' },
      { type: 'power', name: 'Sonic Doom Perimeter Cage', description: 'Surrounds opponents with disks to concentrate sonic resonance, shattering bedrock and disabling titans.' },
      { type: 'power', name: 'Anti-Gravity Levitation Flight', description: 'Flies effortlessly through the air at high speeds via sonic propulsion.' },
      { type: 'weakness', name: 'Loss of Self-Duplication', description: 'Cannot clone his physical body; if his physical frame is pinned, he relies purely on disks for defense.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'One of the most powerful Ultimate forms deployed against Ultimate Kevin and Diagon.', isSignatureAlien: true }
    ],
    forms: [
      { relatedCharacterId: 'char-echo-echo', relatedCharacterName: 'Echo Echo', relatedCharacterSlug: 'echo-echo', formType: 'transformation', notes: 'Base form of this evolutionary transformation.' }
    ],
    stats: { strength: 75, speed: 85, durability: 88, intelligence: 70, energyOutput: 98, versatility: 92 }
  }),

  // 3. Ultimate Humungousaur
  createAlien({
    id: 'char-ultimate-humungousaur',
    name: 'Ultimate Humungousaur',
    slug: 'ultimate-humungousaur',
    aliases: ['Evolved Vaxasaurian', 'Gatling Saurian'],
    speciesId: 'sp-07',
    speciesName: 'Evolved Vaxasaurian',
    homeworld: 'Terradino (Simulated War Evolution)',
    summary: 'The evolved Vaxasaurian after a million years of worst-case simulated war. Featuring armored green shell-plating, a mace-spiked bone tail, and hands that transform into biological gatling missile launchers firing kinetic rocket shells.',
    playlist: 'ultimate_forms',
    primaryImage: '/images/characters/ultimate_humungousaur.png',
    firstEpisode: 'S01E02 - "Fame"',
    factExcerpt: 'Ben evolved into Ultimate Humungousaur to battle Bivalvan and smash the water-weaponry.',
    abilities: [
      { type: 'power', name: 'Bio-Gatling Rocket Knuckles', description: 'Transforms fingers into kinetic missile barrels that fire rapid-fire explosive bone rockets.' },
      { type: 'power', name: 'Mace-Spiked Bone Tail', description: 'Swings his heavy spiked tail club with enough force to shatter tanks and send titans flying.' },
      { type: 'power', name: 'Armored War Shell', description: 'Heavy green carapace provides immunity to standard laser artillery and missile barrages.' },
      { type: 'weakness', name: 'Loss of Size Growth Ability', description: 'Cannot grow to 60 feet like base Humungousaur, trading variable size for heavy weapons.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Ben\'s most frequently used heavy-artillery Ultimate transformation.', isSignatureAlien: true }
    ],
    forms: [
      { relatedCharacterId: 'char-humungousaur', relatedCharacterName: 'Humungousaur', relatedCharacterSlug: 'humungousaur', formType: 'transformation', notes: 'Base form of this evolutionary transformation.' }
    ],
    stats: { strength: 98, speed: 50, durability: 95, intelligence: 55, energyOutput: 88, versatility: 80 }
  }),

  // 4. Ultimate Spidermonkey
  createAlien({
    id: 'char-ultimate-spidermonkey',
    name: 'Ultimate Spidermonkey',
    slug: 'ultimate-spidermonkey',
    aliases: ['Evolved Arachnichimp', 'Gorilla-Spider Titan'],
    speciesId: 'sp-35',
    speciesName: 'Evolved Arachnichimp',
    homeworld: 'Aranhaschimmia (Simulated War Evolution)',
    summary: 'The hyper-evolved form of Spidermonkey. Transformed from an agile monkey into a colossal gorilla-spider hybrid with eight arachnid legs, immense upper-body brawn, and the ability to shoot high-tensile steel webbing from his split mouth.',
    playlist: 'ultimate_forms',
    primaryImage: '/images/characters/ultimate_spidermonkey.png',
    firstEpisode: 'S01E02 - "Fame"',
    factExcerpt: 'Ultimate Spidermonkey debuted to defeat the rogue robotic tank in the desert.',
    abilities: [
      { type: 'power', name: 'Gorilla-Tarantula Hybrid Brawn', description: 'Possesses immense upper-body strength capable of tossing trucks and overpowering giant aliens.' },
      { type: 'power', name: 'Mouth-Projected Steel Webbing', description: 'Splits his mandibles to fire massive webs with tensile strength greater than steel cables.' },
      { type: 'power', name: 'Eight-Legged Terrain Stability', description: 'His extra spider legs anchor him firmly to ground, preventing knockbacks from explosions.' },
      { type: 'weakness', name: 'Reduced Aerodynamic Speed', description: 'Much heavier and slower than base Spidermonkey, trading nimble parkour for brute muscle.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Frequently deployed against armored opponents in Ultimate Alien.', isSignatureAlien: true }
    ],
    forms: [
      { relatedCharacterId: 'char-spidermonkey', relatedCharacterName: 'Spidermonkey', relatedCharacterSlug: 'spidermonkey', formType: 'transformation', notes: 'Base form of this evolutionary transformation.' }
    ],
    stats: { strength: 90, speed: 65, durability: 88, intelligence: 55, energyOutput: 40, versatility: 78 }
  }),

  // 5. Ultimate Big Chill
  createAlien({
    id: 'char-ultimate-big-chill',
    name: 'Ultimate Big Chill',
    slug: 'ultimate-big-chill',
    aliases: ['Evolved Necrofriggian', 'Flame of Absolute Zero'],
    speciesId: 'sp-08',
    speciesName: 'Evolved Necrofriggian',
    homeworld: 'Kilmamy (Simulated War Evolution)',
    summary: 'The evolved Necrofriggian sporting crimson flame-patterned wings and fiery horns. Ultimate Big Chill can project "ice so cold it burns"—producing sub-zero cryo-flames that freeze oxygen and targets faster than standard freeze breath.',
    playlist: 'ultimate_forms',
    primaryImage: '/images/characters/ultimate_big_chill.png',
    firstEpisode: 'S01E03 - "Hit \'Em Where They Live"',
    factExcerpt: 'Ben evolved into Ultimate Big Chill to freeze Vulkanus and his Pickaxe aliens.',
    abilities: [
      { type: 'power', name: '"Ice So Cold It Burns" Cryo-Flames', description: 'Exhales scorching-looking red flames that instantly drop surrounding matter to absolute zero.' },
      { type: 'power', name: 'Hyper-Accelerated Intangibility', description: 'Phases through solid structures at supersonic flight speed, leaving burning frost in his wake.' },
      { type: 'power', name: 'Thermal Inversion Plasma', description: 'Manipulates cold energy with the concussive outward force of a raging firestorm.' },
      { type: 'weakness', name: 'Extreme Heat Absorption Shock', description: 'Sudden high-yield nuclear thermal blasts can disrupt his cryogenic aura.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Debuted in Season 1 against Vulkanus, featured across Ultimate Alien.', isSignatureAlien: true }
    ],
    forms: [
      { relatedCharacterId: 'char-big-chill', relatedCharacterName: 'Big Chill', relatedCharacterSlug: 'big-chill', formType: 'transformation', notes: 'Base form of this evolutionary transformation.' }
    ],
    stats: { strength: 72, speed: 85, durability: 78, intelligence: 65, energyOutput: 94, versatility: 85 }
  }),

  // 6. Ultimate Cannonbolt
  createAlien({
    id: 'char-ultimate-cannonbolt',
    name: 'Ultimate Cannonbolt',
    slug: 'ultimate-cannonbolt',
    aliases: ['Evolved Arburian Pelarota', 'The Spiked Juggernaut'],
    speciesId: 'sp-11',
    speciesName: 'Evolved Arburian Pelarota',
    homeworld: 'Arburia (Simulated War Evolution)',
    summary: 'The hyper-evolved Arburian Pelarota encased in a dense metallic-cyan shell studded with heavy spikes. In his rolling sphere form, Ultimate Cannonbolt digs into terrain with traction and ricochets with unstoppable kinetic crushing power.',
    playlist: 'ultimate_forms',
    primaryImage: '/images/characters/ultimate_cannonbolt.png',
    firstEpisode: 'S01E03 - "Hit \'Em Where They Live"',
    factExcerpt: 'Ultimate Cannonbolt smashed through Charmcaster\'s rock golems in the woods.',
    abilities: [
      { type: 'power', name: 'Metallic Spiked Carapace', description: 'Armored plates reinforced with heavy spikes that shred enemy armor and dig into sheer ice.' },
      { type: 'power', name: 'Unstoppable Kinetic Rolling Momentum', description: 'Bounces and rolls with crushing kinetic impact, creating shockwaves that flatten enemy lines.' },
      { type: 'power', name: 'Extreme Blast & Acid Resistance', description: 'His evolved metallic plating is impervious to corrosive acids and energy cannon fire.' },
      { type: 'weakness', name: 'Heavy Turning Radius on Foot', description: 'When standing upright, his increased metallic weight makes foot mobility very sluggish.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Introduced in Season 1 of Ultimate Alien against Charmcaster.', isSignatureAlien: true }
    ],
    forms: [
      { relatedCharacterId: 'char-cannonbolt', relatedCharacterName: 'Cannonbolt', relatedCharacterSlug: 'cannonbolt', formType: 'transformation', notes: 'Base form of this evolutionary transformation.' }
    ],
    stats: { strength: 88, speed: 82, durability: 98, intelligence: 55, energyOutput: 30, versatility: 72 }
  }),

  // 7. Ultimate Wildmutt
  createAlien({
    id: 'char-ultimate-wildmutt',
    name: 'Ultimate Wildmutt',
    slug: 'ultimate-wildmutt',
    aliases: ['Evolved Vulpimancer', 'The Talking Beast'],
    speciesId: 'sp-15',
    speciesName: 'Evolved Vulpimancer',
    homeworld: 'Vulpin (Simulated War Evolution)',
    summary: 'The evolved Vulpimancer featuring thick crimson fur, armor plates, a heavy spiked tail, and crucially: articulate human speech. Ultimate Wildmutt combines predator radar senses with lethal tail-whip strikes and tactical communication.',
    playlist: 'ultimate_forms',
    primaryImage: '/images/characters/ultimate_wildmutt.png',
    firstEpisode: 'S02E11 - "Prisoner Number 775 Is Missing"',
    factExcerpt: 'Ultimate Wildmutt spoke his first words to Gwen and Kevin before tracking down the invisible Prisoner 775.',
    abilities: [
      { type: 'power', name: 'Articulate Human Speech & Tactical Mind', description: 'Unlike base Wildmutt, he can communicate with allies in clear English to coordinate combat maneuvers.' },
      { type: 'power', name: 'Mace-Spiked Tail & Back Quills', description: 'Whips his spiked tail to shatter stone and launches defensive bone quills from his back.' },
      { type: 'power', name: 'Hyper-Acute 360 Thermographic Sensing', description: 'Tracks invisible adversaries (like Chamalien / Prisoner 775) with flawless spatial pinpointing.' },
      { type: 'weakness', name: 'High-Pitch Sonic Weaponry', description: 'Piercing ultrasonic frequencies still disrupt his sensitive gill receptors.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Debuted in Season 2 of Ultimate Alien, famously surprising Ben by speaking.', isSignatureAlien: false }
    ],
    forms: [
      { relatedCharacterId: 'char-wildmutt', relatedCharacterName: 'Wildmutt', relatedCharacterSlug: 'wildmutt', formType: 'transformation', notes: 'Base form of this evolutionary transformation.' }
    ],
    stats: { strength: 82, speed: 80, durability: 78, intelligence: 65, energyOutput: 20, versatility: 74 }
  }),

  // 8. Ultimate Way Big
  createAlien({
    id: 'char-ultimate-way-big',
    name: 'Ultimate Way Big',
    slug: 'ultimate-way-big',
    aliases: ["Evolved To'kustar", 'Cosmic Colossus'],
    speciesId: 'sp-28',
    speciesName: "Evolved To'kustar",
    homeworld: 'Cosmic Storms (Simulated War Evolution)',
    summary: 'The evolved To\'kustar standing over 250 feet tall, clad in blue-and-red cosmic armor with energy horn blades. Ultimate Way Big can fly through the atmosphere, shoot cosmic energy discs, and was summoned to battle the cosmic god Dagon.',
    playlist: 'ultimate_forms',
    primaryImage: '/images/characters/ultimate_way_big.png',
    firstEpisode: 'S02E32 - "The Ultimate Enemy: Part 2"',
    factExcerpt: 'Ben evolved into Ultimate Way Big to physically fight Dagon in the apocalyptic series finale.',
    abilities: [
      { type: 'power', name: '250-Foot Titan Stature & Cosmic Brawn', description: 'Possesses immense physical mass capable of grappling cosmic deities and mountain-sized monsters.' },
      { type: 'power', name: 'Cosmic Energy Discs & Horn Lasers', description: 'Generates spinning discs of pure cosmic energy that slice through alien dimensional barriers.' },
      { type: 'power', name: 'Atmospheric & Space Vacuum Flight', description: 'Unlike base Way Big, he possesses full flight capabilities across skies and deep space.' },
      { type: 'weakness', name: 'Immense Energy Expenditure', description: 'Maintaining the evolved cosmic titan form drains the Ultimatrix energy reserves rapidly.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'The absolute final and largest Ultimate transformation in the series finale against Dagon.', isSignatureAlien: true }
    ],
    forms: [
      { relatedCharacterId: 'char-way-big', relatedCharacterName: 'Way Big', relatedCharacterSlug: 'way-big', formType: 'transformation', notes: 'Base form of this evolutionary transformation.' }
    ],
    stats: { strength: 100, speed: 75, durability: 99, intelligence: 65, energyOutput: 100, versatility: 85 }
  })
];

module.exports = { uaAliens };
