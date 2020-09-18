# require 'pry'

class User
    attr_writer :ssn
    attr_accessor :name, :age 
    attr_reader :views
    @@all = [] 

    def initialize(name, age, ssn="1234")
        @name = name
        @age = age.to_i 
        @ssn = ssn 
        @views = 0
        @@all << self 
    end

    def self.all 
        @@all 
    end

    def user_animals
        UserAnimal.all.filter { |ua| ua.user == self }
    end

    def animals
        self.user_animals.map { |ua| ua.animal }
    end

    # def pets
    #     Animal.all.filter { |animal_instance| animal_instance.owner == self }
    # end

    def adopt_pet(pet_instance)
        # pet_instance.owner = self 
        UserAnimal.new(self, pet_instance)
    end
    
    def introduce
        puts "This instance is #{@name}"
    end

    def view_profile
        increment_views
        puts "Your name is #{@name}"
        puts "Your age is #{age}" 
        puts "Your ssn is **************#{self.ssn}"
        puts "Your profile has been viewed #{@views} times!"
    end

    def ssn 
        @ssn.chars.last(4).join
    end
    
    def self.of_driving_age
        User.all.filter { |user| user.age > 15 }
    end

    private

    def increment_views
        @views += 1 
    end

end

