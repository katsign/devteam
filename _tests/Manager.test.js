const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
      it("should return an object containing a name, ID number and email address", () => {
        const obj = new Manager();
  
        expect("message" in obj).toEqual(false);
      });

      it("should also contain an office number", () => {
        const obj = new Manager();
  
        expect("officeNumber" in obj).toEqual(true);
      });
    });
    
  });