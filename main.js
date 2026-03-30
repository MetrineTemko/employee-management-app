function viewDetails() {
    alert("Displaying full employee details...");
}

function editContact() {
    alert("Edit feature coming soon!");
}

function deleteContact() {
    let confirmDelete = confirm("Are you sure you want to delete?");
    
    if (confirmDelete) {
        alert("Contact deleted!");
    } else {
        alert("Deletion cancelled.");
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name === "") {
        alert("Enter a name");
        return false;
    }

    if (email === "") {
        alert("Enter an email");
        return false;
    }

    if (phone === "") {
        alert("Enter a phone number");
        return false;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    document.getElementById("output").innerHTML = "Saved: " + name + ", " + email + ", " + phone;

    return false;
}

