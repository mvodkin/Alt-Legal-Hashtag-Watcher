class ChangeHashtagsDefaultValues < ActiveRecord::Migration
  def change
    change_column :hashtags, :content_filter, :string, default: "none"
    change_column :hashtags, :number_of_tweets, :string, default: "5"
  end
end
