function Vampire(name, pet){
this.name=name;
this.thirsty=true;
this.drink= function(){
this.thirsty=false;
}

this.pet= pet||"bat"


}


module.exports= Vampire;
