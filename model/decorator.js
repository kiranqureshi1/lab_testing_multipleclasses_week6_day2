const Decorator = function(paint_stock, room){
  this.paint_stock = paint_stock;
  this.room = room;
  // this.paint = paint

};


Decorator.prototype.add_paint_to_paint_stock = function(paint){
    this.paint_stock.push(paint);
};



// Decorator.prototype.total__liters_paint_in_stock = function(){
//   const sumPaint = this.paint_stock.reduce((total, paint) => total + paint, 0);
//     return sumPaint;
// };

Decorator.prototype.total__liters_paint_in_stock = function(){
  let total = 0;
  for (const paint in this.paint_stock){
      total += paint.paint_in_liters;
  };
  return total;
};

// Decorator.prototype.calculateAmountOfPaint = function () {
//   let total = 0;
//
//   for (const paintCan of this.paintStock) {
//     total += paintCan.litresOfPaint;
//   }
//
//   return total;
// };

Decorator.prototype.check_if_paint_is_enough_to_paint_room = function(){
  if (Decorator.total__liters_paint_in_stock >= this.room.area){
    console.log("yes enough")
  };
    return true;
};

Decorator.prototype.paintTheRoom = function(){
  for (const paint in this.paint_stock){
  if(paint.paint_in_liters >= this.room.area){
    this.room.paint.make_empty;
  };
};
  return true
};



















module.exports = Decorator;
