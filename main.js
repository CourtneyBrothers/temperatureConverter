
let celsiusBase = 32;

var valueToConvert = document.getElementById('converter');
var convertButton = document.getElementById("convertButton");


function toCelsius (valueToConvert) {
    
    var inputToConvert = document.getElementById('converter').value;
    
    let convertedToCelsius = (inputToConvert - celsiusBase) * (5/9);
    
    var conversionButton = document.getElementById('btn');
    conversionButton.innerHTML = convertedToCelsius;
    if (convertedToCelsius > 32){
        conversionButton.style.background = `#ff0000`;
    } else if (convertedToCelsius < 0) {
        conversionButton.style.background = `#0000ff`;
    } else {
        conversionButton.style.background = `#008000`;
    }

    }
    
   

function toFahrenheit (valueToConvert) {
    var inputToConvert = document.getElementById('converter').value;
    
    let convertedToFarenheit = (inputToConvert * (9/5) + (3/2));
    
    var conversionButton = document.getElementById('btn');
    conversionButton.innerHTML = convertedToFarenheit;
    
        if (convertedToFarenheit > 90){
            conversionButton.style.background = `#ff0000`;
        } else if (convertedToFarenheit < 32) {
            conversionButton.style.background = `#0000ff`;
        } else {
            conversionButton.style.background = `#008000`;
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
      
    }
    
    // Assign a function to be executed when the button is clicked
    convertButton.addEventListener("click", determineConverter);
   