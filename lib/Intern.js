const Employee = require("./Employee");

class Intern extends Employee {
   constructor (name, id) {
       super (name, id)

       this.id = id;
   }

   getRole () {
       return "intern";
   }
}

module.exports = Intern;