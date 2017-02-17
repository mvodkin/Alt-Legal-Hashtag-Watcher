class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :uid, null: false
      t.string :nickname, null: false
      t.string :name, null: false
      t.string :url
      t.string :image
      t.string :token, null: false
      t.string :secret, null: false
      t.timestamps null: false
    end
    add_index :users, :uid, unique: true
    add_index :users, :nickname
  end
end
