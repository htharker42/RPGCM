class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.text :description
      t.text :notes
      t.text :inventory
      t.string :background
      t.string :alignment
      t.integer :armorClass
      t.integer :initative
      t.integer :deathSavesSuccess
      t.integer :deathSavesFailures
      t.text :skills
      t.integer :experience
      t.integer :money
      t.integer :level
      t.integer :playerHitPoints
      t.integer :playerHitDice
      t.string :race
      t.boolean :hasSubRace
      t.string :subRace
      t.integer :str
      t.integer :dex
      t.integer :con
      t.integer :int
      t.integer :wis
      t.integer :cha
      t.integer :speed
      t.integer :strMod
      t.integer :dexMod
      t.integer :conMod
      t.integer :intMod
      t.integer :wisMod
      t.integer :chaMod
      t.integer :strSave
      t.integer :dexSave
      t.integer :conSave
      t.integer :intSave
      t.integer :wisSave
      t.integer :chaSave
      t.text :equipment
      t.integer :proficiencyBonus
      t.integer :passivePerception
      t.string  :perks
      t.integer :class1id
      t.integer :class2id
      t.string :class1
      t.string :class2
      t.boolean :multiclass
      t.text :flaws
      t.text :bonds
      t.text :ideals
      t.text :personalityTraits
      t.text :featuresTraits
      t.text :skills
      t.timestamps
    end
  end
end
