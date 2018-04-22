class CreateDndclasses < ActiveRecord::Migration[5.1]
  def change
    create_table :dndclasses do |t|
      t.string :name
      t.text :description
      t.string :savingthrows
      t.integer :hitpointbase
      t.integer :hitpointmodifier
      t.text :proficiencies
      t.text :features
      t.string :inventory
      t.string :spellSlotsperLevel
      t.string :classfeatureName
      t.string :classfeatureBonus
      t.text :spells
      t.text :skills

      t.timestamps
    end
  end
end
