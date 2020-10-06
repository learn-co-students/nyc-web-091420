# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# The Original Frozen Banana — Frozen banana dipped in hot fudge and covered with fresh nuts The George Daddy — Frozen banana dipped in chocolate sandwiched between chocolate grahams The G.O.B. — Frozen banana double dipped in chocolate with double the nuts. ("Charity Drive") The On the Go-Go Banana — Frozen banana in a cup of sizzling hot fudge The Giddy-Girly Banana — Frozen banana dipped in hot fudge and covered with our pink heart candy The Simple Simon Double-Dipped Frozen


puts "Creating Bananas"
10.times do 
  Banana.create(name: Faker::Movies::BackToTheFuture.character, price: rand(20..54), toppings: Faker::Dessert.topping)
end 