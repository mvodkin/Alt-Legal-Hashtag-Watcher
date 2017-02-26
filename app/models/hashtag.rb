# == Schema Information
#
# Table name: hashtags
#
#  id               :integer          not null, primary key
#  watchlist_id     :integer          not null
#  text             :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  content_filter   :string           default("none")
#  number_of_tweets :string           default("5")
#  attitude_filter  :string
#

class Hashtag < ActiveRecord::Base

  validates :watchlist_id, :text, presence: true

  belongs_to :watchlist,
    class_name: "Watchlist",
    primary_key: :id,
    foreign_key: :watchlist_id

  has_one :user,
    through: :watchlist,
    source: :user

end
