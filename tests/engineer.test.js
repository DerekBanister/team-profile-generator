// test for if I am creating object, github username, role
const engineer = require("../lib/engineer.js")

test('create engineer object', () => {
    const engineerObj = new engineer ("T1 Faker", "2", "faker@t1.com", "zedOutplay")
    
    expect(engineerObj.name).toBe("T1 Faker");
    expect(engineerObj.id).toBe("2");
    expect(engineerObj.email).toBe("faker@t1.com");
    expect(engineerObj.github).toBe("zedOutplay");
});
//test for engineer specific traits, github/role
test("get engineer github", () => {
    const engineerObj = new engineer ("T1 Faker", "2", "faker@t1.com", "zedOutplay")

    expect(engineerObj.getGithub()).toEqual(expect.stringContaining("zedOutplay"))
});

test("get engineer role", () => {
    const engineerObj = new engineer ("T1 Faker", "2", "faker@t1.com", "zedOutplay")

    expect(engineerObj.getRole()).toEqual(expect.stringContaining("Engineer"));
})