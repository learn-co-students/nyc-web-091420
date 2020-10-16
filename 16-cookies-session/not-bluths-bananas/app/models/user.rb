class User < ApplicationRecord
  has_many :orders 
  has_many :bananas, through: :orders


  def display_name_and_age
    "#{self.name} | #{self.age}"
  end

end
