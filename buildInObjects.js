var now = new Date();

console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getDay());

var oddNumbers = new Array(3);
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;
oddNumbers[3] = 7;

console.log(oddNumbers.reverse())

var aString = oddNumbers.join(" - ")
console.log(aString)

var areAllOdd = oddNumbers.every(function (x) {
    return ((x % 2) != 0);
})
console.log(areAllOdd)