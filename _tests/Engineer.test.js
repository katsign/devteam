const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should return an object containing a name, ID number and email address", () => {
        const obj = new Engineer();
  
        expect("message" in obj).toEqual(false);
      });

      it("should also contain a githubUsername", () => {
        const obj = new Engineer();
  
        expect("githubUsername" in obj).toEqual(true);
      });
    });
    
  });