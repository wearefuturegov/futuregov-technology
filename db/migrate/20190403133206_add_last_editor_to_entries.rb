class AddLastEditorToEntries < ActiveRecord::Migration[5.2]
  def change
    add_column :entries, :last_editor, :string
  end
end
