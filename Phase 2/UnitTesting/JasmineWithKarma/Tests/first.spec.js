//describe represents a whole test suite and it represents a test case

describe("A suite is just a function", function() {
  var a;
  it("and so is a spec", function() {
    a = true;
    expect(a).toBe(true);
  });
});

//use x  in front of the test case or the suite to skip it for the test

describe("basic matchers",function(){
    //"use of toBe===" not being check because x is used
    xit("use of toBe===",function(){
        expect(10).toBe('10')
    });
    it("use of toEqual===+",function(){
        // expect(60).toBe(60);
        var o={name:"Sapient"};
        expect(o).toEqual({name:"Sapient"});
    });
    //Regular Expression, add "i" at end to make it case-insensitive
    it("use of toMatch: regEx",function(){
        expect("Sapient is a Company").toMatch(/Company/i); //i is used for remove case insensitivity
    });
    it("use of toBeDefined",function(){
        var obj={AnyDynamicProperty:"Hallo"};
        expect(obj.AnyDynamicProperty).toBeDefined(); 
    });
    it("use of not.toBeDefined",function(){
        var obj={};
        expect(obj.AnyDynamicProperty).not.toBeDefined(); 
    });
    it("use of toContain",function(){
        var str="Sapient is a Company";
        expect(str).toContain("Company"); 
    });
    it("use of toContain with Arrays",function(){
        var companies=["Microsoft","Accenture"];
        expect(companies).toContain("Microsoft"); 
    });
    function ThisThrowsAnError(){
        throw new TypeError("My Error");
    }
    it("use of toThrowError",function(){
        // var companies=["Microsoft","Accenture"];
        expect(ThisThrowsAnError).toThrowError(TypeError); 
    });

});