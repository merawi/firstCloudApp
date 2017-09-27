var expect = require("chai").expect;
var person  = {first : firstName, last: lastName};
function printName(p){
	return person.last + ", "+ person.first;
}


describe("printName", function(){
 it("should print the last name first", function(){
	var results = printName({ first : "Alex", last: "Banks"});
	expect(results).to.equal("Banks, Alex");
 });
});
