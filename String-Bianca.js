// Js Exercises - String - Bianca

//1 console.log(abbrev_name("Robin Singh"));
	function abbrev_name (string1) {
		var str2 = string1.split(" ");
		str2[1] = str2[1].slice(0,1) + ".";
		str2 = str2.join(" ");
		return str2;
	}


//2 - console.log(string_parameterize("Robin Singh from USA."));
	function string_parameterize (string2) {
		var splittedArr = string2.split(" ");
		var string_param = splittedArr.join("-").toLowerCase(string_param).slice(0,20);
		return string_param;

	} 

//3 console.log(capitalize('js string exercises'));
	function capitalize (string3){
		var capitalize = string3[0].toUpperCase() + string3.slice(1);
		return capitalize;

	}


//4 console.log(capitalize_Words('js string exercises')); "Js String Exercises"
	function capitalize_Words(string4){
		var capitalize_Words = string4.split(" ");
		for(var i = 0; i < capitalize_Words.length; i++){
			var letters = capitalize_Words[i].split('');
			letters[0] = letters[0].toUpperCase();
			capitalize_Words[i] = letters.join('');
	}
		return capitalize_Words.join(' ');
	}

//5 console.log(is_string('JavaScript')); 
// true
// console.log(is_string([1, 2, 4, 0]));
// false
	function is_string(string5){
		if (typeof(string5) === "string")
			return true;
		else
			return false;
	}

//6 console.log(repeat('Ha!')); 
// console.log(repeat('Ha!',2)); 
// console.log(repeat('Ha!',3));
// "Ha!" 
// "Ha!Ha!" 
// "Ha!Ha!Ha!"
	function repeat(a, b){
		if(!b){
			b = 1;
		}
		if(b < 1){
			return '';
		}
		else {
			return new Array(b + 1).join(a);
		}
	}

//7 console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));
// Output :
// 1
	function count (string6, string7){
		var count = string6.split(" ");

		return count.filter(function(word) {
			return word.toLowerCase() === string7.toLowerCase();
		}).length;
		}

