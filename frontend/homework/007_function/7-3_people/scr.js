function push_people(){
	var human = {
		name: '',
		sname: '',
		age: ''
	};
	var array = [];
	hero:while(1){
		while (1){
			human.name = prompt('Enter pls your name: ');
			if (human.name === null){
				break hero;
			}
			else if (human.name != '' && human.name != ' ' && human.name) {
				break;
			}
		}
		while (1){
			human.sname = prompt('Enter pls your surname: ');
			if (human.sname === null) {
				break hero;
			}
			else if (human.sname != '' && human.sname != ' ' && human.sname) {
				break;
			}
		}
		while (1){
			human.age = parseInt(prompt('Enter pls your age (number only pls): '));
			if (isNaN(human.age)){
				break hero;
			}
			else if (human.age > 0 && human.age) {
				break;
			}
		}
		array.splice(array.length-1,0,human);
		if(!confirm("do you wanna add more people?")){
			break;
		}
	}
	return array;
}

function print_people(array){
	for(var i = 0; i < array.length; i++){
		document.write('People #' + (i+1) + ' :<br />');
		document.write('Name: ' + array[i].name + '<br />');
		document.write('Surame: ' + array[i].sname + '<br />');
		document.write('Age: ' + array[i].age + '<br />');
		document.write('<hr />');
	}
}