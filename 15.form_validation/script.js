function validatePassword(event) {
    event.preventDefault();
    const password = document.getElementById("password").value;
    const errorDiv = document.getElementById("error-message");

    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < 8) {
        errorDiv.innerText = "Password must be at least 8 characters long.";
        errorDiv.className = "error";
        errorDiv.style.display = "block";
        return false;
    }
    
    if (!hasUpperCase && !hasNumber && !hasSymbol) {
        errorDiv.innerText = "Password must contain an uppercase letter, a number, and a special character.";
        errorDiv.className = "error";
        errorDiv.style.display = "block";
        return false;
    } 
    
    else if (!hasUpperCase) {
        
        if (!hasNumber && !hasSymbol) {
        errorDiv.innerText = "Password must contain a number and a special character.";
        } 
        
        else if (!hasNumber) {
        errorDiv.innerText = "Password must contain a number.";
        } 
        
        else if (!hasSymbol) {
        errorDiv.innerText = "Password must contain a special character.";
        } 
        
        else {
        errorDiv.innerText = "Password must contain an uppercase letter.";
        }
        errorDiv.className = "error";
        errorDiv.style.display = "block";
        return false;
    } 
    
    else {
        if (!hasNumber && !hasSymbol) {
        errorDiv.innerText = "Password must contain a number and a special character.";
        errorDiv.className = "error";
        errorDiv.style.display = "block";
        return false;
        } 
        
        else if (!hasNumber) {
        errorDiv.innerText = "Password must contain a number.";
        errorDiv.className = "error";
        errorDiv.style.display = "block";
        return false;
        } 
        
        else if (!hasSymbol) {
        errorDiv.innerText = "Password must contain a special character.";
        errorDiv.className = "error";
        errorDiv.style.display = "block";
        return false;
        }
    }

    errorDiv.innerText = "Successfully Logged In";
    errorDiv.className = "success";
    errorDiv.style.display = "block";
    return true;
}

function togglePassword() {
    const passwordField = document.getElementById("password");
    const showPasswordCheckbox = document.getElementById("showPassword");

    if (showPasswordCheckbox.checked) {
        passwordField.type = "text";
    } 
    else {
        passwordField.type = "password";
    }
}