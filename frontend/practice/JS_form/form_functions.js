function valid(form) {
	var name = form.my_name.value;
	var pass = form.password.value;
	var sex = form.sex.value;
	var fail = false;
	if (!name || name == '' || name == ' ') {
		fail = true;
	}
	if (!pass || pass == '' || pass == ' ') {
		fail = true;
	}
	if(!sex){
		fail = true;
	}
	if (!fail) {
		alert('Your data has been delivered');
		return true;
	}
	else{
		return false;
	}
}