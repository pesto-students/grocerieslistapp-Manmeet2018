

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
                    password=document.getElementById("password").value;
                    result = passwordValidation(password);
                    try {
                        confirmPassword=document.getElementById("confirmPassword").value;
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
        window.location.replace('../../index.html');
    }
}