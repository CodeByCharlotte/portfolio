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
