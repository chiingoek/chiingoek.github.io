function login() {
  // Get the username and password from the user.
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Make an API call to the server to check the username and password.
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/login");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    username: username,
    password: password
  }));

  // Wait for the response from the server.
  xhr.onload = function() {
    if (xhr.status === 200) {
      // The login was successful.
      var data = JSON.parse(xhr.responseText);
      document.getElementById("coins").innerHTML = data.coins;
      document.getElementById("shop").innerHTML = data.shop;
    } else {
      // The login was unsuccessful.
      alert("Invalid username or password.");
    }
  };
}
