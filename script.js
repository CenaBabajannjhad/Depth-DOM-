// Get the reference to the container div
const container = document.getElementById("container");

// Create the initial div
const firstDiv = document.createElement("div");
firstDiv.textContent = "Item 1";
container.appendChild(firstDiv);

// Loop 19 times (since we already have one div)
//2293
for (let i = 2; i <= 3; i++) {   
    // Create a new div
    const newDiv = document.createElement("div");
    // Set its content
    newDiv.textContent = "Item " + i;
    // Append it inside the previous div
    firstDiv.appendChild(newDiv);
    // Update the reference to the first div to be the new div for the next iteration
    firstDiv = newDiv;
}
