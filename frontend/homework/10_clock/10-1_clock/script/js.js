var interval = 0;
var counter = new Counter();

function start (id){
	if (interval && id.innerText == 'Continue') {
		interval = setInterval(counter.start.bind(counter),100);
		id.innerText = 'Stop';
		return;
	}
	if (interval) {
		clearInterval(interval);
		id.innerText = 'Continue';
		return;
	}
	id.innerText = 'Stop';
	interval = setInterval(counter.start.bind(counter),100);
}

function lap() {
	var timer_span = document.getElementById('span');
	var timer_div = document.getElementById('timer');
	var new_span = document.createElement('span');
	var new_br = document.createElement('br');
	new_span.innerText = timer_span.innerText;
	timer_div.insertBefore(new_span,timer_span);
	timer_div.insertBefore(new_br,timer_span);
}

function Counter() {
	this.milisec = 0;
	this.secs = 0;
	this.min = 0;
	this.hour = 0;
	this.count = 0;
	this.start = function(){
		this.count++;
		this.milisec++;
		if (this.milisec % 10 === 0 && this.milisec) {
			this.secs++;
			this.milisec = 0;
		}
		if (this.secs % 60 === 0 && this.secs) {
			this.min++;
			this.secs = 0;
		}
		if (this.min % 60 === 0 && this.min) {
			this.hour++;
			this.min = 0;
		}

		var milisec = this.milisec ;
		var sec = this.secs;
		var min = this.min;
		var hour = this.hour;
		
		milisec = milisec < 10 ? '0'+ milisec : milisec;
		sec = sec < 10 ? '0'+ sec : sec;
		min = min < 10 ? '0'+ min : min;
		hour = hour < 10 ? '0' + hour : hour;
		document.getElementById('sec').style.transform = 'rotate('+this.count*0.6+'deg)';	
		document.getElementById('min').style.transform = 'rotate('+this.count*0.01+'deg)';	
		document.getElementById('span').innerText = hour + ':' + min + ':' + sec + ':' + milisec;	
	}
	this.clear = function () {
		document.getElementById('span').innerText = '00:00:00:00';
		clearInterval(interval);
		interval = 0;
		document.getElementById('b_start').innerText = 'Start';
		this.milisec = 0;
		this.secs = 0;
		this.min = 0;
		this.hour = 0;
		this.count = 0;
		document.getElementById('sec').style.transform = 'rotate(0deg)';	
		document.getElementById('min').style.transform = 'rotate(0deg)';
	}
}

function clear_f() {
	var list = document.getElementsByTagName('span');
	var list_br = document.getElementsByTagName('br');
	// console.log(list[list.length-1].innerText);
	if (list.length <= 1 ) {
		counter.clear();
		return;
	}
	var i = list.length;
	while(i > 1){
		list[0].remove(); //list1[1].remove();
		list_br[1].remove();
		--i;
	}
	counter.clear();
}