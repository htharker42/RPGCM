class CreateDndclasses < ActiveRecord::Migration[5.1]
  def change
    create_table :dndclasses do |t|
      t.string :name
      t.string :description
      t.string :savingthrows
      t.integer :hitpointbase
      t.integer :hitpointmodifier
      t.integer :skills
      t.string :proficiencies
      t.string :features
      t.string :inventory
      t.string :spellSlotsperLevel
      t.string :classfeatureName
      t.string :classfeatureBonus
      t.string :spells

      t.timestamps
    end
  end
end
