const Employee = require("../classes/employee");

describe('employee', () => {

    const newEmployee = new Employee("John", 1, "john@email.com");

    it("should return name John", () => {
        expect(newEmployee.getName()).toBe("John");
    });

    it("should return ID of 1", () => {
        expect(newEmployee.getId()).toBe(1);
    });

    it("should return an email of john@email.com", () => {
        expect(newEmployee.getEmail()).toBe("john@email.com");
    });

});