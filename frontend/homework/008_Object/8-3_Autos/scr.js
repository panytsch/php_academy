var counter = 1;
var list = [
new Automobile('Nissan', 'Skyline', 2007, 'Красный'),
new Automobile('Toyota', 'Corolla', 2009, 'Черный'),
new Automobile('Volkswagen', 'Golf', 2009, 'Синий')
];

function Automobile(manufact, model, year, color) {
	this.id = counter++;
	this.manufact = manufact;
	this.model = model;
	this.year = parseInt(year);
	this.color = color;
	this.show = function() {
		var text = '<tr><td>'+this.id+'</td><td>'+this.manufact+'</td><td>'+this.model+
			'</td><td>'+this.year+'</td><td>'+this.color+'</td></tr>';
		return text;
	};
}

function getColor() {
	var id = parseInt(prompt('Write id auto'));
	alert(list[id-1] ? 'Color - ' + list[id-1].whatColor() : 'Wrong ID');
}

function getInfo(id) {
	var id = parseInt(prompt('Write id auto'));
	alert(list[id-1] ? list[id-1].autoInfo() : 'Wrong ID');
}

Automobile.prototype.whatColor = function() {
	return this.color;
};

Automobile.prototype.autoInfo = function() {
	return 'Manufact - ' + this.manufact + ', model - ' + 
	this.model + ', year - ' + this.year;
};

function magic(form) {
	if (valid(form)) {
		var hum = new Automobile(form.manufact.value, form.name.value, form.year.value, 
			form.color.value);
		list.push(hum);
		form.reset();
	}
	else{
		alert('Your data is wrong.\nPls write correct data');
	}
}

function show_people(id) {
	var a = document.getElementById(id);
	var str = '<tr class="train"><td>Id</td><td>Manufact</td><td>Model</td><td>Year</td><td>Color</td></tr>';
	for (var i = 0; i < list.length; i++) {
		str += list[i].show();
	}
	a.innerHTML = str;
}

function valid(form) {
	var name = form.name.value;
	var color = form.color.value;
	var year = form.year.value;
	var manufact = form.manufact.value;
	var flag = false;
	!name ? flag = false : !color ? flag = false : !year ? flag = false: isNaN(year) ? flag = false : !isFinite(year) ? flag = false : !manufact ? flag = false : flag = true;
	return flag;
}