function Dragon(name, rider, color){
this.name = name
this.rider = rider
this.color = color
this.hungry = true
this.food =0
}

Dragon.prototype.eat = function(){
  this.food++
  this.food>2? this.hungry=false: this.hungry=true;
}


module.exports= Dragon
