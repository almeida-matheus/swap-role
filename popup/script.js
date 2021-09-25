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
        <div class="ball"></div>
        <span class="color"></span>
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