require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


# Put your variables here~!

casey = Driver.new("casey")
ajak = Driver.new("ajak")

mary = Passenger.new("mary")
chloe = Passenger.new("chloe")
javaughn = Passenger.new("javaughn")



c_m = Ride.new(casey, mary, 30.5)
c_c = Ride.new(casey, chloe, 15.2)
a_c = Ride.new(ajak, chloe, 5.2)
a_j = Ride.new(ajak, javaughn, 3548.9)
a_c = Ride.new(ajak, chloe, 95.2)

# casey 45.7 


binding.pry
