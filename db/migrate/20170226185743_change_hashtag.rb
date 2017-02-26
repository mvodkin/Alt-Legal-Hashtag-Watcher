class ChangeHashtag < ActiveRecord::Migration
  def change
    change_column :hashtags, :content_filter, :string, default: ""
    change_column :hashtags, :number_of_tweets, :string, default: "5"
    change_column :hashtags, :attitude_filter, :string, default: ""
  end
end
