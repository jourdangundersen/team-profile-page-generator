const Intern = require("../classes/intern");

describe('intern', () => {

    const newIntern = new Intern("Patricia", 3, "Patricia@email.com", "K-State");

    it("should return name Patricia", () => {
        expect(newIntern.getName()).toBe("Patricia");
    });

    it("should return ID of 1", () => {
        expect(newIntern.getId()).toBe(3);
    });

    it("should return an email of Patricia@email.com", () => {
        expect(newIntern.getEmail()).toBe("Patricia@email.com");
    });

    it("should return a school name of K-State", () => {
        expect(newIntern.getSchool()).toBe("K-State");
    });

});