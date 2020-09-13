chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({defaultColor1: '#FFFFFF'}, function(){
        console.log("The color is white");
    });
    chrome.storage.sync.set({defaultColor2: '#000000'}, function(){
        console.log("The color is white");
    });
    
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});