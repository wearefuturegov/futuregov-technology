class Entry < ApplicationRecord
  belongs_to :category, optional: true
  validates :title, presence: true, uniqueness: true
  validates :body, presence: true

  before_create :set_slug
  before_update :set_slug

  def to_param
    slug
  end

  def set_slug
    self.slug = self.title.parameterize.truncate(80, omission: '')
  end
end
