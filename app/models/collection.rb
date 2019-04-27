class Collection < ApplicationRecord
    has_many :categories, -> { order 'name asc' }
    has_many :entries, -> { order 'title asc' }, :through => :categories
end
