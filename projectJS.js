function displayMealPlan() {
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const goal = document.getElementById("userGoal").value;

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    let newPage = "<html><head><title>Your Weekly Meal Plan</title>";
    newPage += "<style>body { font-family: monospace; white-space: pre; }</style></head><body>";
    newPage += `<h1>Weekly Meal Plan for ${name}</h1>`;
    newPage += `<p>Email: ${email}</p>`;
    newPage += `<p>Weekly Goal: ${goal}</p><hr>`;

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const meals = ["Breakfast", "Snack1", "Lunch", "Snack2", "Dinner"];

    for (let day of days) {
        newPage += `\n${day}:\n`;
        for (let meal of meals) {
            const mealValue = document.getElementById(`${day}_${meal}`).value || "Not entered";
            newPage += `  ${meal}: ${mealValue}\n`;
        }
        newPage += `\n`;
    }

    newPage += "</body></html>";

    const mealWindow = window.open('', '_blank');
    mealWindow.document.write(newPage);
    mealWindow.document.close();
}
