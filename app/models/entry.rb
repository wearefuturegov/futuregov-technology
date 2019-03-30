class Entry < ApplicationRecord
  belongs_to :category, optional: true
end
