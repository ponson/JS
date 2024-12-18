var migrating = true;

if (migrating) {
    quack(4);
    fly(4);
}

var fly = function(num) {
    for (i=0; i<num; i++) {
        console.log("Flying!");
    }
};

function quack(num) {
    for (i=0; i<num; i++) {
        console.log("Quack!");
    }
};