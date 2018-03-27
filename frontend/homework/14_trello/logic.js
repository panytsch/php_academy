function Fabric() {}
Fabric.prototype.render = function(type) {
    // let 
    // document.getElementsByTagName('section')[0].insertBefore(, child: Node)
};
Fabric.prototype.dragenterFun = function(type) {
    this.style.border = '3px solid red';
}
Fabric.prototype.dragleaveFun = function(type) {
    this.style.border = '';
}
Fabric.prototype.dragStartFun = function(type) {
    this.id = 'newid';
    e.dataTransfer.effectAllowed = "move";
    this.style.border = "3px dotted #000000";
    e.toElement.style.transform = 'rotate(5deg)';
    console.log(e);
    e.dataTransfer.setData("Text", this.id);
}
Fabric.prototype.dragendFun = function(type) {
    this.style.border = "";
}
Fabric.prototype.dragoverFun = function(type) {
    e.preventDefault();
    return false;
}
Fabric.prototype.dropFun = function(type) {
    this.style.border = '1px solid black'
    e.preventDefault();
    e.stopPropagation();
    let id = e.dataTransfer.getData('Text');
    let elem = document.getElementById(id);
    this.parentNode.insertBefore(elem, this);
    elem.id = '';
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
    console.log(newFabric)
    return newFabric;
}
Fabric.content = function(text) {
    let diva = document.createElement('div');
    diva.setAttribute('class', 'content');
    diva.innerHTML = text;
    this.code = diva;
}
let blockcont = Fabric.create('content', 'gavno');
blockcont.render();