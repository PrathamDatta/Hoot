document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach((item) => {
      const button = item.querySelector(".accordion-button");
      const arrowIcon = button.querySelector(".arrow-icon");
  
      button.addEventListener("click", () => {
        // Toggle active class for the clicked item
        const isActive = item.classList.contains("active");
  
        // Close all accordion items
        accordionItems.forEach((i) => i.classList.remove("active"));
  
        // If the clicked item was not active, activate it
        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
  });
  