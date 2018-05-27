// Js Exercises - Arrays - Bianca
//1 
//Write a JavaScript function to check whether an `input` is an array or not. 
	function is_array(arr1){
		if(arr1 instanceof Array){
			return true;
		}
		else
			return false;

	}

//2
//Write a simple JavaScript program to join all elements of the following array into a string. 
	myColor = ["Red", "Green", "White", "Black"];
	var elements = myColor.join();
	var elementsPlus = myColor.join("+");
	console.log(elements);
	console.log(elementsPlus);


//3 
//Write a JavaScript program to sort the items of an array. 
	var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
	console.log(arr1.sort());


//4
//Write a JavaScript program to find the most frequent item of an array. 
	var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
	var mf = 1;
	var m = 0
	var item;
	for (var i = 0; i < arr1.length; i++) {
		for (var j = 0; j < arr1.length; j++) {
			if(arr1[i] == arr1[j])
				m++;
			if (mf < m){
				mf = m;
				item = arr1[i];
			}
		}
		m = 0;
	}
	console.log(item + " (" + mf + " times )");



// 5
//Write a JavaScript program which prints the elements of the following array. 
	var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]; 
	for (var i in a) 
	{
	   console.log("row " + i);
	   for (var j in a[i]) 
	     {
	      console.log(" " + a[i][j]);
	     }
	}

//6
//Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
	function removeDuplicates(num) {
	  var x,
	      len=num.length,
	      out=[],
	      obj={};
	 
	  for (x=0; x<len; x++) {
	    obj[num[x]]=0;
	  }
	  for (x in obj) {
	    out.push(x);
	  }
	  return out;
	}
	var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
	result = removeDuplicates(Mynum);
	console.log(Mynum);
	console.log(result);
	

//7
//There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index 
//value from the given arrays. 
	var array1 = [1,0,2,3,4];
	var array2 = [3,5,6,7,8,13];
	function Arrays_sum(array1, array2) {
		  var result = [];
		  var ctr = 0;
		  var x=0;

		  if (array1.length === 0) 
		   return "array1 is empty";
		  if (array2.length === 0) 
		   return "array2 is empty";   

		 while (ctr < array1.length && ctr < array2.length) 
		  {
		    result.push(array1[ctr] + array2[ctr]);
		    ctr++;
		  }

		 if (ctr === array1.length) 
		 {
		    for (x = ctr; x < array2.length; x++)   {
		      result.push(array2[x]);
		    }
		  } 
		  else
		  {
		  for (x = ctr; x < array1.length; x++) 
		    {
		      result.push(array1[x]);
		    }
		  }
		  return result;
		}

		console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));


//10 - test: random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
//Write a JavaScript function to get a random item from an array.
	function random(array){
		return Math.floor(Math.random() * array.length);
	}

