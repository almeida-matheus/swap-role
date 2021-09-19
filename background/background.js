// inicializar o estado da extensão 

const config_value = LocalStorageGet('switch-role-config')
if (config_value == null) PopupTextSet('nenhuma conta encontrada');

LocalStorageSet({'foo': 'hello', 'bar': 'hi'})

ExtensionInstalled()

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({
        url: 'https://github.com/almeida-matheus/switch-role'
    });
});