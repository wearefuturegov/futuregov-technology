class Entry < ApplicationRecord
  belongs_to :category, optional: true
  has_many :links
  validates :title, presence: true, uniqueness: true, :case_sensitive => false
  validates :body, presence: true

  before_create :set_slug
  before_update :set_slug

  include PgSearch
  pg_search_scope :search_title_or_body, 
    against: [:title, :body],
    using: {
      tsearch: { prefix: true }
    }

  include Discard::Model
  default_scope -> { kept }

  def to_param
    slug
  end

  def set_slug
    self.slug = self.title.parameterize.truncate(80, omission: '')
  end
end
