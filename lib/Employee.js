class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
        }
    getRole() {
        return "Employee";
    }
};

module.exports = Employee;

