function ExtensionInstalled() {
    chrome.runtime.onInstalled.addListener(function (object) {
        chrome.tabs.create({
            url: 'https://github.com/almeida-matheus/switch-role'
        });
    });
}

function LocalStorageGet(key) {
    chrome.storage.sync.get([key], function(items) {
        console.log('Settings retrieved\n', items);
    });
}

function LocalStorageSet(object) {
    chrome.storage.sync.set(object, function() {
        console.log('settings saved');
    });
}