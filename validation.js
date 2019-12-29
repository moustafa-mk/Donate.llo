const validateLogin = (email, password) => {
	var isEmailValid = validateMail(email.value);
	var isPasswordValid = validatePassword(password.value);
	if(!isEmailValid) {
		alert("Email not valid!");
		return false;
	} else if(!isPasswordValid) {
		alert("password not valid!");
		return false;
	} else {
		return true;
	}
}

const validateRegister = (firstName, lastName, email, password) => {
	if(firstName.value.length < 1 || lastName.value.length < 1) {
		alert("invalid name");
		return false;
	}
	var isEmailValid = validateMail(email.value);
	var isPasswordValid = validatePassword(password.value);
	if(!isEmailValid) {
		alert("Email not valid!");
		return false;
	} else if(!isPasswordValid) {
		alert("password not valid!");
		return false;
	} else {
		return true;
	}
}

const validateMail = (email) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePassword = (password) => {
	return /[A-Z]/       .test(password) &&
           /[a-z]/       .test(password) &&
           /[0-9]/       .test(password) &&
           password.length > 8;
}
const validatePayment = (number , holderName , amount, expdate)=> {

	/*var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	var d1 = new Date();
	expdate = new Date();
	var same = d1.getFullYear===expdate;*/
 //today = mm + '/' + dd + '/' + yyyy;
 var expdate = new Date(); 
//# => Fri May 20 2016 16:09:43 GMT+0530 (India Standard Time)

var date2 = new Date();
//date2.setDate(expdate.getDate() - 1); 
//# => Thu May 19 2016 16:09:43 GMT+0530 (India Standard Time)
	if(number.value.length != 15) {
		alert("Card number invalid!");
		return false;
	}
	else if (holderName.value.length <1) {
		alert ("name is empty!");
		return false;
	}
	else if (amount.value<1) {
		alert("invalid data!");
		return false;
	}
	else if (date2 > expdate.value ) {
		return false;

	}
}