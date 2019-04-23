class AddCollectionReferenceToEntries < ActiveRecord::Migration[5.2]
  def change
    add_reference :entries, :collection, index: true
  end
end
