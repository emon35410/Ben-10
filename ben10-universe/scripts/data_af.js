const { createAlien } = require('./character_helper');

const afAliens = [
  // 1. Swampfire
  createAlien({
    id: 'char-swampfire',
    name: 'Swampfire',
    slug: 'swampfire',
    aliases: ['Methanosian Transformation', 'Plant-Flame Alien'],
    speciesId: 'sp-06',
    speciesName: 'Methanosian',
    homeworld: 'Methanos',
    summary: 'A plant-methane humanoid from the recalibrated Omnitrix in Alien Force. Swampfire combines methane-fueled pyrokinesis with chlorokinetic plant manipulation, throwing fireballs, regenerating severed limbs, and controlling root networks.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/swampfire.png',
    firstEpisode: 'S01E01 - "Ben 10 Returns: Part 1"',
    factExcerpt: 'Swampfire is the very first alien transformed by 15-year-old Ben after recalibrating the Omnitrix.',
    abilities: [
      { type: 'power', name: 'Methane Pyrokinesis & Ignition', description: 'Shoots pressurized ignition blasts from palm nozzles, igniting combustible methane clouds.' },
      { type: 'power', name: 'Rapid Bio-Cellular Regeneration', description: 'Reattaches severed limbs instantly and regenerates body parts through solid floorboards.' },
      { type: 'power', name: 'Chlorokinesis & Vine Control', description: 'Controls wild plant matter, sprouts climbing vines, and ensnares enemies in root cages.' },
      { type: 'weakness', name: 'Pungent Swamp Odor', description: 'Emits a powerful stench of rotting methane and mud, making stealth impossible.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'The premiere flagship alien of Alien Force, worn with the chest Omnitrix badge.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Regularly deployed and evolved into Ultimate Swampfire via the Ultimatrix.' }
    ],
    forms: [
      { relatedCharacterId: 'char-ultimate-swampfire', relatedCharacterName: 'Ultimate Swampfire', relatedCharacterSlug: 'ultimate-swampfire', formType: 'ultimate', notes: 'Evolves into petrified wood Ultimate Swampfire with blue flame bombs.' }
    ],
    stats: { strength: 78, speed: 65, durability: 85, intelligence: 60, energyOutput: 90, versatility: 92 }
  }),

  // 2. Echo Echo
  createAlien({
    id: 'char-echo-echo',
    name: 'Echo Echo',
    slug: 'echo-echo',
    aliases: ['Sonorosian Transformation', 'Sonic Cloner'],
    speciesId: 'sp-09',
    speciesName: 'Sonorosian',
    homeworld: 'Sonorosia',
    summary: 'A small Sonorosian living inside a white silicone suit. Echo Echo can duplicate rapidly into an army of copies and unleash ear-splitting acoustic sonic screams capable of shattering concrete and reflecting missiles.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/echo_echo.png',
    firstEpisode: 'S01E02 - "Ben 10 Returns: Part 2"',
    factExcerpt: 'Echo Echo deployed against the robotic dragon and DNAliens in the train yard.',
    abilities: [
      { type: 'power', name: 'High-Decibel Sonic Screams', description: 'Emits destructive acoustic screams from his mouth that shatter structures and deflect artillery.' },
      { type: 'power', name: 'Rapid Autonomous Self-Duplication', description: 'Splits effortlessly into dozens of clones, each capable of generating independent sonic attacks.' },
      { type: 'power', name: 'Acoustic Levitation & Sound Wall', description: 'Surrounds opponents with a circular wall of clones to create an inescapable resonance chamber.' },
      { type: 'weakness', name: 'Silicone Suit Vulnerability', description: 'The living sound waves require the silicone containment suit; tearing it threatens dispersal.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'One of Ben\'s foundational Alien Force playlist aliens.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Frequently deployed and evolved into Ultimate Echo Echo.' }
    ],
    forms: [
      { relatedCharacterId: 'char-ultimate-echo-echo', relatedCharacterName: 'Ultimate Echo Echo', relatedCharacterSlug: 'ultimate-echo-echo', formType: 'ultimate', notes: 'Evolves into metallic blue Ultimate Echo Echo with flying sonic disks.' }
    ],
    stats: { strength: 45, speed: 65, durability: 55, intelligence: 60, energyOutput: 92, versatility: 90 }
  }),

  // 3. Humungousaur
  createAlien({
    id: 'char-humungousaur',
    name: 'Humungousaur',
    slug: 'humungousaur',
    aliases: ['Vaxasaurian Transformation', 'Giant Dinosaur Alien'],
    speciesId: 'sp-07',
    speciesName: 'Vaxasaurian',
    homeworld: 'Terradino',
    summary: 'A 12-foot-tall bipedal sauropod Vaxasaurian possessing immense physical strength and armored brown skin. Humungousaur can expand his biological mass and density to grow up to 60 feet tall at will.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/humungousaur.png',
    firstEpisode: 'S01E02 - "Ben 10 Returns: Part 2"',
    factExcerpt: 'Humungousaur grew to 60 feet to battle the Highbreed Commander in the warehouse.',
    abilities: [
      { type: 'power', name: 'Size Growth up to 60 Feet', description: 'Expands his skeletal frame and biological density to grow from 12 feet to 60 feet, sprouting stegosaurian plates and tail spikes.' },
      { type: 'power', name: 'Colossal Physical Might', description: 'Lifts entire buildings, spacecraft, and tosses heavy tanks across city streets with ease.' },
      { type: 'power', name: 'Armored Sauropod Carapace', description: 'Thick leathery hide withstands energy blasts, artillery shells, and blunt physical collisions.' },
      { type: 'weakness', name: 'Huge Target Profile & Low Speed', description: 'His immense size makes him an unavoidable target for concentrated firepower and electric tasers.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'Ben\'s primary powerhouse alien throughout Alien Force.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Ben\'s most frequently selected transformation in Ultimate Alien, with Ultimate form evolution.' }
    ],
    forms: [
      { relatedCharacterId: 'char-ultimate-humungousaur', relatedCharacterName: 'Ultimate Humungousaur', relatedCharacterSlug: 'ultimate-humungousaur', formType: 'ultimate', notes: 'Evolves into armored Ultimate Humungousaur with gatling rocket knuckles and spiked tail.' }
    ],
    stats: { strength: 96, speed: 50, durability: 92, intelligence: 50, energyOutput: 20, versatility: 75 }
  }),

  // 4. Jetray
  createAlien({
    id: 'char-jetray',
    name: 'Jetray',
    slug: 'jetray',
    aliases: ['Aerophibian Transformation', 'Hyperspace Flyer'],
    speciesId: 'sp-32',
    speciesName: 'Aerophibian',
    homeworld: 'Aeropela',
    summary: 'An aerodynamic manta-ray humanoid Aerophibian engineered for supersonic flight and hyperspace travel. Jetray fires piercing neuroshock laser beams from his eyes and prehensile tail stinger.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/jetray.png',
    firstEpisode: 'S01E03 - "Everybody Talks About the Weather"',
    factExcerpt: 'Jetray flew through the sky at Mach speed to chase down Alan Albright, the Pyronite hybrid.',
    abilities: [
      { type: 'power', name: 'Supersonic & Hyperspace Flight', description: 'Achieves supersonic speeds in atmosphere and can enter faster-than-light hyperspace travel in the vacuum of space.' },
      { type: 'power', name: 'Neuroshock Energy Blasts', description: 'Shoots high-voltage neuroshock laser blasts from his eyes and tail that temporarily stun nervous systems.' },
      { type: 'power', name: 'Amphibious High-Speed Swim', description: 'Moves with effortless speed underwater as effectively as in the air.' },
      { type: 'weakness', name: 'Fragile Wing Patagium', description: 'His wing flaps can be pinned down or torn by sharp physical clamps, preventing flight takeoff.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'Ben\'s default high-speed aerial pursuit alien across all three seasons.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Frequently utilized for atmospheric and space missions in Ultimate Alien.' }
    ],
    stats: { strength: 65, speed: 98, durability: 65, intelligence: 60, energyOutput: 88, versatility: 85 }
  }),

  // 5. Big Chill
  createAlien({
    id: 'char-big-chill',
    name: 'Big Chill',
    slug: 'big-chill',
    aliases: ['Necrofriggian Transformation', 'Cryo-Moth Phantom'],
    speciesId: 'sp-08',
    speciesName: 'Necrofriggian',
    homeworld: 'Kilmamy',
    summary: 'A phantom moth-like Necrofriggian who folds his wings into a flowing hooded cloak. Big Chill can lower his molecular density to phase through solid matter while freezing anything he passes through with sub-zero cryo breath.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/big_chill.png',
    firstEpisode: 'S01E04 - "Kevin\'s Big Score"',
    factExcerpt: 'Big Chill phased into Vulkanus\'s underground furnace hideout to retrieve the stolen Rust Bucket parts.',
    abilities: [
      { type: 'power', name: 'Cryogenic Freeze Breath & Beams', description: 'Exhales freezing wind capable of coating opponents in solid ice instantly.' },
      { type: 'power', name: 'Intangible Cryo Phasing', description: 'Drops his body density to drift through solid obstacles, leaving frosted ice coatings behind.' },
      { type: 'power', name: 'Atmospheric Flight & Space Vacuum Survival', description: 'Flies silently through vacuum and withstands absolute zero temperatures.' },
      { type: 'weakness', name: 'Intangibility Countermeasures', description: 'Specific energy forcefields and opponents with anti-density manipulation can still disrupt his phasing.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'Signature stealth and cryogenic transformation in Alien Force.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Regularly deployed and evolved into Ultimate Big Chill.' }
    ],
    forms: [
      { relatedCharacterId: 'char-ultimate-big-chill', relatedCharacterName: 'Ultimate Big Chill', relatedCharacterSlug: 'ultimate-big-chill', formType: 'ultimate', notes: 'Evolves into red-flame patterned Ultimate Big Chill with ice that burns.' }
    ],
    stats: { strength: 68, speed: 82, durability: 75, intelligence: 65, energyOutput: 90, versatility: 90 }
  }),

  // 6. Chromastone
  createAlien({
    id: 'char-chromastone',
    name: 'Chromastone',
    slug: 'chromastone',
    aliases: ['Crystalsapien Transformation', 'The Living Crystal Conduit'],
    speciesId: 'sp-33',
    speciesName: 'Crystalsapien',
    homeworld: 'Petropia',
    summary: 'A silicone-crystal Crystalsapien capable of absorbing nearly any electromagnetic or energy attack and channeling it into intensely bright, multicolored ultraviolet prismatic laser beams.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/chromastone.png',
    firstEpisode: 'S01E05 - "All That Glitters"',
    factExcerpt: 'Chromastone absorbed energy from the rampaging girl\'s crystalline staff to save the city.',
    abilities: [
      { type: 'power', name: 'Electromagnetic & Energy Absorption', description: 'Absorbs lasers, electricity, radioactive energy, and plasma into his crystalline core without harm.' },
      { type: 'power', name: 'Prismatic Ultraviolet Laser Beams', description: 'Fires rainbow-hued ultraviolet laser beams that melt steel and cut through starship hulls.' },
      { type: 'power', name: 'Superhuman Crystal Durability', description: 'His dense crystalline body withstands immense kinetic impact and cosmic vacuum.' },
      { type: 'weakness', name: 'Energy Absorption Upper Ceiling', description: 'Overwhelming energetic volume beyond his capacity can shatter his crystalline torso (as seen against Vilgax).' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'Ben\'s primary energy counter-measure alien in Alien Force.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Featured in Ultimate Alien, deeply connected to the restoration of Petropia.' }
    ],
    stats: { strength: 80, speed: 65, durability: 92, intelligence: 65, energyOutput: 94, versatility: 85 }
  }),

  // 7. Brainstorm
  createAlien({
    id: 'char-brainstorm',
    name: 'Brainstorm',
    slug: 'brainstorm',
    aliases: ['Cerebrocrustacean Transformation', 'Electric Crustacean'],
    speciesId: 'sp-34',
    speciesName: 'Cerebrocrustacean',
    homeworld: 'Encephalonus IV',
    summary: 'A giant crab-like Cerebrocrustacean possessing a massive cerebral cortex. By opening his cranial shell plates, Brainstorm emits concentrated electrical storms, creates forcefields, and calculates projectile physics in fractions of a second.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/brainstorm.png',
    firstEpisode: 'S01E07 - "Pier Pressure"',
    factExcerpt: 'Brainstorm calculated the precise angle to ricochet an electric blast off carnival rides to subdue Ship.',
    abilities: [
      { type: 'power', name: 'Hyper-Calculation & Trajectory Deduction', description: 'Computes velocity, wind speed, and ricochet angles instantly to execute mathematically flawless attacks.' },
      { type: 'power', name: 'Cranial Bio-Electric Storms', description: 'Opens his protective cranial shell to unleash high-voltage electrical storms and magnetic forcefields.' },
      { type: 'power', name: 'Electrical Levitation & Telekinesis', description: 'Manipulates objects and adversaries via polarized bio-electric fields.' },
      { type: 'weakness', name: 'Exposed Brain Vulnerability', description: 'Opening his head plates leaves his delicate cerebral tissue completely vulnerable to direct impacts.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'Ben\'s sophisticated intellectual and electrical alien in Alien Force.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Featured in strategic battles across Ultimate Alien.' }
    ],
    stats: { strength: 55, speed: 55, durability: 68, intelligence: 98, energyOutput: 88, versatility: 86 }
  }),

  // 8. Spidermonkey
  createAlien({
    id: 'char-spidermonkey',
    name: 'Spidermonkey',
    slug: 'spidermonkey',
    aliases: ['Arachnichimp Transformation', 'Four-Armed Monkey'],
    speciesId: 'sp-35',
    speciesName: 'Arachnichimp',
    homeworld: 'Aranhaschimmia',
    summary: 'A blue four-armed Arachnichimp combining acrobatic agility with arachnid attributes. Spidermonkey scales vertical walls, performs acrobatic parkour, and spins high-tensile steel-like webbing from his prehensile tail.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/spidermonkey.png',
    firstEpisode: 'S01E08 - "What Are Little Girls Made Of?"',
    factExcerpt: 'Ben transformed into Spidermonkey while visiting Verdona Tennyson to demonstrate his new aliens.',
    abilities: [
      { type: 'power', name: 'High-Tensile Webbing from Tail', description: 'Shoots strong sticky webs from his tail to tie up adversaries, swing across gaps, and craft safety nets.' },
      { type: 'power', name: 'Wall Adhesion & Quad-Arm Acrobatics', description: 'Clings to any surface and maneuvers through tree canopies and cityscapes with four arms and a tail.' },
      { type: 'power', name: 'Enhanced Reflexes & Hearing', description: 'Dodges attacks with agile flips and reacts instantly to sudden dangers.' },
      { type: 'weakness', name: 'Overpowered by Raw Brute Force', description: 'Lacks heavy physical mass, making him vulnerable to giant brawlers who can tear through his webbing.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'Ben\'s premiere acrobatic trickster alien in Alien Force.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Frequently deployed and evolved into Ultimate Spidermonkey.' }
    ],
    forms: [
      { relatedCharacterId: 'char-ultimate-spidermonkey', relatedCharacterName: 'Ultimate Spidermonkey', relatedCharacterSlug: 'ultimate-spidermonkey', formType: 'ultimate', notes: 'Evolves into a massive gorilla-spider hybrid with mouth-fired webbing.' }
    ],
    stats: { strength: 58, speed: 86, durability: 58, intelligence: 62, energyOutput: 40, versatility: 80 }
  }),

  // 9. Goop
  createAlien({
    id: 'char-goop',
    name: 'Goop',
    slug: 'goop',
    aliases: ['Polymorph Transformation', 'The Slime Shifter'],
    speciesId: 'sp-36',
    speciesName: 'Polymorph',
    homeworld: 'Viscosia',
    summary: 'A 200-pound shapeshifting mass of emerald slime guided by an overhead Anti-Gravity Projector. Goop can alter his chemical viscosity from sticky glue to corrosive acid, reform instantly after being destroyed, and squeeze through keyholes.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/goop.png',
    firstEpisode: 'S01E09 - "The Gauntlet"',
    factExcerpt: 'Goop dissolved through Techadon robot armor and rescued Cash from the alien gauntlet.',
    abilities: [
      { type: 'power', name: 'Indestructible Fluid Shapeshifting', description: 'Blunt weapons, lasers, and physical strikes pass right through him; reforms instantly from puddles.' },
      { type: 'power', name: 'Variable Acidity & Viscosity', description: 'Adjusts pH to dissolve steel armor as acid or become ultra-adhesive glue that immobilizes foes.' },
      { type: 'power', name: 'Anti-Gravity Flight & High Mobility', description: 'Guided by his overhead UFO projector, flying at high speeds across city corridors.' },
      { type: 'weakness', name: 'Anti-Gravity Projector Disconnection', description: 'If his anti-gravity projector is turned off or separated, his slime body collapses into an inert puddle.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'One of Ben\'s most versatile original 10 Alien Force aliens.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Regularly deployed in Ultimate Alien, with the Ultimatrix emblem on his Anti-Gravity Projector.' }
    ],
    stats: { strength: 65, speed: 72, durability: 95, intelligence: 60, energyOutput: 75, versatility: 92 }
  }),

  // 10. Alien X
  createAlien({
    id: 'char-alien-x',
    name: 'Alien X',
    slug: 'alien-x',
    aliases: ['Celestialsapien Transformation', 'God of the Omnitrix'],
    speciesId: 'sp-10',
    speciesName: 'Celestialsapien',
    homeworld: 'Forge of Creation',
    summary: 'A god-like Celestialsapien with the cosmos swirling within his black body silhouette. Possessing infinite reality-warping and time-bending power, Alien X remains physically motionless until his internal conflicting personalities (Bellicus and Serena) reach consensus.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/alienx.png',
    firstEpisode: 'S01E13 - "X = Ben + 2"',
    factExcerpt: 'Ben became Alien X to repair a shattered dam and save a valley, trapped in internal debate.',
    abilities: [
      { type: 'power', name: 'Omnipotent Reality & Time Manipulation', description: 'Can rewrite physical laws, manipulate time, reverse destruction, and alter timeline events at will.' },
      { type: 'power', name: 'Absolute Invulnerability', description: 'Completely immune to physical, energy, and cosmic harm from mortal adversaries.' },
      { type: 'weakness', name: 'Internal Decision Paralysis', description: 'Cannot take any physical action until Bellicus (Rage) and Serena (Compassion) agree on a motion with Ben.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'Introduced as Ben\'s most dangerous trump card in Season 1.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Guarded in the Ultimatrix and visited in the Forge of Creation.' }
    ],
    stats: { strength: 100, speed: 100, durability: 100, intelligence: 100, energyOutput: 100, versatility: 100 }
  }),

  // 11. Lodestar
  createAlien({
    id: 'char-lodestar',
    name: 'Lodestar',
    slug: 'lodestar',
    aliases: ['Biosovortian Transformation', 'Magnetic Lord'],
    speciesId: 'sp-37',
    speciesName: 'Biosovortian',
    homeworld: 'Attracta',
    summary: 'A Biosovortian featuring a floating magnetic metal skull between broad pincer shoulders. Lodestar commands intense magnetic forcefields to attract or repel metallic alloys, crush heavy machinery, and magnetically reassemble his own shattered body.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/lodestar.png',
    firstEpisode: 'S03E03 - "Simple"',
    factExcerpt: 'Lodestar unlocked during the war between the Red and Blue factions, disabling their tanks.',
    abilities: [
      { type: 'power', name: 'Ferromagnetic Forcefield Control', description: 'Manipulates all magnetic metals, crushing tanks, disarming laser cannons, and generating defensive shields.' },
      { type: 'power', name: 'Magnetic Self-Reconstruction', description: 'If blown apart, his floating head pulls all body pieces back into place with magnetic acceleration.' },
      { type: 'power', name: 'Magnetic Levitation & Flight', description: 'Levitates along planetary magnetic fields to fly through the air.' },
      { type: 'weakness', name: 'Ineffective on Non-Metallic Matter', description: 'Wood, stone, plastics, and non-ferrous aliens resist his magnetic telekinesis.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'Unlocked in Alien Force Season 3.', isSignatureAlien: false },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Regularly deployed across Ultimate Alien.' }
    ],
    stats: { strength: 70, speed: 65, durability: 78, intelligence: 68, energyOutput: 88, versatility: 82 }
  }),

  // 12. Rath
  createAlien({
    id: 'char-rath',
    name: 'Rath',
    slug: 'rath',
    aliases: ['Appoplexian Transformation', 'The Tiger of Khoros'],
    speciesId: 'sp-38',
    speciesName: 'Appoplexian',
    homeworld: 'Appoplexia',
    summary: 'A bipedal tiger-like Appoplexian armed with retractable knuckle wrist blades and tremendous physical brawn. Rath is defined by his uncontrollable aggression, wrestling takedowns, and shouting catchphrases like "LET ME TELL YA SOMETHING!"',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/rath.png',
    firstEpisode: 'S03E13 - "Con of Rath"',
    factExcerpt: 'Rath unlocked when the Tiffin\'s presence disrupted the Omnitrix, leading to an aggressive rescue mission.',
    abilities: [
      { type: 'power', name: 'Superhuman Brawn & Wrestling Mastery', description: 'Execute suplexes, pile-drivers, and grapples that shatter giant mechas and knock out warlords.' },
      { type: 'power', name: 'Retractable Bone Knuckle Blades', description: 'Sprouts twin razor-sharp wrist blades capable of cutting through solid armor plate.' },
      { type: 'power', name: 'High Impact Tolerance', description: 'Shrugs off missile explosions, laser blasts, and falls from orbit with minor annoyance.' },
      { type: 'weakness', name: 'Uncontrollable Temper & Low Tact', description: 'Loses all patience and tactical restraint, often wrestling inanimate objects or antagonizing allies.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'Debuted in Season 3 as a fan-favorite comedic and combat powerhouse.', isSignatureAlien: false },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'A recurring staple fighter in Ultimate Alien.' }
    ],
    stats: { strength: 92, speed: 75, durability: 88, intelligence: 40, energyOutput: 20, versatility: 68 }
  }),

  // 13. Nanomech
  createAlien({
    id: 'char-nanomech',
    name: 'Nanomech',
    slug: 'nanomech',
    aliases: ['Nanochip Hybrid', 'The Micro-Flyer'],
    speciesId: 'sp-39',
    speciesName: 'Nanochip Hybrid',
    homeworld: 'Hive World / Earth',
    summary: 'A microscopic biomechanical hybrid created by scanning the alien Nanochip Queen in Ben 10: Alien Swarm. Nanomech can shrink down to sub-cellular size, maneuver on humming insectoid wings, and shoot bio-electric laser bolts.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/nanomech.png',
    firstEpisode: 'Ben 10: Alien Swarm (2009) / S03 finale',
    factExcerpt: 'Ben transformed into Nanomech to infiltrate the Nanochip Queen\'s body and destroy the swarm hive-mind from within.',
    abilities: [
      { type: 'power', name: 'Microscopic Size Reduction', description: 'Shrinks from a few inches down to microscopic scale to bypass enemy armor and enter circuitry.' },
      { type: 'power', name: 'Agile Quad-Wing Flight', description: 'Flies with incredible speed and agility on four translucent humming wings.' },
      { type: 'power', name: 'Bio-Electric Energy Laser Darts', description: 'Emits concentrated bio-electric blasts from his single central ocular node.' },
      { type: 'weakness', name: 'Low Raw Physical Punch', description: 'Cannot deliver heavy kinetic damage directly without targeting internal weak points.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-alien-force', description: 'Introduced in the live-action movie Ben 10: Alien Swarm and Alien Force Season 3.', isSignatureAlien: false },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Featured in Ultimate Alien episodes like "Too Hot to Handle" against P\'andor.' }
    ],
    stats: { strength: 20, speed: 82, durability: 40, intelligence: 75, energyOutput: 78, versatility: 85 }
  }),

  // 14. Upchuck (Murk Form)
  createAlien({
    id: 'char-upchuck-murk',
    name: 'Upchuck (Murk)',
    slug: 'upchuck-murk',
    aliases: ['Murk Upchuck', 'Gourmand Subspecies'],
    speciesId: 'sp-25',
    speciesName: 'Gourmand (Murk)',
    homeworld: 'Peptos XI',
    summary: 'The darker-skinned, spotted subspecies of the Gourmand race. Murk Upchuck shares the same pocket-dimension stomach and explosive plasma digestion as his Perk brother, but features thicker hide and a distinct mottled appearance.',
    playlist: 'alien_force_10',
    primaryImage: '/images/characters/upchuck_murk.png',
    firstEpisode: 'S01E17 - "The Transmogrification of Eunice"',
    factExcerpt: 'Ben unlocked the Murk form in Ultimate Alien, showcasing the racial distinction within the Gourmand species.',
    abilities: [
      { type: 'power', name: 'Pocket Dimension Matter Ingestion', description: 'Consumes laser blasts, metals, and earth materials into a boundless stomach void.' },
      { type: 'power', name: 'Acidic Plasma Burst Expulsion', description: 'Fires high-velocity green plasma charges that detonate against armored targets.' },
      { type: 'power', name: 'Toughened Subspecies Hide', description: 'Possesses slightly thicker hide and blunt resistance compared to Perk Gourmands.' },
      { type: 'weakness', name: 'Perk vs Murk Cultural Feuding', description: 'Deep cultural friction with Perk Gourmands can cause distraction in mixed species scenarios.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Debuted in Ultimate Alien, showcasing both Perk and Murk forms simultaneously.', isSignatureAlien: false }
    ],
    stats: { strength: 56, speed: 58, durability: 74, intelligence: 60, energyOutput: 90, versatility: 78 }
  })
];

module.exports = { afAliens };
