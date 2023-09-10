function shop() {
  // Get the selected item from the user.
  var itemId = document.getElementById("itemId").value;

  // Make an API call to the server to purchase the item.
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/purchase");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    itemId: itemId
  }));

  // Wait for the response from the server.
  xhr.onload = function() {
    if (xhr.status === 200) {
      // The purchase was successful.
      var data = JSON.parse(xhr.responseText);
      document.getElementById("coins").innerHTML = data.coins;
      document.getElementById("shop").innerHTML = data.shop;
    } else {
      // The purchase was unsuccessful.
      alert("You don't have enough coins.");
    }
  };
}
