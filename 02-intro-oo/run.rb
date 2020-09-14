require 'pry'
require_relative './app/models/user'

animals = [
    {species: 'cat', name: 'mojo', noise: 'woof'}, 
    {species: 'cat', name: 'grady', noise: 'purrrrrr'}, 
    {species: 'cat', name: 'jerry', noise: 'sneeze'}, 
    {species: 'nimr', name: 'grady', noise: 'yowl'}, 
    {species: 'peyton', name: 'grady', noise: 'scream'}, 
    {species: 'april', name: 'dog', noise: 'woof'}, 
    {species: 'humphry', name: 'turtle', noise: 'squirt'}, 
    {species: 'cat', name: 'rick', noise: 'quack'}
]


def animals_cli(animals_array)  
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
end



binding.pry 