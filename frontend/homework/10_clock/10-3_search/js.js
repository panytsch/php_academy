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
        div.innerHTML = recursionNodesSearch(div, msg);
        alert('alarm');
    }
}

function deleteAllSpans() {
    var a = document.getElementsByClassName('findedSpan');
    for (var i = a.length - 1; i >= 0; i--) {
        a[i].parentNode.insertBefore(document.createTextNode(a[i].innerText), a[i]);
        a[i].parentNode.removeChild(a[i]);
    }
}

function recursionNodesSearch(noda, msg) {
    console.log(msg);
    var result = '';
    for (var i = 0; i < noda.childNodes.length; i++) {
        if (noda.childNodes[i].nodeType === 1) {
            var newTag = document.createElement(noda.childNodes[i].tagName);
            newTag.innerHTML = recursionNodesSearch(noda.childNodes[i], msg);
            result += newTag.outerHTML;
        } else if (noda.childNodes[i].nodeType === 3) {
            result += noda.childNodes[i].textContent.split(msg).join(span.outerHTML);
        } else {
            alert('alarm');
        }
    }
    return result;
}