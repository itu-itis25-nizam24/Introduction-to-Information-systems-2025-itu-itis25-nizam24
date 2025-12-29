function validateTCKN() {
    var input = document.getElementById("tckn");
    var errorSpan = document.getElementById("tcknError");
    var value = input.value;
    if (value.length !== 11 || isNaN(value)) {
        errorSpan.textContent = "TCKN must be 11 digits.";
        return false;
    }
    errorSpan.textContent = "";
    return true;
}