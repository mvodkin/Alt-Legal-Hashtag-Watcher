# == Schema Information
#
# Table name: hashtags
#
#  id           :integer          not null, primary key
#  watchlist_id :integer          not null
#  text         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class HashtagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
