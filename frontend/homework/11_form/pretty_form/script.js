var fName = document.getElementById('fullname');
var email = document.getElementById('email');
var reemail = document.getElementById('reemail');
var btnSend = document.getElementById('btnSend');
var nameReg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
btnSend.onclick = function(e) {
    validAll(e);
};
fName.onchange = function() {
    validate(fName, 'you have an error ', nameReg)
}
email.onchange = function() {
    validate(email, 'your email looks like shit', emailReg)
}
reemail.onchange = function() {
    if (email.value !== reemail.value) {
        if (reemail.previousSibling.className == 'errorSpan') {
            return;
        }
        var a = document.createElement('span');
        a.setAttribute('class', 'errorSpan');
        a.innerText = 'emails is not equels!';
        reemail.parentNode.insertBefore(a, reemail);
    } else {
        if (reemail.previousSibling.className == 'errorSpan') {
            reemail.parentNode.removeChild(reemail.previousSibling);
        }
    }
}

function validate(obj, msg, reg) {
    var quest = obj.previousSibling.className == 'errorSpan';
    if (reg.test(obj.value)) {
        if (quest) {
            obj.parentNode.removeChild(obj.previousSibling);
        }
        return true;
    } else {
        if (quest) {
            return false;
        }
        var a = document.createElement('span');
        a.setAttribute('class', 'errorSpan');
        a.innerText = msg;
        obj.parentNode.insertBefore(a, obj);
        return false;
    }
}

function validAll(e) {
    var flag = false;
    if (!validate(fName, 'you have an error ', nameReg)) {
        flag = true;
    }
    if (!validate(email, 'your email looks like shit', emailReg)) {
        flag = true;
    }
    if (email.value !== reemail.value) {
        if (reemail.previousSibling.className == 'errorSpan') {
            e.preventDefault();
            return;
        }
        var a = document.createElement('span');
        a.setAttribute('class', 'errorSpan');
        a.innerText = 'emails is not equels!';
        reemail.parentNode.insertBefore(a, reemail);
        flag = true;
    } else {
        if (reemail.previousSibling.className == 'errorSpan') {
            reemail.parentNode.removeChild(reemail.previousSibling);
        }
    }
    if (flag) {
        e.preventDefault();
        return;
    }
    alert('Sended');
}