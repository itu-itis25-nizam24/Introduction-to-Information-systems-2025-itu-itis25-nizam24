function validateSalary() {
    var input = document.getElementById("salary");
    var errorSpan = document.getElementById("salaryError");
    var value = parseFloat(input.value);

    if (input.value === "" || value < 0) {
        errorSpan.textContent = "Salary cannot be negative or empty.";
        return false;
    } else {
        errorSpan.textContent = "";
        return true;
    }
}