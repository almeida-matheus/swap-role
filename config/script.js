function myFunction() {
    var x = document.getElementById("config-text").value;
    document.getElementById("demo").innerHTML = x;
    window.location.href = 'http://google.com/?i=' + x;
}