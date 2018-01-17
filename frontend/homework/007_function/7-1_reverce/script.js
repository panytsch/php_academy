function push_random_elements(count, min_range = 0, max_range = 100){
	var array = new Array();
	for (var i = 0; i < count; i++){
		array[i] = parseInt(Math.random()*(max_range-min_range+1))+min_range;
		// array.push(parseInt(Math.random()*(max_range-min_range+1))+min_range);
	}
	return array;
}

function reverce_array_buff(array){
	if (array.length%2) {
		var count = (array.length - 1)/2;
	}
	else {
		var count = array.length/2;
	}
	var i = 0;
	var buff;
	while(count--){
		buff = array[array.length-1-i];
		array[array.length-1-i] = array[i];
		array[i] = buff;
		i++;
	}
}

function reverce_array(array){
	if (array.length%2) {
		var count = (array.length - 1)/2;
	}
	else {
		var count = array.length/2;
	}
	var i = 0;
	while(count--){
		array.splice(i,0,parseInt(array.slice(array.length-i-1,array.length-i)));
		array.splice(array.length-i,0,parseInt(array.slice(i+1,i+2)));
		array.splice(array.length-i-2,1);
		array.splice(i+1,1);
		i++;
	}
}