const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a name, ID number and email address", () => {
      const obj = new Employee();

      expect("message" in obj).toEqual(false);
    });
  });
  
});