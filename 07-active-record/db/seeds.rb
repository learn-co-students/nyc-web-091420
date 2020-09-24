User.destroy_all

User.new({ name: "arthur", age: 47, ssn: "12345" }).save 
# .new just creates the instance, not the row 
            ## before I save, I can run whatever checks I need 
# .save actually persists the instance as a row
# .create does both 

User.create({ name: "brandon", age: 51, ssn: "12345", "birthday": ""  })
User.create({ name: "caryn", age: 14, ssn: "12345" })
User.create({ name: "sisan", age: 28, ssn: "12345" })
User.create({ name: "bryn", age: 85, ssn: "12345" })

