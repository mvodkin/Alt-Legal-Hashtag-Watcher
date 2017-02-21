# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  uid        :string           not null
#  nickname   :string           not null
#  name       :string           not null
#  url        :string
#  image      :string
#  token      :string           not null
#  secret     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ActiveRecord::Base

  after_initialize :ensure_session_token

  has_one :watchlist

  has_many :hashtags,
    through: :watchlist,
    source: :hashtags

  def self.from_omniauth(auth_hash)
    user = self.find_or_initialize_by(uid: auth_hash[:uid])
    user.name = auth_hash[:info][:name]
    user.nickname = auth_hash[:info][:nickname]
    user.url = auth_hash[:info][:urls][:Twitter]
    user.image = auth_hash[:info][:image]
    user.token = auth_hash[:credentials][:token]
    user.secret = auth_hash[:credentials][:secret]
    user.save!
    user
  end

  def self.generate_session_token
    SecureRandom.base64(16)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
