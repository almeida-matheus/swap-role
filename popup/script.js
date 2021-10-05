const storage_data = JSON.parse(localStorage.getItem('@swap-role:data'));

function addElement(data) {
    let id = data.account;
    let account = data.id;
    let color = data.color;
    let region = data.region;
    let role = data.role;

    const a = document.createElement('a');
    a.setAttribute('href', `https://signin.aws.amazon.com/switchrole?account=${id}&roleName=${role}&displayName=${account}&color=${color}&region=${region}}`);

    a.innerHTML = `
        <div class="ball" style="background-color: #${color}; border: 1px solid #999;"></div>
        <span class="bar"></span>
        <b>${account}</b><span class="id">${id}</span>
    `;

    document.getElementById('list').appendChild(a)
}

function main() {
    if (storage_data) {
        storage_data.forEach((data) => {
            addElement(data);
        });
    }
}

main()

var hrefs = document.getElementsByTagName("a");

function openLink() {
    var href = this.href;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: href});
    });
}

for (var i=0,a; a=hrefs[i]; ++i) {
    hrefs[i].addEventListener('click', openLink);
}