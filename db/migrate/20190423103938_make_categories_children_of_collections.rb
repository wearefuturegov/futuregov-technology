class MakeCategoriesChildrenOfCollections < ActiveRecord::Migration[5.2]
  def change
    remove_column :entries, :collection_id
    add_reference :categories, :collection, index: true
  end
end
