let year = 2025;
console.log(year / 4);

let year2 = 2030;
console.log(year2 % 4);

let year3 = 2040;
let remainder = year3 % 4;
console.log(remainder);

let year4 = 2045;
let remainder2 = year4 % 4;
if (remainder2 == 0) {
    console.log("Year is a leap year");
}
else {
    console.log("Year is not a leap year");
}

function isLeapYear (year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return "It's a leap year";
    } 
    else {
        return "It's not a leap year";
    }

}

const leapYearResult = isLeapYear(2050);
console.log(leapYearResult);