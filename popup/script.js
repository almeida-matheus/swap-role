const storage_data = JSON.parse(localStorage.getItem('@swap-role:data'));

//! add each role inside a popup list
function addElement(data) {
    let id = data.account;
    let account = data.id;
    let color = data.color;
    let region = data.region;
    let role = data.role;

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', `https://signin.aws.amazon.com/switchrole?account=${id}&roleName=${role}&displayName=${account}&color=${color}&region=${region}}`);

    a.innerHTML = `
        <div class="ball" style="background-color: #${color}; border: 1px solid #999;"></div>
        <span class="bar"></span>
        <b>${account}</b><span class="id">${id}</span>
    `;

    document.getElementById('list').appendChild(li)
    li.prepend(a)
}

function main() {
    if (storage_data) {
        storage_data.forEach((data) => {
            addElement(data);
        });
    }
}

main()

//! filter values that are inside a list of roles
document.getElementById("input-list").addEventListener('keyup', FilterList);
function FilterList() {
    console.log('ativado')
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('input-list');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName('li');

    //! loop through all list items and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//! enable function for link to open in the same tab
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