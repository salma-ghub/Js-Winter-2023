
// Due: Feb-18 (EOD)
/**
 * Q1:
 * Create function to get the smallest value in the given string-array
 * 
 * let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
 * 
 * let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']
 *
 */

function getTheSmallestValue(inputArr1) {
    let theSmallestValue = inputArr1[0];
    for (let i = 1 ; i < inputArr1.length ; i++) {
        if (inputArr1[i].length < theSmallestValue.length) 
          theSmallestValue = inputArr1[i];
    }
    return theSmallestValue;
}

const words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
console.log(getTheSmallestValue(words));


/**
 * Q2:
 * Create function to get the first value in the numbers-array greater than 10
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];         // 98
 * 
 * [1, 3, 3, 65, 43, 87, 17];                       // 65
 * 
 * [1, 3, 3, 6, 10, 7, 23, 1, 20];                  // 23
 * 
 */




/**
 * Q3:
 * Create function to get the minimum value in the given numbers-array
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];             // 1
 * 
 * [1, -3, 33, 65, 3, 87, 17];                          // 
 * 
 * [1, 23, 3, -6, 10, -7, 23, -1, 20];                  // -7
 * 
 */

function getTheMinimumValue(inputArr3) {
    let theMinimumValue = inputArr3[0];
    for (let i = 1; i < inputArr3.length; i++) {
         if (inputArr3[i] < theMinimumValue) 
         theMinimumValue = inputArr3[i];  
    }
    return theMinimumValue;
  }


  const array3 = [1, -3, 33, 65, 3, 87, 17];  
  
  console.log(getTheMinimumValue(array3));