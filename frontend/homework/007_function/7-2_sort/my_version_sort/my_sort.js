function push_random_elements(count, min_range = 0, max_range = 100){
	var array = new Array();
	for (var i = 0; i < count; i++){
		array[i] = parseInt(Math.random()*(max_range-min_range+1))+min_range;
	}
	return array;
}

function my_sort(array, bo = true){
	if (bo) {
		sort_max_to_min(array);
	}
	else{
		sort_min_to_max(array);
	}
}

function sort_max_to_min(array){
	var max = array[0];
	var maxindex = 0;
	var buff = 0;
	for(var i = 1; i < array.length; i++){
		for(var j = i; j < array.length; j++){
			if (max < array[j]) {
				max = array[j];
				maxindex = j;
			}
		}
		if(max > array[i-1]){
			buff = array[i-1];
			array[i-1] = max;
			array[maxindex] = buff;
		}
		max = array[i];
	}
}

function sort_min_to_max(array){
	var min = array[0];
	var minindex = 0;
	var buff = 0;
	for(var i = 1; i < array.length; i++){
		for(var j = i; j < array.length; j++){
			if (min > array[j]) {
				min = array[j];
				minindex = j;
			}
		}
		if(min < array[i-1]){
			buff = array[i-1];
			array[i-1] = min;
			array[minindex] = buff;
		}
		min = array[i];
	}
}