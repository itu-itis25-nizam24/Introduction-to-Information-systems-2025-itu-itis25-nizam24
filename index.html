<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BBF101E Assignment 11</title>
</head>
<body>

<h2>FORM</h2>

<form onsubmit="formSubmitted(event)">
    Name & Surname:
    <input type="text" id="name"><br><br>

    Student ID:
    <input type="text" id="studentId"><br><br>

    Age:
    <input type="number" id="age"><br><br>

    Birthdate:
    <input type="date" id="birthdate"><br><br>

    <button type="submit">Submit</button>
</form>

<script>
function checkName() {
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        return 1;
    }
    return 0;
}

function checkStudentId() {
    const id = document.getElementById("studentId").value;

    if (id.length !== 9) {
        alert("Student ID must be 9 digits!");
        return 1;
    }

    if (isNaN(id)) {
        alert("Student ID must be only numbers!");
        return 1;
    }

    return 0;
}

function checkAge() {
    const age = parseInt(document.getElementById("age").value);
    const birthdate = document.getElementById("birthdate").value;

    if (birthdate === "") return 0;

    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;

    if (age !== calculatedAge) {
        return 1;
    }
    return 0;
}

function formSubmitted(event) {
    event.preventDefault();

    let nameCheck = checkName();
    if (nameCheck === 1) {
        alert("Name must be filled!");
        return;
    }

    if (checkStudentId() === 1) {
        return;
    }

    let ageCheck = checkAge();
    if (ageCheck === 1) {
        alert("Age and birthdate do not match!");
        return;
    }

    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" });
    const year = today.getFullYear();

    alert(`Form submitted successfully! Date: ${day} ${month} ${year}`);
}
</script>

</body>
</html>
