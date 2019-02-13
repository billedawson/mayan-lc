const gregCalc = (JDN) => {

  // Test input
  if (JDN == null || isNaN(JDN)) {
    console.log("Please enter a valid Julain Day Number.");
    return;
  }

  let Q = (JDN + 0.5);
  let Z = Math.trunc(Q);
  let W = parseInt((Z - 1867216.25) / 36524.25);
  let X = parseInt(W / 4);
  let A = parseInt(Z + 1 + W - X);
  let B = parseInt(A + 1524);
  let C = parseInt((B - 122.1)/365.25);
  let D = parseInt(365.25 * C);
  let E = parseInt((B - D)/30.6001);
  let F = parseInt(30.6001 * E);
  let gregDay = parseInt(B - D - F + (Q-Z));
  let gregMonth = (E < 12) ? (E - 1) : (E - 13);
  let gregYear = (gregMonth === 1) ? (C - 4715) : (gregMonth == 2) ? (C - 4715) : (C - 4716);

  // console.log(`Today's Gregorian date is ${gregMonth}/${gregDay}/${gregYear}.`);

  return `${gregMonth}/${gregDay}/${gregYear}`;
}

module.exports.gregCalc = gregCalc;

//  Fromulae from https://quasar.as.utexas.edu/BillInfo/JulianDatesG.html
