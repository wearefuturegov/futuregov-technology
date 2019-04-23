class Collection < ApplicationRecord
    has_many :entries

    validates :name, presence: true
end
