var add = function (a,b) {
	return a + b;
}

var sub = function (a,b) {
	return a - b;
}

var mul = function (a,b) {
	return a * b;
}

var div = function (a,b) {
	return a / b;
}

function calc(func, a,b) {
	return func(a,b);
}

function show(form) {
	// alert(form.one.value + '\n' + form.sel.value + '\n' + form.two.value);
	var a = parseFloat(form.one.value);
	var x = form.sel.value;
	var b = parseFloat(form.two.value);
	var result = 'something wroong..';
	// alert(check(a,x,b));
	if (check(a,x,b)) {
		switch (x) {
			case '+':
				result = calc(add, a,b)
				break;
			case '-':
				result = calc(sub, a,b)
				break;		
			case '*':
				result = calc(mul, a,b)
				break;
			case '/':
				result = calc(div, a,b)
				break;
			default :
				alert('Da ladno!!! (0_0)');
		}
	}
	document.getElementById('result').innerHTML = result;
}

function check (a,x,b) {
	var flag;
	(!a && a!==0) ? flag = false : isNaN(a) ? flag = false : 
		!isFinite(a) ? flag = false : !x ? flag = false : 
		(!b && b!==0) ? flag = false : isNaN(b) ? flag = false : 
		!isFinite(b) ? flag = false : (x === '/' && b == 0) ? flag = false : flag = true;

	return flag;
}