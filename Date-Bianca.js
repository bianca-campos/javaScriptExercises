// Js Exercises - Date - Bianca


//1
// Write a JavaScript function to check whether an 'input' is a date object or not. 
	function is_date(value){
		var date = new Date(value);
		return !isNaN(date.getDate());
	}


//2
// Write a JavaScript function to get the current date.
// Note : Pass a separator as an argument. 
	function curday(sep){
		var date = new Date()
		var shortdate = date.toLocaleDateString();
			if (sep == "/"){
				return shortdate;
			}
			else{
				var splitdate = shortdate.split("/");
				return (splitdate.join("-"));
			}
	}


//3
// Write a JavaScript function to get the number of days in a month. 
	function getDaysInMonth(month, year){
		return new Date(year, month, 0).getDate();
	}


//4
// Write a JavaScript function to get the month name from a particular date. 
	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	function month_name(value){
		var date = new Date(value);
		return month[date.getMonth()];
	
	}

//5
// Write a JavaScript function to compare dates (i.e. greater than, less than or equal to). 
	function compare_dates(date1, date2){
		d1 = new Date(date1);
		d2 = new Date(date2);
		if(d1 > d2){
			return (d1 + ">" + d2);
		}
		else if(d1 < d2){
			return (d1 + "<" + d2);
		}
		else
			return (d1 + "=" + d2);

	}


//6 
// Write a JavaScript function to add specified minutes to a Date object.
	function add_minutes(dt, minutes){
		return new Date(dt.getTime() + minutes*60000);
	}


//7 
// Write a JavaScript function to get difference between two dates in days.
	function date_diff_indays(date1, date2){
		d1 = new Date(date1);
		d2 = new Date(date2);
		return Math.floor((Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate()) - Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate())) / (1000 * 60 * 60 * 24)); //Math.floor() - returns the largest integer less than or equal to a given 

	}


//8
// Write a JavaScript function to get the last day of a month.
	function lastday(year, month){
		return new Date(year, month + 1, 0).getDate();
	}


//9
// Write a JavaScript function that will return the number of minutes in hours and minutes. 
	function timeConvert(min){
		var time = min;
		var hours = (time / 60);
		var rdhs = Math.floor(hours);
		var minutes = (hours - rdhs) * 60;
		var rdmin = Math.round(minutes); // Math.round() -  function returns the value of a number rounded to the nearest integer
		return time + " minutes = " + rdhs + " hour(s) and " + rdmin + " minute(s).";
	}



//10
// Write a JavaScript program to calculate age. 
	function calculate_age(dt){
		var now = Date.now();
		var time = now - dt.getTime();
		var age = new Date(time);
		return Math.abs(age.getFullYear() - 1970); // Math.abs() - function returns the absolute value of a number
	}
