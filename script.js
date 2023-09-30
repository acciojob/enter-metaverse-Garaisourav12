//your JS code here. If required.
// Get references to the elements
const statusElement = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

// Add a click event listener to the button
enterBtn.addEventListener("click", function() {
    // Change the text of the <p> tag to "Entered Metaverse"
    statusElement.innerHTML = "<h1>Entered Metaverse</h1>";
});