function validate_hello(greetings) {
    var hellos = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];

    var g = greetings.toLowerCase();
    console.log('g='+g)
    for (var i=0; i<hellos.length; i++) {
        var index = g.indexOf(hellos[i])
        if (index >= 0) {
            console.log('true')
            return true;
        }
    }

    console.log('false')
    return false;
}

validate_hello('ik ciAo')