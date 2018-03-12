class CreateDndraces < ActiveRecord::Migration[5.1]
  def change
    create_table :dndraces do |t|
      t.string :name
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
