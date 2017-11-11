function my_max(arr) {
	var maxNumber = arr[0];
	for (var i = 1; i < arr.length; i++){
  	if (arr[i] > maxNumber) {
    	maxNumber = arr[i];
    }
  }
  return maxNumber
}
//console.log(my_max([4,5,2,7,1]));
//console.log(my_max([1,56,2,3,-1,0]));
//console.log(my_max([]))

function vowel_count(str) {
	var count = 0;
  str = str.toLowerCase()
	for(var i = 0; i < str.length; i++) {
		if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'y') {
    	count++;
    }
  }
  return count;
}
//console.log(vowel_count(''))

function reverse(str) {
	var reverseStr = '';
  var letterCount = str.length
  for (var i = 0; i < letterCount; i++){
  	reverseStr = reverseStr.concat(str[letterCount - i - 1]);
  }
  return reverseStr;
}

//console.log(reverse('mihai'))
