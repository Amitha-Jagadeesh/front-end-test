const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passWordPattern = /^(?=.*\d)(?=.*[A-Z]).{8,128}$/

export const emailIsValid = email => {
    if(emailPattern.test(email)){
        let index = email.lastIndexOf('.');
        if(((email.substr(index).length - 1) <= 6) && ((email.substring(
            email.indexOf("@") + 1, 
            email.lastIndexOf(".")
        ).length) <=128 )) 
        {
            return true
        } else {
            return false
        }
    }else {
        return false
    }
}

export const passwordIsValid = password => passWordPattern.test(password);

export default {
    is: {
        valid: {
            email: emailIsValid,
            password: passwordIsValid
        }
    }
};

