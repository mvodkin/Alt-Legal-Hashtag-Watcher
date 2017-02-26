class DropWatchlist < ActiveRecord::Migration
  def change
    drop_table :watchlists
  end
end
