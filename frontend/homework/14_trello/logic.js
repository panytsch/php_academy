let main = document.getElementsByTagName('main')[0];
let laga;
let saveAll = function() {
    let result = [];

    function recurs(noda) {
        let res = [];
        for (let i = 0; i < noda.childNodes.length; i++) {
            // console.log(i, noda.childNodes[i], noda.childNodes[i].nodeType)
            if (noda.childNodes[i].nodeType === 1) {
                // console.log(noda.childNodes[i]);
                if (noda.childNodes[i].className === 'content') {
                    res.push({ "name": "content", "code": noda.childNodes[i].innerHTML });
                    continue;
                }
                if (noda.childNodes[i].className === 'input') {
                    res.push({ "name": "input", "code": "" });
                    continue;
                }
                res.push(recurs(noda.childNodes[i]));
            }
        }
        return res;
    }
    result = recurs(main);
    console.log(JSON.stringify(result));
    // console.log(main.childNodes);
}

function Fabric() {}
Fabric.prototype.render = function() {
    let temp = document.getElementsByTagName('section')[0];
    // let inp = document.getElementsByTagName('input')[0];
    temp.appendChild(this.code);
};
Fabric.prototype.dragenterFun = function(e) {
    this.style.border = '3px solid red';
}
Fabric.prototype.dragleaveFun = function(e) {
    this.style.border = '';
}
Fabric.prototype.dragStartFun = function(e) {
    this.id = 'newid';
    e.dataTransfer.effectAllowed = "move";
    this.style.border = "3px dotted #000000";
    // e.toElement.style.transform = 'rotate(5deg)';
    e.dataTransfer.setData("Text", this.id);
}
Fabric.prototype.dragendFun = function(e) {
    this.style.border = "";
}
Fabric.prototype.dragoverFun = function(e) {
    e.preventDefault();
    return false;
}
Fabric.prototype.dropFun = function(e) {
    this.style.border = '1px solid black';
    e.preventDefault();
    e.stopPropagation();
    let id = e.dataTransfer.getData('Text');
    let elem = document.getElementById(id);
    this.parentNode.insertBefore(elem, this);
    elem.id = '';
    saveAll();
    return false;
}
Fabric.create = function(type, text) {
    var ctor = type,
        newFabric;
    if (typeof Fabric[ctor] !== 'function') {
        console.log('Not fount');
    }
    if (typeof Fabric[ctor].prototype.render !== 'function') {
        Fabric[ctor].prototype = new Fabric();
    }
    newFabric = new Fabric[ctor](text);
    newFabric.code.addEventListener('dragenter', newFabric.dragenterFun, false);
    newFabric.code.addEventListener('dragleave', newFabric.dragleaveFun, false);
    newFabric.code.addEventListener('dragstart', newFabric.dragStartFun, false);
    newFabric.code.addEventListener('dragend', newFabric.dragendFun, false);
    newFabric.code.addEventListener('dragover', newFabric.dragoverFun, false);
    newFabric.code.addEventListener('drop', newFabric.dropFun, false);
    return newFabric;
}
Fabric.content = function(text) {
    let diva = document.createElement('div');
    diva.setAttribute('class', 'content');
    diva.setAttribute('draggable', 'true');
    diva.innerHTML = text;
    this.code = diva;
}
Fabric.input = function() {
    let diva = document.createElement('input');
    diva.setAttribute('placeholder', 'write new data');
    diva.setAttribute('class', 'input');
    diva.setAttribute('type', 'text');
    this.code = diva;
}
// let blockcont = Fabric.create('content', 'gavno');
// blockcont.render();
// let input = Fabric.create('input');
// input.render();
let mainData = window.localStorage.mainContent;
let mainarray = JSON.parse(mainData);
// console.log(mainarray[0]);
mainarray[0].map(x => {
    let tempor = Fabric.create(x.name, x.code);
    tempor.render();
});
saveAll();
// window.localStorage.mainContent = [[{"name":"content","code":"here"},{"name":"content","code":"will be"},{"name":"content","code":"text"},{"name":"input","code":""}],[{"name":"content","code":"next level"},{"name":"content","code":"of coding"},{"name":"input","code":""}]]