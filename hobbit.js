function Hobbit(name){
this.name = name
this.disposition = "homebody"
this.age = 0;
this.isShort = true
this.adult = false
this.old = false
this.hasRing = this.name==='Frodo'? true:false
}


Hobbit.prototype.celebrateBirthday = function () {
  this.age++
  this.age >32? this.adult=true: this.adult=false
  this.age >100? this.old=true: this.old=false
};





Hobbit.prototype.timeTravel = function(num, hobbit){
    for(var i = 0; i < num; i++) {
      hobbit.celebrateBirthday();

}
}

module.exports = Hobbit
