/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Array of words to cycle through
// Array of words to cycle through
document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded"); // Debugging line to check if script is loading

    // Array of words to cycle through
    const words = ["your", "my", "our", "her", "his","their"];

    // Index to keep track of the current word
    let currentIndex = 0;

    // Function to update the word
    function updateWord() {
        console.log("Updating word"); // Debugging line to check if function is called
        // Get the word container
        const wordContainer = document.getElementById("m");

        // Ensure the word container is found
        if (wordContainer) {
            // Set the text of the word container to the current word
            wordContainer.textContent = words[currentIndex];

            // Update the index to the next word
            currentIndex = (currentIndex + 1) % words.length;
        } else {
            console.error("Element with ID 'm' not found");
        }
    }

    // Initial call to display the first word
    updateWord();

    // Set an interval to cycle through the words every 2 seconds
    setInterval(updateWord, 1000);
});
function openForm() {
    var contactSection = document.getElementById("contact-section");
    if (contactSection.style.display === "none" || contactSection.style.display === "") {
        contactSection.style.display = "block";
    } else {
        contactSection.style.display = "none";
    }
}
