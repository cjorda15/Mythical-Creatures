function Medusa(name){
  this.name= name;
  this.statues=[];
  this.stare = function(victim) {
  victim.stoned=true;
  this.statues=[victim]
  if (this.statues.length===4) {
var lucky= this.statues[0];
delete this.statues[0];
lucky.stoned=false;

  }


}
}




function Person(name){
  this.name=name;
  this.stoned = false;
};


module.exports.Person=Person;
module.exports.Medusa=Medusa;
