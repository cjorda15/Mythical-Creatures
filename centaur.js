function Centaur(name, breed) {
this.name = name;
this.breed = breed;
this.work = 0;
this.cranky = false;
this.standing = true;
this.layingDown = false;
}
Centaur.prototype.shoot = function () {
    if(this.cranky === true) {
      return 'NO!';
    } else if (this.layingDown === true) {
      return 'NO!';
    } else {
      this.work++;
      if (this.work >= 3) {
        this.cranky = true; }
      return 'Twang!!!';
    }
  };

  Centaur.prototype.run = function() {
    if (this.layingDown === true) {
      return 'NO!';
    } else {
      this.work++;
        if (this.work >= 3) {
          this.cranky = true;
        }
      return 'Clop clop clop clop!!!';
    }
  };

  Centaur.prototype.sleep = function () {
    if(this.layingDown===true){
      this.cranky =false;
      return "ZZZZ"
    }else{
    return "NO!"
  };
}
  Centaur.prototype.layDown= function(){
    this.standing = false;
    this.layingDown = true;
  }

  Centaur.prototype.standUp= function(){
    this.standing = true;
    this.layingDown = false;
  }

 Centaur.prototype.drinkPotion=function() {
 if(this.standing===true && this.cranky===true){
     this.cranky=false;
   }else if(this.standing===true && this.cranky===false){
     this.cranky=true;
   }else if(this.layingDown===true){
     return 'Not while I\'m standing!'

 }
 }


module.exports = Centaur;
