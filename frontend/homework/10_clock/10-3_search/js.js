var inp = document.getElementById('input');
var btn = document.getElementById('btnFind');
var div = document.getElementById('container');
var span = document.createElement('span');
span.setAttribute('class', 'findedSpan');
btn.onclick = function() {
    mainfunc(inp.value);
}
inp.onkeyup = function() {
    mainfunc(this.value);
}

function mainfunc(msg) {
    deleteAllSpans();
    if (/\S/.test(msg)) {
        span.innerText = msg;
        div.innerHTML = div.innerText.split(msg).join(span.outerHTML);
    }
}

function deleteAllSpans() {
    var a = document.getElementsByClassName('findedSpan');
    for (var i = a.length - 1; i >= 0; i--) {
        a[i].parentNode.insertBefore(document.createTextNode(a[i].innerText), a[i]);
        a[i].parentNode.removeChild(a[i]);
    }
}