require 'pry'

class User
    # macros make methods for you! 
    attr_writer :ssn
    attr_accessor :name, :age

    def initialize(name, age, ssn="12345")
        @name = name
        @age = age.to_i ## EASTER EGG TERNARIES > 110 ? 100 : age # condition ? truthy : falsey
        @ssn = ssn 
    end
    
    def introduce
        puts "This instance is #{@name}"
    end

    def view_profile # invoke in cli as user_instance.view_profile
        puts "Your name is #{@name}"
        puts "Your age is #{@age}"
        puts "Your ssn is **************#{self.ssn}"
    end

    def ssn # custom reader so that can only read the last four digits of the string
        ## OPTIONAL HOMEWORK: show ***** in place of all the prior digits (the correct # of them too)
        ## soooo 09876543211234 **********1234
        # @ssn[-4..-1]
        @ssn.chars.last(4).join
    end

    # def age
    #     @age
    # end
    # def age=(num)
    #     # some logic to set max age to 110 and min age 0
    #     @age = num
    # end
    # def ssn
    #     @ssn
    # end
end


# arthur = User.new("arthur", 47, "0928340982412345") # name, age, ssn

# brandon = User.new("brandon", 51)

# binding.pry

# check our arthur in a repl!