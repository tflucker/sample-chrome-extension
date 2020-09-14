// get backgroundBtnDiv element
let backgroundBtnDiv = document.getElementById("backgroundBtnDiv");

// list of possible colors for background color
const kButtonColors = ['#FFFFFF','#000000','#3aa757','#e8453c','#f9bb2d','#4688f1'];

// create buttons using those colors
function constructOptions(kButtonColors){
    for(var i=0; i<kButtonColors.length; i++){
        var item = kButtonColors[i];
        // create button
        let button = document.createElement("button");
        // set background color and value to item hexcode
        button.style.backgroundColor = item;
        button.setAttribute('value', item);
        // assign click event
        button.addEventListener('click', function(element){
            // get color value (hexcode)
            let color = element.target.value;
            // for clicked item change background color of current tab
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {code: 'document.body.style.background = "' + color + '";'});
            });
        });
        // add button to 'buttonDiv' div
        backgroundBtnDiv.appendChild(button);
    }
}


// get backgroundBtnDiv element
let textBtnDiv = document.getElementById("textBtnDiv");

// list of possible colors for text color
const textBtnColors = ["#FFFFFF","#000000","#808080"];

// creates buttons for possible text colors
function createTextColors(textBtnColors){
    for(var i=0; i<textBtnColors.length; i++){
        var item = textBtnColors[i];
        // create button
        let button = document.createElement("button");
        // set background color and value to item hexcode
        button.style.backgroundColor = item;
        button.setAttribute('value', item);
        // assign click event
        button.addEventListener('click', function(element){
            // get color value (hexcode)
            let color = element.target.value;
            // for clicked item change background color of current tab
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {code: 'document.body.style.color = "' + color + '";'});
            });
        });
        // add button to 'buttonDiv' div
        textBtnDiv.appendChild(button);
    }
}

// call costructOptions method
constructOptions(kButtonColors);

// call createTextColors function
createTextColors(textBtnColors);