function sloopyFunc() {
    sloppyVar = 123;
}


function strictFunc() {
    'use strict';
    var strictVar;

    strictVar = 123;
    console.log(strictVar)
}

strictFunc();
// sloopyFunc();
// console.log(sloppyVar);