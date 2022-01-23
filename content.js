const config_value = LocalStorageGet('@swap-role:data')

function checkButton(e) {
    if (window.location.href.indexOf('signin') > -1) {
        // every 500 ms, run tryClick()
        let timer = setInterval(tryClick, 500);
        // stop trying after 20 attempts.
        let max_attempts = 20;
        function tryClick() {
            max_attempts -= 1;
            if (max_attempts > 0) {
                clearInterval(timer);
                let button = document.getElementById('input_switchrole_button');
                // if found the button click on it.
                if (button) {
                    max_attempts = 0;
                    button.click();
                }
            }
        }
    }
}

window.addEventListener('load', checkButton, false);