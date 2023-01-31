
// Due date: Jan 30 (eod)

/**
 * Q1: Find if the user has provided only first name and last Name
 * 
 * userName1 = 'John Gig'            ->      true
 * userName1 = 'John Gig Hiyti'      ->      false
 * userName1 = 'John'                ->      false
 * userName1 = ''                    ->      false
 */
let userName1 = 'John Gig';
let userName1Split = userName1.split(' ');
let result1 = userName1Split.length === 2

console.log(`\nuserName1 -> ${userName1}`);
console.log(`The user has provided only first name and last name -> ${result1}`);




/**
 * Q2: Create abbreviation for a 4-word sentence
 * 
 * sentence2 = "Good morning to You"     ->      GMTY
 * sentence2 = "you NEVEr waLK aLOne"    ->      YNWA
 * sentence2 = "have A great day"        ->      HAGD
 * 
 */
let sentence2 = 'you NEVEr waLK aLOne'

let sentence2_UpperCase = sentence2.toUpperCase();
let words = sentence2_UpperCase.split(' ');


words[0] = words[0].substring(0,1);
words[1] = words[1].substring(0,1);
words[2] = words[2].substring(0,1);
words[3] = words[3].substring(0,1);

let abbr = words[0].concat(words[1], words[2], words[3])

console.log(`\nabbr -> ${abbr}`);     // YNWA



/**
 * Q3: Count the number of words in the sentence
 */
let sentence3 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';


let sentence3_SplitBy_Space = sentence3.split(' ');

let lengthOfSentence3__SplitBy_Space = sentence3_SplitBy_Space.length;

console.log(`\nThe number of words in the sentence -> ${lengthOfSentence3__SplitBy_Space}\n`);