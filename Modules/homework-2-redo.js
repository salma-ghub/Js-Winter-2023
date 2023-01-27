/**
 * 
 * Due: Jan-22 (eod)
 * 
 */
/**
 * Question-1:
 * 
 * if the length of sentence1 is greater than 100 OR sentence1 starts with "go to"
 *      assign 25 into result1
 * otherwise
 *      assign 35 into result1
 * 
 * sentence1 = 'go to home'
 * result1 = 25
 * 
 * sentence1 = 'NPR news, audio, and podcasts. Coverage of breaking stories, national and world news, politics, business, science, technology, and extended coverage of, View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.'
 * result1 = 25
 * 
 * sentence1 = '' 
 * result1 = 35
 * 
 * sentence1 = 'View the latest news'
 * result1 = 35
 * 
 * 
 * Hint: Ternary operator
 * 
 */
let sentence1 = 'Go to NBCNews.com for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.';
let lengthOfSentence1 = sentence1.length
let sentence1StartsWithGoTo = sentence1.startsWith('Go to')

let result1 = lengthOfSentence1 > 100 || sentence1StartsWithGoTo ? 25:35;


// code
console.log(`Sentence1 -> ${sentence1}`);
console.log(`Length of Sentence1 -> ${lengthOfSentence1}`);
console.log(`Sentence1 starts with "go to"? -> ${sentence1StartsWithGoTo}`);
console.log(`result1 -> ${result1}`);
