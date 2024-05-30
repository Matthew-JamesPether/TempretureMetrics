//These variables receive and store data from the users.
//The 'to.UpperCase()' converts lower case letters to upper case to reduce human error: https://youtu.be/bNDIiGGv6Z8?si=XC08rK4faCuDFLbr
let temperatureMetric1 = prompt(
  "In which metric is the temperature you are converting?\nC - Celsius\nF - Fahrenheit\nK - Kelvin"
).toUpperCase();
let temperatureNum1 = Number(
  prompt("Enter the temperature that you are converting:")
);
let temperatureMetric2 = prompt(
  "To which metric would you like to convert the temperature?\nC - Celsius\nF - Fahrenheit\nK - Kelvin"
).toUpperCase();
//The 'temperatureNum2' variable is declared outside the conditional statements for later use.
let temperatureNum2 = 0;
//The Boolean variables check if the characters the user enters matches up with what the prompt screen asks.
let temperatureBoolean1 =
  temperatureMetric1 == "C" ||
  temperatureMetric1 == "K" ||
  temperatureMetric1 == "F";
let temperatureBoolean2 =
  temperatureMetric2 == "C" ||
  temperatureMetric2 == "K" ||
  temperatureMetric2 == "F";
let metricBoolean = Number.isInteger(temperatureNum1);
//The if statement checks if all boolean variables are true
if (temperatureBoolean1 && temperatureBoolean2 && metricBoolean) {
  /*The switch statement uses 'temperatureMetric2' to see which temperature metric the user would like to convert to
        and the if statements uses 'temperatureMetric1' to see which temperature metric the user is converting from.*/
  switch (temperatureMetric2) {
    /*
C - Celsius
F - Fahrenheit
K - Kelvin
*/ case "C":
      if (temperatureMetric1 === "F") {
        temperatureNum2 = ((temperatureNum1 - 32) * 5) / 9;
        /*The '\u00B0' operater inputs a degree sign infront of the character that is stored in 'temperatureMetric1' 
                          and 'temperatureMetric2' variables: https://www.cyberdefinitions.com/symbols/mathematics-symbols/Degree-Sign.html*/
        temperatureMetric1 = `\u00B0${temperatureMetric1}`;
      } else if (temperatureMetric1 === "K") {
        temperatureNum2 = temperatureNum1 - 273.15;
      } else {
        temperatureNum2 = temperatureNum1;
        temperatureMetric1 = `\u00B0${temperatureMetric1}`;
      }
      temperatureMetric2 = `\u00B0${temperatureMetric2}`;
      break;

    case "F":
      if (temperatureMetric1 === "C") {
        temperatureNum2 = (temperatureNum1 * 9) / 5 + 32;
        temperatureMetric1 = `\u00B0${temperatureMetric1}`;
      } else if (temperatureMetric1 === "K") {
        temperatureNum2 = (temperatureNum1 * 9) / 5 - 459.67;
      } else {
        temperatureNum2 = temperatureNum1;
        temperatureMetric1 = `\u00B0${temperatureMetric1}`;
      }
      temperatureMetric2 = `\u00B0${temperatureMetric2}`;
      break;

    case "K":
      if (temperatureMetric1 === "F") {
        temperatureNum2 = ((temperatureNum1 + 459.67) * 5) / 9;
        temperatureMetric1 = `\u00B0${temperatureMetric1}`;
      } else if (temperatureMetric1 === "C") {
        temperatureNum2 = temperatureNum1 + 273.15;
        temperatureMetric1 = `\u00B0${temperatureMetric1}`;
      } else {
        temperatureNum2 = temperatureNum1;
      }
      break;
  }
  /*The 'Math.round()' operator is used to round up 'temperatureNum1' and temperatureNum2' where the '.toFixed()' operator is used 
        to get rid of any decimal points : https://youtu.be/vjcPTMQlGzc?si=Poo7Uc04aArAvf4u
                                           https://youtu.be/L9qqUG48cZU?si=WxcQAjAtoi1CHOMZ*/
  console.log(
    `${Math.round(temperatureNum1).toFixed(
      0
    )} ${temperatureMetric1} is ${Math.round(temperatureNum2).toFixed(
      0
    )} ${temperatureMetric2}.`
  );
}
//The else statement outputs to the user that what he has entered does not match the prompt screen.
else {
  console.log(
    "The data you have entered does not match up with what the prompt screen asks."
  );
}
