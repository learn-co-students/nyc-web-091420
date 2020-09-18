class UserAnimal
    attr_accessor :user, :animal
    @@all = []

    def initialize(user, animal) #I could call these owner and pet instead 
        @user = user
        @animal = animal
        @@all << self 
    end

    def self.all
        @@all 
    end
end