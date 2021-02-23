const Engineer = require("../classes/engineer");

describe('engineer', () => {

    const newEngineer = new Engineer("Sir Paul II", 2, "sirpaulii@royal.com", "sirpaulii");

    it("should return name Sir Paul II", () => {
        expect(newEngineer.getName()).toBe("Sir Paul II");
    });

    it("should return ID of 1", () => {
        expect(newEngineer.getId()).toBe(2);
    });

    it("should return an email of sirpaulii@royal.com", () => {
        expect(newEngineer.getEmail()).toBe("sirpaulii@royal.com");
    });

    it("should return a github username of sirpaulii", () => {
        expect(newEngineer.getGithub()).toBe("sirpaulii");
    });

});