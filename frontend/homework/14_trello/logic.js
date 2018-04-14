let main = document.getElementsByTagName('main')[0],
    header = document.getElementsByTagName('header')[0],
    btn = document.getElementById('button'),
    btndef = document.createElement('button');
dragElem = {};
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
if (!window.localStorage.mainContent) {
    btndef.onclick();
}
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

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

function Fabric() {}
Fabric.prototype.render = function(noda) {
    noda.appendChild(this.code);
};
Fabric.prototype.dragFun = function(e) {
    e.stopPropagation();
    dragElem.clone.style.left = e.pageX - dragElem.deltaX + 'px';
    dragElem.clone.style.top = e.pageY - dragElem.deltaY + 'px';
    this.style.width = this.nodeName == 'DIV' ? '250px' : '280px';
}
Fabric.prototype.dragStartFun = function(e) {
    e.stopPropagation();
    let clone = this.cloneNode(true);
    document.body.appendChild(clone);
    clone.classList.add("clone");
    this.id = 'newId';
    let coords = getCoords(this),
        deltaX = e.pageX - coords.left,
        deltaY = e.pageY - coords.top;
    dragElem.clone = clone;
    dragElem.element = this;
    dragElem.parent = this.parentNode;
    dragElem.deltaX = deltaX;
    dragElem.deltaY = deltaY;
    dragElem.coordsTop = coords.top;
    this.style.opacity = '0';
    e.dataTransfer.effectAllowed = "move";
}
Fabric.prototype.dragendFun = function(e) {
    e.stopPropagation();
    dragElem.element.style.opacity = '1';
    let clone = document.querySelector('.clone');
    let clone2 = document.querySelector('#tempId');
    clone2.firstChild.id = '';
    clone2.parentNode.insertBefore(clone2.firstChild, clone2);
    clone.parentNode.removeChild(clone);
    clone2.parentNode.removeChild(clone2);
    saveAll();
}
Fabric.prototype.dragoverFun = function(e) {
    e.stopPropagation();
    let height = parseInt(window.getComputedStyle(this, null).getPropertyValue('height'));
    let width = parseInt(window.getComputedStyle(this, null).getPropertyValue('width'));
    height = Math.ceil(height / 2);
    width = Math.ceil(width / 2);
    let delta = e.offsetY - height;
    let delta2 = e.offsetX - width;
    let enough = document.querySelector('#tempId') ? true : false;
    if (!enough) {
        let newItem = document.createElement(dragElem.element.tagName);
        newItem.style.width = dragElem.element.tagName === 'DIV' ? (dragElem.element.offsetWidth - 14) + 'px' : dragElem.element.offsetWidth + 'px';
        newItem.style.height = dragElem.element.offsetHeight + 'px';
        newItem.style.backgroundColor = '#666B6B';
        newItem.style.borderRadius = '5px';
        newItem.id = 'tempId';
        newItem.addEventListener('dragover', function(ev) {
            ev.stopPropagation();
            return;
        }, false)
        newItem.appendChild(document.querySelector('#newId'));
        document.body.appendChild(newItem);
    }
    let newItem = document.querySelector('#tempId');
    if (dragElem.element.tagName === 'DIV') {
        if (this.tagName === 'DIV' && this.className === 'content') {
            if (delta >= 0) {
                this.parentNode.insertBefore(newItem, this.nextSibling);
            } else {
                this.parentNode.insertBefore(newItem, this);
            }
        } else if (this.tagName === 'SECTION') {
            this.lastChild.tagName === 'INPUT' ? this.insertBefore(newItem, this.lastChild) : this.insertBefore(newItem, this.childNodes[1]);
        }
    } else if (dragElem.element.tagName === 'SECTION') {
        if (this.tagName === 'DIV') {
            if (delta2 < 0) {
                this.parentNode.parentNode.insertBefore(newItem, this.parentNode);
            } else {
                let buff = this.parentNode.nextSibling ? true : false;
                buff ? this.parentNode.nextSibling.parentNode.insertBefore(newItem, this.parentNode.nextSibling) : this.parentNode.parentNode.appendChild(newItem);
            }
        } else if (this.tagName === 'SECTION') {
            if (delta2 < 0) {
                this.parentNode.insertBefore(newItem, this);
            } else {
                let buff = this.nextSibling ? true : false;
                buff ? this.nextSibling.parentNode.insertBefore(newItem, this.nextSibling) : this.parentNode.appendChild(newItem);
            }
        }
    }
    e.preventDefault();
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
        newFabric.code.addEventListener('dragstart', newFabric.dragStartFun, false);
        newFabric.code.addEventListener('dragend', newFabric.dragendFun, false);
        newFabric.code.addEventListener('dragover', newFabric.dragoverFun, false);
        newFabric.code.addEventListener('drag', newFabric.dragFun, false);
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
        this.style.width = '60%';
        this.nextSibling.style.width = '20%';
        this.nextSibling.style.display = 'inline-block';
    }
    divInner.onblur = function(e) {
        this.style.width = '100%';
        this.nextSibling.style.width = '0';
        this.nextSibling.style.display = 'none';
    }
    diva.onmouseover = function(e) {
        if (this.firstChild.id === 'firstId') {
            return;
        }
        let newdiva = document.createElement('div');
        newdiva.className = 'inner';
        newdiva.id = "firstId";
        newdiva.setAttribute('title', 'delete block');
        newdiva.innerText = 'X';
        newdiva.onclick = function(e) {
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
        this.firstChild ? this.insertBefore(newdiva, this.firstChild) : this.appendChild(newdiva);
    }
    diva.onmouseleave = function(e) {
        if (this.firstChild.id === 'firstId') {
            this.removeChild(this.firstChild);
        }
    }
    this.code.appendChild(cont);
}
let mainData = window.localStorage.mainContent;
let mainarray = JSON.parse(mainData);
mainarray.map(y => {
    let secta = Fabric.create('section', y[0][0]);
    secta.render(main);
    for (let i = 1; i < y.length; i++) {
        if (y[i] && y[i].name) {
            let tempor = Fabric.create(y[i].name, y[i].code);
            tempor.render(secta.code);
        }
    }
});