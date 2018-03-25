let storage;
let mainContent = document.getElementsByTagName('main')[0];
let saveStorage = function() {
    window.localStorage.mainContent = mainContent.innerHTML;
}
let dragenterFun = function(e) {
    this.style.border = '3px solid red';
    let newElem = document.createElement('div');
    newElem.setAttribute('class', 'content');
    newElem.style.border = '';
    newElem.style.backgroundColor = '#7770FF';
    this.parentNode.insertBefore(newElem, this);
}
let dragleaveFun = function(e) {
    this.style.border = '';
}
if (window.localStorage.mainContent) {
    storage = window.localStorage.mainContent;
} else {
    storage = mainContent.innerHTML;
}
mainContent.innerHTML = storage;
let sections = document.getElementsByTagName('section');
let contents = document.getElementsByClassName('content');
for (let i = 0; contents.length > i; i++) {
    contents[i].addEventListener('dragenter', dragenterFun, false);
    contents[i].addEventListener('dragleave', dragleaveFun, false);
    // contents[i].addEventListener('dragleave', , false);
}