const Paint = function(paint_in_liters) {
  this.paint_in_liters = paint_in_liters;
};

Paint.prototype.check_empty = function(){
  if (this.paint_in_liters === 0){
    console.log("the paint is empty");}
    else {
    console.log("paint can is not empty");}
  };

Paint.prototype.make_empty = function(){
  this.paint_in_liters = 0;
  console.log(this.paint_in_liters);
};

module.exports = Paint;
