function selectFirstChild() {
    var list = document.getElementById("list");
    // Получение первого дочернего элемента в списке.
    var child = list.firstChild;
    // if (child != null) {
        // добавление атрибута style="color:red" для выбранного элемента.
        child.setAttribute("style", "color:red;");
    // }
}

function selectLastChild() {
    var list = document.getElementById("list");
    // Получение последнего дочернего элемента в списке.
    var child = list.lastChild;
    if (child != null) {
        child.setAttribute("style", "color:red;");
    }
}

var node = null;

function selectNextNode() {
    resetColor();
    if (node == null) {
        var list = document.getElementById("list");
        node = list.firstChild;
        node.setAttribute("style", "color:green");
        return;
    }
    // Получение следующего элемента, которые в дереве находиться на одном уровне.
    node = node.nextSibling;
    if (node != null) {
        node.setAttribute("style", "color:green");
    }
}

function selectPrevNode() {
    resetColor();
    if (node == null) {
        var list = document.getElementById("list");
        node = list.lastChild;
        node.setAttribute("style", "color:green");
        return;
    }
    // Получение предыдущего элемента, которые в дереве находиться на одном уровне.
    node = node.previousSibling;
    if (node != null) {
        node.setAttribute("style", "color:green");
    }
}

function resetColor() {
    var liList = document.getElementsByTagName("li");
    for (var i = 0; i < liList.length; i++) {
        liList[i].setAttribute("style", "color:black");
    }
}

function createNewChild() {
    var list = document.getElementById("list");
    var item = document.createElement("li");
    var arr = list.lastChild.innerText.split(' ');
    item.innerText = 'List Item ' + String(parseInt(arr[arr.length-1])+1);
    list.appendChild(item);
}

function removeLastChild() {
    var list = document.getElementById("list");
    var item = list.lastChild;
    if (item != null) {
        list.removeChild(item);
    }
}

function createNewChildAtStart() {
    var list = document.getElementById("list");
    var item = document.createElement("li");
    var arr = list.firstChild.innerText.split(' ');
    item.innerText = 'List Item ' + String(parseInt(arr[arr.length-1])-1);
    if (list.firstChild != null) {
        list.insertBefore(item, list.firstChild);
    }
}