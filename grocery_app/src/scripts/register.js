
function hashCode(message) {
    let hash;
    for (let idx = 0; idx < message.length; ++idx) {
      const chr   = message.charCodeAt(idx);
      hash  = ((hash << 7) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function Register() {
    let result = "";
    let firstName,lastname,usrEmail,password,confirmPassword;
    try {
        firstName=document.getElementById("fname").value;
        result = firstNameValidation(firstName);
        try {
            lastName=document.getElementById("lname").value;
            result = lastNameValidation(lastName);
            try {
                usrEmail=document.getElementById("email").value;
                result = emailValidation(usrEmail);
                try {
                    password=document.getElementById("Password").value;
                    result = passwordValidation(password);
                    try {
                        confirmPassword=document.getElementById("ConfirmPassword").value;
                        result = confirmPasswordValidation(confirmPassword, password);
                    }
                    catch(err) {
                        window.alert(err);
                    }
                }
                catch(err) {
                    window.alert(err);
                }
            }
            catch(err) {
                window.alert(err);
            }
        }
        catch(err) {
            window.alert(err);    
        }
    }
    catch(err) {
        window.alert(err);
    }
    document.getElementById("registerFrom").reset();
    if(result === true) {
        const hashPassword = hashCode(password);
        const user= {
            fname: firstName,
            lname: lastName,
            email: usrEmail,
            password: hashPassword,
        };
        if(localStorage.getItem(usrEmail)) {
            window.alert("Email Id already exist!!");
            return;    
        }
        if(localStorage.length == 3) {
            window.alert('Storage is full');
            return;
        }
        localStorage.setItem(usrEmail, JSON.stringify(user));
        window.alert("Successfully Registered!!");
        window.onload();
    }
}

function back() {
    window.onload();
}

function firstNameValidation(firstName) {
    if(firstName == "") {
        throw 'Error: Please enter First Name';
        return false;
    }
    const regPatternOne = /^[a-zA-Z]+$/;
    const regPatternTwo = /^[a-zA-Z]{2,15}$/;
    
    if(firstName.match(regPatternOne)) {
        if(firstName.match(regPatternTwo)) {
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
    if(lastName == "") {
        throw 'Error: Please enter Last Name';
        return false;
    }
    const regPatternOne = /^[a-zA-Z]+$/;
    const regPatternTwo = /^[a-zA-Z]{1,15}$/;
    
    if(lastName.match(regPatternOne)) {
        if(lastName.match(regPatternTwo))
            return true;
        throw 'Error: Length should be between 1 to 15';
        return false;
    }
    throw 'Error: Last name should only have alphabets';
    return false;
}

function emailValidation(usrEmail) {
    if(usrEmail == "") {
        throw 'Error: Please Enter Email.';
        return false;
    }
    const regPattern = /^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;

    if(usrEmail.match(regPattern))
        return true;
    throw 'Error: Enter valid email address';
    return false;
}

function confirmPasswordValidation(confirmPassword, password) {
    if(confirmPassword == "") {
        throw 'Error: Please Enter Confirm Password';
        return false;
    }
    if((confirmPassword == password) && confirmPassword)
        return true;
    throw "Error: Password don't match '";
    return false;
}


function passwordValidation(password) {
    if(password == "") {
        throw 'Error: Please Enter Password.'
        return false;
    }
    // Minimum eight characters, at least one letter, one number and one special character:
    const regPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[\w@$!%*#?&]{8,}$/;

    if(password.match(regPattern))
        return true;
    throw 'Error: Password should contain minimum of eight characters, \
    at least one letter, one number and one special character:'
    return false;
}

