chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://scratch.mit.edu/";
    chrome.tabs.create({ url: newURL });
});
