  //write Farenheit to Celsius converter function
  //function should take one parameter (tempF)
  //function should log in the console "NN degrees farenheit is NN degrees celsisus", where NN should be replaced with respective F and C temperature numbers
  //return temperature in Celsius

  function farenheitToCelsius(tempF){
    let convertedToCelsius = ((tempF - 32) / 1.800);
    console.log(tempF + " degrees farenheit is " + convertedToCelsius + " degrees celsisus");
    return convertedToCelsius;
  }

  //write a function that calculates students grade and percent of total possible score
  //function should take two parameters (score and possible total score)
  //function should return result string (e.g. for 15/20 it should return 'you got a C (75%)!')
  //following % ranges should be used for calculating grade letter:
    //A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59
  //Invoke the function with some arguments and log the result in the console
  
  function determineGradeAndPercentage(score, possibleTotalScore){
    let average = ((score / possibleTotalScore) * 100);
    switch (true) {
      case (average < 59):
        console.log("you got an F (" + average + "%)!");
        break;
       case (average >= 60 && average <=69):
        console.log("you got a D (" + average + "%)!");
        break;
       case (average >= 70 && average <=79):
         console.log("you got a C (" + average + "%)!");
         break;
        case (average >= 80 && average <= 89):
          console.log("You got a B (" + average + "%)!");
          break;
        case (average >= 90 && average <= 100):
          console.log("You got an A (" + average + "%)!"); 
          break;  
      default:
        break;
    }
  }
  determineGradeAndPercentage(12, 20);
  determineGradeAndPercentage(17, 20);
  determineGradeAndPercentage(19, 20);