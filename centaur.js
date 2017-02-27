function Centaur(name, breed){
  this.name = name
  this.breed = breed
  this.cranky = false
  this.standing = true
  this.layingDown = false
  this.work = 0
}

Centaur.prototype.shoot = function(){
  this.work++
  this.work>2 || this.standing===false?this.cranky=true:this.cranky=false
  return this.cranky===true? "NO!":"Twang!!!"
}

Centaur.prototype.run = function(){
  this.work++
  this.work>2 || this.standing===false?this.cranky=true:this.cranky=false
  return this.cranky===true? "NO!":"Clop clop clop clop!!!"
}

Centaur.prototype.sleep = function(){
  return this.standing===true? "NO!":(this.cranky=false,this.work=0,"ZZZZ")
}


Centaur.prototype.layDown = function(){

  this.standing = false
  this.layingDown = true
}

Centaur.prototype.standUp = function(){

  this.standing = true
  this.layingDown = false
}

Centaur.prototype.drinkPotion = function () {

  if(this.cranky===false){
    return this.cranky =true
  }
return  this.standing===true?
  (this.cranky =false,this.work= 0):
   'Not while I\'m standing!'
};


module.exports =Centaur
