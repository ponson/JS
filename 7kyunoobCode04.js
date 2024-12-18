
var assert = require('assert');

assert.strictEqual(arraysEqual(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]), [4, 5]), true)
assert.strictEqual(arraysEqual(hotSingles(["tartar", "blanket", "domino"], ["blanket"]), ["tartar", "domino"]), true)
assert.strictEqual(arraysEqual(hotSingles([77, "basketweave"], [78, 42, "basketweave"]), [77, 78, 42]), true)
assert.strictEqual(arraysEqual(hotSingles([100, 45, "ciao"], [100, 2, 3, 45, 5]), ["ciao", 2, 3, 5]), true)
assert.strictEqual(arraysEqual(hotSingles([10, 200, 30], [10, 20, 3, 4, 5, 200]), [30, 20, 3, 4, 5]), true)
assert.strictEqual(arraysEqual(hotSingles([1, 2, 3], [3, 3, 2, 1]), []), true)
assert.strictEqual(arraysEqual(hotSingles([], []), []), true)
assert.strictEqual(arraysEqual(hotSingles([1, 2, 3, 3], []), [1, 2, 3]), true)
assert.strictEqual(arraysEqual(hotSingles([], [1, 2, 3, 3]), [1, 2, 3]), true)


function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // 排序並轉換為字符串進行比較
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}

function hotSingles(arr1, arr2) {
    var result = [];
    var arr2_found = []

    for (var i=0; i<arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1 && result.indexOf(arr1[i]) === -1 && arr2_found.indexOf(arr1[i]) === -1 ) {
            result.push(arr1[i])
        }

        while (arr2.indexOf(arr1[i]) >= 0 ) {
            arr2_found.push(arr1[i])
            arr2.splice(arr2.indexOf(arr1[i]), 1)
        }
    }
    for (var y=0; y<arr2.length; y++) {
        if (result.indexOf(arr2[y]) === -1) {
            result.push(arr2[y])
        }
    }
    console.log('Result:' + result)
    return result;
}