function Unicorn(name, color){
  this.name = name;
  this.color= color===undefined? "white": color
}

Unicorn.prototype.isWhite = function(){
  return this.color==="white"? true: false
}

Unicorn.prototype.says = function(say){
  return '**;* '+say+' *;**'
}

module.exports =Unicorn
