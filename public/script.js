document.getElementById("userForm").onsubmit = async function(event) {
    event.preventDefault();  // Prevent default form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let gender = document.getElementById("gender").value;
    let terms = document.getElementById("terms").checked;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name.trim() === "" || !email.match(emailPattern) || password.length < 6 || gender === "" || !terms) {
        alert("Please fill all fields correctly.");
        return;
    }

    // Send data to the server
    let response = await fetch("/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, gender }),
    });

    let result = await response.json();
    document.getElementById("message").textContent = result.message;
};
