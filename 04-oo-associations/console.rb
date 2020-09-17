require 'pry'
require_relative './app/models/user'
require_relative './app/models/animal'


animals = [
    {name: 'Mojo', species: 'cat', sound: 'yells'},
    {name: 'Ziggy', species: 'dog', sound: 'Zzzz' },
    {name: 'Luffy', species: 'cat', sound: 'Trills'},
    {name: 'Twiggy', species: 'dog', sound: 'Barks'},
    {name: 'Django', species: 'dog', sound: 'moos'},
    {name: 'Flower', species: 'cat', sound: 'meow'},
    {name: 'Lil Miss Grimes', species: 'cat', sound: 'chuff'},
    {name: 'Max', species: 'fish', sound: 'plup'}
]

# animals.each do |animal|
#     Animal.new(animal[:name], animal[:species], animal[:sound])
# end
arthur = User.new("arthur", 47, "0928340982412345") # name, age, ssn
brandon = User.new("brandon", 51)
caryn = User.new("caryn", 14)
miles = User.new("miles", 7)

mojo = Animal.new('Mojo', 'cat', 'yells', caryn)
ziggy = Animal.new('Ziggy', 'dog', 'Zzzz', arthur)
luffy = Animal.new('Luffy', 'cat', 'Trills', brandon)
twiggy = Animal.new('Twiggy', 'dog', 'Barks')


# Animal.find_by_species("cat")

binding.pry

