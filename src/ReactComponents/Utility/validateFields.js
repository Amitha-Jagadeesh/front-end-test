import { emailIsValid, passwordIsValid} from './validation';

const ValidateFields = (email,password) => {
    const emailValidationResult = validateEmail(email);
    const passwordValidationResult = validatePassword(password);
    return({emailValidationResult,passwordValidationResult});
};

const validateEmail = email => {
    const emailValid = emailIsValid(email);
    if(emailValid) {
        return true;
    } else {
        return false;
    }

};

const validatePassword = password => {
    const passwordValid = passwordIsValid(password);
    if(passwordValid) {
        return true;
    } else {
        return false;
    }

};

export default ValidateFields;
