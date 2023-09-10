// Get the number of coins for the user.
function getCoins($username) {
  // Connect to the database.
  $db = new PDO("mysql:host=localhost;dbname=mydb", "root", "");

  // Get the number of coins for the user.
  $sql = "SELECT coins FROM users WHERE username='$username'";
  $result = $db->query($sql);

  // Return the number of coins.
  if ($result->rowCount() > 0) {
    $row = $result->fetch();
    return $row["coins"];
  } else {
    return 0;
  }
}

// Update the number of coins for the user.
function updateCoins($username, $coins) {
  // Connect to the database.
  $db = new PDO("mysql:host=localhost;dbname=mydb", "root", "");

  // Update the number of coins for the user.
  $sql = "UPDATE users SET coins='$coins' WHERE username='$username'";
  $db->exec($sql);
}
