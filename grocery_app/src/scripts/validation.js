function firstNameValidation(firstName) {
    if (firstName == "") {
        throw 'Error: Please enter First Name';
        return false;
    }
    const regPatternOne = /^[a-zA-Z]+$/;
    const regPatternTwo = /^[a-zA-Z]{2,15}$/;

    if (firstName.match(regPatternOne)) {
        if (firstName.match(regPatternTwo)) {
            return true;
        }
        throw 'Error: First name should only have alphabets \
        and length should be between 1 to 15';
        return false;
    }
    throw 'Error: First name should only have alphabets';
    return false;
}

function lastNameValidation(lastName) {
    if (lastName == "") {
        throw 'Error: Please enter Last Name';
        return false;
    }
    const regPatternOne = /^[a-zA-Z]+$/;
    const regPatternTwo = /^[a-zA-Z]{1,15}$/;

    if (lastName.match(regPatternOne)) {
        if (lastName.match(regPatternTwo))
            return true;
        throw 'Error: Length should be between 1 to 15';
        return false;
    }
    throw 'Error: Last name should only have alphabets';
    return false;
}

function emailValidation(usrEmail) {
    if (usrEmail == "") {
        throw 'Error: Please Enter Email.';
        return false;
    }
    const regPattern = /^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;

    if (usrEmail.match(regPattern))
        return true;
    throw 'Error: Enter valid email address';
    return false;
}

function confirmPasswordValidation(confirmPassword, password) {
    if (confirmPassword == "") {
        throw 'Error: Please Enter Confirm Password';
        return false;
    }
    if ((confirmPassword == password) && confirmPassword)
        return true;
    throw "Error: Password don't match '";
    return false;
}


function passwordValidation(password) {
    if (password == "") {
        throw 'Error: Please Enter Password.'
        return false;
    }
    /* 
        Minimum eight characters, at least one letter.
        one number and one special character
    */
    const regPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[\w@$!%*#?&]{8,}$/;

    if (password.match(regPattern))
        return true;
    throw 'Error: Password should contain minimum of eight characters, \
    at least one letter, one number and one special character:'
    return false;
}

function loginValidation(userEmail, userPassword) {
    
}