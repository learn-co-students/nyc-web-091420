# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Banana.destroy_all

bananas = [ 
  {name: "The Original Frozen Banana", toppings: "Frozen banana dipped in hot fudge and covered with fresh nuts", price: rand(25..60)},
   {name: "The George Daddy", toppings: "Frozen banana dipped in chocolate sandwiched between chocolate grahams", price: rand(26..60)},
   {name: "The G.O.B.", toppings: "Frozen banana double dipped in chocolate with double the nuts.", price: rand(25..60)},
   {name: "('Charity Drive') The On the Go-Go Banana", toppings: "Frozen banana in a cup of sizzling hot fudge", price: rand(25..60)},
   {name: "The Giddy-Girly Banana", toppings: "Frozen banana dipped in hot fudge and covered with our pink heart candy", price: rand(25..60)},
   {name: "The Simple Simon", toppings: "Double-Dipped Frozen", price: rand(25..60)}
]


puts "Creating Bananas"
bananas.each {|banana| Banana.create(banana)}
# 10.times do 
#   Banana.create(name: Faker::Movies::BackToTheFuture.character, price: rand(20..54), toppings: Faker::Dessert.topping)
# end 
