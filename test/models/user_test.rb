# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  uid           :string           not null
#  nickname      :string           not null
#  name          :string           not null
#  url           :string
#  image         :string
#  token         :string           not null
#  secret        :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  session_token :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
