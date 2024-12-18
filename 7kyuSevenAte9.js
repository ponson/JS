function sevenAte9(str) {
    var result = str.replace(/79+7/g, "77");
    console.log('1st:'+result);
    while (result !== str) {
        str = result;
        result = str.replace(/79+7/g, "77");
        console.log('loop:'+result);
    }

    return result;
}

console.log(sevenAte9('79799997'))

// module.exports = sevenAte9;
