class CreateHashtags < ActiveRecord::Migration
  def change
    create_table :hashtags do |t|
      t.integer :watchlist_id, null: false
      t.string :text, null: false
      t.timestamps null: false
    end
    add_index :hashtags, :watchlist_id
  end
end
