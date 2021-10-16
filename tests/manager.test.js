//test if creating object, and role

const manager = require("../lib/manager.js")

test("create manager object", () => {
    const managerObj = new manager("Cheng Tang", "4", "cheng@tang.com", "b12");

    expect(managerObj.name).toBe("Cheng Tang");
    expect(managerObj.id).toBe("4");
    expect(managerObj.email).toBe("cheng@tang.com")
    expect(managerObj.officeNum).toBe("b12");
})

test("get manager role", () => {
    const managerObj = new manager("Cheng Tang", "4", "cheng@tang.com", "b12");

    expect(managerObj.getRole()).toEqual(expect.stringContaining("Manager"))
})