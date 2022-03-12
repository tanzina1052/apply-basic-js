let inch = 72;
let feet = inch / 12;
console.log(feet);

function inchToFeet(inch) {
    let feet = inch / 12;
    return feet;
}

let myFeet = inchToFeet(59);
console.log(myFeet);
const myFriendFeet = inchToFeet(96);
console.log(myFriendFeet);