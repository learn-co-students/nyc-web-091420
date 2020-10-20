class Banana < ApplicationRecord
  has_many :orders 
  has_many :users, through: :orders 

  # ✅name - needs to be unique
  # ✅toppings - need to have toppings 
  # ✅price - has to confirm it is an integer
  # ✅price - under 50$ orver $40

  validates :name, uniqueness: true 
  validates :toppings, :name, :price, presence: true
  validates :price, numericality: {only_integer: true, greater_than: 39, less_than: 51}

  accepts_nested_attributes_for :orders

  # validate :our_own_custom_method


  def price_plus_10
    self.price
  end

  def price_plus_10=(price)
    total = price.to_i + 10
    self.price = total
  end 
end
