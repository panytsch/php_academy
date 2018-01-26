function push_random_elements(count, min_range = 0, max_range = 100){
	var array = new Array();
	for (var i = 0; i < count; i++){
		array[i] = parseInt(Math.random()*(max_range-min_range+1))+min_range;
		// array.push(parseInt(Math.random()*(max_range-min_range+1))+min_range);
	}
	return array;
}

function reverce_array_buff(array){
	var count = parseInt(array.length/2);	
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
	var count = parseInt(array.length/2);
	var i = 0;
	while(count--){
		array.splice(i,0,array[array.length-i-1]);
		array.splice(array.length-i,0,array[i+1]);
		array.splice(array.length-i-2,1);
		array.splice(i+1,1);
		i++;
	}
}