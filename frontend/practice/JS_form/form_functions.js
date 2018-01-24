function valid(form) {
	var name = form.my_name.value;
	var pass = form.password.value;
	var sex = form.sex.value;
	var fail = false;
	// var text = window.getElementById('text_data');
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
		alert('Your data has been sent');
		form.reset();
		// text.innerHTML = 'Your data has been delivered';
	}
	else{
		alert('Pls, reenter you data.\nThey\'re not correct');
		// text.innerHTML = 'Pls, reenter you data.<br/>They\'re not correct';
	}
}