'use strict';

function jediName(firstName, lastName) {
    return lastName.slice(0,3) + firstName.slice(0,2);
}

function beyond(num) {
    if (num === undefined) {
        console.log('And beyond.');
    } else if (num > 0) {
        console.log('To infinity.');
    } else if (num < 0) {
        console.log('To negative infinity.');
    } else {
        console.log('Staying home.');
    }
}

console.log(jediName('Sean', 'Krummel'));
beyond(undefined);
beyond(1);
beyond(-1);
beyond(0);