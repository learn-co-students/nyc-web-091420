class Ride
    attr_accessor :driver, :passenger, :distance
    @@all = []
    # @@distance = [] not dynamic and flexible! 

    def initialize(driver, passenger, distance)
        @driver = driver
        @passenger = passenger
        @distance = distance.to_f
        @@all << self 
        # @@distance << self.distance  not dynamic and flexible! 
    end

    def self.all
        @@all 
    end

    def self.average_distance
        Ride.all.map { |ride| ride.distance }.sum.to_f / Ride.all.count  
        # sum of all distance / total # of rides 

        # @@distance.reduce(:+) / @@distance.size.to_f see notes above re: @@distance 
    end
end
