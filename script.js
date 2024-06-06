// Get the reference to the container div
var container = document.getElementById("container");

// Create the initial div
var firstDiv = document.createElement("div");
firstDiv.textContent = "Item 1";
container.appendChild(firstDiv);

// Loop 19 times (since we already have one div)
//2293
for (var i = 2; i <= 3; i++) {   
    // Create a new div
    var newDiv = document.createElement("div");
    // Set its content
    newDiv.textContent = "Item " + i;
    // Append it inside the previous div
    firstDiv.appendChild(newDiv);
    // Update the reference to the first div to be the new div for the next iteration
    firstDiv = newDiv;
}