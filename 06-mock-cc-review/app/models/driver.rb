class Driver
    attr_reader :name
    @@all = []

    def initialize(name)
        @name = name 
        @@all << self
    end

    def self.all
        @@all 
    end

    def rides #makes passenger_names easier!!
        Ride.all.find_all { |ride| ride.driver == self }
    end

    def passenger_names
        self.rides.map { |ride| ride.passenger.name }.uniq
    end

    def total_distance
        rides.map { |ride| ride.distance }.sum 
    end

    def self.mileage_cap(distance)
        # self.all.select do |driver| 
        #     driver.rides.sum do |ride| 
        #         ride.distance 
        #     end > distance
        # end
        self.all.select { |driver| driver.total_distance > distance }
    end
end
