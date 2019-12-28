const validateLogin = (email, password) => {
	var isEmailValid = validateMail(email.value);
	var isPasswordValid = validatePassword(password.value);
	if(!isEmailValid) {
		alert("Email not valid!");
		return(false);
	} else if(!isPasswordValid) {
		alert("password not valid!");
		return(false);
	} else {
		return(true);
	}
}

const validateRegister = (firstName, lastName, email, password) => {
	if(firstName.value.length < 1 || lastName.value.length < 1) {
		alert("invalid name");
		return(false);
	}
	var isEmailValid = validateMail(email.value);
	var isPasswordValid = validatePassword(password.value);
	if(!isEmailValid) {
		alert("Email not valid!");
		return(false);
	} else if(!isPasswordValid) {
		alert("password not valid!");
		return(false);
	} else {
		return(true);
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
