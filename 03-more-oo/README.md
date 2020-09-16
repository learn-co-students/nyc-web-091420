# More on Object Orientation

### OO Practice Project Pt 1
- Yall did great overall!
- Watch your syntax please :)
- Use your attr's!!! For attributes you shouldnt be able to change, just dont expose a writer method!

## Questions
- all caps variables
    - for constants only... only names of classes  ==> Blog post! 
- Is there an easier way to set the parameters for the “range” of the hygiene/happiness points
    - Check the solution cause it's pretty clean
    - With just OO (not tables)... not really a shorter way
    - .clamp 
- When to know when things become attributes of the initialize method, and when they don’t need to be
    - def initialize(argument) ==> If i want to be able to specify that info when I create an instane 
- How do we access unique strings in an instance variable?
    - Class variables, class constants lab 
    - `["Elias", "Caryn", "Elias"].uniq!` ===> about the test? 
- WTF is self?
- Using instance variables - using @ vs not using @ 
     - `@name`, `self.name` (if i have a reader method),  `name` (if i have a reader method) *********
- using instance methods inside of other instance methods ===> self  *********

## Recap
(Pretty much) everything in Ruby is an Object
instances are objects
so are... strings, integers, booleans, etc. 

Classes are also objects ===> class variables and class methods 

## Agenda
- Class methods
- `self`
- private methods

- A `User` should be able to log in
- `User.all` should return a list of all user instances 
- A `User` should be able to introduce themselves
    - `User#introduce` should return a string that says "Hi, my name is _____"
- A `User` should be able to keep track of number of profile views
    - `User#views` should return the number of times a user's profile has been viewed
    - Everytime a user's profile is viewed a message should puts to the screen saying "here is your profile"
- `User.time_for_quince` method which will return a list of users who are 14 years old 
- Add password & username 
- Make profiles viewable / not viewable 


- TOMORROW
 - we build relationships :) :) friendships :) :) 
 - comments other users ===> need relationships for that! 
 - likes other users ===> need relationships for that! 



Time permitting...
- A `Animal` class with a name (read and write-able) and a species (readable)
- `Animal.all` should return a list of all animal instances
- `Animal.find_by_name` should take in a string and return the animal with that name
- `Animal.find_by_species` should take a string and return a list of all animals of that species
