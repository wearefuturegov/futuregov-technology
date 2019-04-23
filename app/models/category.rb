class Category < ApplicationRecord
    has_many :entries
    belongs_to :collection
    
    validates :name, presence: true
end