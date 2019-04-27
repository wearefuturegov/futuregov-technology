class Collection < ApplicationRecord
    has_many :categories
    has_many :entries, :through => :categories
end
