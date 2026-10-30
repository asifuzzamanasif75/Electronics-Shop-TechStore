var pendingOrder = "";

function showWelcome() {
    window.location.href = "products.html#laptop";
}

function buyNow(productName, price) {
    pendingOrder = productName;
    openCheckout(productName + " — " + price);
}

function openCheckout(summary) {
    document.getElementById("checkoutProduct").textContent = "Order: " + summary;
    document.getElementById("orderResult").textContent = "";
    document.getElementById("checkoutForm").reset();
    document.getElementById("checkoutDialog").showModal();
}

function closeCheckout() {
    document.getElementById("checkoutDialog").close();
}

function submitOrder(event) {
    event.preventDefault();
    var name = document.getElementById("customerName").value.trim();
    var phone = document.getElementById("customerPhone").value.trim();
    var email = document.getElementById("customerEmail").value.trim();
    if (name == "" || phone == "" || email == "" || pendingOrder == "") {
        return;
    }
    var message = "Thank you, " + name + "! Your order request for " + pendingOrder + " (1)";
    message = message + " has been recorded in this demo.";
    document.getElementById("orderResult").textContent = message;
    pendingOrder = "";
}

function sendMessage() {
    var customerName = document.getElementById("nameBox").value;
    var customerEmail = document.getElementById("emailBox").value;
    var customerMessage = document.getElementById("messageBox").value;
    if (customerName == "" || customerEmail == "" || customerMessage == "") {
        document.getElementById("formResult").innerHTML = "Please fill in all fields.";
    }
    else {
        document.getElementById("formResult").innerHTML = "Thank you, " + customerName + "! Your message is ready.";
        alert("Thank you for contacting TechStore, " + customerName + "!");
    }
}
