function validateDOB() {
    var input = document.getElementById("dob");
    var errorSpan = document.getElementById("dobError");
    var dob = new Date(input.value);
    var today = new Date();

    if (!input.value) {
        errorSpan.textContent = "Please select a date.";
        return false;
    }

    // Yaş Hesaplama
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    
    if (age <= 17 || age >= 36) {
        errorSpan.textContent = "Age must be greater than 17 and less than 36. (Your age: " + age + ")";
        return false;
    } else {
        errorSpan.textContent = "";
        return true; 
    }
}


function getAgeValue() {
    var input = document.getElementById("dob");
    if(!input.value) return 0;
    var dob = new Date(input.value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}