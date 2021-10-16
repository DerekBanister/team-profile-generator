//create functions for role

const employee = require ("./employee");

class manager extends employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;

    }
    getRole() {
        return `Manager`
    }
}

module.exports = manager;