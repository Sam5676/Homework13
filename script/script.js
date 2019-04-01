"use strict";

var Animal = function(nike) {
    this.nike = nike;
};

Animal.prototype.eat = function(food){
    console.log("It is eating" + food);
};

Animal.prototype.sleep = function(){
    console.log(this.nike + "is sleeping");
};

function WildAnimal(nike) {

    Animal.apply(this, arguments);

};

WildAnimal.prototype = Object.create(Animal.prototype);
WildAnimal.prototype.constructor = WildAnimal;

function Pet(nike) {

    Animal.apply(this, arguments);

};

Pet.prototype = Object.create(Animal.prototype);
Pet.prototype.constructor = Pet;


WildAnimal.prototype.hunt = function(){
    console.log(this.nike + " hunt chicken " + ".");
};

Pet.prototype.peeInTray = function(){
    console.log(this.nike + " do it.");
};

function Wolf(nike) {

    Animal.apply(this, arguments);

};

Wolf.prototype = Object.create(WildAnimal.prototype);
Wolf.prototype.constructor = Wolf;

Wolf.prototype.hawlAtTheMoon = function() {
    console.log("Auuu");
}

function Fox(nike) {

    Animal.apply(this, arguments);

};

Fox.prototype = Object.create(WildAnimal.prototype);
Fox.prototype.constructor = Fox;

Fox.prototype.eatKolobok = function() {
    console.log("Kolobok is tasty.");
}

function Cat(nike) {

    Animal.apply(this, arguments);

};

Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.sleepOnKeyboard = function() {
    console.log("Zzzzzz");
}

function YorshireTerrier(nike) {

    Animal.apply(this, arguments);

};

YorshireTerrier.prototype = Object.create(Pet.prototype);
YorshireTerrier.prototype.constructor = YorshireTerrier;

Fox.prototype.bark = function() {
    console.log("Gaf");
}


var pet1 = new Cat("Janet");
var pet2 = new Wolf("Anon");
pet1.peeInTray();
pet1.eat();
pet2.hunt();
pet2.sleep();

console.log(pet1 instanceof Animal);
console.log(pet2 instanceof Pet);
