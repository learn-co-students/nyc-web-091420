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

    private

    def increment_views
        @views += 1 
    end

end


arthur = User.new("arthur", 47, "0928340982412345") # name, age, ssn
brandon = User.new("brandon", 51)

binding.pry

