const Manager = require("../classes/manager");

describe('manager', () => {

    const newManager = new Manager("GitHub", 4, "GitHub@email.com", 1234567890);

    it("should return name GitHub", () => {
        expect(newManager.getName()).toBe("GitHub");
    });

    it("should return ID of 1", () => {
        expect(newManager.getId()).toBe(4);
    });

    it("should return an email of GitHub@email.com", () => {
        expect(newManager.getEmail()).toBe("GitHub@email.com");
    });

    it("should return an office number of 1234567890", () => {
        expect(newManager.getOfficeNumber()).toBe(1234567890);
    });

});