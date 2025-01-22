// Declare references to the input, button, and list elements
const input = document.querySelector("#favchap"); // Selects the input field
const button = document.querySelector("button"); // Selects the button element
const list = document.querySelector("#list"); // Selects the list (ul) element

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Check if the input is not empty
  if (input.value !== "") {
    // Create a new list item (li) element
    const li = document.createElement("li");

    // Create a delete button
    const deleteButton = document.createElement("button");

    // Populate the list item with the input value
    li.textContent = input.value;

    // Populate the delete button with a ❌
    deleteButton.textContent = "❌";

    // Append the delete button to the list item
    li.append(deleteButton);

    // Append the list item to the unordered list
    list.append(li);

    // Add an event listener to the delete button
    deleteButton.addEventListener("click", () => {
      list.removeChild(li); // Remove the list item when delete is clicked
      input.focus(); // Return focus to the input field
    });

    // Clear the input field and refocus for the next entry
    input.value = ""; // Reset the input field
    input.focus(); // Refocus on the input field
  } else {
    // Alert the user to enter a book and chapter if the field is blank
    alert("Please enter a book and chapter!");
    input.focus(); // Refocus on the input field
  }
});
