function push_random_elements(count, min_range = 0, max_range = 100){
	var array = new Array();
	for (var i = 0; i < count; i++){
		array[i] = parseInt(Math.random()*(max_range-min_range+1))+min_range;
	}
	return array;
}