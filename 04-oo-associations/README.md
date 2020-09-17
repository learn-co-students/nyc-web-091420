# Ruby OO Relationships/Associations (One to Many)



## Questions
- Transversing between classes, instances and their methods
    - Using a method that belongs to one class inside of another class 
- Calling class methods vs instance methods
- The difference between class methods and instance methods, 
            and how you can use self in each of those
- When to use self vs the name of the class? Like self.all. vs User.all
    - if self is the class, those are entirely interchangeable
    - if self is something else, and you need the class, call the class 
- Initialized arguments vs attrs... about rel'n Chloe follow up! 


## Agenda
- Typo was updated in 03 code (in animal.rb)
- Testing our code before adding to CLI (console.rb)
- Types of Associations 
- One to Many/Has Many, Belongs to


## Types of Associations
- One to Many
    - belongs_to: holds the reference to the instance it belongs to 
    - has_many

User has many Animals
    How does a user know about all of its animals?
    ******** I'm gonna show you the WRONG WAY first. 
    Then I'll show you the right way :) SSOT Single Source of Truth!!!! 
Animal belongs to User
    Animal wears the collar 


Author has many Books
Book belongs to Author
    Book will hold the reference to the author it belongs to 

Artist has many Songs
Song belongs to Artist 

Post has many Comments 
Comment belongs to a Post 

- Many to Many =====> tomorrow.. essentially 2 one to many's

## Deliverables 
Build Animal Class
- A `Animal` class with a name (read and write-able), 
a species (readable) and a noise (read and write-able)
- `Animal.all` should return a list of all animal instances

Build Animal & User Relationship 
- an animal needs to belong to a user
- an animal needs to know who its user is 
- an owner should also know who all of its animals are

Add Relationship Methods
- Let's think of some together! 
* * `User#buy_animal(name)` ==> create the new Animal and associate it with the user! 
* * Add health, happiness and cleanliness to animal (initially 5?)
* * For the below (feed, play, groom) which should *only* the owner be allowed to do? 
- `User#feed_animal(animal)` Feed the animal only if it belongs to this user  ===> animal would need health (health++, happiness++, cleanliness-- )
- `User#feed_all_my_animals` Feed all animals that belong to this user 




- `User#play_with_animal(animal)`Play with the animal   ===> animal will need happiness (happiness++, cleanliness--)
- `User#groom_animal(animal)`Groom an animals ===> animal has cleanliness and you can groom them and increase that score  (cleanliness++... )
- Share animals ie walks? ===> Sisan can walk Mojo (who belongs to Caryn)
- Training an animals

***** building more methods ==> go slower
building toy class ==> go faster 

Time Permitting
- Toys class
- An Animal has many Toys and a Toy belongs to an Animal
- Toys have a name, a color, a condition, and is_favorite boolean


### Icebox
- check out your config/environment.rb files in labs that include that!! 
- Check for @@all = [] in 03