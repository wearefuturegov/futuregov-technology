class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.string :title
      t.text :body
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
