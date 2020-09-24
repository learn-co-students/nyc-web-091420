# require 'pry'

class User < ActiveRecord::Base
    # def user_animals
    #     UserAnimal.all.filter { |ua| ua.user == self }
    # end

    # def animals
    #     self.user_animals.map { |ua| ua.animal }
    # end

    # def adopt_pet(pet_instance)
    #     UserAnimal.new(self, pet_instance)
    # end

    def view_profile
        puts "Your name is #{self.name} and you are #{self.age} years old "
    end

    def self.driving_age
        self.all # the .all method provided by AR 
    end

end


## AR does this for us
## Plus all @@all behavior 
    # attr_writer :ssn
    # attr_accessor :name, :age 
    # attr_reader :views
    # def initialize(name, age, ssn="1234")
    #     @name = name
    #     @age = age.to_i 
    #     @ssn = ssn 
    #     @views = 0
    # end
