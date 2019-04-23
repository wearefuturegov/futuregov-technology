class ExternalLink < ApplicationRecord
  belongs_to :entry
  
  validates :url, presence: true
  validates :description, presence: true
end
