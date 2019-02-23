const Room = function(area, painted_area, paint) {
  this.area = area;
  this.painted_area = painted_area;
  this.paint = paint;
};

// Room.prototype.not_painted = function(){
//   this.painted_area = 0;
//   console.log(this.painted_area);
// };

Room.prototype.painted = function(){
  if (this.paint >= this.painted_area){
  };
  return true
};


module.exports = Room;
