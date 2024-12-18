function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine"

var fido = new Dog("Fido", "Mixed", 38)
var fluffy = new Dog("fluffy", "Poodle", 30)
var spot = new Dog("spot", "chihuahua", 10)
var dogs = [fido, fluffy, spot]

// for (var i=0; i<dogs.length; i++) {
//     var size = "small";

//     if (dogs[i].weight > 10) {
//         size = "large";
//     }

//     console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
// }

console.log(spot.hasOwnProperty("species"))
spot.species = "doggie"
console.log(spot.hasOwnProperty("species"))
console.log(fido.species)
console.log(fido.hasOwnProperty("species"))

