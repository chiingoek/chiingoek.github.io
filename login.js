function login() {
  // Get the username and password from the user.
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Read the logins from the file.
  var logins = require("fs").readFileSync("logins.txt").toString().split("\n");

  // Check if the username and password entered by the user match a login in the file.
  for (var i = 0; i < logins.length; i++) {
    var login = logins[i].split(":");
    if (username == login[0] && password == login[1]) {
      return true;
    }
  }

  // The username and password do not match any login in the file.
  return false;
}
