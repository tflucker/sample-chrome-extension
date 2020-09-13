let changeColor = document.getElementById('changeColor1');
let changeColor2 = document.getElementById('changeColor2');

// default color (white)
chrome.storage.sync.get('defaultColor1', function(data){
    changeColor.style.backgroundColor = data.defaultColor1;
    changeColor.setAttribute('value', data.defaultColor1);
});

// default color (black)
chrome.storage.sync.get('defaultColor2', function(data){
    changeColor2.style.backgroundColor = data.defaultColor2;
    changeColor2.setAttribute('value', data.defaultColor2);
});

// onclick for defaultColor1 (white)
changeColor.onclick = function (element){
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.background = "' + color + '";'});
    });
};

// onclick for defaultColor2 (black)
changeColor2.onclick = function (element){
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.background = "' + color + '";'});
    });
};

// get buttonDiv element
let page = document.getElementById("buttonDiv");

// list of possible colors
const kButtonColors = ['#3aa757','#e8453c','#f9bb2d','#4688f1'];

// create buttons using those colors
function constructOptions(kButtonColors){
    console.log("options: "+kButtonColors);
    for(var i=0; i<kButtonColors.length; i++){
        var item = kButtonColors[i];
        console.log("item: " + item);
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
        page.appendChild(button);
    }
}

// call costructOptions method
constructOptions(kButtonColors);