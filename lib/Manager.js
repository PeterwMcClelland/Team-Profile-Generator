const Employee = require('./Employee');

class Manager extends Employee {
   constructor (name, id) {
       super (name, id)
       this.id = id;
   }

   getRole () {
       return "manager";
   }
}

module.exports = Manager;