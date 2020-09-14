require 'pry'
# 1. I am building a Pets application. I need to a way to hold all the information (name, type) about a SPECIFIC pet. Which datatype should I use?
# 2. Now, I need a way to hold a list of all of the pets in my app. Which datatype should I use? 
# 3. I want a list of only the names of each pet. How do I do that? What datatype should be returned?
# 4. I want to be to find all pets that are dogs. What iterator should I use? What datatype should be returned?
# 5. I want to be able to find a single dog with a specific name. How do I do that? What datatype should be returned?


## pets application
## 1. Have a list of all the animals and be able to view a list of all their names
## 2. Be able to view a list of all *cats* 
## 3. Let's be able to search for an animal by name 

# name, species, sound 
## hashes! por que?
# AoH - Array of Hashes


animals = [
    {name: 'Mojo', species: 'jellyfish', sound: 'squish'},
    {name: 'Mojo', species: 'cat', sound: 'yells'}, # 'mojo' 'Mojo' ARE NOT THE SAME 
    {name: 'Ziggy', species: 'dog', sound: 'Zzzz' },
    {name: 'Luffy', species: 'cat', sound: 'Trills'},
    {name: 'Twiggy', species: 'dog', sound: 'Barks'},
    {name: 'Django', species: 'dog', sound: 'moos'},
    {name: 'Flower', species: 'cat', sound: 'meow'},
    {name: 'Lil Miss Grimes', species: 'cat', sound: 'chuff'},
    {name: 'Max', species: 'fish', sound: 'plup'}
]

def run(animals_list) ## defining the function ==> adding a word into the dictionary
    puts "Welcome to the Animal Adoption Agency"
    ## How do we get user input?
    puts "1. View a list of all names"
    puts "2. View a list of all the dogs"
    puts "3. Find an animal by a name"

    choice = gets.chomp 
    if choice == "1" 
        # binding.pry  # animals is undefined here 
        # animals_list will now be defined here 
        # animal_names = []
        # go from animals_list to a list of animal names 
        # animals_list.each do |ele|
        #     #  puts ele[:name] <=== not what the delvierable asked for! 
        #     animal_names << ele[:name]
        # end
        # animal_names
        print animals_list.map { |animal| animal[:name] } # or .collect 
    elsif choice == "2"
        puts animals_list.filter do |animal| # or .select or .find_all
            # PSEUDOCODING!!! return true if animal's species is "dog"
            animal[:species] == "dog"
        end 
    elsif choice == "3"
        puts "What is the animal's name?"
        target_name = gets.chomp
        puts animals_list.find { |animal| animal[:name] == target_name}
        # this assumes the animals have unique names, 
        # or doesn't care that we'll always return the first one
    else 
        puts "Please pick a valid option."
    end
    binding.pry 

end


## invoke the method 
# run


binding.pry 

