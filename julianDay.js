const gregNow = new Date();
let gregYear = gregNow.getUTCFullYear();
let gregMonth = gregNow.getUTCMonth()+1;
let gregDay = gregNow.getUTCDate();

let A = Number(gregYear/100);
let B = Number(A/4);
let C = 2 - A + B;
let E = Number(365.25 * (gregYear+4716));
let F = Number(30.6001 * (gregMonth+1));
let JD = C + gregDay + E + F;

console.log(`Today's Julian Day number is ${JD}`);
