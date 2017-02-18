class CreateWatchlists < ActiveRecord::Migration
  def change
    create_table :watchlists do |t|
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :watchlists, :user_id
  end
end
