chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({
        url: 'https://github.com/almeida-matheus/switch-role'
    });
});