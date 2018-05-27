// Js Exercises - Lab 2 - Bianca
//1
// Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}. 
 function rotateLeft3(input){
	var temp = input[0];
	input.shift(); //remove first position
	input.push(temp); //add in last position
	return input;

}

console.log(rotateLeft3([1, 2, 3]));
console.log(rotateLeft3([5, 11, 9]));
console.log(rotateLeft3([7, 0, 0]));


//2 
// Given an array of ints, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.
function reverse3(input){	
	var tempFst = input[0];
	var tempLst = input[input.length-1];
	input.shift(); //remove first position
	input.pop(); //remove last position
	input.unshift(tempLst); //add in first position
	input.push(tempFst); //add in last position
	return input;

}

console.log(reverse3([1, 2, 3]));
console.log(reverse3([5, 11, 9]));
console.log(reverse3([7, 0, 0]));


//3 
// Given an int array length 2, return true if it contains a 2 or a 3.
function has23(input){
	if(input.indexOf(2) >= 0 || input.indexOf(3) >= 0){
		return true;
	}
	else
		return false;
}

console.log(has23([2, 5]));
console.log(has23([4, 3]));
console.log(has23([4, 5]));


//4
// Given an int array length 3, if there is a 2 in the array 
// immediately followed by a 3, set the 3 element to 0. Return the changed array. 
function fix23(input){
	if (input.indexOf(2) >= 0 || input.indexOf(3) >= 0){
		var tempTwo = input.indexOf(2);
		var tempThree = input.indexOf(3);
			if (tempThree == tempTwo + 1) {
				input[tempThree] = 0;
			}
		return input;
}
}

console.log(fix23([1, 2, 3]));
console.log(fix23([2, 3, 5]));
console.log(fix23([1, 2, 1]));


//5
// Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. 
// The array length will be a least 1.
function maxTriple(input){
	if(input.length >= 1 && input.length % 2 == 1){
		for (var i = 0; i < input.length; i++) {
			if (input.length == 1) {
				return input;
			}
			if (input[0] > input[1]) {
				max = input[0];
			}
			else
				max = input[1];
			if (max < input[2]) {
				max = input[2];
			}
			return max;
		}
	}
	else if (input.length % 2 == 0 && input.length > 1) {
		return "The array needs to be odd.";
	}
	else
		return "Array empty.";
}

console.log(maxTriple([1, 2, 3, 2])); //even
console.log(maxTriple([])); // length < 1
console.log(maxTriple([1])); // length = 1
console.log(maxTriple([1, 2, 3]));
console.log(maxTriple([1, 5, 3]));
console.log(maxTriple([5, 2, 3]));


//6
// Given an array of ints, swap the first and last elements in the array. 
// Return the modified array. The array length will be at least 1. 
function swapEnds(input){
	if (input.length >= 1) {
		if (input.length == 1) {
			return input;
		}
		else {
			var tempFst = input[0];
			var tempLst = input[input.length-1];
			input.shift(); //remove first position
			input.pop(); //remove last position
			input.unshift(tempLst); //add in first position
			input.push(tempFst); //add in last position
			return input;
		}
	}
	else
		return "Array empty.";
}

console.log(swapEnds([])); // length < 1
console.log(swapEnds([1])); // length = 1
console.log(swapEnds([1, 2, 3, 4]));
console.log(swapEnds([1, 2, 3]));
console.log(swapEnds([8, 6, 7, 9, 5]));

//7
// We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. 
// Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.  
function unlucky1(input){

	 if (input[input.length-1] == 3 || input[input.length-2 == 1]){
		var tempOne1 = input.indexOf(1);
		var tempThree1 = input.length-1;
			if (tempThree1 == tempOne1 + 1) {
				return true;			
			}
		}

	else if (input.indexOf(1) >= 0 && input.indexOf(1) <= 1 || input.indexOf(3) >= 0) {
		var tempOne = input.indexOf(1);
		var tempThree = input.indexOf(3);
			if (tempThree == tempOne + 1) {
				return true;
			}			
	else
		return false;
}
}

console.log(unlucky1([2, 3, 3, 1, 3])); // last 2 positions true
console.log(unlucky1([2, 3, 3, 1, 5])); // last 2 positions false 
console.log(unlucky1([1, 3, 4, 5])); //true
console.log(unlucky1([2, 1, 3, 4, 5])); //true
console.log(unlucky1([1, 1, 1])); //false
console.log(unlucky1([2, 1, 9, 3, 1])); //false
console.log(unlucky1([2, 3, 1, 3, 5])); // middle false
console.log(unlucky1([1, 2, 1, 3, 5])); // middle false


//8
// Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. 
// If either array is length 0, ignore that array. 
function front11(input1, input2){
	var result = [];
	if (input2.length == 0){
		var firstInput1 = input1[0];
		result.push(firstInput1);
		return result;
	}
	else
		var firstInput1 = input1[0];
		var firstInput2 = input2[0];
		result.unshift(firstInput1);
		result.push(firstInput2);
		return result;

}

console.log(front11([1, 2, 3], [7, 9, 8]));
console.log(front11([1], [2]));
console.log(front11([1, 7], []));



// 9
// We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of 
// the pair is that value. Return true if the given value is everywhere in the array.

function isEverywhere(arr, num) {
	for(var i = 0; i < arr.length - 1; i++){
		if (arr[i] != num && arr[i + 1] != num) {
			return false;
		}
	}
	return true;
}

console.log(isEverywhere([1, 2, 1, 4], 1)); // t
console.log(isEverywhere([1, 2, 1, 3], 2)); // f
console.log(isEverywhere([1, 2, 1, 3, 4], 1)); // f


//10
// For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, 
// until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.
function tenRun(arr) {
	var tenMode = -1;
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] % 10 == 0) {
			tenMode = arr[i];
		} else if (tenMode != -1) {
			arr[i] = tenMode;
		}
	}
	return arr;
}

function tenRun2(arr) {
	var newArr = [];
	var i = 0;
	while (i < arr.length) {
		if (arr[i] % 10 != 0){
			newArr.push(arr[i]);
			i++;
		} else {
			var mT = arr[i];
			newArr.push(mT);
			while (i < arr.length && arr[i] % 10 != 0) {
				newArr.push(mT);
				i++;
			}
		}
	}
	return newArr;
}

console.log(tenRun([2, 10, 3, 4, 20, 5])); //[2, 10, 10, 10, 20, 20]
console.log(tenRun([10, 1, 20, 2])); //[10, 10, 20, 20]
console.log(tenRun([10, 1, 9, 20])); //[10, 10, 10, 20]


//11
// Given an array of ints, return true if every 2 that appears in the array is next to another 2. 
function twoTwo(arr) {
	if (arr.length == 1 && arr[0] == 2) {
		return false;
	}
	// edge case [2, x, ...]
	if (arr.length > 1 && (arr[0] == 2 && arr[1] != 2)){
		return false;
	}
	// [x!=2, 2, y!=2]
	for(var i = 1; i < arr.length - 1; i++) {
		if (arr[i] == 2 && arr[i+1] != 2 && arr[i-1] != 2) {
			return false;
		} 
	}
	return true;
}
console.log(twoTwo([4, 2, 2, 3])) //t
console.log(twoTwo([2, 2, 4])) // t
console.log(twoTwo([2, 2, 4, 2])) // f

//12
// Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify and return 
// the given array, or return a new array.
function shiftLeft(input){
	if (input.length == 1) {
		return input;
	}
	else
		var temp = input[0];
		input.shift();
		input.push(temp);
		return input;

}

console.log(shiftLeft([6, 2, 5, 3])); // [2, 5, 3, 6]
console.log(shiftLeft([1, 2])); // [2, 1]
console.log(shiftLeft([1])); // [1]


//13
// Return an array that contains the exact same numbers as the given array, but rearranged so that all the even numbers come 
// before all the odd numbers. Other than that, the numbers can be in any order. You may modify and return the given array, 
// or make a new array.
function evenOdd(input){
	for (var i = 0; i < input.length-1; i++) {
		if (input % 2 === 0) {
			input.push(input[i]);
			// input[length-1] = temp;
			return input
		}
	}
}

console.log(evenOdd([1, 0, 1, 0, 0, 1, 1])); //[0, 0, 0, 1, 1, 1, 1]
console.log(evenOdd([3, 3, 2])); //[2, 3, 3]
console.log(evenOdd([2, 2, 2])); //[2, 2, 2]


//14
// This is slightly more difficult version of the famous FizzBuzz problem which is sometimes given as a first problem for job 
// interviews. (See also: FizzBuzz Code.) Consider the series of numbers beginning at start and running up to but not including 
// d, so for example start=1 and end=5 gives the series 1, 2, 3, 4. Return a new array containing the string form of these 
// numbers, except for multiples of 3, use "Fizz" instead of the number, for multiples of 5 use "Buzz", and for multiples 
// of both 3 and 5 use "FizzBuzz". This version is a little more complicated than the usual version since you have to allocate 
// nd index into an array instead of just printing, and we vary the start/end instead of just always doing 1..100.	
function fizzBuzz(first, second){
	var input = [];
	for (var i = first; i < second; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			input.push("FizzBuzz");
		}	
		else if (i % 3 == 0) {
			input.push("Fizz");
		}
		else if (i % 5 == 0) {
			input.push("Buzz");
		}
		else 
			input.push(i);	
	}
return input;
	}

console.log(fizzBuzz(1, 16)); //["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", 11, Fizz, 13, 14, FizzBuzz]
console.log(fizzBuzz(1, 6)); //["1", "2", "Fizz", "4", "Buzz"]
console.log(fizzBuzz(1, 8)); //["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
console.log(fizzBuzz(1, 11)); //["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]

// 15
// Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. 
// Return the number of clumps in the given array.
function countClumps(arr) {
	var count = 0;
	var isClump = false;

	for(var i = 0; i < arr.length - 1; i++){
		if (isClump) {
			if (arr[i] != arr[i+1]) {
				isClump = false;
			}
		} else if (arr[i] == arr[i+1]) {
			isClump = true;
			count++;
		}
	}
	return count;
}

console.log(countClumps([1, 2, 2, 3, 4, 4])) // 2
console.log(countClumps([1, 1, 2, 1, 1])) // 2
console.log(countClumps([1, 1, 1, 1, 1])) // 1
