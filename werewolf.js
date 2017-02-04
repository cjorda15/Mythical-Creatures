function Werewolf(name, location){
  this.name = name;
  this.location = location;
  this.human = true;
  this.hungry = false;
  this.wolf = false;
  this.change= function(){
    if(this.human && !this.wolf){
  this.human =false;
  this.wolf =true;
  this.hungry = true;
  this.eat=function(victim) {
  victim.alive =false
  this.human=true;
 }
}else if(!this.human && this.wolf){
  this.human =true;
  this.wolf =false;
  this.hungry = false;

}
};
}


function Victim(name){
  this.name = name;
  this.alive = true;
};

module.exports.Victim=Victim;
module.exports.Werewolf= Werewolf;
