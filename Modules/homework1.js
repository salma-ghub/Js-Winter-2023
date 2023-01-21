// F -> C
// T(°C) = (T(°F) - 32) / 1.8
let fTemp = 47;

let fTempIntoCTemp = (fTemp - 32) / 1.8
console.log(`\n${fTemp}°F is equals to ${fTempIntoCTemp}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let fTempIntoKTemp = (fTemp + 459.67) * 5/9;
console.log(`${fTemp}°F is equals to ${fTempIntoKTemp}°K`);

// C -> F
// T(°F) = (T(°C) x 1.8) + 32
let cTemp = 8.34;

let cTempIntoFTemp = (cTemp x 1.8) + 32
console.log(`\n${cTemp}°C is equals to ${cTempIntoFTemp}°F`);

// C -> K
// T(K) = (T(°C) + 273.15
let cTempIntoKTemp = cTemp + 273.15;
console.log(`${cTemp}°C is equals to ${cTempIntoKTemp}°K`);

// K -> F
// (T(°F) = (T(K) x 9/5) - 459.67

let kTempIntoFTemp = (kTemp x 9/5) - 459.67;
console.log(`${kTemp}°K is equals to ${kTempIntoFTemp}°F`);

// K -> C
// T(C) = (T(°K) - 273.15
let kTemp = 281.483
let kTempIntoCTemp = kTemp - 273.15;
console.log(`${kTemp}°K is equals to ${kTempIntoCTemp}°C`);
