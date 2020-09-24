class UserAnimal
    attr_accessor :user, :animal
    @@all = []

    def initialize(user, animal) 
        @user = user
        @animal = animal
        @@all << self 
    end

    def self.all
        @@all 
    end
end