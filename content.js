const config_value = LocalStorageGet('@swap-role:data')

function checkButton(e) {
    if (window.location.href.indexOf('signin') > -1) {
        let timer = setInterval(tryClick, 5);
        let max_attempts = 2000;
        function tryClick() {
            max_attempts -= 1;
            if (max_attempts > 0) {
                clearInterval(timer);
                let button = document.getElementById('input_switchrole_button');
                if (button) {
                    max_attempts = 0;
                    button.click();
                }
            }
        }
    }
}

window.addEventListener('load', checkButton, false);