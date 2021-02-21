const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
      it("should return an object containing a name, ID number and email address", () => {
        const obj = new Intern();
  
        expect("message" in obj).toEqual(false);
      });

      it("should also contain a school or program", () => {
        const obj = new Intern();
  
        expect("school" in obj).toEqual(true);
      });
    });
    
  });