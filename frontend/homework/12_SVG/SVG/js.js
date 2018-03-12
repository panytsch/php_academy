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
    }
    var namespace = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(namespace, 'svg');
    var elHeight = Math.floor(height / data.length);
    var max = findMaxElement(data);
    var elWidthKoef = width / max;
    svg.style.position = 'relative';
    svg.setAttribute('height', height);
    svg.setAttribute('width', width);
    for (var i = 0; i < data.length; i++) {
        var rect = document.createElementNS(namespace, 'rect')
        rect.setAttribute('width', data[i] * elWidthKoef);
        rect.setAttribute('height', elHeight - space);
        rect.setAttribute('fill', color);
        rect.onmouseover = function() {
            this.setAttribute('fill', '#CB1C1C');
        };
        rect.onmouseout = function() {
            this.setAttribute('fill', color);
        };
        rect.style.position = 'absolut';
        rect.setAttribute('x', 0);
        rect.setAttribute('y', elHeight * i);
        svg.appendChild(rect);
    }
    return svg;
}
var newElement = drowDiagramm([20, 30, 10, 5, 7, 12], 800, 500, '#ACEC77', 5);
var diva = document.getElementById('svg');
diva.appendChild(newElement);