const assert = require("assert");
const Paint = require("../model/paint.js");

describe("paint", function(){

  let paint1

  beforeEach(function(){
    paint1 = new Paint(5);
  });

  it("be able to check if it is empty", function(){
  assert.strictEqual(paint1.check_empty(), true)
  });

  it("be able to empty itself of paint", function(){
  assert.strictEqual(paint1.make_empty(), 0)
  });
});
