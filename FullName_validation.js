function validateFullName() {
    var input = document.getElementById("fullname");
    var errorSpan = document.getElementById("fullnameError");
    var value = input.value.trim();
    
    // Rakam kontrolü için Regex
    var hasDigit = /\d/.test(value);

    if (value.length < 6 || hasDigit) {
        errorSpan.textContent = "Full name must be at least 6 chars and contain no digits.";
        return false;
    } else {
        errorSpan.textContent = "";
        return true;
    }
}