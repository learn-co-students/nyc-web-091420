require 'pry'

class User
    attr_writer :ssn
    attr_accessor :name, :age

    def initialize(name, age, ssn="12345")
        @name = name
        @age = age.to_i 
        @ssn = ssn 
    end
    
    def introduce
        puts "This instance is #{@name}"
    end

    def view_profile
        puts "Your name is #{@name}"
        puts "Your age is #{@age}"
        puts "Your ssn is **************#{self.ssn}"
    end

    def ssn 
        @ssn.chars.last(4).join
    end

end


# arthur = User.new("arthur", 47, "0928340982412345") # name, age, ssn

# brandon = User.new("brandon", 51)

# binding.pry

