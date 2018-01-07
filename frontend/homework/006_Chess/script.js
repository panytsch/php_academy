var a = "<div class='black'></div>";
var a1 = "<div class='white'></div>";
var arr = Array();
var count = 1;
for (var i = 0; i <= 63; i++) {
	if (i>1 && ((i)%8)==0){
		arr[i] = arr[i-1];
		// ++count;
		continue;
	}
	if(count%2){
		arr[i] = a1;
	}
	else{
		arr[i] = a;		
	}
	++count;
}
for (var i = 0; i < arr.length; i++){
	document.write(arr[i]);
}