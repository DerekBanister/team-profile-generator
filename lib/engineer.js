//create functions for role github
const employee = require ("./employee")

//extend employee with class engineer
//constructors/super
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return `Github: ${this.github}`
    }
    getRole(){
        return `Engineer`
    }
}

module.exports = engineer;
