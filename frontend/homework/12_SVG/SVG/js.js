function findMaxElement(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function drowDiagramm(data, width, height, color, space) {
    if (space >= height) {
        alert('space between elements is to big');
        return;
    } //<text x="700" y="39" style="position: relative;" height="78">some text</text>
    var namespace = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(namespace, 'svg');
    var elHeight = Math.floor(height / data.length);
    var max = findMaxElement(data);
    var elWidthKoef = width / max;
    svg.style.position = 'relative';
    svg.setAttribute('height', height);
    svg.setAttribute('width', width + 100);
    for (var i = 0; i < data.length; i++) {
        var rect = document.createElementNS(namespace, 'rect')
        rect.setAttribute('width', data[i] * elWidthKoef);
        rect.setAttribute('height', elHeight - space);
        rect.setAttribute('fill', color);
        rect.style.position = 'absolut';
        rect.setAttribute('x', 0);
        rect.setAttribute('y', elHeight * i);
        svg.appendChild(rect);
        var text = document.createElementNS(namespace, 'text');
        text.style.position = 'absolute';
        text.setAttribute('y', elHeight * i + elHeight / 2);
        text.setAttribute('x', data[i] * elWidthKoef + 10);
        text.setAttribute('height', elHeight - space);
        text.textContent = data[i];
        text.style.opacity = 0;
        rect.onmouseover = function() {
            this.setAttribute('fill', '#CB1C1C');
            this.nextSibling.style.opacity = 1;
        };
        rect.onmouseout = function(text) {
            this.setAttribute('fill', color);
            this.nextSibling.style.opacity = 0;
        };
        //here loop for text content \/
        svg.appendChild(text);
    }
    return svg;
}
var data = [20, 30, 10, 5, 7, 12];
var newElement = drowDiagramm(data, 800, 500, '#ACEC77', 5);
var diva = document.getElementById('svg');
diva.appendChild(newElement);