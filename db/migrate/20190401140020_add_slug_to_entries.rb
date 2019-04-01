class AddSlugToEntries < ActiveRecord::Migration[5.2]
  def change
    add_column :entries, :slug, :string #, null: false
    add_index :entries, :slug, unique: true
  end
end
