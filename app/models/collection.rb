class Collection < ApplicationRecord
    has_many :categories

    validates :name, presence: true
end
