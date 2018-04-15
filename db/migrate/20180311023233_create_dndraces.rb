class CreateDndraces < ActiveRecord::Migration[5.1]
  def change
    create_table :dndraces do |t|
      t.string :name
      t.text :notes
      t.string :image
      t.string :image
      t.string :raceMods
      t.boolean :hasSubRaces
      t.string :subRaces
      t.string :skillMods
      t.string :resistanceMods
      t.timestamps
    end
  end
end
