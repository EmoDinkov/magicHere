function passwordValidator(pass) {
    

    let isValidLength = checkPassLength(pass);
    let isValidLettersOrDigits = checkLettersOrDigits(pass);
    let isValidTwoDigits = checkForTwoDigits(pass);

    if(isValidLength && isValidLettersOrDigits && isValidTwoDigits) {
        console.log("Password is valid");
    }


    function checkPassLength (brm) {
        if (brm.length >= 6 && brm.length <= 10) {
            return true
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false
            
        }
    }

    function checkLettersOrDigits(pass) {
        for (let curChar of pass) {
         let code = curChar.charCodeAt(0)
        
        if (
            !((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122))
            ) {
                console.log("Password must consist only of letters and digits");
           return false 
        }
    }
    return true;
}

    function checkForTwoDigits(pass) {
        let counter = 0;

        for (let code of pass) {
            currantCode = code.charCodeAt(0);

            if (currantCode >= 48 && currantCode <= 57) {
                counter++;
            }
        }

        if (counter >= 2) {
        return true
        } else {
            console.log("Password must have at least 2 digits");
            return false
        }
    }



}
passwordValidator ('MyPass123')