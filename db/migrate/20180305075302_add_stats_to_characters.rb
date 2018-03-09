class AddStatsToCharacters < ActiveRecord::Migration[5.1]
  def change
    add_column :characters, :class1, :string
    add_column :characters, :race, :string
  end
end
