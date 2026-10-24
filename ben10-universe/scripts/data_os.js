const { createAlien } = require('./character_helper');

const osAliens = [
  // 1. Heatblast
  createAlien({
    id: 'char-heatblast',
    name: 'Heatblast',
    slug: 'heatblast',
    aliases: ['Pyronite Transformation', 'The Living Torch', 'First Alien'],
    speciesId: 'sp-01',
    speciesName: 'Pyronite',
    homeworld: 'Pyros',
    summary: 'Heatblast is the very first alien transformation Ben Tennyson unlocked from the Omnitrix in the 2005 pilot episode. A magma-based Pyronite, Heatblast commands intense fire projection, thermal absorption, and volcanic flight.',
    playlist: 'original_10',
    primaryImage: '/images/characters/heatblast.png',
    firstEpisode: 'S01E01 - "And Then There Were 10"',
    factExcerpt: 'Ben accidentally activates the Omnitrix faceplate and transforms into a fire alien that causes a forest fire.',
    abilities: [
      { type: 'power', name: 'Pyrokinesis & Plasma Generation', description: 'Projects sustained streams of fire, fireballs, and localized heat bursts capable of melting solid steel.' },
      { type: 'power', name: 'Fire Surfing / Propulsion Flight', description: 'Levitates chunks of rock or solid magma and shoots continuous fire thrusts beneath them to travel through the air.' },
      { type: 'power', name: 'Thermal & Flame Absorption', description: 'Can absorb ambient fire back into his body to instantly extinguish uncontrolled blazes.' },
      { type: 'weakness', name: 'Water Extinguishment Shock', description: 'Sudden submersion in large volumes of cold water or fire suppressant foam extinguishes his outer crust.', limitations: 'Can reignite if sufficient internal thermal energy remains.' },
      { type: 'limitation', name: 'Cold Illness Cryo-Inversion', description: 'When Ben contracts a human common cold virus, Heatblast\'s biological core inverts to produce sub-zero cryogenic ice flames.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'The first transformation selected when Ben found the Omnitrix. Omnitrix symbol is located centered on his upper chest.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Re-unlocked via Ultimatrix scanning code. Wears the metallic Ultimatrix emblem with a slightly updated fiery collar.' }
    ],
    stats: { strength: 65, speed: 70, durability: 75, intelligence: 55, energyOutput: 95, versatility: 80 }
  }),

  // 2. Wildmutt
  createAlien({
    id: 'char-wildmutt',
    name: 'Wildmutt',
    slug: 'wildmutt',
    aliases: ['Vulpimancer Form', 'The Blind Beast'],
    speciesId: 'sp-15',
    speciesName: 'Vulpimancer',
    homeworld: 'Vulpin',
    summary: 'A blind, predatory quadruped Vulpimancer. Wildmutt lacks eyes and navigates entirely using 3D thermographic gill-ports on his neck and hyper-acute senses of smell and hearing, leaping across obstacles with beast-like agility.',
    playlist: 'original_10',
    primaryImage: '/images/characters/wildmutt.png',
    firstEpisode: 'S01E01 - "And Then There Were 10"',
    factExcerpt: 'Wildmutt is Ben\'s second transformation, fighting Vilgax\'s robotic drones in the woods of Yosemite.',
    abilities: [
      { type: 'power', name: 'Thermographic Gill Radar', description: 'Perceives heat signatures and acoustic vibrations in complete 360-degree clarity, rendering optical illusions useless.' },
      { type: 'power', name: 'Acrobatic Quadrupedal Agility', description: 'Scales sheer cliff faces, leaps across building rooftops, and sprints on all fours at intense speed.' },
      { type: 'power', name: 'Razor Claws & Pincer Jaws', description: 'Armed with razor-sharp claws that dig into armored metal and teeth that shear through stone.' },
      { type: 'weakness', name: 'High-Pitch Acoustic Deafening', description: 'Overwhelming high-frequency sonic noises or foul odors overwhelm his sensitive sensing gills, blinding his spatial awareness.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'One of Ben\'s original 10 forms. The Omnitrix emblem is worn on a brace on his left shoulder.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Re-unlocked by 16-year-old Ben in Ultimate Alien, gaining an Ultimatrix chest emblem.' }
    ],
    forms: [
      { relatedCharacterId: 'char-ultimate-wildmutt', relatedCharacterName: 'Ultimate Wildmutt', relatedCharacterSlug: 'ultimate-wildmutt', formType: 'ultimate', notes: 'Evolves into Ultimate Wildmutt via the Ultimatrix evolutionary function.' }
    ],
    stats: { strength: 72, speed: 78, durability: 70, intelligence: 30, energyOutput: 15, versatility: 60 }
  }),

  // 3. Diamondhead
  createAlien({
    id: 'char-diamondhead',
    name: 'Diamondhead',
    slug: 'diamondhead',
    aliases: ['Petrosapien Form', 'Crystal Warrior'],
    speciesId: 'sp-02',
    speciesName: 'Petrosapien',
    homeworld: 'Petropia',
    summary: 'A crystalline titan composed of near-indestructible organic green crystal. Diamondhead can refract energy blasts, morph his hands into blades or clubs, and erupt crystalline spikes from the ground.',
    playlist: 'original_10',
    primaryImage: '/images/characters/diamondhead.png',
    firstEpisode: 'S01E01 - "And Then There Were 10"',
    factExcerpt: 'Diamondhead defeated the giant Vilgax combat drone in the pilot episode by reflecting its own laser beam back at it.',
    abilities: [
      { type: 'power', name: 'Crystalline Construct Reshaping', description: 'Morphs his crystal limbs into razor-sharp swords, axes, shields, and projects high-velocity crystal shards.' },
      { type: 'power', name: 'Energy Refraction & Redirection', description: 'His diamond-dense facets refract, reflect, and amplify incoming laser and energy attacks safely back at attackers.' },
      { type: 'power', name: 'Near-Invulnerable Hardness', description: 'Resists physical impacts, extreme kinetic trauma, and vacuum pressure without cracking.' },
      { type: 'weakness', name: 'Acoustic / Sonic Resonance Fracture', description: 'Intense high-frequency sound waves cause harmonic vibration across his molecular crystalline lattice, causing fractures.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Original form with white-and-black uniform and chest emblem.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-alien-force', description: 'Re-emerged from the shattered remains of Chromastone during the battle against Vilgax in Season 3.' },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Featured throughout Ultimate Alien with the Ultimatrix emblem on his chest.' }
    ],
    stats: { strength: 82, speed: 60, durability: 95, intelligence: 60, energyOutput: 75, versatility: 85 }
  }),

  // 4. XLR8
  createAlien({
    id: 'char-xlr8',
    name: 'XLR8',
    slug: 'xlr8',
    aliases: ['Kineceleran Form', 'Speed Demon'],
    speciesId: 'sp-03',
    speciesName: 'Kineceleran',
    homeworld: 'Kinet',
    summary: 'A hyper-accelerated raptor-like Kineceleran. Operating with wheeled spheres on his feet and a drop-down aerodynamic face shield, XLR8 easily surpasses 500 mph and can run on water and up vertical surfaces.',
    playlist: 'original_10',
    primaryImage: '/images/characters/xlr8.png',
    firstEpisode: 'S01E01 - "And Then There Were 10"',
    factExcerpt: 'Ben transformed into XLR8 to take revenge on bullies Cash and J.T. and tie them to tree branches in seconds.',
    abilities: [
      { type: 'power', name: 'Hyper-Acceleration & Friction Control', description: 'Runs at speeds exceeding 500 mph, manipulating friction to run across ocean waves and vertical skyscrapers.' },
      { type: 'power', name: 'Centrifugal Vortex Whirlwinds', description: 'Sprints in tight circles at supersonic speeds to generate powerful vortex whirlwinds that vacuum-lift enemies.' },
      { type: 'power', name: 'Scissor Blade Claws', description: 'Equipped with three razor-sharp dexterity claws on each hand that can cut through steel ropes while running.' },
      { type: 'weakness', name: 'Low Traction Surfaces', description: 'Friction-deprived environments such as ice, slick lubricants, or mud severely impede his wheeled feet.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Signature speedster alien of the original series.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Re-unlocked by Ben via Ultimatrix playlist in Ultimate Alien.' }
    ],
    stats: { strength: 50, speed: 98, durability: 55, intelligence: 60, energyOutput: 30, versatility: 80 }
  }),

  // 5. Grey Matter
  createAlien({
    id: 'char-grey-matter',
    name: 'Grey Matter',
    slug: 'grey-matter',
    aliases: ['Galvan Form', 'Tiny Genius', 'Greymatter'],
    speciesId: 'sp-16',
    speciesName: 'Galvan',
    homeworld: 'Galvan Prime',
    summary: 'A 5-inch-tall Galvan endowed with colossal intellectual capacity. Grey Matter can calculate complex mathematical equations instantly, deduce technical schematics, and reconfigure machinery.',
    playlist: 'original_10',
    primaryImage: '/images/characters/greymatter.png',
    firstEpisode: 'S01E02 - "Washington B.C."',
    factExcerpt: 'Ben transforms into Grey Matter to search inside a Golden Cereal box, accidentally uncovering Dr. Animo\'s secret lab.',
    abilities: [
      { type: 'power', name: 'Superhuman Polymath Intellect', description: 'Understands advanced alien physics, reverse-engineers technology, and manipulates pressure points with ease.' },
      { type: 'power', name: 'Wall Adhesion & Micro Agility', description: 'Possesses suction pads on fingers and toes to climb slick vertical glass and squeeze into tight conduits.' },
      { type: 'weakness', name: 'Extreme Physical Vulnerability', description: 'His miniature size and fragile skeletal structure leave him vulnerable to capture by normal animals or humans.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Ben\'s primary tactical problem-solving alien in the original series.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Scanned and referenced in the Ultimatrix Galvan database.' }
    ],
    stats: { strength: 15, speed: 40, durability: 25, intelligence: 100, energyOutput: 20, versatility: 85 }
  }),

  // 6. Four Arms
  createAlien({
    id: 'char-fourarms',
    name: 'Four Arms',
    slug: 'four-arms',
    aliases: ['Tetramand Form', 'Red Brawler', 'Fourarms'],
    speciesId: 'sp-04',
    speciesName: 'Tetramand',
    homeworld: 'Khoros',
    summary: 'A colossal four-armed Tetramand warrior with armored crimson skin. Four Arms possesses astronomical upper-body lifting strength and can create sonic shockwaves by clapping all four hands together.',
    playlist: 'original_10',
    primaryImage: '/images/characters/fourarms.png',
    firstEpisode: 'S01E02 - "Washington B.C."',
    factExcerpt: 'Four Arms defeated Dr. Animo\'s mutant mammoth inside the Museum of Natural History.',
    abilities: [
      { type: 'power', name: 'Colossal Tetramand Strength', description: 'Lifts multi-ton boulders, armored vehicles, and giant alien monstrosities with his four reinforced arms.' },
      { type: 'power', name: 'Sonic Shockwave Clap', description: 'Claps his four hands together to generate a destructive concussive shockwave that shatters glass and deflects projectiles.' },
      { type: 'power', name: 'Massive Leaping Stature', description: 'His dense leg musculature allows him to leap several city blocks in a single bound.' },
      { type: 'weakness', name: 'Bulky Frame & Cramped Corridors', description: 'His enormous 12-foot frame makes him easy to hit in open fire and struggle in narrow human spaces.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Ben\'s absolute favorite brute-force brawler throughout the original series.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Re-unlocked in Ultimate Alien with golden arm bracelets and the Ultimatrix chest emblem.' }
    ],
    stats: { strength: 95, speed: 55, durability: 90, intelligence: 45, energyOutput: 25, versatility: 70 }
  }),

  // 7. Stinkfly
  createAlien({
    id: 'char-stinkfly',
    name: 'Stinkfly',
    slug: 'stinkfly',
    aliases: ['Lepidopterran Form', 'The Slime Bug'],
    speciesId: 'sp-17',
    speciesName: 'Lepidopterran',
    homeworld: 'Lepidopterra',
    summary: 'An aerial insectoid Lepidopterran with four eye stalks, four translucent wings, and an armored stinger tail. Stinkfly projects foul, flammable, or adhesive chemical slime streams from his mouth and eyes.',
    playlist: 'original_10',
    primaryImage: '/images/characters/stinkfly.png',
    firstEpisode: 'S01E02 - "Washington B.C."',
    factExcerpt: 'Ben transformed into Stinkfly to rescue Gwen and an elevator car suspended high in the air.',
    abilities: [
      { type: 'power', name: 'Agile Quad-Wing Flight', description: 'Hovering, backwards flight, and high-speed maneuvers with four independently controlled insectoid wings.' },
      { type: 'power', name: 'Chemical Slime Jet Streams', description: 'Fires high-pressure streams of foul-smelling slime that can be adhesive, flammable, or fire-extinguishing.' },
      { type: 'power', name: '360-Degree Eye Stalk Vision', description: 'Four pedunculated eye stalks provide full panoramic vision to prevent flanking.' },
      { type: 'weakness', name: 'Wing Saturation Immobility', description: 'Submerging his delicate wings in water or coating them in heavy sludge prevents flight until thoroughly dried.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Ben\'s go-to aerial flight alien in the 2005 series.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Re-unlocked in Ultimate Alien with the Ultimatrix badge on his chest.' }
    ],
    stats: { strength: 60, speed: 80, durability: 50, intelligence: 55, energyOutput: 65, versatility: 75 }
  }),

  // 8. Ripjaws
  createAlien({
    id: 'char-ripjaws',
    name: 'Ripjaws',
    slug: 'ripjaws',
    aliases: ['Piscciss Volann Form', 'Deep Sea Terror'],
    speciesId: 'sp-18',
    speciesName: 'Piscciss Volann',
    homeworld: 'Piscciss',
    summary: 'An amphibious Piscciss Volann equipped with a bioluminescent head lure, razor claws, and monstrous steel-crushing hinged jaws. He morphs his legs into a single powerful fin tail for deep underwater swimming.',
    playlist: 'original_10',
    primaryImage: '/images/characters/ripjaws.png',
    firstEpisode: 'S01E03 - "The Krakken"',
    factExcerpt: 'Ripjaws dove into Lake Verida to battle Jonah Melville and reclaim the Krakken eggs.',
    abilities: [
      { type: 'power', name: 'Steel-Crushing Hinged Jaws', description: 'His jaws expand to clamp through solid submarine hulls, steel grates, and heavy armored shells.' },
      { type: 'power', name: 'Aquatic Fin Tail Morphing', description: 'Fuses his bipedal legs into a large fish tail for hyper-accelerated aquatic navigation and deep-ocean diving.' },
      { type: 'power', name: 'Bioluminescent Esca Lure', description: 'Projects bright light from his forehead lure to illuminate pitch-black oceanic depths or blind underwater foes.' },
      { type: 'weakness', name: 'Rapid Terrestrial Dehydration', description: 'Suffers severe respiratory suffocation and cellular weakness when deprived of water for more than a few minutes.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Ben\'s dedicated aquatic combat alien in the original series.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Appeared in Ultimate Alien with a redesigned catfish-style angler appearance.' }
    ],
    stats: { strength: 75, speed: 85, durability: 65, intelligence: 50, energyOutput: 20, versatility: 55 }
  }),

  // 9. Upgrade
  createAlien({
    id: 'char-upgrade',
    name: 'Upgrade',
    slug: 'upgrade',
    aliases: ['Galvanic Mechamorph Form', 'Techno-Morph'],
    speciesId: 'sp-05',
    speciesName: 'Galvanic Mechamorph',
    homeworld: 'Galvan B',
    summary: 'A Galvanic Mechamorph made of liquid nanite circuitry. Upgrade can meld with any electronic or mechanical technology to enhance and weaponize it far beyond its original factory limits.',
    playlist: 'original_10',
    primaryImage: '/images/characters/upgrade.png',
    firstEpisode: 'S01E04 - "Permanent Retirement"',
    factExcerpt: 'Upgrade merges with a baseball pitching machine at Aunt Vera\'s retirement community to defeat the disguised Limax aliens.',
    abilities: [
      { type: 'power', name: 'Technological Possession & Augmentation', description: 'Merges with vehicles, weapons, and computer systems, upgrading their horsepower, durability, and firepower.' },
      { type: 'power', name: 'Liquid Nanite Body Elasticity', description: 'Molds his malleable metallic body to avoid attacks, stretch limbs, and flow through tight ventilation grates.' },
      { type: 'power', name: 'Optic Plasma Laser Beam', description: 'Emits a concentrated optic energy laser from his circular eye node to incinerate targets.' },
      { type: 'weakness', name: 'Electromagnetic Pulse (EMP) & Acid', description: 'High-yield EMP blasts disrupt his nanite cohesion, and strong acids dissolve his liquid metallic matrix.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'One of Ben\'s most creative original 10 forms with the Omnitrix centered on his chest.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Referenced and accessed in canonical crossovers with Generator Rex: Heroes United.' }
    ],
    stats: { strength: 65, speed: 70, durability: 75, intelligence: 80, energyOutput: 82, versatility: 95 }
  }),

  // 10. Ghostfreak
  createAlien({
    id: 'char-ghostfreak',
    name: 'Ghostfreak',
    slug: 'ghostfreak',
    aliases: ['Ectonurite Form', 'Shadow Wraith', "Zs'Skayr"],
    speciesId: 'sp-19',
    speciesName: 'Ectonurite',
    homeworld: 'Anur Phaetos',
    summary: 'An eerie Ectonurite capable of matter intangibility, invisibility, and body possession. Behind his protective outer protective shroud lies a horrifying tentacled core containing the dormant consciousness of Zs\'Skayr.',
    playlist: 'original_10',
    primaryImage: '/images/characters/ghostfreak.png',
    firstEpisode: 'S01E04 - "Permanent Retirement"',
    factExcerpt: 'Ghostfreak phased through the wall to sneak away and play video games, frightening Aunt Vera.',
    abilities: [
      { type: 'power', name: 'Matter Intangibility & Phasing', description: 'Phases seamlessly through solid matter, forcefields, and enemy attacks at will.' },
      { type: 'power', name: 'Complete Optical Invisibility', description: 'Renders his entire physical and spectral form completely invisible to both eyes and radar.' },
      { type: 'power', name: 'Entity Body Possession', description: 'Enters the physical forms of sentient beings to control their speech and neuromuscular actions.' },
      { type: 'weakness', name: 'Sunlight Vulnerability (Without Shroud)', description: 'Direct unfiltered ultraviolet solar radiation incinerates his true inner Ectonurite flesh without his protective outer shroud.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Original series form until Zs\'Skayr became conscious and escaped the Omnitrix in Season 2.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Re-acquired and safely controlled in Ultimate Alien under the Ultimatrix interface.' }
    ],
    stats: { strength: 60, speed: 75, durability: 60, intelligence: 75, energyOutput: 80, versatility: 90 }
  }),

  // 11. Cannonbolt
  createAlien({
    id: 'char-cannonbolt',
    name: 'Cannonbolt',
    slug: 'cannonbolt',
    aliases: ['Arburian Pelarota Form', 'The Wrecking Ball'],
    speciesId: 'sp-11',
    speciesName: 'Arburian Pelarota',
    homeworld: 'Arburia (Pre-destruction)',
    summary: 'An armored mammalian Arburian Pelarota. Cannonbolt curls into a motorized sphere, bouncing and ricocheting off surfaces with devastating kinetic impact while deflecting lasers and explosives with ease.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/cannonbolt.png',
    firstEpisode: 'S02E02 - "The Big Tick"',
    factExcerpt: 'Cannonbolt was unlocked accidentally when Ben tried to transform to fight The Great One.',
    abilities: [
      { type: 'power', name: 'Kinetic Ricochet Rolling', description: 'Curls into a motorized armored sphere that rolls and bounces at high speed, pulverizing obstacles.' },
      { type: 'power', name: 'Near-Invulnerable Carapace', description: 'His thick yellow plates withstand laser fire, atmospheric reentry heat, and colossal crushing pressure.' },
      { type: 'weakness', name: 'Top-Heavy Center of Gravity', description: 'When standing on two feet, Cannonbolt is clumsy and frequently loses balance if shoved.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'The first additional alien unlocked by Ben in Season 2.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-alien-force', description: 'Re-unlocked by the recalibrated Omnitrix in the War of the Worlds season 2 finale.' },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Frequently utilized by Ben with evolved Ultimate Cannonbolt capability.' }
    ],
    forms: [
      { relatedCharacterId: 'char-ultimate-cannonbolt', relatedCharacterName: 'Ultimate Cannonbolt', relatedCharacterSlug: 'ultimate-cannonbolt', formType: 'ultimate', notes: 'Evolves into spiked metallic Ultimate Cannonbolt via Ultimatrix.' }
    ],
    stats: { strength: 85, speed: 75, durability: 95, intelligence: 50, energyOutput: 20, versatility: 70 }
  }),

  // 12. Wildvine
  createAlien({
    id: 'char-wildvine',
    name: 'Wildvine',
    slug: 'wildvine',
    aliases: ['Florauna Form', 'The Living Plant'],
    speciesId: 'sp-20',
    speciesName: 'Florauna',
    homeworld: 'Flors Verdance',
    summary: 'A plant-based Florauna with five vine legs, a blue eye in his chest, and venus flytrap head petals. Wildvine can extend thorny vines across long distances, regenerate severed limbs, and throw explosive seed pods.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/wildvine.png',
    firstEpisode: 'S02E07 - "Camp Fear"',
    factExcerpt: 'Wildvine unlocked during Ben\'s battle against the mutant spore alien fungi at Camp Sunny Days.',
    abilities: [
      { type: 'power', name: 'Elastic Vine Appendages & Thorns', description: 'Extends vines hundreds of feet to lasso enemies, scale cliffs, and pierce armor with hardened thorns.' },
      { type: 'power', name: 'Explosive Seed Pods', description: 'Generates flammable, smoke, or sleep-inducing explosive seed pods from his back flap.' },
      { type: 'power', name: 'Plant Merging & Burrowing', description: 'Merges with surrounding vegetation and burrows silently through soil to emerge behind foes.' },
      { type: 'weakness', name: 'Extreme Heat & Chemical Defoliants', description: 'Intense fire and industrial weedkillers cause immediate wilting and inhibit cellular regeneration.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Unlocked in Season 2, playing a pivotal role against Mycelium and Kevin 11.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Re-unlocked in Ultimate Alien.' }
    ],
    stats: { strength: 68, speed: 65, durability: 72, intelligence: 55, energyOutput: 60, versatility: 80 }
  }),

  // 13. Blitzwolfer (Benwolf)
  createAlien({
    id: 'char-blitzwolfer',
    name: 'Blitzwolfer',
    slug: 'blitzwolfer',
    aliases: ['Benwolf', 'Loboan Transformation'],
    speciesId: 'sp-21',
    speciesName: 'Loboan',
    homeworld: 'Luna Lobo',
    summary: 'An alien werewolf Loboan scanned in the New Mexico desert. Blitzwolfer possesses quadrupedal sprinting speed, night vision, and a four-part hinged jaw that splits open to fire concussive ultrasonic howls.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/blitzwolfer.png',
    firstEpisode: 'S03E05 - "Benwolf"',
    factExcerpt: 'Ben gained this DNA sample when the Yenaldooshi scratched the Omnitrix, putting it in capture mode.',
    abilities: [
      { type: 'power', name: 'Concussive Ultrasonic Howl', description: 'Splits his quadruplicate jaw to emit high-frequency sonic shockwaves capable of shattering stone and propelling him backwards.' },
      { type: 'power', name: 'Superhuman Loboan Agility', description: 'Sprints on all fours, leaps incredible heights, and strikes with razor-sharp claws.' },
      { type: 'power', name: 'Night Vision & Enhanced Senses', description: 'Sees in total pitch black and tracks quarry across miles through scent trails.' },
      { type: 'weakness', name: 'Auditory Feedback Vulnerability', description: 'Reflected sonic frequencies or sound dampeners can disorient his delicate auditory canals.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Introduced as Benwolf in Season 3 during the Anur arc.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Officially renamed Blitzwolfer in canon UAF continuity.' }
    ],
    stats: { strength: 74, speed: 82, durability: 70, intelligence: 60, energyOutput: 78, versatility: 72 }
  }),

  // 14. Snare-oh (Benmummy)
  createAlien({
    id: 'char-snare-oh',
    name: 'Snare-oh',
    slug: 'snare-oh',
    aliases: ['Benmummy', 'Thep Khufan Form'],
    speciesId: 'sp-22',
    speciesName: 'Thep Khufan',
    homeworld: 'Anur Khufos',
    summary: 'A mummy-like Thep Khufan composed of resilient bandage wraps and a golden pharaoh crest. Snare-oh can stretch, unravel, and shape his wraps into coils or nets, and is completely immune to toxic Corrodium radiation.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/snare_oh.png',
    firstEpisode: 'S03E08 - "Under Wraps"',
    factExcerpt: 'Ben unlocked this transformation after fighting the mummy alien in a farm field.',
    abilities: [
      { type: 'power', name: 'Wrap Elasticity & Regeneration', description: 'Stretches his bandage wraps across large distances and instantly reforms if severed or crushed.' },
      { type: 'power', name: 'Ensnaring Binding Cages', description: 'Wraps enemies in mummy bandages, trapping them in high-tensile organic bonds.' },
      { type: 'power', name: 'Corrodium Radiation Immunity', description: 'Impervious to the mutagenic effects of alien Corrodium mineral crystals.' },
      { type: 'weakness', name: 'Tangle / Unraveling Vulnerability', description: 'Can get his wraps tangled in fast-moving machinery or incinerated by intense open flames.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Originally introduced as Benmummy during the Anur trilogy in Season 3.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Officially renamed Snare-oh in canon continuity.' }
    ],
    stats: { strength: 70, speed: 68, durability: 65, intelligence: 65, energyOutput: 50, versatility: 85 }
  }),

  // 15. Frankenstrike (Benvicktor)
  createAlien({
    id: 'char-frankenstrike',
    name: 'Frankenstrike',
    slug: 'frankenstrike',
    aliases: ['Benvicktor', 'Transylian Form'],
    speciesId: 'sp-23',
    speciesName: 'Transylian',
    homeworld: 'Anur Transyl',
    summary: 'A massive cybernetic Transylian with twin electromagnetic conductor pylons on his back. Frankenstrike channels colossal currents of lightning, clamps onto magnetic surfaces, and overpowers opponents with immense brawn.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/frankenstrike.png',
    firstEpisode: 'S03E11 - "Be Afraid of the Dark"',
    factExcerpt: 'Ben transformed into Frankenstrike on the space station to fight Dr. Vicktor and Zs\'Skayr.',
    abilities: [
      { type: 'power', name: 'Electromagnetic Lightning Projection', description: 'Channels gigawatts of bio-electricity through his conductor pylons to fire devastating lightning bolts.' },
      { type: 'power', name: 'Electromagnetic Surface Clamping', description: 'Magnetizes his feet and hands to walk along metal hulls in the vacuum of space.' },
      { type: 'power', name: 'Superhuman Transylian Brawn', description: 'Possesses physical strength nearly rivaling Four Arms, smashing through blast doors.' },
      { type: 'weakness', name: 'Heavy Mass Mobility Delay', description: 'His immense metallic frame makes him slower on foot and vulnerable to agility-based flanking.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Introduced as Benvicktor in the Season 3 space finale.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Officially renamed Frankenstrike in UAF canon.' }
    ],
    stats: { strength: 90, speed: 45, durability: 88, intelligence: 72, energyOutput: 92, versatility: 75 }
  }),

  // 16. Upchuck (Perk)
  createAlien({
    id: 'char-upchuck',
    name: 'Upchuck',
    slug: 'upchuck',
    aliases: ['Perk Upchuck', 'Gourmand Transformation'],
    speciesId: 'sp-24',
    speciesName: 'Gourmand (Perk)',
    homeworld: 'Peptos XI',
    summary: 'A small green reptilian Perk Gourmand equipped with four prehensile sticky tongues and a stomach connected to a pocket dimension. Upchuck can devour any inorganic substance and spit it out as explosive green plasma.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/upchuck_perk.png',
    firstEpisode: 'S03E12 - "The Visitor"',
    factExcerpt: 'Upchuck unlocked when Xylene pressed the Omnitrix faceplate to save Ben from Vilgax\'s mega drone.',
    abilities: [
      { type: 'power', name: 'Pocket Dimension Omnivorous Digestion', description: 'Ingests lasers, rockets, concrete, and metal into a pocket dimension stomach without gaining weight.' },
      { type: 'power', name: 'Explosive Plasma Spit', description: 'Expels digested matter as concentrated emerald plasma orbs that detonate with massive concussive force.' },
      { type: 'power', name: 'Four Adhesive Prehensile Tongues', description: 'Shoots four elastic tongues to grapple objects and drag heavy debris directly into his jaws.' },
      { type: 'weakness', name: 'Cannot Digest Organic Earth Food', description: 'Standard human food tastes foul and provides zero explosive energy ammunition.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Unlocked in Season 3 by Xylene.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-alien-force', description: 'Featured in Alien Force Season 3 finale.' },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Appeared in Ultimate Alien where the distinction between Perk and Murk species was explored.' }
    ],
    stats: { strength: 55, speed: 60, durability: 70, intelligence: 60, energyOutput: 90, versatility: 80 }
  }),

  // 17. Ditto
  createAlien({
    id: 'char-ditto',
    name: 'Ditto',
    slug: 'ditto',
    aliases: ['Splixson Form', 'The Multiplier'],
    speciesId: 'sp-26',
    speciesName: 'Splixson',
    homeworld: 'Hathor',
    summary: 'A small, hyperactive Splixson capable of endless self-duplication. Ditto can split into dozens of identical clones that think and act independently, swarming enemies with synchronized coordination.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/ditto.png',
    firstEpisode: 'S04E05 - "Divided We Stand"',
    factExcerpt: 'Ben transformed into Ditto while playing on the beach and discovered he could clone himself endlessly.',
    abilities: [
      { type: 'power', name: 'Infinite Mitosis Self-Duplication', description: 'Splits his body into identical clones that operate independently without dividing physical strength.' },
      { type: 'power', name: 'Agile Acrobatic Swarming', description: 'Synchronized teamwork allows clones to distract, flank, and overwhelm larger opponents.' },
      { type: 'weakness', name: 'Shared Sensory / Pain Link', description: 'Pain or physical trauma inflicted on one clone is felt simultaneously across all active clones.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Unlocked in Season 4 of the original series.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Re-unlocked by Ben in Ultimate Alien.' }
    ],
    stats: { strength: 45, speed: 70, durability: 45, intelligence: 65, energyOutput: 30, versatility: 88 }
  }),

  // 18. Eye Guy
  createAlien({
    id: 'char-eye-guy',
    name: 'Eye Guy',
    slug: 'eye-guy',
    aliases: ['Opticoid Form', 'The All-Seeing Alien'],
    speciesId: 'sp-27',
    speciesName: 'Opticoid',
    homeworld: 'Sightra',
    summary: 'A humanoid Opticoid covered in dozens of blinking green eyes across his torso, shoulders, and arms. Eye Guy can see in every direction simultaneously and fires varied elemental energy beams from each ocular node.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/eye_guy.png',
    firstEpisode: 'S04E11 - "Ben 10 vs. The Negative 10"',
    factExcerpt: 'Eye Guy debuted in the Season 4 opener / movie prologue, firing freeze and heat lasers at Subliminal.',
    abilities: [
      { type: 'power', name: '360-Degree Panoramic Vision', description: 'Can observe enemies approaching from any angle with no blindspots.' },
      { type: 'power', name: 'Multi-Elemental Optic Lasers', description: 'Fires cryogenic freeze beams, searing fire blasts, and concussive electrical bolts from different eyes.' },
      { type: 'power', name: 'Chest Eye Ultimate Laser', description: 'Merges his smaller ocular nodes into one giant eye on his chest that fires a colossal energy beam.' },
      { type: 'weakness', name: 'Sensitive Ocular Irritants', description: 'Pepper spray, smoke, or bright flashes disorient multiple eyes simultaneously.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Introduced in Ben 10: Secret of the Omnitrix and Season 4.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Re-unlocked in Ultimate Alien.' }
    ],
    stats: { strength: 70, speed: 65, durability: 68, intelligence: 55, energyOutput: 88, versatility: 82 }
  }),

  // 19. Way Big
  createAlien({
    id: 'char-way-big',
    name: 'Way Big',
    slug: 'way-big',
    aliases: ["To'kustar Form", 'The Cosmic Giant'],
    speciesId: 'sp-28',
    speciesName: "To'kustar",
    homeworld: 'Cosmic Storms',
    summary: 'A towering To\'kustar born from turbulent cosmic storms in deep space. Standing over 100 feet tall, Way Big wields god-like physical power, shrugs off planetary weaponry, and fires a devastating cosmic ray by crossing his arms.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/way_big.png',
    firstEpisode: 'Secret of the Omnitrix (2007)',
    factExcerpt: 'Azmuth unlocked Way Big to defeat Vilgax and hurl him into deep space at the climax of Secret of the Omnitrix.',
    abilities: [
      { type: 'power', name: 'Colossal 100-Foot Titan Stature', description: 'Crushes armies, tosses giant battleships, and generates earthquake shockwaves with footsteps.' },
      { type: 'power', name: 'Cosmic Ray Crossed-Arm Beam', description: 'Crosses his right arm over his left wrist blade to fire a colossal beam of cosmic plasma.' },
      { type: 'power', name: 'Extreme Kinetic Invulnerability', description: 'Standard energy weapons, missiles, and orbital strikes bounce off his armored skin.' },
      { type: 'weakness', name: 'Head Fin Crest Vulnerability', description: 'His head crest fin is connected to sensitive nerve clusters; striking it causes immense disorientation.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'The ultimate trump card alien unlocked by Azmuth in Secret of the Omnitrix.', isSignatureAlien: true },
      { seriesSlug: 'ben-10-alien-force', description: 'Unlocked in the War of the Worlds finale, defeating the Highbreed warfleet.' },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Frequently deployed against titan threats and evolved into Ultimate Way Big against Dagon.' }
    ],
    forms: [
      { relatedCharacterId: 'char-ultimate-way-big', relatedCharacterName: 'Ultimate Way Big', relatedCharacterSlug: 'ultimate-way-big', formType: 'ultimate', notes: 'Evolves into 250-foot tall Ultimate Way Big via the Ultimatrix.' }
    ],
    stats: { strength: 98, speed: 60, durability: 96, intelligence: 55, energyOutput: 95, versatility: 75 }
  }),

  // 20. Spitter
  createAlien({
    id: 'char-spitter',
    name: 'Spitter',
    slug: 'spitter',
    aliases: ['Spheroid Form', 'Slime Spitter'],
    speciesId: 'sp-29',
    speciesName: 'Spheroid',
    homeworld: 'Scalpasc',
    summary: 'A pufferfish-like bipedal Spheroid with four sharp facial tusks. Spitter inflates his internal torso reservoir to unleash pressurized torrents of concentrated, acidic, and conductive slime that wash away enemies.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/spitter.png',
    firstEpisode: 'S03E01 - "Ben 10,000"',
    factExcerpt: 'Spitter was first revealed when 30-year-old Ben 10,000 deployed him against future Dr. Animo.',
    abilities: [
      { type: 'power', name: 'High-Pressure Acidic Slime Torrent', description: 'Spews gallons of concentrated acidic, slippery slime that knocks back heavy targets.' },
      { type: 'power', name: 'Electrical Conductivity Stream', description: 'His slime conducts high-voltage electricity, allowing allies to electrocute drenched foes.' },
      { type: 'power', name: 'Torso Reservoir Expansion', description: 'Inflates his body like a pufferfish to store fluid and cushion physical blows.' },
      { type: 'weakness', name: 'Deflated Physical Sluggishness', description: 'After expelling his reservoir, Spitter requires time to rebuild fluid pressure.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Introduced as a future Omnitrix unlock in "Ben 10,000".', isSignatureAlien: false },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Part of Ben\'s active Omnitrix genetic database in canon continuity.' }
    ],
    stats: { strength: 65, speed: 48, durability: 70, intelligence: 50, energyOutput: 82, versatility: 68 }
  }),

  // 21. Buzzshock
  createAlien({
    id: 'char-buzzshock',
    name: 'Buzzshock',
    slug: 'buzzshock',
    aliases: ['Nosedeenian Form', 'Megawhatt'],
    speciesId: 'sp-30',
    speciesName: 'Nosedeenian',
    homeworld: 'Nosideen',
    summary: 'A battery-shaped Nosedeenian creature of pure living green electricity. Buzzshock travels through electrical wires, controls power grids, discharges high-voltage lightning, and duplicates when overwhelmed.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/buzzshock.png',
    firstEpisode: 'S01E07 - "Tourist Trap" (as wild Nosedeenian) / "Ben 10,000"',
    factExcerpt: 'Ben first fought wild Nosedeenians in Sparksville, later unlocking the DNA transformation in his future timeline.',
    abilities: [
      { type: 'power', name: 'Electrical Traveling & Conduit Phasing', description: 'Phases directly into electrical sockets and power lines to move at the speed of current.' },
      { type: 'power', name: 'High-Voltage Green Lightning', description: 'Discharges crackling green lightning bolts from his hands and battery head.' },
      { type: 'power', name: 'Overcharge Duplication', description: 'When cut in half or absorbing excess electricity, Buzzshock splits into multiple autonomous copies.' },
      { type: 'weakness', name: 'Insulation Trapping', description: 'Rubber, glass, and non-conductive insulators completely trap him and nullify his escape.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'First encountered in "Tourist Trap", unlocked as an alien in "Ben 10,000".', isSignatureAlien: false },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Canonically unlocked and accessible in the Ultimatrix playlist.' }
    ],
    stats: { strength: 30, speed: 88, durability: 45, intelligence: 60, energyOutput: 88, versatility: 80 }
  }),

  // 22. Arctiguana
  createAlien({
    id: 'char-arctiguana',
    name: 'Arctiguana',
    slug: 'arctiguana',
    aliases: ['Polar Manzardill Form', 'Sub-Zero Lizard'],
    speciesId: 'sp-31',
    speciesName: 'Polar Manzardill',
    homeworld: "X'Nelli",
    summary: 'A blue quadrupedal reptile of the Polar Manzardill species. Arctiguana exhales long-range cryogenic freeze vapor that solidifies raging fires, coats terrain in slick ice, and freezes giant adversaries solid in seconds.',
    playlist: 'additional_os',
    primaryImage: '/images/characters/arctiguana.png',
    firstEpisode: 'S03E01 - "Ben 10,000"',
    factExcerpt: 'Arctiguana was deployed by Ben 10,000 to freeze Vilgax inside a solid mountain of ice.',
    abilities: [
      { type: 'power', name: 'Sub-Zero Cryogenic Breath', description: 'Exhales streams of extreme freezing vapor that encase giant monsters and freeze molten lava.' },
      { type: 'power', name: 'Ice Ramp Surfing', description: 'Freezes the path beneath him to slide across ice ramps at high speed.' },
      { type: 'power', name: 'Quadrupedal Frozen Surface Grip', description: 'Spiked claws provide immovable traction on sheer glaciers and frozen cliffs.' },
      { type: 'weakness', name: 'Breath Stamina Depletion', description: 'Exhaling continuous sub-zero breath exhausts his lung capacity, requiring intervals to recharge.' }
    ],
    seriesAppearances: [
      { seriesSlug: 'ben-10-2005', description: 'Featured in "Ben 10,000" as one of Ben\'s future master transformations.', isSignatureAlien: false },
      { seriesSlug: 'ben-10-ultimate-alien', description: 'Part of Ben\'s active canonical DNA transformations in Ultimate Alien.' }
    ],
    stats: { strength: 65, speed: 62, durability: 72, intelligence: 52, energyOutput: 85, versatility: 70 }
  })
];

module.exports = { osAliens };
