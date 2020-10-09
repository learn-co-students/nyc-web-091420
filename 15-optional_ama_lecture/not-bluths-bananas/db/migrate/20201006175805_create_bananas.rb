class CreateBananas < ActiveRecord::Migration[6.0]
  def change
    create_table :bananas do |t|
      t.integer :price
      t.string :name
      t.string :toppings

      t.timestamps
    end
  end
end
