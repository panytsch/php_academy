var fName = document.getElementById('fullname');
var email = document.getElementById('email');
var reemail = document.getElementById('reemail');
var btnSend = document.getElementById('btnSend');
const FNAME = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
const EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnSend.onclick = function(e) {
    e.preventDefault();
    console.log(FNAME.test(fName.value));
};

function validate() {

}