


function Wizard(obj={}) {
  this.name = obj.name;
  this.bearded = !!((obj.bearded === undefined))
}

Wizard.prototype.incantation = function (message) {
  return message.toUpperCase();
}
Wizard.prototype.nah=0;
Wizard.prototype.rested = true
Wizard.prototype.cast = function () {
this.nah++
if(this.nah>=4)
{ this.rested=false;
  return "I SHALL NOT CAST!";}
  else{
  return 'MAGIC BULLET'
};
}

module.exports = Wizard;
