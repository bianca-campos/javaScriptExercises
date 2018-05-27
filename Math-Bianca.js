// Js Exercises - Math - Bianca


//1
// Write a JavaScript function to generate a random integer between any 10 and 35.
	function random(min, max){
		return num = Math.floor((Math.random() * (max - min + 1)) + min); //Math.floor - number integer 
}


//2
// Write a JavaScript function to find the highest value in an array. 
	function max(arraynum){
	return Math.max.apply(null, arraynum); //apply accept array as a parameter
}
console.log(max([12,34,56,1])); // 56
console.log(max([-12,-34,0,-56,-1])); // 0


//3
// Write a JavaScript function which will return values that are powers of two.	
	function isPower_of_two(num){
		if (Math.sqrt(num,2) % 1 === 0){
			return true;
		}
		else{
			return false;
		}
	}
console.log(isPower_of_two(64)); // t
console.log(isPower_of_two(94)); //f

//4
// Write a JavaScript function to convert degrees to radians. 
	function degrees_to_radians(num){
		var rad = Math.PI; //pi value 
		return num * (rad/180);
	}
console.log(degrees_to_radians(45)); // 0.7853981633974483

//5
// Write a JavaScript function to calculate the percentage (%) of a number.
	function percentage(a, b){
		var percent = ((a/100) * b);
		return percent;
	}
console.log(percentage(1000, 47.12)); // 471.2

//6
// Write a JavaScript function to convert a positive number to negative number.
	function pos_to_neg(number){
		return -Math.abs(number); //abs - absolut value
	}
console.log(pos_to_neg(15)); // -15 


