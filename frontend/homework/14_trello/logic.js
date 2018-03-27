let require = function(url) {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
require('./fabric.js');
a('hi');
let storage;
let mainContent = document.getElementsByTagName('main')[0];
let saveStorage = function() {
    window.localStorage.mainContent = mainContent.innerHTML;
}
let dragenterFun = function(e) {
    this.style.border = '3px solid red';
    // let newElem = document.createElement('div');
    // newElem.setAttribute('class', 'content');
    // newElem.setAttribute('id', 'newElement');
    // newElem.style.border = '';
    // this.parentNode.insertBefore(newElem, this);
};
let dragleaveFun = function(e) {
    this.style.border = '';
    // this.previousSibling.remove();
};
let dragStartFun = function(e) {
    this.id = 'newid';
    e.dataTransfer.effectAllowed = "move";
    this.style.border = "3px dotted #000000";
    // this.style.transform = 'rotate(5deg)';
    e.toElement.style.transform = 'rotate(5deg)';
    console.log(e);
    e.dataTransfer.setData("Text", this.id);
};
let dragendFun = function(e) {
    this.style.border = "";
}
let dragoverFun = function(e) {
    e.preventDefault();
    return false;
}
let dropFun = function(e) {
    this.style.border = '1px solid black'
    e.preventDefault();
    e.stopPropagation();
    let id = e.dataTransfer.getData('Text');
    let elem = document.getElementById(id);
    this.parentNode.insertBefore(elem, this);
    elem.id = '';
    return false;
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
    contents[i].addEventListener('dragstart', dragStartFun, false);
    contents[i].addEventListener('dragend', dragendFun, false);
    contents[i].addEventListener('dragover', dragoverFun, false);
    contents[i].addEventListener('drop', dropFun, false);
}