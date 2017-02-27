function Medusa(name){
this.name = name
this.statues = []
}


Medusa.prototype.stare = function(vic){
  vic.stoned= true
  this.statues.push(vic)
  if(this.statues.length>3){
    var lucky = this.statues[0]
    lucky.stoned = false
    this.statues.shift();}

}

function Person(name){
  this.name = name
  this.stoned = false

}



module.exports.Medusa = Medusa
module.exports.Person = Person
