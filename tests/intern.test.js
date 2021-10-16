//test if I am making object, school, role

const intern = require('../lib/Intern.js');

test ('create intern object', () => {
    const internObj = new intern("Noob", "3", "noob@newb.com", "CSU East Bay");
    expect(internObj.name).toBe("Noob");
    expect(internObj.id).toBe("3");
    expect(internObj.email).toBe("noob@newb.com");
    expect(internObj.school).toBe("CSU East Bay");
});

test("get internObj school", () => {
    const internObj = new Intern("Noob", "3", "noob@newb.com", "CSU East Bay");

    expect(internObj.getSchool()).toEqual(stringContaining("CSU East Bay"))
});

test("get internObj role", () => {
    const internObj = new Intern("Noob", "3", "noob@newb.com", "CSU East Bay");

    expect(internObj.getRole()).toEqual(stringContaining("Intern"))
});