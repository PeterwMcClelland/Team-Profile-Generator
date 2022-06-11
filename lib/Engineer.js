const Employee = require("./Employee")
 
class Engineer extends Employee {
    constructor (name, id) {
    super (name, id);

    this.id = id;
    }

    
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 