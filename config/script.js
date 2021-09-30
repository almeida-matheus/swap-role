function saveText() {
    let data = [];
    let aux = []
    let formattedData = {
        id: 0,
        account: '',
        role: '',
        region: '',
        color: ''
    }
    let x = document.getElementById("config-text").value;

    let y = x.replaceAll('=', ':').replaceAll(']', '').split('[').filter(ln => ln !== '')
    
    y.map((ln, i) => {
        if(ln[ln.length-1] === '\n')
            ln[ln.length-1] = '';
        ln = ln.replaceAll('\n', ',');
        ln = `id:${ln}`;
        ln = ln.split(',').filter(ln => ln !== '');
        data[i] = ln;
        data[i].map((dt, j) => {
            dt = dt.split(':');
            
            switch (dt[0]) {
                case 'id':
                    formattedData.id = dt[1];
                    break;
                case 'aws_account_id':
                    formattedData.account = dt[1];
                    break;
                case 'role_name':
                    formattedData.role = dt[1];
                    break;
                case 'region':
                    formattedData.region = dt[1];
                    break;
                case 'color':
                    formattedData.color = dt[1];
                    break;
                default:
                    break;
            }
        })
        aux[i] = {...formattedData};
    });
    localStorage.setItem('@swap-role:data', JSON.stringify(aux));
    // LocalStorageSet(aux)
}

document.getElementById('save').addEventListener('click', saveText);