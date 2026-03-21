'use strict';
/**
 * itemindex.js — Complete item database for The Last Caretaker
 * Tabs: Memories | Food | Materials | Weapons | Equipment | Modules
 */

const TLC_ITEM_INDEX = {

  // ── MEMORIES ──────────────────────────────────────────────────────
  memories: [

    {
      id: 'ash_notebook',
      name: 'Ash Notebook',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/AshNotebook',
      info: [''],
      foundAt: [

      ]
    },

    {
      id: 'assembly_instr',
      name: 'Assembly Instructions',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/AssemblyInstructions',
      info: ['+2 Discipline','+8 Logic' ,'+8 Wisdom'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'basketball',
      name: 'Basketball (Orange)',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Basketball',
      info: ['+1 Patience'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'basketball',
      name: 'Basketball (Blue)',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Basketball2',
      info: ['+1 Patience'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'biology_notes',
      name: 'Biology Notes',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/BiologyNotes',
      info: ['+10 Adaptability', '+10 Wisdom'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'blueprints',
      name: 'Blueprints',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Blueprints',
      info: ['+10 Adaptability', '+5 Logic'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'bowling_ball',
      name: 'Bowling Ball',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/BowlingBall',
      info: ['+1 Patience'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'bowling_pin',
      name: 'Bowling Pin',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/BowlingPin',
      info: ['+1 Patience'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'camera',
      name: 'Camera',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Camera',
      info: ['+5 Creativity','+5 Communication'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'cards',
      name: 'Cards',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Cards',
      info: ['+5 Communication','+5 Empathy'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'cognitive_cards',
      name: 'Cognitive Cards',
      category: 'memory',
      rarity: 'uncommon',
      icon: 'Memories/CognitiveCards',
      info: ['+7 Adaptability','+5 Logic','+3 Wisdom'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'commanders_log',
      name: "Commander's Log",
      category: 'memory',
      rarity: 'uncommon',
      icon: 'Memories/CommandersLog',
      info: ['+7 Discipline','+8 Leadership'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'compass',
      name: 'Compass',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Compass',
      info: ['+6 Adaptability','+3 Focus','+3 Leadership'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'crayon',
      name: 'Crayon',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Crayon',
      info: ['+5 Creativit','+2 Focus'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'encyclopedia',
      name: 'Encyclopedia',
      category: 'memory',
      rarity: 'uncommon',
      icon: 'Memories/Encyclopedia',
      info: ['+5 Logic','+10 Wisdom'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'first_aid',
      name: 'First Aid',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/FirstAid',
      info: ['+10 Adaptability'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'guitar',
      name: 'Guitar',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Guitar',
      info: ['+3 Creativity','+3 Communication','+3 Focus'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'love_letters',
      name: 'Love Letters',
      category: 'memory',
      rarity: 'uncommon',
      icon: 'Memories/LoveLetters',
      info: ['+10 Wisdom'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'maps',
      name: 'Maps',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Maps',
      info: ['+5 Leadership','+10 Wisdom'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'meditation',
      name: 'Meditation',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Meditation',
      info: ['+5 Focus'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'mirror',
      name: 'Mirror',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Mirror',
      info: ['+5 Empathy'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'music_notes',
      name: 'Music Notes',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/MusicNotes',
      info: ['+6 Creativity +4 Communication'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'mystery_box',
      name: 'Mystery Box',
      category: 'memory',
      rarity: 'uncommon',
      icon: 'Memories/MysteryBox',
      info: ['+5 Patience'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'plans',
      name: 'Plans',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Plans',
      info: ['+8 Communication','+7 Discipline'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'programming_manual',
      name: 'Programming Manual',
      category: 'memory',
      rarity: 'uncommon',
      icon: 'Memories/ProgrammingManual',
      info: ['+10 Logic'],
      foundAt: [
         {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'small_human_art',
      name: 'Small Human Art',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/SmallHumanArt',
      info: ['+5 Empathy'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'small_tree',
      name: 'Small Tree',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/SmallTree',
      info: ['+5 Discipline','+5 Patience'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'stopwatch',
      name: 'Stopwatch',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/Stopwatch',
      info: ['+5 Patience'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'sudoku_book',
      name: 'Sudoku Book',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/SudokuBook',
      info: ['+10 Logic'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'survival_diagrams',
      name: 'Survival Diagrams',
      category: 'memory',
      rarity: 'uncommon',
      icon: 'Memories/SurvivalDiagrams',
      info: ['+10 Adaptability','+5 Leadership'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ] 
    },

    {
      id: 'teddy_bear',
      name: 'Teddy Bear',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/TeddyBear',
      info: ['+3 Empathy'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'teddy_bear',
      name: 'Teddy Bear (White)',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/TeddyBearWhite',
      info: ['+3 Empathy'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'the_art_of_war',
      name: 'The Art of War',
      category: 'memory',
      rarity: 'uncommon',
      icon: 'Memories/TheArtOfWar',
      info: ['+5 Communication','+10 Leadership'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'tommy',
      name: 'Tommy',
      category: 'memory',
      rarity: 'unique',
      icon: 'Memories/Tommy',
      info: ['+3 Empathy'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'travel_journal',
      name: 'Travel Journal',
      category: 'memory',
      rarity: 'common',
      icon: 'Memories/TravelJournal',
      info: ['+3 Adaptability'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'wheres_tommy',
      name: "Where's Tommy",
      category: 'memory',
      rarity: 'unique',
      icon: 'Memories/WheresTommy',
      info: ['+5 Focus','+5 Patience'],
      foundAt: [
        {
          source: 'Habitat Nodes',
          icon: '📦',
          color: '#4a7a8a'
        }, 
        {
          source: 'Residential areas',
          icon: '📦',
          color: '#4a7a8a'
        },
        {
          source: 'Navigation Beacons',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },
  ],







  // ── FOOD ──────────────────────────────────────────────────────────
  food: [
    
    {
      id: 'high_fat',
      name: 'High-Fat',
      category: 'food',
      rarity: 'common',
      icon: 'Food/HighFat',
      info: ['Strength +1','Weight +8'],
      foundAt: [
        {
          source: 'Food Processor',
          icon: '🍎',
          color: '#60e060'
        }
      ]
    },

    {
      id: 'mind_surge',
      name: 'Mind Surge',
      category: 'food',
      rarity: 'common',
      icon: 'Food/MindSurge',
      info: ['Intellect +6','Life Exp. +6'],
      foundAt: [
        {
          source: 'Food Processor',
          icon: '🍎',
          color: '#60e060'
        }
      ]
    },

    {
      id: 'nutri_core',
      name: 'Nutri-Core',
      category: 'food',
      rarity: 'common',
      icon: 'Food/NutriCore',
      info: ['All stats +3'],
      foundAt: [
        {
          source: 'Food Processor',
          icon: '🍎',
          color: '#60e060',
          note: 'Tier 10 · 1 SP'
        }
      ]
    },

    {
      id: 'physique_fuel',
      name: 'Physique Fuel',
      category: 'food',
      rarity: 'common',
      icon: 'Food/PhysiqueFuel',
      info: ['Height +5','Strength +5'],
      foundAt: [
        {
          source: 'Food Processor',
          icon: '🍎',
          color: '#60e060'
        }
      ]
    },

    {
      id: 'bone_fortify',
      name: 'Bone-Fortify',
      category: 'food',
      rarity: 'uncommon',
      icon: 'Food/BoneFortify',
      info: ['Height +8','Strength +14'],
      foundAt: [
        {
          source: 'Food Processor',
          icon: '🍎',
          color: '#60e060'
        }
      ]
    },

    {
      id: 'endura_growth',
      name: 'Endura-Growth',
      category: 'food',
      rarity: 'uncommon',
      icon: 'Food/EnduraGrowth',
      info: ['Intellect +12','Life Exp. +8'],
      foundAt: [
        {
          source: 'Food Processor',
          icon: '🍎',
          color: '#60e060'
        }
      ]
    },

    {
      id: 'immune_boost',
      name: 'Immune Boost',
      category: 'food',
      rarity: 'uncommon',
      icon: 'Food/ImmuneBoost',
      info: ['All stats +6'],
      foundAt: [
        {
          source: 'Food Processor',
          icon: '🍎',
          color: '#60e060'
        }
      ]
    },

    {
      id: 'muscle_fort',
      name: 'Muscle Fortification',
      category: 'food',
      rarity: 'rare',
      icon: 'Food/MuscleFortification',
      info: ['Strength +15'],
      foundAt: [
        {
          source: 'Soilforge Prime',
          icon: '🧬',
          color: '#ff6b35'
        }
      ]
    },

    {
      id: 'neuro_boost',
      name: 'Neuro-Boost',
      category: 'food',
      rarity: 'rare',
      icon: 'Food/NeuroBoost',
      info: ['Intellect +15','Life Exp. +10'],
      foundAt: [
        {
          source: 'Soilforge Prime',
          icon: '🧬',
          color: '#ff6b35'
        }
      ]
    },

    {
      id: 'hyper_evolution',
      name: 'Hyper-Evolution',
      category: 'food',
      rarity: 'rare',
      icon: 'Food/HyperEvolution',
      info: ['Height +30','Intellect +20'],
      foundAt: [
        {
          source: 'Soilforge Prime',
          icon: '🧬',
          color: '#ff6b35'
        }
      ]
    },

    {
      id: 'mito_surge',
      name: 'Mitochondrial Surge',
      category: 'food',
      rarity: 'rare',
      icon: 'Food/MitochondrialSurge',
      info: ['Height +20','Strength +28'],
      foundAt: [
        {
          source: 'Soilforge Prime',
          icon: '🧬',
          color: '#ff6b35'
        }
      ]
    },

    {
      id: 'nanite_infusion',
      name: 'Nanite Infusion',
      category: 'food',
      rarity: 'rare',
      icon: 'Food/NaniteInfusion',
      info: ['Height +25','Intellect +25'],
      foundAt: [
        {
          source: 'Soilforge Prime',
          icon: '🧬',
          color: '#ff6b35'
        }
      ]
    },

    {
      id: 'ultimate_genesis',
      name: 'Ultimate Genesis',
      category: 'food',
      rarity: 'unique',
      icon: 'Food/UltimateGenesis',
      info: ['All stats +40–50'],
      foundAt: [
        {
          source: 'Soilforge Prime',
          icon: '🧬',
          color: '#ff6b35'
        }
      ]
    },

  ],

  // ── MATERIALS ─────────────────────────────────────────────────────
  materials: [
    // Raw — Common
    
    {
      id: 'copper',
      name: 'Copper',
      category: 'material',
      rarity: 'common',
      icon: 'Materials/Copper',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Copper Scraps'
        }, 
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Electrical items'
        }
      ]
    },

    {
      id: 'iron',
      name: 'Iron',
      category: 'material',
      rarity: 'common',
      icon: 'Materials/Iron',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Metal Scraps'
        }, {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Metal objects'
        }
      ]
    },

    {
      id: 'plastic',
      name: 'Plastic',
      category: 'material',
      rarity: 'common',
      icon: 'Materials/Plastic',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Plastic Scraps'
        }, 
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Containers / panels'
        }
      ]
    },

    {
      id: 'rubber',
      name: 'Rubber',
      category: 'material',
      rarity: 'common',
      icon: 'Materials/Rubber',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Rubber Scraps'
        }, 
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Tires / hoses'
        }
      ]
    },

    {
      id: 'fabric',
      name: 'Fabric',
      category: 'material',
      rarity: 'common',
      icon: 'Materials/Fabric',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Fabric Scraps'
        }, 
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Beds / chairs'
        }
      ]
    },

    {
      id: 'glass',
      name: 'Glass',
      category: 'material',
      rarity: 'common',
      icon: 'Materials/Glass',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Broken Glass'
        }, 
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Windows / displays'
        }
      ]
    },






    // Raw — Uncommon
    {
      id: 'aluminium',
      name: 'Aluminium',
      category: 'material',
      rarity: 'uncommon',
      icon: 'Materials/Aluminium',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Aluminium Scraps'
        }, 
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'gold',
      name: 'Gold',
      category: 'material',
      rarity: 'uncommon',
      icon: 'Materials/Gold',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Wire / Tech Scraps'
        }
      ]
    },

    {
      id: 'polyurethane',
      name: 'Polyurethane',
      category: 'material',
      rarity: 'uncommon',
      icon: 'Materials/Polyurethane',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Wire / Tech Scraps'
        }
      ]
    },

    {
      id: 'silicon',
      name: 'Silicon',
      category: 'material',
      rarity: 'uncommon',
      icon: 'Materials/Silicon',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Wire Scraps'
        }
      ]
    },




    // Raw — Rare
    {
      id: 'carbon_fiber',
      name: 'Carbon Fiber',
      category: 'material',
      rarity: 'rare',
      icon: 'Materials/CarbonFiber',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'High-Tech Scraps'
        }, 
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Robots / LCD'
        }
      ]
    },

    {
      id: 'titanium',
      name: 'Titanium',
      category: 'material',
      rarity: 'rare',
      icon: 'Materials/Titanium',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'High-Tech Scraps'
        }
      ]
    },




    // Artifact
    {
      id: 'neutronium',
      name: 'Neutronium',
      category: 'material',
      rarity: 'unique',
      icon: 'Materials/Neutronium',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Ultra-Tech Scraps'
        }
      ]
    },

    {
      id: 'plasma_gel',
      name: 'Plasma Gel',
      category: 'material',
      rarity: 'unique',
      icon: 'Materials/PlasmaGel',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Ultra-Tech Scraps'
        }
      ]
    },

    {
      id: 'quantum_crystal',
      name: 'Quantum Crystal',
      category: 'material',
      rarity: 'unique',
      icon: 'Materials/QuantumCrystal',
      info: [],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'QC Nuggets'
        }, 
        {
          source: 'Loot',
          icon: '📦',
          color: '#4a7a8a',
          note: 'Artifact sites'
        }
      ]
    },





    // Scraps
    {
      id: 'metal_scraps',
      weight: 5,
      name: 'Metal Scraps',
      category: 'scrap',
      rarity: 'common',
      icon: 'Trash/MetalScraps',
      info: ['Recycle → Iron + Copper'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Metal objects'
        }, 
        {
          source: 'Loot',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'trash_trash',
      weight: 5,
      name: 'Trash',
      category: 'scrap',
      rarity: 'common',
      icon: 'Trash/Trash',
      info: ['Recycle'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'objects'
        }, 
        {
          source: 'Loot',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'copper_scraps',
      name: 'Copper Scraps',
      category: 'scrap',
      rarity: 'common',
      icon: 'Trash/CopperScraps',
      info: ['Recycle → Copper'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Electrical items'
        }
      ]
    },

    {
      id: 'plastic_scraps',
      name: 'Plastic Scraps',
      category: 'scrap',
      rarity: 'common',
      icon: 'Trash/PlasticScraps',
      info: ['Recycle → Plastic + Rubber'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Furniture / panels'
        }
      ]
    },

    {
      id: 'rubber_scraps',
      name: 'Rubber Scraps',
      category: 'scrap',
      rarity: 'common',
      icon: 'Trash/PlasticScraps',
      info: ['Recycle → Rubber + Plastic'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Tires / hoses'
        }
      ]
    },

    {
      id: 'fabric_scraps',
      name: 'Fabric Scraps',
      category: 'scrap',
      rarity: 'common',
      icon: 'Trash/FabricScraps',
      info: ['Recycle → Fabric'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Beds / bags'
        }
      ]
    },

    {
      id: 'broken_glass',
      name: 'Broken Glass',
      category: 'scrap',
      rarity: 'common',
      icon: 'Trash/BrokenGlass',
      info: ['Recycle → Glass'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Windows / monitors'
        }
      ]
    },

    {
      id: 'wire_scraps',
      name: 'Wire Scraps',
      category: 'scrap',
      rarity: 'uncommon',
      icon: 'Trash/WireScraps',
      info: ['Recycle → Gold, Silicon, Polyurethane'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Electrical systems'
        }
      ]
    },

    {
      id: 'aluminium_scraps',
      name: 'Aluminium Scraps',
      category: 'scrap',
      rarity: 'uncommon',
      icon: 'Trash/AluminiumScraps',
      info: ['Recycle → Aluminium'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Canisters / computers'
        }
      ]
    },

    {
      id: 'tech_scraps',
      name: 'Tech Scraps',
      category: 'scrap',
      rarity: 'uncommon',
      icon: 'Trash/TechScraps',
      info: ['Recycle → Gold, Silicon, Polyurethane'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Electronics'
        }
      ]
    },

    {
      id: 'high_tech_scraps',
      name: 'High-Tech Scraps',
      category: 'scrap',
      rarity: 'rare',
      icon: 'Trash/HighTechScraps',
      info: ['Recycle → Carbon Fiber + Titanium'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Robots / LCD monitors'
        }
      ]
    },

    {
      id: 'scifi_tech_scraps',
      name: 'Scifi-Tech Scraps',
      category: 'scrap',
      rarity: 'rare',
      icon: 'Trash/ScifiTechScraps',
      info: ['Recycle'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: ''
        }
      ]
    },

    {
      id: 'ultra_tech_scraps',
      name: 'Ultra-Tech Scraps',
      category: 'scrap',
      rarity: 'unique',
      icon: 'Trash/UltraTechScraps',
      info: ['Recycle → Neutronium, Plasma Gel'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Deep ruins'
        }
      ]
    },





    // Ores
    {
      id: 'iron_ore',
      name: 'Iron Ore',
      category: 'ore',
      rarity: 'common',
      icon: 'Ore/IronOre',
      info: ['Recycle → Iron (pure)'],
      foundAt: [ 
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'copper_ore',
      name: 'Copper Ore',
      category: 'ore',
      rarity: 'common',
      icon: 'Ore/CopperOre',
      info: ['Recycle → Copper (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'gold_ore',
      name: 'Gold Ore',
      category: 'ore',
      rarity: 'uncommon',
      icon: 'Ore/GoldOre',
      info: ['Recycle → Gold (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },



    {
      id: 'chromium_ore',
      name: 'Chromium Ore',
      category: 'ore',
      rarity: 'uncommon',
      icon: 'Ore/ChromiumOre',
      info: ['Recycle → Chromium (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'cobalt_ore',
      name: 'Cobalt Ore',
      category: 'ore',
      rarity: 'uncommon',
      icon: 'Ore/CobaltOre',
      info: ['Recycle → Cobalt (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'graphite_ore',
      name: 'Graphite Ore',
      category: 'ore',
      rarity: 'uncommon',
      icon: 'Ore/GraphiteOre',
      info: ['Recycle → Graphite (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'hematite_ore',
      name: 'Hematite Ore',
      category: 'ore',
      rarity: 'uncommon',
      icon: 'Ore/HematiteOre',
      info: ['Recycle → Hematite (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'rutile_ore',
      name: 'Rutile Ore',
      category: 'ore',
      rarity: 'uncommon',
      icon: 'Ore/RutileOre',
      info: ['Recycle → Rutile (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'titanium_ore',
      name: 'Titanium Ore',
      category: 'ore',
      rarity: 'rare',
      icon: 'Ore/TitaniumOre',
      info: ['Recycle → Titanium (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'qc_ore',
      name: 'Quantum Ore',
      category: 'ore',
      rarity: 'unique',
      icon: 'Ore/QuantumOre',
      info: ['Recycle → Quantum Crystal'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },




    // nuggets
    {
      id: 'chromium_nugget',
      name: 'Chromium Nugget',
      category: 'nugget',
      rarity: 'uncommon',
      icon: 'Ore/ChromiumNugget',
      info: ['Recycle → Chromium (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'cobalt_nugget',
      name: 'Cobalt Nugget',
      category: 'nugget',
      rarity: 'uncommon',
      icon: 'Ore/CobaltNugget',
      info: ['Recycle → Cobalt (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'graphite_nugget',
      name: 'Graphite Nugget',
      category: 'nugget',
      rarity: 'uncommon',
      icon: 'Ore/GraphiteNugget',
      info: ['Recycle → Graphite (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'hematite_nugget',
      name: 'Hematite Nugget',
      category: 'nugget',
      rarity: 'uncommon',
      icon: 'Ore/HematiteNugget',
      info: ['Recycle → Hematite (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },

    {
      id: 'rutile_nugget',
      name: 'Rutile Nugget',
      category: 'nugget',
      rarity: 'uncommon',
      icon: 'Ore/RutileNugget',
      info: ['Recycle → Rutile (pure)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040'
        }
      ]
    },




    // Food Materials
    {
      id: 'carbohydrate',
      name: 'Carbohydrate',
      category: 'food_mat',
      rarity: 'common',
      icon: 'FoodMaterials/Carbohydrate',
      info: ['Food base —> Nutri-Core','Food base —> Physique Fuel'],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Bio Seaweed'
        }, 
        {
          source: 'Boat Net',
          icon: '🚢',
          color: '#4a9aff'
        }
      ]
    },

    {
      id: 'fat',
      name: 'Fat',
      category: 'food_mat',
      rarity: 'common',
      icon: 'FoodMaterials/Fat',
      info: ['Food base —> High-Fat','Food base —> Mind Surge'],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Bio Waste'
        }
      ]
    },

    {
      id: 'protein',
      name: 'Protein',
      category: 'food_mat',
      rarity: 'common',
      icon: 'FoodMaterials/Protein',
      info: ['Food base —> multiple recipes'],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Bio Seaweed'
        }, 
        {
          source: 'Boat Net',
          icon: '🚢',
          color: '#4a9aff'
        }
      ]
    },

    {
      id: 'calcium',
      name: 'Calcium',
      category: 'food_mat',
      rarity: 'uncommon',
      icon: 'FoodMaterials/Calcium',
      info: ['Food base —> Bone-Fortify'],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Bio Dark (Red Slime)'
        }
      ]
    },

    {
      id: 'omega3',
      name: 'Omega-3',
      category: 'food_mat',
      rarity: 'uncommon',
      icon: 'FoodMaterials/Omega3',
      info: ['Food base —> Endura-Growth'],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Bio Organic (Crawlers)'
        }
      ]
    },

    {
      id: 'vitamin_d',
      name: 'Vitamin D',
      category: 'food_mat',
      rarity: 'uncommon',
      icon: 'FoodMaterials/VitaminD',
      info: ['Food base —> Immune Boost'],
      foundAt: [
        {
          source: 'Recycler',
          icon: '♻',
          color: '#f0c040',
          note: 'Bio Light (Pink Slime)'
        }
      ]
    },

    {
      id: 'bioregulator',
      name: 'Bioregulator',
      category: 'food_mat',
      rarity: 'rare',
      icon: 'FoodMaterials/Bioregulator',
      info: ['Food base —> Muscle Fortification','Food base —> Neuro-Boost'],
      foundAt: [
        {
          source: 'Enemy Drop',
          icon: '⚔',
          color: '#ff4060',
          note: 'Talon Sharks'
        }
      ]
    },

    {
      id: 'mito_amp',
      name: 'Mitochondrial Amplifier',
      category: 'food_mat',
      rarity: 'rare',
      icon: 'FoodMaterials/MitochondrialAmplifier',
      info: ['Food base —> Hyper-Evolution','Food base —> Mito. Surge'],
      foundAt: [
        {
          source: 'Enemy Drop',
          icon: '⚔',
          color: '#ff4060',
          note: 'Talon Sharks'
        }
      ]
    },

    {
      id: 'groth_horm',
      name: 'Human Growth Hormone',
      category: 'food_mat',
      rarity: 'rare',
      icon: 'FoodMaterials/GrowthHormone',
      info: ['Food base -> Hyper-Evolution','Food base —> Mito. Surge'],
      foundAt: [
        {
          source: 'Enemy Drop',
          icon: '⚔',
          color: '#ff4060',
          note: 'Talon Sharks'
        }
      ]
    },

    {
      id: 'nanite_nut',
      name: 'Nanite Nutrient',
      category: 'food_mat',
      rarity: 'rare',
      icon: 'FoodMaterials/NaniteNutrient',
      info: ['Food base —> Nanite Infusion','Food base —> Ultimate Genesis'],
      foundAt: [
        {
          source: 'Enemy Drop',
          icon: '⚔',
          color: '#ff4060',
          note: 'Talon Sharks'
        }
      ]
    },




    // Organics
    {
      id: 'bio_seaweed',
      name: 'Bio Seaweed',
      category: 'organic',
      rarity: 'common',
      icon: 'Materials/BioSeaweed',
      info: ['Yields Protein + Carbohydrate (recycle)'],
      foundAt: [
        {
          source: 'Boat Net',
          icon: '🚢',
          color: '#4a9aff',
          note: 'Ocean farming'
        }, 
        {
          source: 'Coastal',
          icon: '🌊',
          color: '#4a9aff'
        }
      ]
    },

    {
      id: 'bio_waste',
      name: 'Bio Waste',
      category: 'organic',
      rarity: 'common',
      icon: 'Materials/BioWaste',
      info: ['Yields Fat (recycle)'],
      foundAt: [
        {
          source: 'Dismantling',
          icon: '🔨',
          color: '#c08040',
          note: 'Bio Waste canisters'
        }
      ]
    },

    {
      id: 'bio_organic',
      name: 'Bio Organic',
      category: 'organic',
      rarity: 'common',
      icon: 'Materials/BioOrganic',
      info: ['Yields Omega-3 (recycle)'],
      foundAt: [
        {
          source: 'Enemy Drop',
          icon: '⚔',
          color: '#ff4060',
          note: 'Green Crawlers'
        }
      ]
    },

    {
      id: 'bio_light',
      name: 'Bio Light',
      category: 'organic',
      rarity: 'common',
      icon: 'Materials/BioLight',
      info: ['Yields Vitamin D (recycle)'],
      foundAt: [
        {
          source: 'Enemy Drop',
          icon: '⚔',
          color: '#ff4060',
          note: 'Pink Slime'
        }
      ]
    },

    {
      id: 'bio_dark',
      name: 'Bio Dark',
      category: 'organic',
      rarity: 'common',
      icon: 'Materials/BioDark',
      info: ['Yields Calcium (recycle)'],
      foundAt: [
        {
          source: 'Enemy Drop',
          icon: '⚔',
          color: '#ff4060',
          note: 'Red Slime'
        }
      ]
    },

    {
      id: 'bio_flesh',
      name: 'Bio Flesh',
      category: 'organic',
      rarity: 'common',
      icon: 'Materials/BioFlesh',
      info: ['?? Unknown Output'],
      foundAt: [
        {
          source: 'Enemy Drop',
          icon: '⚔',
          color: '#ff4060',
          note: 'Talon Sharks'
        }
      ]
    },

  ],




  // ── WEAPONS ───────────────────────────────────────────────────────
  weapons: [



    // Sidearms
    {
      id: 'electric_pistol',
      name: 'Electric Pistol',
      category: 'sidearm',
      rarity: 'common',
      icon: 'Weapons/Icon_Weapon_ElectricPistol',
      info: ['Electric damage, close-range arc — best vs. small robots & machines. Rechargeable via cable.'],
      skillTier: 3,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '1',
          icon: 'Battery_Cell'
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: 'Alloy_Frame'
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: 'Connector_Ports'
        }, 
        {
          name: 'Conduit Wiring',
          qty: '1',
          icon: 'Conduit_Wiring'
        }
      ],
      ammo: [
          {
          name: 'Electric',
          icon: 'Electric_Ammo',
          note: 'rechargeable via cable or backpack'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 3'
        }
      ]
    },

    {
      id: 'bolt_pistol',
      name: 'Bolt Pistol',
      category: 'sidearm',
      rarity: 'uncommon',
      icon: 'Weapons/Icon_Weapon_BoltPistol',
      info: ['Mid-range bolt weapon. Default Pistol Flex ammo vs. most enemies. Usable underwater.'],
      skillTier: 5,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: 'Alloy_Frame'
        }, 
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: 'Storage_Cylinder'
        }, 
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: 'Cooling_Radiator'
        }
      ],
      ammo: [
        {
          name: 'Pistol Flex',
          icon: 'Pistol_Flex',
          note: 'default'
        }, 
        {
          name: 'Pistol Shard',
          icon: 'Pistol_Shard'
        }, 
        {
          name: 'extra dmg vs. non-robots)',
          icon: 'extra_dmg_vs._non-robots)'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 5'
        }
      ]
    },

    {
      id: 'flamer_pistol',
      name: 'Flamer Pistol',
      category: 'sidearm',
      rarity: 'uncommon',
      icon: 'Weapons/Icon_Weapon_FlamerPistol',
      info: ['Flame damage sidearm — excellent vs. organic enemies (slimes). Fueled by petrol.'],
      skillTier: 7,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: 'Alloy_Frame'
        }, 
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: 'Storage_Cylinder'
        }, 
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: 'Cooling_Radiator'
        }, 
        {
          name: 'Nano Mesh',
          qty: '1',
          icon: 'Nano_Mesh'
        }
      ],
      ammo: [
        {
          name: 'Petrol',
          icon: 'imgi_Petrol',
          note: 'refuel via Fuel Cable or ONi backpack'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 7'
        }
      ]
    },

    // Rifles
    {
      id: 'bolt_rifle',
      name: 'Bolt Rifle',
      category: 'rifle',
      rarity: 'uncommon',
      icon: 'Weapons/Icon_Weapon_BoltRifle',
      info: ['Primary bolt rifle. Rifle Slam vs. robots, Rifle Trace vs. organics. Usable underwater.'],
      skillTier: 11,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: 'Alloy_Frame'
        }, 
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: 'Storage_Cylinder'
        }, 
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: 'Cooling_Radiator'
        }
      ],
      ammo: [
        {
          name: 'Rifle Slam',
          icon: 'Rifle_Slam',
          note: 'default'
        }, 
        {
          name: 'Rifle Trace',
          icon: 'Rifle_Trace',
          note: 'Tier 15'
        }, 
        {
          name: 'Rifle Tri',
          icon: 'Rifle_Tri',
          note: 'Tier 18'
        }
      ],
      foundAt: [
          {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 11'
        }
      ]
    },

    {
      id: 'electric_rifle',
      name: 'Electric Rifle',
      category: 'rifle',
      rarity: 'uncommon',
      icon: 'Weapons/Icon_Weapon_ElectricRifle',
      info: ['Long-range electric. Hold fire to charge for extra area damage. Not usable underwater.'],
      skillTier: 14,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '2',
          icon: 'Battery_Cell'
        }, 
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: 'Alloy_Frame'
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: 'Connector_Ports'
        }, 
        {
          name: 'Conduit Wiring',
          qty: '1',
          icon: 'Conduit_Wiring'
        }, 
        {
          name: 'Logic Chip',
          qty: '1',
          icon: 'Data_Storage_Chip'
        }, 
        {
          name: 'Nano Mesh',
          qty: '1',
          icon: 'Nano_Mesh'
        }, 
        {
          name: 'Magnetic Coil',
          qty: '1',
          icon: 'Magnetic_Coil'
        }
      ],
      ammo: [
        {
          name: 'Electric',
          icon: 'Electric_Ammo',
          note: 'rechargeable via cable or backpack'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 14'
        }
      ]
    },

    {
      id: 'flamethrower',
      name: 'Flamethrower',
      category: 'rifle',
      rarity: 'rare',
      icon: 'Weapons/Icon_Weapon_Flamethrower',
      info: ['Area fire damage — devastating vs. organic enemies. Fueled by petrol.'],
      skillTier: 17,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: 'Alloy_Frame'
        }, 
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: 'Storage_Cylinder'
        }, 
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: 'Cooling_Radiator'
        }, 
        {
          name: 'Nano Mesh',
          qty: '1',
          icon: 'Nano_Mesh'
        }
      ],
      ammo: [
        {
          name: 'Petrol',
          icon: 'imgi_Petrol',
          note: 'refuel via Fuel Cable or ONi backpack'
        }
      ],
      foundAt: [
          {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 17'
        }
      ]
    },

    {
      id: 'bolt_sniper',
      name: 'Bolt Sniper',
      category: 'rifle',
      rarity: 'rare',
      icon: 'Weapons/Icon_Weapon_BoltSniper',
      info: ['Longest range. Great for underwater enemies from ship. Overkill at close range.'],
      skillTier: 17,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: 'Alloy_Frame'
        }, 
        {
          name: 'Storage Cylinder',
          qty: '2',
          icon: 'Storage_Cylinder'
        }, 
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: 'Cooling_Radiator'
        }, 
        {
          name: 'Optical Lens',
          qty: '1',
          icon: 'Optical_Lens'
        }
      ],
      ammo: [
        {
          name: 'Sniper Lux',
          icon: 'Sniper_Lux',
          note: 'default'
        }, 
        {
          name: 'Sniper Rod',
          icon: 'Sniper_Rod'
        }, 
        {
          name: 'best underwater)',
          icon: 'best_underwater)'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 17'
        }
      ]
    },



    // Grenades
    {
      id: 'electric_grenade',
      icon: 'Grenades/Icon_Grenade_Electric',
      name: 'Electric Grenade',
      category: 'grenade',
      rarity: 'uncommon',
      info: ['Electric AoE explosion'],
      skillTier: 8,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: 'Alloy_Frame'
        },
        {
          name: 'Battery Cell',
          qty: '1',
          icon: 'Battery_Cell'
        }, 
        {
          name: 'Grenade Ignition',
          qty: '1',
          icon: 'Grenade_Ignition'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 8'
        }
      ]
    },

    {
      id: 'petrol_grenade',
      icon: 'Grenades/Icon_Grenade_Petrol',
      name: 'Petrol Grenade',
      category: 'grenade',
      rarity: 'uncommon',
      info: ['Fire AoE explosion'],
      skillTier: 9,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        },
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Grenade Ignition',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 9'
        }
      ]
    },

    {
      id: 'o2_orb',
      icon: 'Grenades/Icon_Grenade_Oxygen',
      name: 'O2 Orb',
      category: 'grenade',
      rarity: 'uncommon',
      info: ['Oxygen burst'],
      skillTier: 12,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        },
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Grenade Ignition',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 12'
        }
      ]
    },

    {
      id: 'big_fire_grenade',
      icon: 'Grenades/Icon_Grenade_PetrolBig',
      name: 'Big Fire Grenade',
      category: 'grenade',
      rarity: 'rare',
      info: ['Large flame AoE'],
      skillTier: 17,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        },
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Grenade Ignition',
          qty: '1',
          icon: ''
        },
        {
          name: 'Nano Mesh',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 17'
        }
      ]
    },
    {
      id: 'electric_big_explosive',
      icon: 'Grenades/Icon_Grenade_ElectricBig',
      name: 'Electric Big Explosive',
      category: 'grenade',
      rarity: 'rare',
      info: ['Large electric AoE'],
      skillTier: 17,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        },
        {
          name: 'Battery Cell',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Grenade Ignition',
          qty: '1',
          icon: ''
        },
        {
          name: 'Magnetic Coil',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 17'
        }
      ]
    },

    {
      id: 'o2_big_explosive',
      icon: 'Grenades/Icon_Grenade_OxygenBig',
      name: 'O2 Big Explosive',
      category: 'grenade',
      rarity: 'rare',
      info: ['Large O2 burst'],
      skillTier: 19,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        },
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Grenade Ignition',
          qty: '1',
          icon: ''
        },
        {
          name: 'Nano Mesh',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 19'
        }
      ]
    },



    // Ammo
    {
      id: 'pistol_flex',
      name: 'Pistol Flex',
      category: 'ammo',
      rarity: 'common',
      icon: 'Ammonition/Icon_Pistol_Flex',
      info: [
        'Standard, versatile bullets for general use',
        'Pistol Flex can be crafted in batches of 12.',
        'The recipe is automatically unlocked when the Bolt Pistol skill is acquired.'
      ],
      skillTier: 5,
      craftMats: [
        {
          name: 'Copper',
          qty: '2',
          icon: 'Materials/Copper'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 5'
        }
      ]
    },

    {
      id: 'pistol_shard',
      name: 'Pistol Shard',
      category: 'ammo',
      rarity: 'common',
      icon: 'Ammonition/Icon_Pistol_Shard',
      info: ['Specialized for soft targets with minor area damage.','Pistol Shard can be crafted in batches of 12.'],
      skillTier: 8,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Copper',
          qty: '1',
          icon: 'Materials/Copper'
        },
        {
          name: 'Glass',
          qty: '1',
          icon: 'Materials/Glass'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 8'
        }
      ]
    },

    {
      id: 'rifle_slam',
      name: 'Rifle Slam',
      category: 'ammo',
      rarity: 'common',
      icon: 'Ammonition/Icon_Rifle_Slam',
      info: [
        'High-Impact rounds for armored targets and versatile use.',
        'Rifle Slam can be crafted in batches of 30.',
        'The recipe is automatically unlocked when the Bolt Rifle skill is acquired.'
      ],
      skillTier: 9,
      craftMats: [
        {
          name: 'Iron',
          qty: '2',
          icon: 'Materials/Iron'
        },
        {
          name: 'Copper',
          qty: '2',
          icon: 'Materials/Copper'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 9'
        }
      ]
    },

    {
      id: 'rifle_trace',
      name: 'Rifle Trace',
      category: 'ammo',
      rarity: 'uncommon',
      icon: 'Ammonition/Icon_Rifle_Trace',
      info: ['Tracer rounds with fire damage','Rifle Trace can be crafted in batches of 30.'],
      skillTier: 15,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Iron',
          qty: '1',
          icon: 'Materials/Iron'
        },
        {
          name: 'Copper',
          qty: '1',
          icon: 'Materials/Copper'
        }, 
        {
          name: 'Aluminium',
          qty: '1',
          icon: 'Materials/Aluminium'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 15'
        }
      ]
    },

    {
      id: 'rifle_tri',
      name: 'Rifle Tri',
      category: 'ammo',
      rarity: 'rare',
      icon: 'Ammonition/Icon_Rifle_Tri',
      info: ['Short-circuiting rounds for electrical and non-living targets.','Rifle Tri can be crafted in batches of 30.'],
      skillTier: 18,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Iron',
          qty: '1',
          icon: 'Materials/Iron'
        },
        {
          name: 'Plastic',
          qty: '1',
          icon: 'Materials/Plastic'
        }, 
        {
          name: 'Aluminium',
          qty: '1',
          icon: 'Materials/Aluminium'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 18'
        }
      ]
    },

    {
      id: 'sniper_lux',
      name: 'Sniper Lux',
      category: 'ammo',
      rarity: 'uncommon',
      icon: 'Ammonition/Icon_Sniper_Lux',
      info: [
        'High-Impact rounds for armored targets and versatile use.',
        'Sniper Lux can be crafted in batches of 5.',
        'The recipe is automatically unlocked when the Bolt Sniper skill is acquired.'
      ],
      skillTier: 17,
      craftMats: [
        {
          name: 'Copper',
          qty: '2',
          icon: 'Materials/Copper'
        },
        {
          name: 'Gold',
          qty: '1',
          icon: 'Materials/Gold'
        }, 
        {
          name: 'Titanium',
          qty: '1',
          icon: 'Materials/Titanium'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 17'
        }
      ]
    },

    {
      id: 'sniper_rod',
      name: 'Sniper Rod',
      category: 'ammo',
      rarity: 'rare',
      icon: 'Ammonition/Icon_Sniper_Rod',
      info: ['Long-range, underwater-capable kinetic rounds','Sniper Rod can be crafted in batches of 5.'],
      skillTier: 19,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Iron',
          qty: '2',
          icon: 'Materials/Iron'
        },
        {
          name: 'Copper',
          qty: '1',
          icon: 'Materials/Copper'
        }, 
        {
          name: 'Titanium',
          qty: '1',
          icon: 'Materials/Titanium'
        },
        {
          name: 'Carbon Fiber',
          qty: '1',
          icon: 'Materials/CarbonFiber'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 19'
        }
      ]
    },




    // Attachments
    {
      id: 'suppressor',
      name: 'Suppressor Barrel',
      category: 'attachment',
      rarity: 'uncommon',
      icon: 'Attachments/silencer_icon',
      info: ['The Suppressor Barrel is a weapon attachment meant to reduce noise of the weapon as to not attract Enemies from a distance'],
      skillTier: 9,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Iron',
          qty: '2',
          icon: 'Materials/Iron'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 9'
        }
      ]
    },

    {
      id: 'breacher',
      name: 'Breacher Barrel',
      category: 'attachment',
      rarity: 'uncommon',
      icon: 'Attachments/actualbreacher_icon',
      info: ['The Breacher Barrel is a weapon attachment meant for short range that converts a bolt weapons single round into a shotgun-like scatter shot, sacrificing range for increased damage.'],
      skillTier: 9,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Aluminium',
          qty: '2',
          icon: 'Materials/Aluminium'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 9'
        }
      ]
    },

    {
      id: 'stabilizer',
      name: 'Stabilizer Barrel',
      category: 'attachment',
      rarity: 'uncommon',
      icon: 'Attachments/stabilizer_icon',
      info: ['The Stabilizer Barrel is a weapon attachment meant to reduce recoil for better accuracy under repaid fire conditions.'],
      skillTier: 14,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Silicon',
          qty: '1',
          icon: 'Materials/Silicon'
        },
        {
          name: 'Aluminium',
          qty: '1',
          icon: 'Materials/Aluminium'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 14'
        }
      ]
    },

    {
      id: 'extender',
      name: 'Extender Barrel',
      category: 'attachment',
      rarity: 'uncommon',
      icon: 'Attachments/extender_icon',
      info: ['Increases effective range'],
      skillTier: 17,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Carbon Fiber',
          qty: '2',
          icon: 'Materials/CarbonFiber'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 17'
        }
      ]
    },

    {
      id: 'laser_sight',
      name: 'Laser Sight',
      category: 'attachment',
      rarity: 'uncommon',
      icon: 'Attachments/Weapon_Laser_Pointer',
      info: ['Improves accuracy'],
      skillTier: 9,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Glass',
          qty: '1',
          icon: 'Materials/Glass'
        },
        {
          name: 'Plastic',
          qty: '1',
          icon: 'Materials/Plastic'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 9'
        }
      ]
    },

    {
      id: 'red_dot',
      name: 'Red Dot Sight',
      category: 'attachment',
      rarity: 'uncommon',
      icon: 'Attachments/Weapon_RedDot',
      info: ['Quick target acquisition'],
      skillTier: 10,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Aluminium',
          qty: '1',
          icon: 'Materials/Aluminium'
        },
        {
          name: 'Glass',
          qty: '1',
          icon: 'Materials/Glass'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 10'
        }
      ]
    },

    {
      id: 'optical_sight',
      name: 'Optical Sight',
      category: 'attachment',
      rarity: 'rare',
      icon: 'Attachments/Weapon_Scope_X2',
      info: ['Long-range scope for sniping'],
      skillTier: 16,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Carbon Fiber',
          qty: '1',
          icon: 'Materials/CarbonFiber'
        },
        {
          name: 'Glass',
          qty: '1',
          icon: 'Materials/Glass'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 16'
        }
      ]
    },

  ],

  // ── EQUIPMENT ─────────────────────────────────────────────────────
  equipment: [
    // Tools
    {
      id: 'repair_tool',
      name: 'Repair Tool',
      category: 'tool',
      rarity: 'common',
      icon: 'Equipment/Icon_RepairTool',
      info: ['Repair damaged modules and quest buildings. Default equipment.'],
      skillTier: 1,
    },

    {
      id: 'dismantle_tool',
      name: 'Dismantle Tool',
      category: 'tool',
      rarity: 'common',
      icon: 'Equipment/Icon_DismantleTool',
      info: ['Break down objects into scraps — essential for all crafting.'],
      skillTier: 2,
    },



    {
      id: 'field_binos',
      name: 'Field Binoculars',
      category: 'tool',
      rarity: 'uncommon',
      icon: 'Equipment/FieldBinoculars',
      info: ['Zoom view for scouting enemies and locations ahead.'],
      skillTier: 8,
      skillCost: '1 SP',
    },

    {
      id: 'night_sight',
      name: 'Night Sight',
      category: 'tool',
      rarity: 'rare',
      icon: 'Equipment/NightSight',
      info: ['Night vision — explore dark areas without Torch battery drain.'],
      skillTier: 9,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Optical Lens',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 9'
        }
      ]
    },

    {
      id: 'torch',
      name: 'Torch',
      category: 'light',
      rarity: 'common',
      icon: 'Equipment/Torch_Skill',
      info: ['Personal light source — drains internal battery. Default item.'],
      skillTier: 1,
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Optical Lens',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Default',
          icon: '⚙',
          color: '#4a7a8a',
          note: 'Tier 1'
        },
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 1'
        }
      ]
    },

    {
      id: 'lancer',
      name: 'Lancer',
      category: 'light',
      rarity: 'uncommon',
      icon: 'Equipment/Light_Lancer_Skill',
      info: ['Cutting tool for terrain and objects.'],
      skillTier: 6,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: 'Alloy_Frame'
        }, 
        {
          name: 'Battery Cell',
          qty: '1',
          icon: 'Battery_Cell'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 6'
        }
      ]
    },

    {
      id: 'nebula',
      name: 'Nebula',
      category: 'light',
      rarity: 'rare',
      icon: 'Equipment/Nebular_skill',
      info: ['Advanced scanning / detection tool.'],
      skillTier: 13,
      skillCost: '1 SP',
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 13'
        }
      ]
    },

    {
      id: 'eclipse',
      name: 'Eclipse',
      category: 'light',
      rarity: 'rare',
      icon: 'Equipment/Eclipse_skill',
      info: ['Advanced tool — precise function unknown.'],
      skillTier: 15,
      skillCost: '1 SP',
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 15'
        }
      ]
    },

    {
      id: 'glowstick',
      name: 'Glowstick',
      category: 'lightstick',
      rarity: 'common',
      icon: 'Equipment/Icon_Glowstick',
      info: ['Mark locations, small area illumination. Goes out when picked up.'],
      skillTier: 3,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Iron',
          qty: '1',
          icon: 'Materials/Iron'
        }, 
        {
          name: 'Glass',
          qty: '1',
          icon: 'Materials/Glass'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 3'
        }
      ]
    },

    {
      id: 'depth_glow',
      name: 'Depth Glow',
      category: 'lightstick',
      rarity: 'uncommon',
      icon: 'Equipment/Icon_DepthGlow',
      info: ['Ocean Glow.'],
      skillTier: 12,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Aluminium',
          qty: '1',
          icon: 'Materials/Aluminium'
        }, 
        {
          name: 'Glass',
          qty: '1',
          icon: 'Materials/Glass'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 12'
        }
      ]
    },

    {
      id: 'abyss_glow',
      name: 'Abyss Glow',
      category: 'lightstick',
      rarity: 'rare',
      icon: 'Equipment/Icon_AbyssGlow',
      info: ['Deep Ocean Glow.'],
      skillTier: 20,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Gold',
          qty: '1',
          icon: 'Materials/Gold'
        }, 
        {
          name: 'Glass',
          qty: '1',
          icon: 'Materials/Glass'
        }, 
        {
          name: 'Polyurethane',
          qty: '1',
          icon: 'Materials/Polyurethane'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 20'
        }
      ]
    },


    // Backpacks
    {
      id: 'oni_sparkcell',
      name: 'ONi SparkCell',
      category: 'backpack',
      rarity: 'common',
      icon: 'Equipment/T_Icon_Backpack_Electric_Small',
      info: ['Extra electric storage +100 Wh — refill Electric Pistol & battery.'],
      skillTier: 5,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '1',
          icon: 'Battery_Cell'
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: 'Alloy_Frame'
        }, 
        {
          name: 'Conduit Wiring',
          qty: '1',
          icon: 'Conduit_Wiring'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 5'
        }
      ]
    },


    {
      id: 'oni_fuellite',
      name: 'ONi FuelLite',
      category: 'backpack',
      rarity: 'common',
      icon: 'Equipment/T_Icon_Backpack_Electric_Medium',
      info: ['Extra petrol storage +100 — refill Flamer Pistol & Flamethrower.'],
      skillTier: 7,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: 'Storage_Cylinder'
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: 'Alloy_Frame'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 7'
        }
      ]
    },

    {
      id: 'oni_voltplus',
      name: 'ONi VoltPlus',
      category: 'backpack',
      rarity: 'uncommon',
      icon: 'Equipment/T_Icon_Backpack_Electric_Large',
      info: ['Extra electric storage +200 Wh.'],
      skillTier: 9,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '2',
          icon: 'Battery_Cell'
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: 'Alloy_Frame'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 9'
        }
      ]
    },

    {
      id: 'oni_petroflow',
      name: 'ONi PetroFlow',
      category: 'backpack',
      rarity: 'uncommon',
      icon: 'Equipment/T_Icon_Backpack_Petrol_Small',
      info: ['Extra petrol storage +200.'],
      skillTier: 11,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Storage Cylinder',
          qty: '2',
          icon: 'Storage_Cylinder'
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: 'Alloy_Frame'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 11'
        }
      ]
    },

    {
      id: 'oni_megacell',
      name: 'ONi MegaCell',
      category: 'backpack',
      rarity: 'rare',
      icon: 'Equipment/T_Icon_Backpack_Petrol_Medium',
      info: ['Extra electric storage +400 Wh — late game.'],
      skillTier: 16,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '3',
          icon: 'Battery_Cell'
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: 'Alloy_Frame'
        }, 
        {
          name: 'Titanium',
          qty: '1',
          icon: 'Materials/Titanium'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 16'
        }
      ]
    },

    {
      id: 'oni_petromax',
      name: 'ONi PetroMax',
      category: 'backpack',
      rarity: 'rare',
      icon: 'Equipment/T_Icon_Backpack_Petrol_Large',
      info: ['Extra petrol storage +400 — late game.'],
      skillTier: 16,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Storage Cylinder',
          qty: '3',
          icon: 'Storage_Cylinder'
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: 'Alloy_Frame'
        }, 
        {
          name: 'Titanium',
          qty: '1',
          icon: 'Materials/Titanium'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 16'
        }
      ]
    },




    // Consumables
    {
      id: 'consumable_bat',
      name: 'Consumable Battery',
      category: 'consumable',
      rarity: 'common',
      icon: 'Consumables/Icon_Consumable_BatterySmall',
      info: ['Emergency electric recharge (250 Wh). Single-use.'],
      skillTier: 3,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '1',
          icon: 'Battery_Cell'
        }, 
        {
          name: 'Fabric',
          qty: '1',
          icon: 'Materials/Fabric'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 3'
        }
      ]
    },

    {
      id: 'consumable_medbat',
      name: 'Consumable Med. Battery',
      category: 'consumable',
      rarity: 'uncommon',
      icon: 'Consumables/Icon_Consumable_BatteryMedium',
      info: ['Emergency electric recharge (medium). Single-use.'],
      skillTier: 8,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '2',
          icon: 'Battery_Cell'
        }, 
        {
          name: 'Fabric',
          qty: '1',
          icon: 'Materials/Fabric'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 8'
        }
      ]
    },

    {
      id: 'consumable_lgbat',
      name: 'Consumable Large Battery',
      category: 'consumable',
      rarity: 'rare',
      icon: 'Consumables/Icon_Consumable_BatteryLarge',
      info: ['Emergency electric recharge (large). Single-use.'],
      skillTier: 14,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '3',
          icon: 'Battery_Cell'
        }, 
        {
          name: 'Fabric',
          qty: '1',
          icon: 'Materials/Fabric'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 14'
        }
      ]
    },

    {
      id: 'charge_injector',
      name: 'Charge Injector',
      category: 'consumable',
      rarity: 'uncommon',
      icon: 'Consumables/ChargeInjector',
      info: ['Instant Vitality restore — equivalent of a heal kit.'],
      skillTier: 6,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '1',
          icon: 'Battery_Cell'
        }, 
        {
          name: 'Copper',
          qty: '1',
          icon: 'Materials/Copper'
        }, 
        {
          name: 'Plastic',
          qty: '1',
          icon: 'Materials/Plastic'
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 6'
        }
      ]
    },





    // Special
    {
      id: 'human_seed',
      name: 'Human Seed',
      category: 'special',
      rarity: 'unique',
      info: ['Grow humans at Lazarus Complex — core game objective.'],
      foundAt: [
        {
          source: 'Seed Vaults',
          icon: '📦',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'donk_pallet',
      name: 'DONK Pallet',
      category: 'vehicle',
      rarity: 'uncommon',
      icon: 'Modules/DonkPallet',
      info: ['Carry and transport heavy modules.'],
      skillTier: 5,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Iron',
          qty: '2',
          icon: 'Materials/Iron'
        }, 
        {
          name: 'Plastic',
          qty: '4',
          icon: 'Materials/Plastic'
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 5'
        }
      ]
    },
  ],




  // ── MODULES ───────────────────────────────────────────────────────
  modules: [

    // Power — solar
    {
      id: 'small_elec_gen',
      name: 'Lumi Min',
      category: 'solar',
      rarity: 'common',
      icon: 'Modules/LumiMin',
      info: ['Small solar panel array capable of generating 900 Wh in optimal conditions'],
      skillTier: 2,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Solar Cell',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 2'
        }
      ]
    },

    {
      id: 'mid_elec_gen',
      name: 'Lumi Mid',
      category: 'solar',
      rarity: 'uncommon',
      icon: 'Modules/LumiMid',
      info: ['Medium solar panel array capable of generating 4000 Wh in optimal conditions.'],
      skillTier:6,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Solar Cell',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        },
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 6'
        }
      ]
    },

    {
      id: 'large_elec_gen',
      name: 'Lumi Max',
      category: 'solar',
      rarity: 'uncommon',
      icon: 'Modules/LumiMax',
      info: ['Large solar panel array with sun sensor capable of generating 8000 Wh in optimal conditions'],
      skillTier: 13,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Solar Cell',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        },
        {
          name: 'Magnetic Coil',
          qty: '1',
          icon: ''
        },
        {
          name: 'Alloy Frame',
          qty: '3',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 13'
        }
      ]
    },


    // Power — wind
    {
      id: 'whisper',
      name: 'Whisper (Wind Turbine)',
      category: 'wind',
      rarity: 'common',
      icon: 'Modules/Whisper',
      info: ['Compact, entry-level wind-power generator for basic needs.','Once placed, the Whisper will produce up to 1 kW.'],
      skillTier: 3,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Turbine Blade',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }
      ],      
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 3'
        }
      ]
    },

    {
      id: 'cyclone',
      name: 'Cyclone (Wind Turbine)',
      category: 'wind',
      rarity: 'uncommon',
      icon: 'Modules/Cyclone',
      info: ['Advanced wind-power generator optimized for higher efficiency and greater resilience.','Once placed, the Cyclone will produce up to 10 kW.'],
      skillTier: 8,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Turbine Blade',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        },
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 8'
        }
      ]
    },

    {
      id: 'typhoon',
      name: 'Typhoon (Wind Turbine)',
      category: 'wind',
      rarity: 'rare',
      icon: 'Modules/Typhoon',
      info: ['High-capacity, rugged wind-power generator with extreme weather durability, delivering peak energy output.','Once placed, the Typhoon will produce up to 1 19kW.'],
      skillTier: 14,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Turbine Blade',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        },
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        },
        {
          name: 'Alloy Frame',
          qty: '3',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 14'
        }
      ]
    },


    // Generators
    {
      id: 'small_petrol_gen',
      name: 'Small Petrol Generator',
      category: 'generator',
      rarity: 'uncommon',
      icon: 'Modules/SmallPetrolGenerator',
      info: [
        'Input -> Petrol: 2000 L/hr',
        'Output -> Electricity: 10 kW',
        'Output -> Carbon dioxide: 10000 L/hr'
      ],
      skillTier: 5,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        },
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        },
        {
          name: 'Compression Pump',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 5'
        }
      ]
    },

    {
      id: 'petrol_gen',
      name: 'Petrol Generator',
      category: 'generator',
      rarity: 'rare',
      icon: 'Modules/PetrolGenerator',
      info: [
        'Input -> Petrol: 6000 L/hr',
        'Output -> Electricity: 30 kW',
        'Output -> Carbon dioxide: 25000 L/hr'
      ],
      skillTier: 15,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '4',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '4',
          icon: ''
        }, 
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        },
        {
          name: 'Compression Pump',
          qty: '1',
          icon: ''
        },
        {
          name: 'Advanced Alloy Mesh',
          qty: '2',
          icon: ''
        },
        {
          name: 'Power Core',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 15'
        }
      ]
    },



    //Converter
    {
      id: 'small_oxy_gen',
      name: 'Small Oxygen Generator',
      category: 'converter',
      rarity: 'rare',
      icon: 'Modules/SmallOxygenGenerator',
      info: [
        'Input -> Electricity: 10 kW',
        'Output -> Oxygen: 20000 L/hr'
      ],
      skillTier: 12,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '3',
          icon: ''
        }, 
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        },
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        },
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        },
        {
          name: 'Power Core',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 12'
        }
      ]
    },


    {
      id: 'distil_tower',
      name: 'Distillation Tower',
      category: 'converter',
      rarity: 'unique',
      icon: 'Modules/DistillationTower',
      info: [
        'Input -> Crude Oil - 20,000 L/hr',
        'Input -> Electricity - 60 kW',
        'Output -> Diesel - 36,000 L/hr',
        'Output -> Petrol - 3,600 L/hr',
        'Output -> Plastic - ??',
      ],
      skillTier: 20,
      skillCost: '4 SP',
      craftMats: [
        {
          name: 'Display Screen',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '4',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '6',
          icon: ''
        },
        {
          name: 'Cooling Radiator',
          qty: '2',
          icon: ''
        },
        {
          name: 'Filtering System',
          qty: '2',
          icon: ''
        },
        {
          name: 'Compression Pump',
          qty: '2',
          icon: ''
        },
        {
          name: 'Advanced Alloy Mesh',
          qty: '4',
          icon: ''
        },
        {
          name: 'Power Core',
          qty: '1',
          icon: ''
        },
        {
          name: 'Isotop Stabilizer',
          qty: '1',
          icon: ''
        },
        {
          name: 'Storage Matrix',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 20'
        }
      ]
    },

    {
      id: 'diesel_converter',
      name: 'Diesel Converter',
      category: 'converter',
      rarity: 'uncommon',
      icon: 'Modules/DieselConverter',
      info: [
        'Each unit of material can produce 4–7.6 liters of diesel, with a maximum production rate of 14,400 L/h.',
        'Bio Seaweed => 4L of diesel',
        'Bio Waste => 4L of diesel',
        'Bio Organic => 4L of diesel',
        'Bio Light => 4L of diesel',
        'Bio Dark => 4L of diesel',
        'Bio Flesh => 7.6L of diesel'
      ],
      skillTier: 4,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Compression Pump',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        },
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 6'
        }
      ]
    },

    {
      id: 'petrol_converter',
      name: 'Petrol Converter',
      category: 'converter',
      rarity: 'uncommon',
      icon: 'Modules/PetrolConverter',
      info: [
        'Each unit of material can produce 2–3.8 liters of Petrol, with a maximum production rate of 7,200 L/h.',
        'Bio Seaweed => 2L of diesel',
        'Bio Waste => 2L of diesel',
        'Bio Organic => 2L of diesel',
        'Bio Light => 2L of diesel',
        'Bio Dark => 2L of diesel',
        'Bio Flesh => 3.8L of diesel'
      ],
      skillTier: 5,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '3',
          icon: ''
        }, 
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        },
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        },
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        },
        {
          name: 'Power Core',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 5'
        }
      ]
    },

    {
      id: 'dehimidifier',
      name: 'Dehemidifier',
      category: 'converter',
      rarity: 'uncommon',
      icon: 'Modules/Dehemidifier',
      info: [
        'Geathers Water by condensing airborne moisture from the enviroment'
      ],
      skillTier: 11,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        },
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 6'
        }
      ]
    },

    {
      id: 'co2_convertertank',
      name: 'Co2 Converter Tank',
      category: 'converter',
      rarity: 'unique',
      icon: 'Modules/Co2ConverterTank',
      info: [
        'Pressurized CO2 unit designed for conversion workflows.',
        'When supplied with electrical input, it activates internal processing and outputs carbon fiber'
      ],
      skillTier: 22,
      skillCost: '4 SP',
      craftMats: [
        {
          name: 'Advanced Alloy Mesh',
          qty: '4',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '3',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '4',
          icon: ''
        },
        {
          name: 'Storage Cylinder',
          qty: '2',
          icon: ''
        },
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        },
        {
          name: 'Cooling Radiator',
          qty: '2',
          icon: ''
        },
        {
          name: 'Compression Pump',
          qty: '2',
          icon: ''
        },
        {
          name: 'Storage Matrix',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 22'
        }
      ]
    },

    {
      id: 'water_purifier',
      name: 'Water Purifier',
      category: 'converter',
      rarity: 'uncommon',
      icon: 'Modules/WaterPurifier',
      info: [
        'Input -> Electricity: 8.0 kW',
        'Input -> Salt Water: 10,000 L/hr',
        'Output -> Fresh Water: 10,000 L/hr'
      ],
      skillTier: 7,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Compression Pump',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '3',
          icon: ''
        },
        {
          name: 'Filtering Sytem',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 7'
        }
      ]
    },

    {
      id: 'sabatier',
      name: 'Sabatier Reactor',
      category: 'converter',
      rarity: 'unique',
      icon: 'Modules/SabatierReactor',
      info: [
        'Input -> Electricity: 60 kW',
        'Input -> Carbon Dioxide: MAX 60000 L/hr',
        'Input -> Fresh Water: 6000 L/hr',
        'Output -> Oxygen: 72000 L/hr',
        'Output -> Methane: 60000 L/hr (Same as Carbon Dioxide)'
      ],
      skillTier: 16,
      skillCost: '4 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '8',
          icon: ''
        }, 
        {
          name: 'Connector Port',
          qty: '8',
          icon: ''
        }, 
        {
          name: 'Cooling Radiator',
          qty: '4',
          icon: ''
        },
        {
          name: 'Filtering System',
          qty: '2',
          icon: ''
        },
        {
          name: 'Isotop Stabilizer',
          qty: '1',
          icon: ''
        },
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        },
        {
          name: 'Nano Mesh',
          qty: '3',
          icon: ''
        },
        {
          name: 'Power Core',
          qty: '1',
          icon: ''
        },
        {
          name: 'Storage Calinder',
          qty: '4',
          icon: ''
        },
        {
          name: 'Storage Matrix',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 16'
        }
      ]
    },


    // Storage — boxes
    {
      id: 'durapack',
      name: 'DuraPack',
      category: 'boxes',
      rarity: 'common',
      icon: 'Items/DuraPack',
      info: [
        'The DuraPack is the first storage container the player will be able to construct.',
        'It can hold up to 50kg of any raw material.'
      ],
      skillTier: 3,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Display Screen',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 3'
        }
      ]
    },

    {
      id: 'stortite',
      name: 'StorTite',
      category: 'boxes',
      rarity: 'common',
      icon: 'Items/StorTite',
      info: [
        'The StorTite is the second storage container the player will be able to construct.',
        'It can hold up to 100kg of any raw material.'
      ],
      skillTier: 6,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '3',
          icon: ''
        }, 
        {
          name: 'Display Screen',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 6'
        }
      ]
    },

    {
      id: 'fortihold',
      name: 'FortiHold',
      category: 'boxes',
      rarity: 'common',
      icon: 'Items/FortiHold',
      info: [
        'The FortiHold is the third storage container the player will be able to construct.',
        'It can hold up to 200kg of any raw material and is currently the largest material storage container available in the game.'
      ],
      skillTier: 11,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '4',
          icon: ''
        }, 
        {
          name: 'Display Screen',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 11'
        }
      ]
    },


    // Storage
    {
      id: 'medium_battery',
      name: 'Medium Battery',
      category: 'storage',
      rarity: 'uncommon',
      icon: 'Modules/MediumBattery',
      info: ['The Medium Battery is a reusable electrical power storage container capable of holding up to 6kWh.'],
      skillTier: 8,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Battery Cell',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '3',
          icon: ''
        },
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 8'
        }
      ]
    },

    {
      id: 'diesel_tank',
      name: 'Diesel Tank',
      category: 'storage',
      rarity: 'uncommon',
      icon: 'Modules/DieselTank',
      info: ['The Diesel Tank is a reusable fuel storage container capable of holding up to 2000L.'],
      skillTier: 8,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        },
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 8'
        }
      ]
    },

    {
      id: 'petrol_tank',
      name: 'Petrol Tank',
      category: 'storage',
      rarity: 'uncommon',
      icon: 'Modules/PetrolTank',
      info: ['The Petrol Tank is a reusable fuel storage container capable of holding up to 2000L.'],
      skillTier: 10,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        },
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 10'
        }
      ]
    },

    {
      id: 'saltwater_tank',
      name: 'Salt Water Tank',
      category: 'storage',
      rarity: 'uncommon',
      icon: 'Modules/SaltWaterTank',
      info: ['The Salt Water Tank is a reusablesaltwater storage container capable of holding up to 2000L.'],
      skillTier: '?',
      skillCost: '?',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },

    {
      id: 'water_tank',
      name: 'Water Tank',
      category: 'storage',
      rarity: 'uncommon',
      icon: 'Modules/WaterTank',
      info: ['The Water Tank is a reusable Freshwater storage container capable of holding up to 2000L.'],
      skillTier: 11,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        },
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 11'
        }
      ]
    },

    {
      id: 'methane_tank',
      name: 'Methane Tank',
      category: 'storage',
      rarity: 'rare',
      icon: 'Modules/MethaneTank',
      info: ['The Methane Tank is a reusable gas storage container capable of holding up to 6000L.'],
      skillTier: 16,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Advanced Alloy Mesh',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '6',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        },
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        },
        {
          name: 'Storage Cylinder',
          qty: '2',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 16'
        }
      ]
    },

    {
      id: 'oxygen_tank',
      name: 'Oxygen Tank',
      category: 'storage',
      rarity: 'uncommon',
      icon: 'Modules/OxygenTank',
      info: ['The Oxygen Tank is a reusable gas storage container capable of holding up to 9000L.'],
      skillTier: 16,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Advanced Alloy Mesh',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '6',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        },
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        },
        {
          name: 'Storage Cylinder',
          qty: '4',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 16'
        }
      ]
    },

    {
      id: 'oil_tank',
      name: 'Oil Tank',
      category: 'storage',
      rarity: 'rare',
      icon: 'Modules/OilTank',
      info: ['The Oil Tank is a reusable fuel storage container capable of holding up to 2000L.'],
      skillTier: 20,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        },
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        },
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 20'
        }
      ]
    },

    {
      id: 'co2_tank',
      name: 'Co2 Tank',
      category: 'storage',
      rarity: 'rare',
      icon: 'Modules/Co2Tank',
      info: ['The CO2 Tank is a reusable storage container capable of holding up to 6000L.'],
      skillTier: 16,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        },
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        },
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 16'
        }
      ]
    },




    // Small Batteries

    {
      id: 'batterie_singleuse',
      name: 'Battery SingleUse',
      category: 'singleuse',
      rarity: 'common',
      icon: 'Modules/Battery_SingleUse',
      info: ['500 Wh'],
      skillTier: 3,
      weight:10,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 3'
        }
      ]
    },


    {
      id: 'diesel_singleuse',
      name: 'Diesel SimgleUse',
      category: 'singleuse',
      rarity: 'common',
      icon: 'Modules/DieselSingleUse',
      info: ['200 L'],
      skillTier: 4,
      weight:10,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 4'
        }
      ]
    },

    {
      id: 'petrol_singleuse',
      name: 'Petrol SimgleUse',
      category: 'singleuse',
      rarity: 'uncommon',
      icon: 'Modules/PetrolSimgleUse',
      info: ['200 L'],
      skillTier: 5,
      weight:10,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 5'
        }
      ]
    },

    {
      id: 'freshwater_singleuse',
      name: 'FreshWater SingleUse',
      category: 'singleuse',
      rarity: 'uncommon',
      icon: 'Modules/FreshWaterSingleUse',
      info: ['200 L'],
      skillTier: 7,
      weight:10,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 7'
        }
      ]
    },

    {
      id: 'oxygen_singleuse',
      name: 'Oxygen SingleUse',
      category: 'singleuse',
      rarity: 'uncommon',
      icon: 'Modules/OxygenSingleUse',
      info: ['200 L'],
      skillTier: 12,
      weight:10,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 12'
        }
      ]
    },



    // barrels

    {
      id: 'batterie_barrel',
      name: 'Battery Barrel',
      category: 'barrel',
      rarity: '??',
      icon: 'Modules/BatterieBarrel',
      info: ['?? Wh'],
      skillTier: '??',
      skillCost: '?? SP',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },




    {
      id: 'diesel_barrel',
      name: 'Diesel Barrel',
      category: 'barrel',
      rarity: '??',
      icon: 'Modules/DieselBarrel',
      info: ['?? L'],
      skillTier: '??',
      skillCost: '?? SP',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },




    {
      id: 'petrol_barrel',
      name: 'Petrol Barrel',
      category: 'barrel',
      rarity: '??',
      icon: 'Modules/PetrolBarrel',
      info: ['?? L'],
      skillTier: '??',
      skillCost: '?? SP',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },



    {
      id: 'freshwater_barrel',
      name: 'FreshWater Barrel',
      category: 'barrel',
      rarity: '??',
      icon: 'Modules/FreshWaterBarrel',
      info: ['?? L'],
      skillTier: '??',
      skillCost: '?? SP',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },

    {
      id: 'saltwater_barrel',
      name: 'SaltWater Barrel',
      category: 'barrel',
      rarity: '??',
      icon: 'Modules/SaltWaterBarrel',
      info: ['?? L'],
      skillTier: '??',
      skillCost: '?? SP',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },

    {
      id: 'oil_barrel',
      name: 'Oil Barrel',
      category: 'barrel',
      rarity: '??',
      icon: 'Modules/OilBarrel',
      info: ['?? L'],
      skillTier: '??',
      skillCost: '?? SP',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },

    {
      id: 'methane_barrel',
      name: 'Methane Barrel',
      category: 'barrel',
      rarity: '??',
      icon: 'Modules/MethaneBarrel',
      info: ['?? L'],
      skillTier: '??',
      skillCost: '?? SP',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },



    {
      id: 'oxygen_barrel',
      name: 'Oxygen Barrel',
      category: 'barrel',
      rarity: '??',
      icon: 'Modules/OxygenBarrel',
      info: ['?? L'],
      skillTier: '??',
      skillCost: '?? SP',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },



    // lights

    {
      id: 'standing_light',
      name: 'Standing Light',
      category: 'light',
      rarity: 'common',
      icon: 'Modules/StandingLight',
      info: ['Basic Standing Light.'],
      skillTier: 4,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Battery Cell',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        },
        {
          name: 'Optical Lens',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 4'
        }
      ]
    },

    {
      id: 'advanced_light',
      name: 'Advanced Light',
      category: 'light',
      rarity: 'common',
      icon: 'Modules/AdvancedLight',
      info: ['Advanced Standing Light.'],
      skillTier: 9,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Battery Cell',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        },
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        },
        {
          name: 'Optical Lens',
          qty: '2',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 9'
        }
      ]
    },


    {
      id: 'double_light',
      name: 'Double Light',
      category: 'light',
      rarity: 'common',
      icon: 'Modules/DoubleLight',
      info: ['Double Standing Light.'],
      skillTier: 16,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '3',
          icon: ''
        }, 
        {
          name: 'Battery Cell',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        },
        {
          name: 'Logic Chip',
          qty: '2',
          icon: ''
        },
        {
          name: 'Optical Lens',
          qty: '4',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 16'
        }
      ]
    },

    {
      id: '360_light',
      name: '360° Light',
      category: 'light',
      rarity: 'common',
      icon: 'Modules/360Light',
      info: ['360 Standing Light.'],
      skillTier: 13,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Battery Cell',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        },
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        },
        {
          name: 'Optical Lens',
          qty: '2',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 13'
        }
      ]
    },



    // Machines
    {
      id: 'fabricator',
      name: 'Fabricator',
      category: 'machine',
      rarity: 'uncommon',
      icon: 'Modules/Fabricator',
      info: ['Core crafting station — place anywhere for a remote base.'],
      skillTier: 4,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Display Screen',
          qty: '1',
          icon: ''
        },
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 4'
        }, 
        {
          source: 'Found',
          icon: '🔍',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'recycler',
      name: 'Recycler',
      category: 'machine',
      rarity: 'common',
      icon: 'Modules/Recycler',
      info: ['Converts scraps/items → raw materials. Always near Fabricators.'],
      skillTier: 4,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '3',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 4'
        }, 
        {
          source: 'Found',
          icon: '🔍',
          color: '#4a7a8a'
        }
      ]
    },


    {
      id: 'food_processor',
      name: 'Food Processor',
      category: 'machine',
      rarity: 'uncommon',
      icon: 'Modules/FoodProcessor',
      info: ['Crafts food items for human growth.'],
      skillTier: 10,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Conduit Wiring',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        },
        {
          name: 'Display Screen',
          qty: '1',
          icon: ''
        },
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 10'
        }
      ]
    },

    {
      id: 'soilforge',
      name: 'Soilforge',
      category: 'machine',
      rarity: 'rare',
      icon: 'Modules/Soilforge',
      info: ['Processes Bio into food materials.'],
      skillTier: 10,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Compression Pump',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        },
        {
          name: 'Cooling radiator',
          qty: '2',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 10'
        }
      ]
    },

    {
      id: 'soilforge_prime',
      name: 'Soilforge Prime',
      category: 'machine',
      rarity: 'unique',
      icon: 'Modules/SoilforgePrime',
      info: ['Processes Bio  into food materials & Methane.'],
      skillTier: 21,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Compression Pump',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        },
        {
          name: 'Cooling Radiator',
          qty: '2',
          icon: ''
        },
        {
          name: 'Power Core',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 21'
        }
      ]
    },

    {
      id: 'echo_horn',
      name: 'Echo Horn',
      category: 'machine',
      rarity: 'uncommon',
      icon: 'Modules/EchoHorn',
      info: ['Horn / detection device for Day/Night.'],
      skillTier: 6,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 6'
        }
      ]
    },

    

    {
      id: 'moring_port',
      name: 'Mooring Port',
      category: 'machine',
      rarity: 'uncommon',
      icon: 'Modules/MooringPort',
      info: ['Radar / detection device for scanning areas.'],
      skillTier: 4,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Iron',
          qty: '2',
          icon: 'Materials/Iron'
        }, 
        {
          name: 'Copper',
          qty: '1',
          icon: 'Materials/Copper'
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 4'
        }
      ]
    },


    {
      id: 'hull_stabilizer',
      name: 'Hull Stabilizer',
      category: 'machine',
      rarity: 'common',
      icon: 'Modules/HullStabilizer',
      info: [
        'Designed to significantly reduce the side-to-side rolling motion of a Vessel caused by Waves',
        'Input => Electricity 8 kW'
      ],
      skillTier: 6,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '3',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 6'
        }
      ]
    },

    {
      id: 'fork_lift',
      name: 'Forklift',
      category: 'machine',
      rarity: 'uncommon',
      icon: 'Modules/Forklift',
      info: ['Internal-combustion heavy duty forklift for horizontal and vertical movement'],
      skillTier: 5,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Conduit Wiring',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        },
        {
          name: 'Display Screen',
          qty: '1',
          icon: ''
        },
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        },
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 5'
        }
      ]
    },


    {
      id: 'lazarus_pod',
      name: 'Lazarus Pod',
      category: 'machine',
      rarity: 'rare',
      icon: 'Modules/LazarusPod',
      info: ['Safety containers for raising human seed.'],
      skillTier: 12,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Data Storage Chip',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Display Screen',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        },
        {
          name: 'Nano Mesh',
          qty: '1',
          icon: ''
        },
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 12'
        }, 
        {
          source: 'Found',
          icon: '🔍',
          color: '#4a7a8a'
        }
      ]
    },

    {
      id: 'farming_bed',
      name: 'Farming Bed',
      category: 'machine',
      rarity: 'common',
      icon: 'Modules/FarmingBed',
      info: ['Small farming bed used to grow vegitation.'],
      skillTier: 19,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '4',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 19'
        }
      ]
    },

    {
      id: 'farming_bedv2',
      name: 'Farming Bed V2',
      category: 'machine',
      rarity: 'uncommon',
      icon: 'Modules/FarmingBedv2',
      info: ['Grows food materials for Food Processor.'],
      skillTier: 24,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Connector Ports',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '2',
          icon: ''
        }, 
        {
          name: 'Filtering System',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 24'
        }
      ]
    },

    {
      id: 'fill_station',
      name: 'Fill Station',
      category: 'machine',
      rarity: 'common',
      icon: 'Modules/FillStation',
      info: ['??? ??? ???.'],
      skillTier: '??',
      skillCost: '?? SP',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Build Menu',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },


    // Engines

    {
      id: 'elctric_cylinder_v1',
      name: 'Electric Cylinder (V1)',
      category: 'engines',
      rarity: 'uncommon',
      icon: 'Modules/ElectricCylinderV1',
      info: [],
      skillTier: 2,
      skillCost: '0 SP',
      craftMats: [
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Battery Cell',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 2'
        }
      ]
    },

    {
      id: 'elctric_cylinder_v2',
      name: 'Electric Cylinder (V2',
      category: 'engines',
      rarity: 'common',
      icon: 'Modules/ElectricCylinderV2',
      info: [],
      skillTier: 6,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Battery Cell',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 6'
        }
      ]
    },

    {
      id: 'elctric_cylinder_v3',
      name: 'Electric Cylinder (V3)',
      category: 'engines',
      rarity: 'rare',
      icon: 'Modules/ElectricCylinderV3',
      info: [],
      skillTier: 13,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Logic Chip',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Power Core',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 13'
        }
      ]
    },

    {
      id: 'elctric_cylinder_eco',
      name: 'Electric Cylinder (Eco)',
      category: 'engines',
      rarity: 'common',
      icon: 'Modules/ElectricCylinderEco',
      info: [],
      skillTier: '??',
      skillCost: '?? SP',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },


    {
      id: 'diesel_cylinder_v1',
      name: 'Diesel Cylinder (V1)',
      category: 'engines',
      rarity: 'uncommon',
      icon: 'Modules/DieselCylinderV1',
      info: [],
      skillTier: 3,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 3'
        }
      ]
    },

    {
      id: 'diesel_cylinder_v2',
      name: 'Diesel Cylinder (V2',
      category: 'engines',
      rarity: 'common',
      icon: 'Modules/DieselCylinderV2',
      info: [],
      skillTier: 6,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 6'
        }
      ]
    },

    {
      id: 'diesel_cylinder_v3',
      name: 'Diesel Cylinder (V3)',
      category: 'engines',
      rarity: 'rare',
      icon: 'Modules/DieselCylinderV3',
      info: [],
      skillTier: 13,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Power Core',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 13'
        }
      ]
    },

    {
      id: 'diesel_cylinder_eco',
      name: 'Diesel Cylinder (Eco)',
      category: 'engines',
      rarity: 'common',
      icon: 'Modules/DieselCylinderEco',
      info: [],
      skillTier: '??',
      skillCost: '?? SP',
      craftMats: [
        {
          name: '??',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier ??'
        }
      ]
    },



    {
      id: 'petrol_cylinder_v1',
      name: 'Petrol Cylinder (V1)',
      category: 'engines',
      rarity: 'uncommon',
      icon: 'Modules/PetrolCylinderV1',
      info: [],
      skillTier: 13,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 13'
        }
      ]
    },

    {
      id: 'petrol_cylinder_v2',
      name: 'Petrol Cylinder (V2',
      category: 'engines',
      rarity: 'common',
      icon: 'Modules/PetrolCylinderV2',
      info: [],
      skillTier: 18,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Storage Cylinder',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 18'
        }
      ]
    },

    {
      id: 'petrol_cylinder_v3',
      name: 'Petrol Cylinder (V3)',
      category: 'engines',
      rarity: 'rare',
      icon: 'Modules/PetrolCylinderV3',
      info: [],
      skillTier: 22,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Cooling Radiator',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Power Core',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 22'
        }
      ]
    },



    // Production Enhancers
    {
      id: 'efficiency_matrix',
      name: 'Efficiency Matrix',
      category: 'enhancer',
      rarity: 'common',
      icon: 'Enhancers/EfficiencyMatrix',
      info: ['-10% Water','-10% Fuel','-10% Gas','-10% Electricity'],
      skillTier: 8,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Conduit Wiring',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 8'
        }
      ]
    },

    {
      id: 'voltage_min',
      name: 'Voltage Minimizer',
      category: 'enhancer',
      rarity: 'common',
      icon: 'Enhancers/VoltageMinimizer',
      info: ['-40% Speed','-80% Electricity'],
      skillTier: 9,
      skillCost: '1 SP',
      craftMats: [
        {
          name: 'Conduit Wiring',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 9'
        }
      ]
    },

    {
      id: 'conservation_coil',
      name: 'Conservation Coil',
      category: 'enhancer',
      rarity: 'uncommon',
      icon: 'Enhancers/ConservationCoil',
      info: ['-60% Water','-60% Fuel','-60% Gas','-60% Electricity','-50% Speed'],
      skillTier: 12,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Data Storage Chip',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 12'
        }
      ]
    },

    {
      id: 'resource_opt',
      name: 'Resource Optimizer',
      category: 'enhancer',
      rarity: 'uncommon',
      icon: 'Enhancers/ResourceOptimizer',
      info: ['-30% Water','-30% Fuel','-30% Gas','-50% Electricity','-30% Speed'],
      skillTier: 13,
      skillCost: '2 SP',
      craftMats: [
        {
          name: 'Data Storage Chip',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Alloy Frame',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 13'
        }
      ]
    },

    {
      id: 'pulse_timing',
      name: 'Pulse Timing Regulator',
      category: 'enhancer',
      rarity: 'rare',
      icon: 'Enhancers/PulseTimingRegulator',
      info: ['+25% Electricity','+60% Speed'],
      skillTier: 17,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Data Storage Chip',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 17'
        }
      ]
    },

    {
      id: 'flash_array',
      name: 'Flash Array',
      category: 'enhancer',
      rarity: 'rare',
      icon: 'Enhancers/FlashArray',
      info: ['+50% Electricity','+100% Speed'],
      skillTier: 18,
      skillCost: '3 SP',
      craftMats: [
        {
          name: 'Data Storage Chip',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 18'
        }
      ]
    },

    {
      id: 'entanglement_lens',
      name: 'Entanglement Lens',
      category: 'enhancer',
      rarity: 'unique',
      icon: 'Enhancers/EntanglementLens',
      info: ['An advanced quantum lens increases theprobability of doubling outputs by amplifying entangled particle'],
      skillTier: 21,
      skillCost: '4 SP',
      craftMats: [
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Reactive Core',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 21'
        }
      ]
    },

    {
      id: 'quantum_dup',
      name: 'Quantum Duplicator',
      category: 'enhancer',
      rarity: 'unique',
      icon: 'Enhancers/QuantumDuplicator',
      info: ['Connects fabric-of-time uncertainties, occasionally doubling production outputs through quantum entangelment'],
      skillTier: 21,
      skillCost: '4 SP',
      craftMats: [
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Reactive Core',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 21'
        }
      ]
    },

    {
      id: 'sonar_extender',
      name: 'Deep Scan-500',
      category: 'enhancer',
      rarity: 'unique',
      icon: 'Enhancers/DeepScan500',
      info: ['A Deep-Scan Add-On for the Scan-50 Sonar','Extending Sub-Bottom imaging to reveal hidden voids and structures'],
      skillTier: 23,
      skillCost: '4 SP',
      craftMats: [
        {
          name: 'Advanced Alloy Mesh',
          qty: '1',
          icon: ''
        }, 
        {
          name: 'Reactive Core',
          qty: '1',
          icon: ''
        }
      ],
      foundAt: [
        {
          source: 'Fabricator',
          icon: '🔧',
          color: '#00d4aa',
          note: 'Tier 23'
        }
      ]
    },

  ],
};

window.TLC_ITEM_INDEX = TLC_ITEM_INDEX;
