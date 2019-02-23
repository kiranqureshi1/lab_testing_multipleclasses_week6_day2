const assert = require("assert");
const Room = require("../model/room.js");
const Paint = require("../model/paint.js");

describe("room", function(){

 let room1;

 beforeEach(function(){
   paint1 = new Paint(6)
   room1 = new Room(5, 0, paint1)
 });

  it('should start not painted', function(){
    assert.strictEqual(room1.painted_area, 0);
  });

  it('should be able to be painted', function(){
    assert.strictEqual(room1.painted(), true)
  });

});
