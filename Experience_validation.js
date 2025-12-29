function validateExperience() {
    var input = document.getElementById("experience");
    var errorSpan = document.getElementById("experienceError");
    var value = parseFloat(input.value);
    
    var currentAge = getAgeValue(); 

    if (input.value === "" || value < 0) {
        errorSpan.textContent = "Experience cannot be negative.";
        return false;
    }
    
    if (value > (currentAge - 10)) {
        errorSpan.textContent = "Experience cannot be greater than Age - 10.";
        return false;
    }

    errorSpan.textContent = "";
    return true;
}