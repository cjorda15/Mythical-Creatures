function Medusa(name){
  this.name= name;
  this.statues=[];
  this.stare = function(victim) {
  victim.stoned=true;
  if (this.statues.length===3) {
    var lucky= this.statues[0];
    lucky.stoned=false;
    this.statues.slice(0,1)
  }else{
          this.statues.push(victim)
    }
  }
}

function Person(name){
  this.name=name;
  this.stoned = false;
}

module.exports.Person=Person;
module.exports.Medusa=Medusa;
