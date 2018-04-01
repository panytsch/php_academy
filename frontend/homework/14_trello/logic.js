let main = document.getElementsByTagName('main')[0];
let header = document.getElementsByTagName('header')[0];
let btn = document.getElementById('button');
let btndef = document.createElement('button');
let saveAll = function() {
    let result = [];

    function recurs(noda) {
        let res = [];
        for (let i = 0; i < noda.childNodes.length; i++) {
            if (noda.childNodes[i].nodeType === 1) {
                if (noda.childNodes[i].className === 'blockHeader') {
                    res.push(noda.childNodes[i].value);
                    continue;
                }
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
    window.localStorage.mainContent = JSON.stringify(result);
}
btndef.innerText = 'set default';
btndef.onclick = function() {
    window.localStorage.mainContent = '[[["kakaka",[]],{"name":"content","code":"will be"},{"name":"content","code":"text"},{"name":"input","code":""}],[["sadasdas",[]],{"name":"content","code":"of coding"},{"name":"input","code":""}],[["block3",[]],{"name":"input","code":""}],[["new",[]],{"name":"input","code":""}]]';
    location.reload();
}
header.appendChild(btndef);
let btnsave = document.createElement('button');
btnsave.innerText = 'save';
btnsave.type = 'button';
btnsave.onclick = saveAll;
header.appendChild(btnsave);
let addSection = function() {
    let secta = Fabric.create('section');
    secta.render(main);
    let input = Fabric.create('input');
    input.render(secta.code);
    saveAll();
}
btn.onclick = addSection;

function Fabric() {}
Fabric.prototype.render = function(noda) {
    noda.appendChild(this.code);
};
Fabric.prototype.dragenterFun = function(e) {}
Fabric.prototype.dragleaveFun = function(e) {}
Fabric.prototype.dragStartFun = function(e) {
    this.id = 'newid';
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("Text", this.id);
    e.stopPropagation();
}
Fabric.prototype.dragendFun = function(e) {}
Fabric.prototype.dragoverFun = function(e) {
    e.preventDefault();
    return false;
}
Fabric.prototype.dropFun = function(e) {
    let id = e.dataTransfer.getData('Text');
    let elem = document.getElementById(id);
    if (this.tagName !== 'SECTION' && elem.tagName !== 'SECTION') {
        this.parentNode.insertBefore(elem, this);
    } else if (elem.tagName !== 'SECTION') {
        this.insertBefore(elem, this.lastChild);
    } else if (elem.tagName === 'SECTION' && (this.tagName === 'DIV' || this.tagName === 'input')) {
        this.parentNode.parentNode.insertBefore(elem, this.parentNode);
    } else {
        this.parentNode.insertBefore(elem, this);
    }
    elem.id = '';
    e.preventDefault();
    e.stopPropagation();
    saveAll();
    return false;
}
Fabric.create = function(type, text) {
    let ctor = type,
        newFabric;
    if (typeof Fabric[ctor] !== 'function') {
        console.log('Not found');
    }
    if (typeof Fabric[ctor].prototype.render !== 'function') {
        Fabric[ctor].prototype = new Fabric();
    }
    newFabric = new Fabric[ctor](text);
    if (newFabric.code.tagName === 'SECTION' || newFabric.code.className === 'content') {
        newFabric.code.addEventListener('dragenter', newFabric.dragenterFun, false);
        newFabric.code.addEventListener('dragleave', newFabric.dragleaveFun, false);
        newFabric.code.addEventListener('dragstart', newFabric.dragStartFun, false);
        newFabric.code.addEventListener('dragend', newFabric.dragendFun, false);
        newFabric.code.addEventListener('dragover', newFabric.dragoverFun, false);
        newFabric.code.addEventListener('drop', newFabric.dropFun, false);
    }
    return newFabric;
}
Fabric.content = function(text) {
    let diva = document.createElement('div');
    diva.setAttribute('class', 'content');
    diva.setAttribute('draggable', 'true');
    diva.innerHTML = text;
    diva.onmouseover = function(e) {
        if (this.childNodes.length > 1) {
            return;
        }
        let newdiva = document.createElement('div');
        newdiva.className = 'inner';
        newdiva.setAttribute('title', 'delete block');
        newdiva.innerText = 'X';
        newdiva.onclick = function(e) {
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
        this.appendChild(newdiva);
    }
    diva.onmouseleave = function(e) {
        this.removeChild(this.lastChild);
    }
    this.code = diva;
}
Fabric.input = function() {
    let diva = document.createElement('input');
    diva.setAttribute('placeholder', 'write new data');
    diva.setAttribute('class', 'input');
    diva.setAttribute('type', 'text');
    diva.onfocus = function(e) {
        if (this.nextSibling && this.nextSibling.className === 'addBtn') {
            this.parentNode.removeChild(this.nextSibling);
        }
        let baton = document.createElement('button');
        baton.innerText = 'add block';
        baton.className = 'addBtn';
        baton.onclick = function(e) {
            if (this.previousSibling.value) {
                let tempor = Fabric.create('content', this.previousSibling.value);
                this.parentNode.insertBefore(tempor.code, this.previousSibling);
                this.previousSibling.value = '';
                saveAll();
            }
        }
        this.parentNode.appendChild(baton);
    }
    diva.onblur = function(e) {
        if (e.relatedTarget && e.relatedTarget.className === 'addBtn') {
            return;
        }
        if (this.nextSibling.className === 'addBtn') {
            this.parentNode.removeChild(this.nextSibling);
        }
    }
    this.code = diva;
}
Fabric.button = function(text = 'button') {
    let btne = document.createElement('button');
    btne.type = text;
    btne.innerText = 'OK';
    btne.style.width = '0';
    btne.style.display = 'none';
    this.code = btne;
}
Fabric.section = function(text) {
    let diva = document.createElement('section');
    diva.setAttribute('draggable', 'true');
    this.code = diva;
    let cont = document.createElement('div');
    let divInner = document.createElement('input');
    divInner.setAttribute('draggable', 'false');
    divInner.placeholder = '{Block name..}';
    divInner.value = text;
    divInner.className = 'blockHeader';
    cont.appendChild(divInner);
    let baton = Fabric.create('button');
    baton.onclick = saveAll;
    baton.render(cont);
    divInner.onfocus = function(e) {
        this.style.width = '70%';
        this.nextSibling.style.width = '20%';
        this.nextSibling.style.display = 'inline-block';
    }
    divInner.onblur = function(e) {
        this.style.width = '100%';
        this.nextSibling.style.width = '0';
        this.nextSibling.style.display = 'none';
    }
    this.code.appendChild(cont);
}
let mainData = window.localStorage.mainContent;
let mainarray = JSON.parse(mainData);
mainarray.map(y => {
    let secta = Fabric.create('section', y[0][0]);
    secta.render(main);
    for (let i = 1; i < y.length; i++) {
        if (y[i] == false) {
            continue;
        }
        let tempor = Fabric.create(y[i].name, y[i].code);
        tempor.render(secta.code);
    }
});