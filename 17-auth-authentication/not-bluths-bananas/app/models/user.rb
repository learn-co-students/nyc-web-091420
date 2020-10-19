class User < ApplicationRecord
  has_many :orders 
  has_many :bananas, through: :orders

  has_secure_password

  def display_name_and_age
    "#{self.name} | #{self.age}"
  end


  # def authenticate(secret) 
  #   bcrypt_value = BCrypt::Password.new(self.password_digest)
  #   bcrypt_value == secret
  # end 
  

  # def password=(secret)
  #   hashed_pass = BCrypt::Password.create(secret)

  #   self.password_digest = hashed_pass
  # end 

  # def password 
  # end

end
