class Entry < ApplicationRecord
  belongs_to :category, optional: true
  validates :title, presence: true
  validates :body, presence: true
end
