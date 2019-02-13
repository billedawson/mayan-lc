const jdnCalc = (gregDate) => {
  let gregNow = new Date();
  if (gregDate != null) {
    gregNow = new Date(gregDate);
  }
  let gregYear = gregNow.getFullYear();
  let gregMonth = gregNow.getMonth() + 1;
  if (gregNow.getMonth() < 3) {
    gregYear--;
    gregMonth += 12;
  }
  let gregDay = gregNow.getDate();
  let A = Math.trunc(gregYear / 100);
  let B = Math.trunc(A / 4);
  let C = 2 - A + B;
  let E = Math.trunc(365.25 * (gregYear + 4716));
  let F = Math.trunc(30.6001 * (gregMonth + 1));
  let JD = C + gregDay + E + F - 1524.5;

  // console.log(`Today's Julian Day number is ${JD}`);

  return JD;
}

module.exports.jdnCalc = jdnCalc;

//  Formulae from https://quasar.as.utexas.edu/BillInfo/JulianDatesG.html
