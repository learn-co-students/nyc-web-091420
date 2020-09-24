class CreateUsersTable < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t| # just like elem, t table helper 
      t.string :name
      t.integer :age
      t.string :ssn 
    end
  end
end
