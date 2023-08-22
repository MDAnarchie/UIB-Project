// Get references to the buttons
const scrollToTopButton = document.getElementById("scrollToTop");
const scrollToBottomButton = document.getElementById("scrollToBottom");

// Add click event listeners
scrollToTopButton.addEventListener("click", scrollToTop);
scrollToBottomButton.addEventListener("click", scrollToBottom);

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Function to scroll to the bottom of the page
function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}
