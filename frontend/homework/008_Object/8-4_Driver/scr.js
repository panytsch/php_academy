var counter = 1;
var firstauto = new Automobile('Ford', 'Focus', 2010, 'Белый');
Driver.prototype = firstauto;
var firstuser = new Driver('Дмитрий', 3);
var list = [firstuser];

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

function Driver(name, experience){
	this.name = name;
	this.experience = parseInt(experience);
	this.driverInfo = function () {
		return this.name + ' has ' + this.experience + ' years experience';
	}
	this.show = function() {
		var text = '<tr><td>'+this.id+'</td><td>'+this.name+
		'</td><td>'+this.experience+'</td><td>'+this.manufact+'</td><td>'+this.model+
			'</td><td>'+this.year+'</td><td>'+this.color+'</td></tr>';
		return text;
	};
}

function getColor() {
	var id = parseInt(prompt('Write id auto'));
	list[id-1] ? alert('Color - ' + list[id-1].whatColor()) : 
	alert('Wrong ID');
}

function getInfo(id) {
	var id = parseInt(prompt('Write id auto'));
	list[id-1] ? alert(list[id-1].autoInfo()) : 
	alert('Wrong ID');
}

function getDriverInfo(id) {
	var id = parseInt(prompt('Write id auto'));
	list[id-1] ? alert(list[id-1].driverInfo()) : 
	alert('Wrong ID');
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
		Driver.prototype = hum;
		var drive = new Driver(form.dname.value, form.exp.value);
		list.push(drive);
		form.reset();
	}
	else{
		alert('Your data is wrong.\nPls write correct data');
	}
}

function show_people(id) {
	var a = document.getElementById(id);
	var str = '<tr class="train"><td>Id</td><td>Driver name</td><td>Experience</td><td>Manufact</td><td>Model</td><td>Year</td><td>Color</td></tr>';
	for (var i = 0; i < list.length; i++) {
		str += list[i].show();
	}
	a.innerHTML = str;
}

function valid(form) {
	var name = form.name.value;
	var color = form.color.value;
	var year = form.year.value;
	var expa = form.exp.value;
	var manufact = form.manufact.value;
	var driver = form.dname.value;
	var flag = false;

	!name ? flag = false : !color ? flag = false : 
	(!year || parseInt(year) < 1799) ? flag = false : isNaN(year) ? flag = false : 
	!isFinite(year) ? flag = false : !manufact ? flag = false : 
	isNaN(expa) ? flag = false : !isFinite(expa) ? flag = false :
	!driver ? flag = false : (!expa || parseInt(expa)<0 ) ? flag = false :
	flag = true;
	return flag;
}