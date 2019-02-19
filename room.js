const Room = function(area, painted_area) {
  this.area = area;
  this.painted_area = painted_area;
};

Room.prototype.not_painted = function(){
  this.painted_area = 0;
  console.log(this.painted_area);
};

Room.prototype.painted(amount){
  this.painted_area = amount;
  console.log(this.painted_area);
};


module.exports = Room;
