describe("setup/teardown", function() {
    var arr;
    beforeEach(function(){
        console.log("Within beforeEach!")
        //Initialization
        arr=[10,20,30,40,50];
    });
    afterEach(function(){
        console.log("Within afterEach!")
    });
    beforeAll(function(){
        console.log("Within beforeAll!")
    });
    afterAll(function(){
        console.log("Within afterAll!")
    });
    it("use setup and teardown methods", function() {
      expect(arr).toContain(20);
    });
    it("length of array", function() {
        expect(arr.length).toBe(5);
      });
  });