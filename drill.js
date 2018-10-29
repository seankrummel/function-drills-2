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

function decode(word) {
    let num;
    switch (word[0]) {
        case 'a':
            num = 2;
            break;
        case 'b':
            num = 3;
            break;
        case 'c':
            num = 4;
            break;
        case 'd':
            num = 5;
            break;
        default:
            num = 0;
            break;
    }
    if (!num) {
        return ' ';
    }
    return word[num - 1];
}

function days(month, leapYear = false) {
    month = month.charAt(0).toUpperCase() + month.slice(1);
    let day;
    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            day = 31;
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            day = 30;
            break;
        case 'February':
            leapYear ? day = 29 : day = 28;
            break;
        default:
            throw new Error('Must provide a valid month');
    }

    return `${month} has ${day} days.`;
}

console.log(jediName('Sean', 'Krummel'));
beyond(undefined);
beyond(1);
beyond(-1);
beyond(0);
console.log(decode('craft'));
console.log(decode('block'));
console.log(decode('argon'));
console.log(decode('meter'));
console.log(decode('bells'));
console.log(decode('brown'));
console.log(decode('croon'));
console.log(decode('droop'));
try {
    console.log(days('february', true));
} catch (e) {
    console.log(e);
}