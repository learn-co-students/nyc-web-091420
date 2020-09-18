## OO Associations/Relationships: Many to Many

# Questions
- When you run the file, what is Ruby doing? How is it defining the classes? 
- One to Many aka has_many & belongs_to 
- Many to Many aka belongs_to and has_many through 
- Kickstarter Related ===> join model or table required for many to many relationships

# Agenda
- Questions
- Review One to Many/Belongs to
- Discuss Has many, Through
- Update our Pet App! 

## One to Many

### Animal belongs to a User
What do I know about the Animal class? 
- it should hold the user reference
- initialize it (possibly) with the User instance reference
- need a new instance variable to hold that reference 
- attr's  to give us access to that new instance variable 

```
class Animal
    attr_accessor :name, :owner 

     def initialize(name, owner)
        @name = name
        @owner = owner
     end
end
```


### User has many Animals
What do I know about the User class? 
- has many Animals
- we can't use attr's here = this one will need a method to go through Animal.all 
- it doesn't hold the reference 

```
class User
    attr_accessor :name

    def initialize(name)
        @name = name
     end

     def pets
        Animal.all.select { |animal| animal.owner == self }
     end
end
```



## Has Many Through

