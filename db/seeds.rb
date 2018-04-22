# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create( { name: 'Star Wars' }, { name: 'Lord of the Rings' } )
#   Character.create(name: 'Luke', movie: movies.first)
#mod array: str dex con int wis cha speed darkvision misc
Dndclass.create(
  name: 'barbarian',
  description: 'Barbarians are...',
  #saving throw array: str dex con int wis cha speed darkvision misc
  savingthrows: "{'strSave': 2,  'conSave': 2}",
  proficiencies: '{"weapons": "simple weapons & martial weapons", "tools": "none", "armor":"light armor & medium armor & shields"}',
  hitpointbase: 12,
  hitpointmodifier: 12,
  classfeatureName: 'Rage',
  classfeatureBonus: '2',
  skills: 'animal handling & athletics & intimidation & nature & perception & survival '
)

Dndclass.create(
  name: 'sorcerer',
  description: 'wooosh, fire, lots of fire...',
  proficiencies: '{"weapons": "Daggers darts & slings & quarterstaffs & light crossbows", "tools": "none", "armor":"none"}',
  hitpointbase:  6,
  hitpointmodifier: 6,
  spells: "",
  features: "{'conSave': 2,  'chaSave': 2}",
  skills: 'arcana & Deception & Insight & Intimidation & Persuasion & Religion'
)

Dndclass.create(
  name: 'bard',
  description: 'it is a bard.',
  proficiencies: '{"weapons": "Daggers darts & slings & quarterstaffs & light crossbows", "tools": "none", "armor":"none"}',
  hitpointbase:  6,
  hitpointmodifier: 6,
  spells: "",
  features: "{'conSave': 2,  'chaSave': 2}",
  skills: 'arcana & Deception & Insight & Intimidation & Persuasion & Religion'
)

Dndrace.create(name: 'Dragonborn',
              description: "Kin to dragons, dragonborn resemble humanoid dragons, without wings or tail and standing erect. They tend to make excellent warriors.",
              image: "#",
              #mod array: str dex con int wis cha speed darkvision misc
              raceMods: "2,0,0,0,0,1,30,0,nil",
              hasSubRaces: true,
              subRaces: "Black, 0,0,0,0,0,0,0,0,'Acid Damage Resistance' |
                        Blue, 0,0,0,0,0,0,0,0, 'Lightning Damage Resistance'|
                        Brass, 0,0,0,0,0,0,0,0, 'Fire Damage Resistance' |
                        Bronze, 0,0,0,0,0,0,0,0, 'Lightning Damage Resistance' |
                        Copper, 0,0,0,0,0,0,0,0, 'Acid Damage Resistance' |
                        Gold , 0,0,0,0,0,0,0,0, 'Fire Damage Resistance' |
                        Green, 0,0,0,0,0,0,0,0, 'Poison Damage Resistance'|
                        Silver, 0,0,0,0,0,0,0,0, 'Cold Damage Resistance' |
                        White, 0,0,0,0,0,0,0,0, 'Cold Damage Resistance'   |
                        Red, 0,0,0,0,0,0,0,0, 'Fire Damage Resistance'
                        "
            )
Dndrace.create( name: 'Human',
                description: "Humans are physically diverse and highly adaptable. They excel in nearly every profession.",
                image: "races/human",
                #mod array: str dex con int wis cha speed darkvision misc
                raceMods: "0,0,0,0,0,0,30,0, nil ",
                hasSubRaces: true,
                subRaces: "Calishite,0,0,0,0,0,0,0,0,nil |
                          Chondathan,0,0,0,0,0,0,0,0, nil  |
                          Illuskan, 0,0,0,0,0,0,0,0, nil   |
                          Mulan, 0,0,0,0,0,0,0,0, nil   |
                          Rashemi, 0,0,0,0,0,0,0,0, nil   |
                          Shou, 0,0,0,0,0,0,0,0, nil   |
                          Tethyrian, 0,0,0,0,0,0,0,0, nil   |
                          Turami, 0,0,0,0,0,0,0,0, nil  "
                )

Dndrace.create(
                name: 'Elf',
                description: "Elves are graceful, magical creatures, with a slight build.",
                image: "races/elf",
                #mod array: str dex con int wis cha speed darkvision misc
                raceMods: "0,2,0,0,0,0,30,60, nil",
                hasSubRaces: true,
                skillMods: "perception: 1",
                resistanceMods: "Magical-Sleep immunity",
                subRaces: "HighElf, 0,0,0,1,0,0,0,0,nil | Drow, 0,0,0,0,0,0,0,60,nil"
  )
Dndrace.create(name: 'Dwarf',
              description: "Dwarves are short and stout and tend to be skilled warriors and craftmen in stone and metal.",
              image: "races/dwarf",
              #mod array: str dex con int wis cha speed darkvision misc
              raceMods: "0,0,0,0,0,0,25,60, nil ",
              hasSubRaces: true,
              skillMods: "perception: 1",
              resistanceMods: "Poison Damage Resistance",
              subRaces: "Hill Dwarf, 0,0,0,0,1,0,0,0, nil"
            )

Dndrace.create(name: 'Gnome',
              description: "Gnomes are small, intelligent humanoids who live life with the utmost of enthusiasm.",
              image: "races/gnome",
              #mod array: str dex con int wis cha speed darkvision misc
              raceMods: "0,0,0,2,0,0,30,60, nil ",
              hasSubRaces: true,
              skillMods: "insight: 1 | religion: 4",
              resistanceMods: "Poison Damage Resistance",
              subRaces: "Rock Gnome, 0,0,1,0,0,0,0,0, nil"
            )

Dndrace.create(name: 'Half Elf',
              description: "Half-elves are charismatic, and bear a resemblance to both their elvish and human parents and share many of the traits of each.",
              image: "races/halfelf",
              #mod array: str dex con int wis cha speed darkvision misc
              raceMods: "0,0,0,0,0,2,30,60, nil ",
              hasSubRaces: false,
              skillMods: "insight: 1 | religion: 1",
              resistanceMods: "Poison Damage Resistance",
              subRaces: ""
            )

  Dndrace.create(name: 'Half Orc',
                description: "Half-orcs are strong and bear an unmistakable resemblance to their orcish parent. They tend to make excellent warriors, especially Barbarians.",
                image: "races/halforc",
                #mod array: str dex con int wis cha speed darkvision misc
                raceMods: "2,0,1,0,0,0,30,60, Intimidation proficiency ",
                hasSubRaces: false,
                skillMods: "insight: 1 | intimidation: 2 | religion: 3",
                resistanceMods: "nil",
                subRaces: ""
              )

  Dndrace.create(name: 'Halfling',
                description: "Halflings are small and nimble, half the height of a human, but fairly stout. They are cheerful and practical.",
                image: "races/halfling",
                #mod array: str dex con int wis cha speed darkvision misc
                raceMods: "0,2,0,0,0,0,25,60, Intimidation proficiency ",
                hasSubRaces: true,
                skillMods: "insight: 1 | intimidation: 2 | religion: 3",
                resistanceMods: "nil",
                subRaces: "Lightfoot, 0,0,0,0,0,2,0,0, nil"
              )

Dndrace.create(name: 'Tiefling',
              description: "Tieflings bear the distinct marks of their infernal ancestry: horns, a tail, pointed teeth, and solid-colored eyes. They are smart and charismatic.",
              image: "races/tiefling",
              #mod array: str dex con int wis cha speed darkvision misc
              raceMods: "0,0,0,1,0,2,25,60, Intimidation proficiency ",
              hasSubRaces: false,
              skillMods: "insight: 1 | religion: 3",
              resistanceMods: "nil",
              subRaces: ""
            )
