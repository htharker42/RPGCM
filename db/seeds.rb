# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create( { name: 'Star Wars' }, { name: 'Lord of the Rings' } )
#   Character.create(name: 'Luke', movie: movies.first)
#mod array: str dex con int wis cha speed darkvision misc
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
                subRaces: "
                          Calishite,0,0,0,0,0,0,0,0,nil |
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
                raceMods: "0,2,0,0,0,0,30,60, nil ",
                hasSubRaces: true,
                skillMods: "perception: 1",
                resistanceMods: "Magical-Sleep immunity",
                subRaces: "
                          HighElf, 0,0,0,1,0,0,0,0, nil |
                        "
  )
Dndrace.create(name: 'Dwarf',
              description: "This is a dwarf",
              image: "races/dwarf",
              #mod array: str dex con int wis cha speed darkvision misc
              raceMods: "0,0,0,0,0,0,25,60, nil ",
              hasSubRaces: true,
              skillMods: "perception: 1",
              resistanceMods: "Poison Damage Resistance",
              subRaces: "
                        HillDwarf, 0,0,0,0,1,0,0,0, nil  "

            )
