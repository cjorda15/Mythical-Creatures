function Pirate(name,job){
this.name = name;
this.evil =0;
if (job===undefined) {
   this.job = "Scallywag"
}else{
   this.job = job;
}

}
Pirate.prototype.booty = 0;
Pirate.prototype.robShip= function(){
  this.booty =100;
  return 'YAARRR!';
}
Pirate.prototype.cursed =false;
Pirate.prototype.commitHeinousAct= function(){
  this.evil++;
  if(this.evil>=3){
    this.cursed=true;
  }
}
module.exports = Pirate;
