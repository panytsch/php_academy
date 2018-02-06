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
}

function Driver(name, experience){
	this.name = name;
	this.experience = parseInt(experience);
	this.driverInfo = function () {
		return this.name + ' has ' + this.experience + ' years experience';
	}
	this.show = function(id) {
		var table = document.getElementById(id);
		var tr = document.createElement('tr');
		var arr = ['id', 'name', 'experience', 'manufact', 'model', 'year', 'color'];
		for (var i = 0; i < arr.length; i++){
			var td = document.createElement('td');
			td.innerHTML = this[arr[i]];
			console.log(this[arr[i]]);
			tr.appendChild(td); 
		}
		table.appendChild(tr);
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

function getDriverInfo(id) {
	var id = parseInt(prompt('Write id auto'));
	alert(list[id-1] ? list[id-1].driverInfo() : 'Wrong ID');
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
	var table = document.getElementById(id);
	table.innerHTML = '<tr class="train"><td>Id</td><td>Driver name</td><td>Experience</td><td>Manufact</td><td>Model</td><td>Year</td><td>Color</td></tr>';
	for (var i = 0; i < list.length; i++) {
		list[i].show(id);
	}
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