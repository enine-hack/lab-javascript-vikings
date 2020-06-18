// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
      
    }
    attack(){
      return this.strength;
      
    }
    receiveDamage(theDamage){
      this.health -= theDamage
    }
  }

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super (health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    super.receiveDamage(damage);
      let message;
      if (this.health > 0){
        message = `${this.name} has received ${damage} points of damage`
      }
      else {
        message = `${this.name} has died in act of combat`
      }
      return message
  }

  battleCry(){
      return ("Odin Owns You All!")
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
  super.receiveDamage(damage);
    let message;
    if (this.health > 0){
      message = `A Saxon has received ${damage} points of damage`;
    } else {
      message = "A Saxon has died in combat";
    }
  return message;
  }
}

// // War
// class War {}
