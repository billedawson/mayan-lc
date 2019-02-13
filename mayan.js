// Mayan Long count
//
// let gregDate = new Date();
// let epoch = new Date('January 1, 1970');
// let JDN = (parseInt((gregDate - epoch)/1000)) / 86400 + 2440587.5
const JDN = require('./julianDay.js');
const correlation = 584282.5;
const workingNum = JDN.jdnCalc() - correlation;

//  Mayan Long Count
const mayanLongCount = () => {
  let baktun = Math.floor(workingNum / 144000);
  let katun = Math.floor((workingNum - (144000 * baktun)) / 7200);
  let tun = Math.floor((workingNum - (144000 * baktun) - (7200 * katun)) / 360);
  let uinal = Math.floor((workingNum - (144000 * baktun) - (7200 * katun) - (360 * tun)) / 20);
  let kin = Math.floor((workingNum - (144000 * baktun) - (7200 * katun) - (360 * tun) - (20 * uinal) ));

  console.log(`Mayan long count: ${baktun}.${katun}.${tun}.${uinal}.${kin}`);
  return `${baktun}.${katun}.${tun}.${uinal}.${kin}`;
}

// Tzolkin
const tzolkin = () => {
  let tzCycles = (4 + workingNum) / 13;
  let tzDate = Math.round((tzCycles - Math.trunc(tzCycles)) * 13);
  let tzDays = workingNum / 20;
  let tzDayName = Math.round((tzDays - Math.trunc(tzDays)) * 20);
  const tzGlyph = require('./tzolkin_days.json');

  console.log(`The Tzolkin date is: ${tzDate} ${tzGlyph[tzDayName-1].glyphName}.`);
  return `${tzDate} ${tzGlyph[tzDayName-1].glyphName}`;
}

// Haab
const haab = () => {
  let haabStart = workingNum - 17;
  let haCycles = haabStart / 365;
  let haDay = Math.round((haCycles - Math.trunc(haCycles)) * 365);
  let haDate = haDay / 20;
  let haMonth = Math.round((haDate - Math.trunc(haDate)) * 20);
  let haMonthName = Math.trunc(haDate);
  const haGlyph = require('./haab_days.json');

  console.log(`The Haab date is: ${haMonth} ${haGlyph[haMonthName].glyphName}.`);
  return `${haMonth} ${haGlyph[haMonthName].glyphName}`;
}

console.log(mayanLongCount());

module.exports.mayanLongCount = mayanLongCount;
module.exports.tzolkin = tzolkin;
module.exports.haab = haab;
