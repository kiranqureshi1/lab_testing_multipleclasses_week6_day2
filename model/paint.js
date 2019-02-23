const Paint = function(paint_in_liters) {
  this.paint_in_liters = paint_in_liters;
};

Paint.prototype.check_empty = function(){
  if (this.paint_in_liters !== 0){
    console.log("the paint is empty")};
     return true;
  // else {
  //   console.log("paint can is not empty")};
  //   return false;
  };

Paint.prototype.make_empty = function(){
  this.paint_in_liters = 0;
  return this.paint_in_liters;
};

module.exports = Paint;
