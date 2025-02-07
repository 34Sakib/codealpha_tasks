function calculateAge() {
    let dob = document.getElementById('dob').value;
    if (!dob) {
        document.getElementById('result').innerText = "Please enter a valid date of birth.";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('result').innerText = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
