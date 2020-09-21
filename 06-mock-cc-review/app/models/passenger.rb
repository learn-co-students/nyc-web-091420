class Passenger
    attr_reader :name
    @@all = []

    def initialize(name)
        @name = name
        @@all << self 
    end

    def self.all
        @@all 
    end

    def rides
        Ride.all.select { |ride| ride.passenger == self }
    end

    def drivers
        # doesnt say it needs to be uniq
        self.rides.map { |ride| ride.driver } # .uniq #self.rides vs rides
    end
    
    def total_distance
        # [of ride instance]===> [of their distances] ==> .sum that 
        # Alternatives: .each and collect distances in a variable, reduce, NOT EXHAUSTIVE!! 
        # self.rides.sum { |ride| ride.distance}
        self.rides.map { |ride| ride.distance }.sum
    end

    def self.premium_members
        Passenger.all.select do |passenger| 
            passenger.total_distance > 100
        end
    end
end