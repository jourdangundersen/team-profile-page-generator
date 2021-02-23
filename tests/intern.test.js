const intern = require("../classes/intern");

describe('intern', () => {

    const newIntern = new Intern("Michael", 3, "Michael@email.com", "K-State");

    it("should return name Michael", () => {
        expect(newIntern.getName()).toBe("Michael");
    });

    it("should return ID of 1", () => {
        expect(newIntern.getId()).toBe(3);
    });

    it("should return an email of Michael@email.com", () => {
        expect(newIntern.getEmail()).toBe("Michael@email.com");
    });

    it("should return a school name of K-State", () => {
        expect(newIntern.getSchool()).toBe("K-State");
    });

});