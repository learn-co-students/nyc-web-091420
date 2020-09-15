require 'pry'
require_relative './app/models/user'

## pets application
## 1. Have a list of all the animals and be able to view a list of all their names
## 2. Be able to view a list of all *dogs* 
## 3. Let's be able to search for an animal by name 

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

def animals_cli(animals_list) 
    puts "Welcome to the Animal Adoption Agency"
    ## How do we get user input?
    puts "1. View a list of all names"
    puts "2. View a list of all the dogs"
    puts "3. Find an animal by a name"

    choice = gets.chomp 
    if choice == "1" 
        print animals_list.map { |animal| animal[:name] } 
    elsif choice == "2"
        puts animals_list.filter { |animal|  animal[:species] == "dog" }
    elsif choice == "3"
        puts "What is the animal's name?"
        target_name = gets.chomp
        puts animals_list.find { |animal| animal[:name] == target_name}
    else 
        puts "Please pick a valid option."
    end
end


def run 
    puts "Welcome, please sign up"
    puts "What is your name?"
    name = gets.chomp 
    puts "What is your age?"
    age = gets.chomp 
    puts "What is your social security number?"
    ssn = gets.chomp 
    # create a new user! 
    user = User.new(name, age, ssn)

    puts "Would you like to view your profile? (y/n)"
    choice = gets.chomp
    if choice == "y"
        user.view_profile
    end

    puts "Would you like to change your name? (y/n)"
    choice = gets.chomp
    if choice == "y"
        puts "What is your new name?"
        new_name = gets.chomp
        user.name = new_name
        puts "Here's your updated profile"
        user.view_profile
    end

    ## let them change their name 

    binding.pry
end



binding.pry 