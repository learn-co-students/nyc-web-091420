require 'pry'

class User
    attr_writer :ssn
    attr_accessor :name, :age
    attr_reader :views
    @@all = [] ## class variable (@@) to hold all instances 

    def initialize(name, age, ssn="1234")
        @name = name
        @age = age.to_i 
        @ssn = ssn 
        @views = 0
        @@all << self # shovel in the current User instance 
    end

    def self.all # class methods we define as self.method_name
        # inside of this method, self would the the whole class User
        @@all 
    end
    
    def introduce
        # self would be the current instance 
        puts "This instance is #{@name}"
    end

    def view_profile
        increment_views
        # age = 50
        puts "Your name is #{@name}"
        puts "Your age is #{age}" # just `age` as well ==> but that actually looks for the methods
        puts "Your ssn is **************#{self.ssn}" # self is the instance, looks for the ssn method 
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

# brandon.views = 2000000000

binding.pry

