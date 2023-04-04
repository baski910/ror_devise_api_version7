class CreateReferrals < ActiveRecord::Migration[7.0]
  def change
    create_table :referrals do |t|
      t.string :email
      t.text :content
      t.integer :user_id

      t.timestamps
    end
  end
end
