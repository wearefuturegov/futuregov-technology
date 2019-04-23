class AddReferencesToCategories < ActiveRecord::Migration[5.2]
  def change
    add_reference :categories, :collection, index: true
  end
end
