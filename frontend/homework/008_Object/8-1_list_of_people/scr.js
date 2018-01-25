var list = [];

function Human(name, sname, age, sex, langs) {
	this.name = name;
	this.sname = sname;
	this.age = parseInt(age);
	this.sex = sex;
	this.langs = langs.split(' ');
}

Human.prototype.show = function() {
	var text = '<tr><td>'+this.name+'</td><td>'+this.sname+
		'</td><td>'+this.age+'</td><td>'+this.sex+'</td><td>'+
		this.langs.join(';')+'</td></tr>'
	return text;
};

function magic(form) {
	if (valid(form)) {
		var hum = new Human(form.name.value, form.sname.value, form.age.value, 
			form.sex.value, form.langs.value);
		list.push(hum);
		form.reset();
	}
	else{
		alert('kaka');
	}
}

function show_people(id) {
	var a = document.getElementById(id);
	var str = '<tr class="train"><td>Name</td><td>Surname</td><td>Age</td><td>Sex</td><td>Programming languages</td></tr>';
	for (var i = 0; i < list.length; i++) {
		str += list[i].show();
	}
	a.innerHTML = str;
}

function valid(form) {
	var name = form.name.value;
	var sname = form.sname.value;
	var age = form.age.value;
	var sex = form.sex.value;
	var lang = form.langs.value;
	var flag = false;
	!name ? flag = false : !sname ? flag = false : !age ? flag = false: isNaN(age) ? flag = false : !isFinite ? flag = false : !lang ? flag = false : !sex ? flag = false : flag = true;
	return flag;
}