const Decorator = function(paint_stock){
  this.paint_stock = [];

};


Decorator.prototype.add_to_paint_stock(paint){
    this.paint_stock.push(paint);
    console.log(this.paint_stock);
};

Decorator.prototype.total_paint_in_stock(){
  for paint in this.paint_stock{
     let total += paint
  };
};

Decorator.prototype.



















module.exports = Decorator;
