  //write Farenheit to Celsius converter function
  //function should take one parameter (tempF)
  //function should log in the console "NN degrees farenheit is NN degrees celsisus", where NN should be replaced with respective F and C temperature numbers
  //return temperature in Celsius

  function farenheitToCelsius(tempF){
    let convertedToCelsius = ((tempF - 32) / 1.800);
    console.log(`${tempF} degrees farenheit is ${convertedToCelsius} + degrees celsisus`);
    return convertedToCelsius;
  }

  //write a function that calculates students grade and percent of total possible score
  //function should take two parameters (score and possible total score)
  //function should return result string (e.g. for 15/20 it should return 'you got a C (75%)!')
  //following % ranges should be used for calculating grade letter:
    //A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59
  //Invoke the function with some arguments and log the result in the console
  
  function determineGradeAndPercentage(score, possibleTotalScore){
    let percentage = ((score / possibleTotalScore) * 100);
    let letterGrade = null;
    switch (true) {
      case (percentage < 59):
        letterGrade = 'F';
        break;
       case (percentage >= 60 && percentage <=69):
         letterGrade = 'D';
        break;
       case (percentage >= 70 && percentage <=79):
         letterGrade = 'C';
         break;
        case (percentage >= 80 && percentage <= 89):
          letterGrade = 'B';
          break;
        case (percentage >= 90 && percentage <= 100):
          letterGrade = 'A'; 
          break;  
      default:
        break;
    }
    return (`you got an ${letterGrade} (${percentage} %!)`);
  }
  determineGradeAndPercentage(12, 20);
  determineGradeAndPercentage(17, 20);
  determineGradeAndPercentage(19, 20);

  
  //write a function that takes a number as an argument, and adds each number from 1 to maxNum to an array.
  //each multiple of 3, add 'fizz' instead of number, each multiple of 5, add 'buzz' instead of number
  //each multiple of 3 and 5, add 'fizzbuzz' instead of number
  //return the array
  
  function fizBuzz(maxNum){
    let array = [];
    for (var i = 1; i <= maxNum; i++){
      let number = i;
      if ((number % 3 === 0) && (number % 5 == 0)){
        array.push("FizzBuzz");
      } else if (number % 3 === 0){
        array.push("fizz");
      } else if (number % 5 === 0){
        array.push("buzz");
          } else {
            array.push(number);
          }
      }
      return array;
    }
  
  fizBuzz(15);
  fizBuzz(30);


  function isPalindrome(word){
    let reversed = [];  //create empty array to store reversed word
    for (var i = word.length -1; i >= 0; i--){  //loop through word (from end-of-word to front)
      let letter = word[i];
      reversed.push(letter);  //push letter into empty array
      reversedWord = reversed.join(""); //transform now-filled array into string
    }
    if (word === reversedWord){   //if the word and reversed word are the same
      return true;              //return true (is a palindrome)
    }
    return false;           //(otherwise) return false (is not a palindrome)
    
  }
  
  isPalindrome("cat");
  isPalindrome("abba");