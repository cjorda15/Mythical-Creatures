function Werewolf(name, location){
this.name = name
this.location = location
this.human = true
this.wolf = false
this.hungry = false
}


Werewolf.prototype.change = function(){
  this.human===true? (this.human=false,this.wolf=true,this.hungry=true):(this.human=true,this.wolf=false, this.hungry=true)
}


Werewolf.prototype.eat = function (human) {
  this.wolf===true?
  (human.alive = false,
  this.hungry = false):(human.alive=true,this.hungry=true)
};

function Victim(name){
this.name = name
this.alive = true
}


module.exports.Werewolf = Werewolf
module.exports.Victim = Victim
