/**
 * Due date: Jan-26 (Eod)
 */

const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q1: Replace all occurrences of A (ignoring cases) with 'Queen and King'
 */


let sentence1_UpperCase = sentence1.toUpperCase();

console.log(`\nsentence1 is uppercase -> ${sentence1_UpperCase}`); 

let sentence1_UpperCase_Replace_AllA_QueenAndKing = sentence1_UpperCase.replace(/A/g, 'Queen and King');
console.log(`\nsentence1 after replace /A/g with 'Queen and King' -> ${sentence1_UpperCase_Replace_AllA_QueenAndKing}`);


const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q2: print the result of following in console:
 * 1. length of sentence2-String
 * 2. does sentence2 start with 'COM' (ignoring cases)                      -> boolean
 * 3. does sentence2 endsWith 'Google news' (ignoring cases)                -> boolean
 * 4. does word 'from' present only once in sentence2 (ignoring cases)      -> boolean
 * 5. the character present at second-last index in the String
 */


let sentence2_Length = sentence2.length
console.log(`\nlength of sentence2-String -> ${sentence2_Length}`);  

let sentence2_UpperCase = sentence2.toUpperCase();
console.log(`\nsentence2 is uppercase -> ${sentence2_UpperCase}`); 

let pattern_UpperCase = 'COM'.toUpperCase();
let result = sentence2_UpperCase.startsWith(pattern_UpperCase);

console.log(`\nresult -> ${result}`);


let pattern_UpperCase2 = 'Google news'.toUpperCase();
let result2 = sentence2_UpperCase.endsWith(pattern_UpperCase2);

console.log(`\nresult2 -> ${result2}`);

let pattern_UpperCase3 = 'from'.toUpperCase();
let result3 = sentence2_UpperCase.includes(pattern_UpperCase3);

console.log(`\nresult3 -> ${result3}`);

let secondToLastIndex = sentence2.length - 2;
let charAtSecondToLastIndex = sentence2.charAt(secondToLastIndex);
console.log(`\nCharacter present at the second to last-index of the String -> ${charAtSecondToLastIndex}\n`);







/**
 * localeCompare
 * substring/slice
 * split
 */