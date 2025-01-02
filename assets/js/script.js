'use strict';

// Utility function to toggle classes
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

// Sidebar toggle for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar); // Toggle the sidebar visibility
  document.body.classList.toggle("no-scroll"); // Prevent body scrolling
});

// Custom select functionality for project filtering
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

selectItems.forEach(item => {
  item.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Filter items based on the selected category
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    const itemCategory = item.dataset.category;
    if (selectedValue === "all" || selectedValue === itemCategory) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Filter button click functionality (large screen)
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Page navigation (this might also apply to the Projects section)
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    pages.forEach(page => {
      if (link.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        link.classList.remove("active");
      }
    });
  });
});


// Dark/Light Mode Toggle Functionality

// Select the button and the body
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check if the user has a saved preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggleBtn.innerHTML = '🌞';  // Change button icon to sun for dark mode
} else {
  body.classList.remove('dark-mode');
  themeToggleBtn.innerHTML = '🌙';  // Change button icon to moon for light mode
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', function () {
  body.classList.toggle('dark-mode');  // Toggle dark mode class
  // Update the button icon based on the current mode
  if (body.classList.contains('dark-mode')) {
    themeToggleBtn.innerHTML = '🌞';  // Sun for dark mode
    localStorage.setItem('theme', 'dark');  // Save theme preference
  } else {
    themeToggleBtn.innerHTML = '🌙';  // Moon for light mode
    localStorage.setItem('theme', 'light');  // Save theme preference
  }
});
