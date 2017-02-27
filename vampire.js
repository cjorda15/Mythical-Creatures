function Vampire(name, pet){
  this.name = name
  this.pet = pet===undefined? "bat": pet
}


Vampire.prototype.thirsty= true;

Vampire.prototype.drink = function(){
  this.thirsty= false
}

module.exports = Vampire
