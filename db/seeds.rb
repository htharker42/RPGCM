# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Dndrace.create(name: 'Human', description: "This is a human", image: "races/human")
Dndrace.create(name: 'Elf', description: "This is an elf", image: "races/elf")
Dndrace.create(name: 'Dwarf', description: "This is a dwarf", image: "races/dwarf")
