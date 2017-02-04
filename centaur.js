function Centaur(name, breed) {
this.name = name;
this.breed = breed;
this.work = 0;
this.cranky = false;
this.standing = true;
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
    return "NO!"
  };





module.exports = Centaur;
