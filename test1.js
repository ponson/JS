var assert = require('assert')
// var chai = require('chai')

function setTimer(doneMessage, n) {

    setTimeout(function() {
        console.log(doneMessage);
    }, n);

    doneMessage = "Ouch!";
}

function closureTest() {
    var result = [];
    for (var i=0; i < 5; i++) {
        result.push(function() {return i});
    }

    console.log(result[1]());
    console.log(result[3]());
}

function closureTest1() {
    var result = [];
    for (var i=0; i < 5; i++) {
        (function () {
            var i2 = i
            result.push(function() {return i2});
        }());
    }

    console.log(result[1]());
    console.log(result[3]());
}
// setTimer("Cookies are done!", 1000);

function toArray(arrayLikeObject) {
    return Array.prototype.slice.call(arrayLikeObject)
}


function f(x, y) {
    console.log(x, y);
    console.log(this)
    return toArray(arguments);
}

function findEvenNumber(arr) {
    loop: {
        for (var i=0; i < arr.length; i++) {
            var elem = arr[i];
            if ((elem % 2) === 0) {
                console.log('Found: ' + elem);
                break loop;
            }
        }
        console.log('check A')
    }
    console.log('check B')
}


function subtract(x, y) {
    return x - y
}


function action() {
    console.log('End of recurssive.');
}

function doNTimes(n,act) {
    function doNTimesRec(x) {
        if (x >= 1) {
            act();
            doNTimesRec(x-1);
        }
    }
    doNTimesRec(n);
}

function arrayTest() {

    var arr =[];
    arr[0] = 'a';
    arr[2] = 'b';
    console.log('arr length='+arr.length)
    console.log('arr ='+arr)
}


function typeoftest() {
    console.log(typeof 'JavaScript')
    console.log(typeof undefined)
    console.log(typeof null)
    console.log(`Test the new template literal, the type of null is ${typeof null}`)
}

function looptest() {
    var i;
    for (i = 0; i >= 0; i++) {
        console.log(i);
    }
}

function myFunc(total, n1, n2) {
    console.log('total='+total);
    console.log('n1='+n1);
    console.log('n2='+n2);
    return total - n1 - n2
}

const numbers = [175, 1, 2, 5]
console.log(numbers.reduce(myFunc))
// looptest()
// typeoftest()
// arrayTest()
// doNTimes(3, action)

// var sub1 = subtract.bind(null, 1);
// console.log('answer = ' + sub1(5));
// args = f()
// console.log(args)
// assert.strictEqual(50, 500)
// findEvenNumber('12345')