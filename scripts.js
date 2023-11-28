/*Vertical Navigation Bar*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec, index) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // Check if it's the last section and we are near the bottom of the page
    if (index === sections.length - 1) {
      let pageBottom = offset + height;
      if (top + window.innerHeight >= pageBottom - height / 2) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("active");
      }
    } else {
      // For other sections
      if (top + window.innerHeight / 2 >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("active");
      }
    }
  });
};

/*Contact Form To Google Sheets*/
const scriptURL =
  "https://script.google.com/macros/s/AKfycbw66vy2e7KQi8OzvCajRAshffD3fMG9n8wnSENF9qZrzS8uDAnWPpxbkNOr6mRR3nugQw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you for your message!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
