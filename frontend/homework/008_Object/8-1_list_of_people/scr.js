var list = [];

function Human(name, sname, age, sex, langs) {
	this.name = name;
	this.sname = sname;
	this.age = age;
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
	var hum = new Human(form.name.value, form.sname.value, form.age.value, form.sex.value, form.langs.value);
	list.push(hum);
}

function show_people(id) {
	var a = document.getElementById(id);
	var str = '';
	for (var i = 0; i < list.length; i++) {
		str += list[i].show();
	}
	a.innerHTML = str;
}