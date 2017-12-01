
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
    var celsiusButton = document.createElement("button");
    celsiusButton.innerHTML = convertedToCelsius;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(celsiusButton);
    if (convertedToCelsius > 32){
        celsiusButton.style.background = `#ff0000`;
    } else if (convertedToCelsius < 0) {
        celsiusButton.style.background = `#0000ff`;
    } else {
        celsiusButton.style.background = `#008000`;
    }

    }
    
    console.log(valueToConvert);

function toFahrenheit (valueToConvert) {
    var inputToConvert = document.getElementById('converter').value;
    console.log('im here now');
    let convertedToFarenheit = (inputToConvert * (9/5) + (3/2));
    console.log(convertedToFarenheit);
    
    var fahrenheitButton = document.createElement("button");
    fahrenheitButton.innerHTML = convertedToFarenheit;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(fahrenheitButton);
        if (convertedToFarenheit > 90){
            fahrenheitButton.style.background = `#ff0000`;
        } else if (convertedToFarenheit < 32) {
            fahrenheitButton.style.background = `#0000ff`;
        } else {
            fahrenheitButton.style.background = `#008000`;
        }
        
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
   