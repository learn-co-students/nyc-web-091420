require 'pry'

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

    def pets
        Animal.all.filter { |animal_instance| animal_instance.owner == self }
        # animal_instance here is the element; an instance of the Animal class 
    end

    def adopt_pet(pet_instance)
        # an instance of the Animal class
        pet_instance.owner = self # the current user instance 
    end

    def buy_animal(name, species, sound)
        Animal.new(name, species, sound, self)
    end

    def feed_animal(animal)
        #check if the animal belongs to the current user
        if animal.owner == self
            puts "Feeding #{animal.name} a delicious meal"
            # increase health, increase happiness of animal 
            animal.happiness += 1  #works diff in diff languages
            animal.health += 1
        else
            puts "That ain't your animal!!! "
        end
    end

    def feed_all_my_animals
        # who are all of the animals associated with this user? 
        # can I use another other methods to help... like feed_animal? 
        self.pets.each do |pet|
            self.feed_animal(pet)
        end
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
        # User.of_driving_age: will return an array of all users who are 16 + years of age 
        User.all.filter { |user| user.age > 15 }
    end

    private

    def increment_views
        @views += 1 
    end

end

