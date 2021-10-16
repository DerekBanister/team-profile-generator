// need to test for employee object, name, id ,email, role. 

const employee = require("../lib/employee.js");

test("create employee object", () => {

    const employeeObj = new employee("Farley Chicken", "1", "bacon@chicken.net");
    
    //expect??
    expect(employeeObj.name).toBe("Farley Chicken");
    expect(employeeObj.id).toBe("1");
    expect(employeeObj.email).toBe("bacon@chicken.net");
});
//test for general employee traits
test("get employee name", () => {
    const employeeObj = new employee("Farley Chicken", "1", "bacon@chicken.net");

    expect(employeeObj.getName()).toEqual(stringContaining("Farley Chicken"));
})

test("get employee ID", () => {
    const employeeObj = new employee("Farley Chicken", "1", "bacon@chicken.net");

    expect(employeeObj.getId()).toEqual(stringContaining("1"));
})

test("get employee email", () => {
    const employeeObj = new employee("Farley Chicken", "1", "bacon@chicken.net");

    expect(employeeObj.getEmail()).toEqual(stringContaining("bacon@chicken.net"));
})

test("get employee role", () => {
    const employeeObj = new employee("Farley Chicken", "1", "bacon@chicken.net");

    expect(employeeObj.getRole()).toEqual(stringContaining("Employee"));
})

//not sure if these are correct, time will tell when I test later
