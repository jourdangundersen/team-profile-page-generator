const manager = require("../classes/manager");

describe('manager', () => {

    const newManager = new Manager("Graham", 4, "Graham@email.com", 18005551234);

    it("should return name Graham", () => {
        expect(newManager.getName()).toBe("Graham");
    });

    it("should return ID of 1", () => {
        expect(newManager.getId()).toBe(4);
    });

    it("should return an email of Graham@email.com", () => {
        expect(newManager.getEmail()).toBe("Graham@email.com");
    });

    it("should return an office number of 18005551234", () => {
        expect(newManager.getOfficeNumber()).toBe(18005551234);
    });

});