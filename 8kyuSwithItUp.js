var assert = require('assert');

assert.strictEqual(switchItUp(1), 'Oane')

function switchItUp(number) {
    switch (number) {
        case 0:
            return 'Zero';
        case 1:
            return 'One'
    }

}
