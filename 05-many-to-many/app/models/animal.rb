require 'pry'

class Animal
    attr_accessor :name, :sound
    attr_reader :species
    @@all = []

    def initialize(name, species, sound)
        @name = name
        @species = species
        @sound = sound 
        @@all << self
    end

    def self.all
        @@all
    end

    def self.find_by_name(target_name)
        self.all.find{ |animal| animal.name == target_name }
    end

    def self.find_by_species(target_species)
        self.all.find_all{ |ani| ani.species == target_species}
    end

end

