require 'pry'

class Animal
    attr_accessor :name, :sound
    attr_reader :species
    @@all = []

    def initialize(name, species, sound)
        @name = name
        @species = species
        @sound = sound 
        # @location = 
        # @max_owners = 3
        @@all << self
    end

    def self.all
        @@all
    end
    
    def user_animals
        UserAnimal.all.select { |ua| ua.animal == self }
    end

    def users
        self.user_animals.map { |ua| ua.user }
    end

    def say_hello_to_pawrents
        # how do we get to all my pawrents 
        self.users.each { |pawrent| puts "I love my pawrent #{pawrent.name}!!!!!"}
    end

    def view_pawrent_profiles
        self.users.each { |pawrent| pawrent.view_profile }
        # since pawrent is a user instance, go look at user class to see what instance methods
        # can help you! like User#view_profile!!!!!
    end

    def self.find_by_name(target_name)
        self.all.find{ |animal| animal.name == target_name }
    end

    def self.find_by_species(target_species)
        self.all.find_all{ |ani| ani.species == target_species}
    end

end

