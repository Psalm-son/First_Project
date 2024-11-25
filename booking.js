document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const time = document.getElementById("time").value;
    const availableSessions = {
        "9:00 AM - 11:00 AM": true,
        "11:30 AM - 1:30 PM": true,
        "2:00 PM - 5:00 PM": false // Example: session marked as full
    };

    if (availableSessions[time]) {
        alert(`Congratulations, you have secured a session from ${time}!`);
    } else {
        alert("Regretful, the session is already full at the moment.");
    }
});
