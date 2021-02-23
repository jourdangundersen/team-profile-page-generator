const engineer = require("../classes/engineer");

describe('engineer', () => {

    const newEngineer = new Engineer("Cameron", 2, "Cameron@email.com", "camerondoe");

    it("should return name Cameron", () => {
        expect(newEngineer.getName()).toBe("Cameron");
    });

    it("should return ID of 1", () => {
        expect(newEngineer.getId()).toBe(2);
    });

    it("should return an email of Cameron@email.com", () => {
        expect(newEngineer.getEmail()).toBe("Cameron@email.com");
    });

    it("should return a github username of camerondoe", () => {
        expect(newEngineer.getGithub()).toBe("camerondoe");
    });

});