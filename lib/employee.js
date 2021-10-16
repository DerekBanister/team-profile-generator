//create constructor for each role
//create functions for name id email role

class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
//template literals, functions same name as in tests
    }
    getName() {
        return `Name: ${this.name}`
    }
    getId() {
        return `ID: ${this.id}`
    }
    getEmail() {
        return `Email: ${this.email}`
    }
    getRole() {
        return `Employee`
    }
}

module.exports = employee;