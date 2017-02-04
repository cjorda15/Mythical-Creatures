function Hobbit(name, age){
  this.name=name;
  this.disposition='homebody'
  this.old = false;
  if(age===undefined){
    this.age=0;
  }else{
    this.age=age;
  }
  if(this.name==="Frodo"){
    this.hasRing = true;
  }else{
    this.hasRing = false;
  }

}



Hobbit.prototype.celebrateBirthday = function () {
  this.age++
  if(this.age>=33 && this.age>=101 ){
    this.adult=true;
    this.old=true;
  }else if(this.age>=33 &&this.age<101){
    this.adult=true;
    this.old=false;
  }else{
    this.adult =false;
    this.old= false;
  }
}

Hobbit.prototype.timeTravel = function (num, hobbit) {
  for(var i = 0; i < num; i++) {
    hobbit.celebrateBirthday();

};
}

Hobbit.prototype.isShort = true;


module.exports=Hobbit;
