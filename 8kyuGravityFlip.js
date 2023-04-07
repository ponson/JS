const flip = (d, a) => {

    var rowItems = new Array(Math.max.apply(null, a)).fill(0);
    //console.log(rowItems);
    for (var i=0; i < a.length; i++) {
        var colItems = a[i];
        for (var j=0; j < colItems; j++){
            rowItems[j] += 1
        }
    };
    
    var b;
    var delta;
    
    if (d === 'L') {
        b = 0; //start pos
        delta = 1;
    }
    else {
        b = a.length - 1;
        delta = -1;
    }
    var gColItems = new Array(a.length).fill(0);
    for (var i=0; i<rowItems.length; i++) {
        var rowNums = rowItems[i];
        startb = b;
        for (var j=0; j < rowNums; j++) {
            gColItems[startb] += 1;
            startb += delta;
        }
    }
    return gColItems
}


console.log(flip('R', [3, 2, 1, 2]))   //[1, 2, 2, 3]
console.log(flip('L', [1, 4, 5, 3, 5]))  //[5, 5, 4, 3, 1]