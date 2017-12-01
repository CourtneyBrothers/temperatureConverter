
let celsiusBase = 32;

var valueToConvert = document.getElementById('converter');
var convertButton = document.getElementById("convertButton");
console.log(convertButton);

function toCelsius (valueToConvert) {
    console.log('im here');
    var inputToConvert = document.getElementById('converter').value;
    console.log('im here now');
    let convertedToCelsius = (inputToConvert - celsiusBase) * (5/9);
    console.log(convertedToCelsius);

    }
    
    console.log(valueToConvert);

function toFahrenheit (valueToConvert) {
    var inputToConvert = document.getElementById('converter').value;
    console.log('im here now');
    let convertedToFarenheit = (inputToConvert * (9/5) + (3/2));
    console.log(convertedToFarenheit);
    
    }
    
    // Get a reference to the button element in the DOM
    
    let button1 = document.getElementById("Celsius");
    
    let button2 = document.getElementById("Fahrenheit");
    
    // This function should determine which conversion should
    // happen based on which radio button is selected.
    function determineConverter (clickEvent) {
        if (button1.checked) {
            toCelsius();
            
        } else if (button2.checked){
            toFahrenheit();
        }
        //let valueHolder = document.createElementById('div');
        //valueHolder.appendChild(convertedValue);
      console.log("event", clickEvent);
    }
    
    // Assign a function to be executed when the button is clicked
    convertButton.addEventListener("click", determineConverter);
   