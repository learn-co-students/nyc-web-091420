class User < ApplicationRecord
  has_many :orders 
  has_many :bananas, through: :orders

end
