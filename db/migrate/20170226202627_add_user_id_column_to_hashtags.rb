class AddUserIdColumnToHashtags < ActiveRecord::Migration
  def change
    add_column :hashtags, :user_id, :integer, null: false
    remove_column :hashtags, :watchlist_id
  end
end
