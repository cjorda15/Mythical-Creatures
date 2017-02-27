function Wizard(obj=[]){
this.name = obj.name;
this.bearded = obj.bearded===undefined? true:false;
this.work = 0 ;
this.rested = true;

}

Wizard.prototype.incantation = function(string){
return  string.toUpperCase()
}

Wizard.prototype.cast = function(){
this.work++
return this.work>2? "I SHALL NOT CAST!":"MAGIC BULLET"
}

module.exports = Wizard
