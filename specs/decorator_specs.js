const assert = require("assert");
const Decorator = require("../model/decorator.js");
const Paint = require("../model/paint.js");
const Room = require("../model/room.js");

describe("Decorate", function(){


  let room1;
  let paint1;
  let decoration1;

  beforeEach(function(){
    room1 = new Room(5, 0);
    paint1 = new Paint(5);
    decoration1 = new Decorator([], room1);
  });

  it("add a can of paint to a paint stock",function(){
    paint2 = new Paint(6)
    decoration1.add_paint_to_paint_stock(paint2);
    const actual = (decoration1.paint_stock.length);
    const expected = (1);
    assert.strictEqual(actual, expected);
  });

  // it("be able to calculate total litres of paint it has in stock",function(){
  //   paint3 = new Paint(6)
  //   paint4 = new Paint(7)
  //   decoration1.add_paint_to_paint_stock(paint3);
  //   decoration1.add_paint_to_paint_stock(paint4);
  //   const actual = (decoration1.total__liters_paint_in_stock);
  //   const expected = (13);
  //   assert.strictEqual(actual, expected);
  // });
  it('should be able to calculate total litres paint it has in stock', function () {
    paint3 = new Paint(6)
    paint4 = new Paint(7)
    decoration1.add_paint_to_paint_stock(paint3);
    decoration1.add_paint_to_paint_stock(paint4);
    const expected = 13;
    assert.strictEqual(decoration1.total__liters_paint_in_stock(), expected);
  });

  // it("be able to calculate whether it has enough paint to paint a room", function(){
  //   assert.strictEqual(decoration1.check_if_paint_is_enough_to_paint_room, true);
  // });
  it("be able to paint room if has enough paint in stock",function(){
    paint5 = new Paint(6)
    paint6 = new Paint(7)
    decoration1.add_paint_to_paint_stock(paint5);
    decoration1.add_paint_to_paint_stock(paint6);
    assert.strictEqual(decoration1.paintTheRoom(), true);
  });





});
