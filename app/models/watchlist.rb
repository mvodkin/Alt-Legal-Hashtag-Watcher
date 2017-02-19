# == Schema Information
#
# Table name: watchlists
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Watchlist < ActiveRecord::Base

  validates :user_id, presence: true

  has_many :hashtags,
    class_name: "Hashtag",
    foreign_key: :watchlist_id,
    primary_key: :id

  belongs_to :user

end
