var inp = document.getElementById('input');
var btn = document.getElementById('btnFind');
var div = document.getElementById('container');
var span = document.createElement('span');
span.setAttribute('class', 'findedSpan'); // Даємо клас спану

btn.onclick = function() {
    // Передаємо нутрощі інпута
    mainfunc(inp.value);
}
inp.onkeyup = function() {
    // Передаємо нутрощі інпута
    mainfunc(this.value);
}

// Основна функція
function mainfunc(msg) {
    deleteAllSpans(); // Видаляємо попередньо сформовані спани
    //Якщо введені пробіли - не рипаємся :) Не треба проц грузити
    if (/\S/.test(msg)) {
        //Записуємо в спан введений текст
        span.innerText = msg;
        // рекурсивна функція повинна віддати нам код ХТМЛ!!
        div.innerHTML = recursionNodesSearch(div, msg);
    }
}

function deleteAllSpans() {
    //Отримуємо колекцію всіх спанів з потрібним класом
    var a = document.getElementsByClassName('findedSpan');
    for (var i = a.length - 1; i >= 0; i--) {
        //вставляємо перед кожним спаном його внутрішній текст
        a[i].parentNode.insertBefore(document.createTextNode(a[i].innerText), a[i]);
        // Нормалізуємо текст. Потрібно щоб не було зайвих текстових нод
        a[i].parentNode.normalize();
        //Видаляємо спани. Перед ними вже стоїть нормалізований текст
        a[i].parentNode.removeChild(a[i]);
    }
}

function recursionNodesSearch(noda, msg) {
    var result = '';
    //пробігаємося циклічно по всіх нодах нашого контейнера 'noda'
    for (var i = 0; i < noda.childNodes.length; i++) {
        //Якщо контейнер
        if (noda.childNodes[i].nodeType === 1) {
            //створюємо пустий тег такої ж назви яку передали. Передаємо діву - створили пусту діву, якщо спан - новий спан...
            var newTag = document.createElement(noda.childNodes[i].tagName);
            //Найцікавіше :)
            //записуємо в тег результат роботи рекурсії
            //функція наново пробігнається по всіх нодах звіряючи їх типи
            //в кінцевому результаті поступово випливає віддаючи результативний ХТМЛ
            newTag.innerHTML = recursionNodesSearch(noda.childNodes[i], msg);
            // в результат добавляється outerHTML тобто весь внутрішній код з "обгорткою"
            result += newTag.outerHTML;
        }
        // Якщо текст
        else if (noda.childNodes[i].nodeType === 3) {
            // в результат записується внутрішній текст, попередньо розбитий на масив в якому
            // джойном замінили коми на наш спан. Зручно і просто
            result += noda.childNodes[i].textContent.split(msg).join(span.outerHTML);
        }
    }
    // вертаємо результативний код який вспливанням дописується новими циклами рекурсії
    return result;
}