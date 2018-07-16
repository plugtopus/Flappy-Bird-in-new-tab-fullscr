function onBrowserActionClick() {

    chrome['tabs'].create({
        'url': chrome.extension.getURL('game/index.html')
    }, function(tab) {});

    chrome['browserAction'].setBadgeText({
        text: "PLAY"
    });


    setTimeout(function() {

        chrome['browserAction'].setBadgeText({
            text: ""
        });
    }, 500);

};


chrome.browserAction.onClicked.addListener(onBrowserActionClick);