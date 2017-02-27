function Pirate(name, job){
this.name = name
this.job = job===undefined? "Scallywag": job
this.bad = 0;
this.booty = 0;
}


Pirate.prototype.cursed = false;

Pirate.prototype.commitHeinousAct = function(){
this.bad++
this.bad>=3? this.cursed=true: this.cursed= false;
}

Pirate.prototype.robShip= function(){
this.booty += 100;
  return "YAARRR!"
}





module.exports = Pirate
