# Active Record Basics
- SQL... probably never gonna have you write this at Flatiron 
- ORM
- Active Record (AR)

## Questions
- In AR, we won't use attr's but we will use macro's
- What happens to the primary key when we delete a row of a table?
    -- short version: the primary key is NOT reused
- AR find_by and find_by! why nil vs AR Record Not Found
- rake db:rollback 
    -- is only if... 1) youre the only person working on the code 
    -- 2) you only need to rollback the most recent migration
    -- 3) it's not going to break anything 
    -- most often I'm gonna tell you to just write another migration 
- Establishing Connection... technically you could write these... but don't 

## Why Active Record?
- SQL... it's the query language that talks to the DB 
    1. it's what AR is doing under the hood (and any ORM is doing)
    2. you might have to write it yourself 
    3. Fair game for interviews 
    4. You might write some on the job... or a lot 
- ORM... Object Relational Mapping... let's you write SQL code in another language and/or writes it for you via methods that write the SQL for you 
- Active Record (AR)... just an ORM but a really nice one. 
    - It provides a lot of infrastructure so it has *a lot of rules* ==> file structure, naming conventions, singular/plural, snake_case vs CamelCase


### Ecosystem expanding!!! OOP & Tables
Models ==> Ruby
Tables / Migrations ==> Rake / AR 

Persistence ==> storage that isn't temporary to while we're running a file like console.rb 

1. If I make a table, I SHOULD make a class 
2. If I make a class, I should ONLY make a table if I need persistence 


Add a new table to our DB  ===> AR / Rake
I need to add a new method to interact with my data  ==> Ruby 
I need to add a new attribute to an existing table ==> AR / Rake (migration!!!)


## From OO to Active Record
- Review Tables
- Rake Migrations
- Models



## Afternoon 
- One to Many (probably afternoon)
- Many to Many (probably afternoon)





## Icebox
- find_by and find_by! why one vs other is great for blog 
- NoSQL databases? MongoDB, Cloud Firestore 
- What's under the hood for google sheets? 
- Writing your own Rake tasks! 
- Security, encryption, rainbow tables, hashing and salting 
















## Afternoon:  Associations!
- One to Many (probably afternoon)
- Many to Many (probably afternoon)


## Process
1. Map out your domain 
2. Create your tables (write those migration) & create or update models 
3. Test our relationships! (write seeds, seed db, go into console and check everything!)










## Resources
- 5 AR Methods it might be nice to know: https://medium.com/swlh/5-must-know-active-record-methods-

### More helpful AR Methods
- .find_or_create

