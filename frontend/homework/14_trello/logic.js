let storage;
if (window.localStorage.mainContent) {
    storage = window.localStorage.mainContent;
} else {
    storage = '<section draggable="true"> gavno</section>';
}
let mainContent = document.getElementsByTagName('main')[0];
mainContent.innerHTML = storage;
console.log(mainContent);