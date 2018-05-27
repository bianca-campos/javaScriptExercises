// Js Exercises - Lab1 - Bianca

//1
// Given two strings, a and b, return the result of putting them 
// together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
	function makeAbba(a, b) {
		return a + b + b + a;
}
console.log(makeAbba("Hi", "Bye")); // "HiByeByeHi"
console.log(makeAbba("Yo", "Alice")); // "YoAliceAliceYo"
console.log(makeAbba("What", "Up")); // "WhatUpUpWhat"

//2 
// Given a string, return true if it ends in "ly".
	function endsLy(word){
		if(word.endsWith("ly")){
			return true;
		}
		else{
			return false;
		}
	}
console.log(endsLy("oddly")); // t
console.log(endsLy("y")); // f
console.log(endsLy("oddy")); // f

//3 
// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".
	function firstHalf(word){
		var len = word.length;
		var medium = (len / 2);
		word = word.slice(0, medium);
		return word;
	}
console.log(firstHalf("WooHoo")); // "Woo"
console.log(firstHalf("HelloThere")); // "Hello"
console.log(firstHalf("abcdef")); // "abc"

//4 
// Given a string, return a "rotated right 2" version where the last 2 
// chars are moved to the start. The string length will be at least 2.
	function right2(word){
		var len = word.length;
		var ret = word.slice(-2)
		if(len <= 2){
			return word;
		}
		else{
			present =  ret + word;
			return present.substr(0, present.length -2);
		}			
}
console.log(right2("Hello")); // "loHel"
console.log(right2("java")); // "vaja"
console.log(right2("Hi")); // "Hi"

//5
// Given two strings, append them together (known as "concatenation") and return the result. 
// However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat". 
	function conCat(str1, str2){
		var first = str1.substr(-1);
		var second = str2.substring(0, 1);			
		if(first == second){
		result = str1.concat(str2.substr(1, 3));
			return result;
		}
		else{
		result = str1.concat(str2);
			return result;
		}
	}
console.log(conCat("abc", "cat")); // "abcat"
console.log(conCat("dog", "cat")); // "dogcat"
console.log(conCat("abc", "")); // "abc"

//6
// Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited". 
	function frontAgain(word){
		var len = word.length;
		var beg = word.substr(0, 2);
		var end = word.substr(-2);
		if(beg == end){
			return true;	
	}
		else
			return false;
}
console.log(frontAgain("edited")) //t 
console.log(frontAgain("edit")) //f 
console.log(frontAgain("ed")) //t

//7
// Given a string, return a version without the first 2 chars. Except keep the first char 
// if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.  
	function deFront(word){
		var len = word.length;
		if(word.charAt(0) == "a"){	
		var result = word.substr(2, len);
			return ("a" + result);			
		}
		else{
		var result = word.substr(2, len);
		return result;
		}
	}
console.log(deFront("Hello")) // "llo" 
console.log(deFront("java")) // "va" 
console.log(deFront("away")) // "aay"

//8
// Given a string, if one or both of the first 2 chars is 'x', return the string without 
// those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks. 
	function withoutX2 (word){
		var len = word.length;
		if(len <= 2){
			return word;
		}
		else{
			return (word.replace("x", ""));
		}
	}
console.log(withoutX2("xHi")) // "Hi" 
console.log(withoutX2("Hxi")) // "Hi" 
console.log(withoutX2("Hi")) // "Hi"

//9 
// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, 
// so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.
	function lastChars(first, second){
		first = first.substring(0,1);
		second = second.substr(-1);
		if(second == ""){
			second = "@";
		}
		return first + second;
	}
console.log(lastChars("last", "chars")) // "ls" 
console.log(lastChars("yo", "java")) // "ya" 
console.log(lastChars("hi", "")) // "h@"

//10
// Given a string of even length, return a string made of the middle two chars, 
// so the string "string" yields "ri". The string length will be at least 2. 
	function middleTwo(word){
		var len = word.length;
		var medium = (len / 2);
		word = word.slice(medium - 1, medium + 1);
		return word;
	}
console.log(middleTwo("string")) // "ri" 
console.log(middleTwo("code")) // "od" 
console.log(middleTwo("Practice")) // "ct"
