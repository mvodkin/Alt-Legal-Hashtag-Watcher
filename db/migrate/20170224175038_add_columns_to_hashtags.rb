class AddColumnsToHashtags < ActiveRecord::Migration
  def change
    add_column :hashtags, :content_filter, :string
    add_column :hashtags, :number_of_tweets, :string
    add_column :hashtags, :attitude_filter, :string
  end
end
