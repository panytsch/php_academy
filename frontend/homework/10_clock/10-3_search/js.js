var inp = document.getElementById('input');
var but = document.getElementById('pressButton');


inp.onchange = function(){
	changeInner();
}


but.onclick = function(){
	changeInner();
}

function changeInner() {
	alert(inp.value);
}