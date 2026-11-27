// Task no 1
const form = document.getElementById("form");
let btn = document.getElementById("btn");
let input = document.getElementById("input");
btn.addEventListener("click", function (event) {
  event.preventDefault();
  //   alert("Form submitted successfully");
});

// Task no 2
// btn.addEventListener("click", function () {
//   //   if (input.value === "") {
//   //     alert("Name is required");
//   //   } else {
//   //     alert("Name enter Successful");
//   //   }
// });

// Task no 3
const email = document.getElementById("email");
btn.addEventListener("click", function () {
  // if (!email.value.includes("@")) {
  //   alert("invalid Email");
  // } else {
  //   alert("Correct Email");
  // }
});

// Task no 4
let password = document.getElementById("password");
// password.style.backgroundColor = "red";
btn.addEventListener("click", function () {
  if (password.value.length < 6) {
    // alert("Password Length must be atleast 6");
  }
});

// Task no 5
const para = document.getElementById("para");
btn.addEventListener("click", function () {
  if (!email.value.includes("@")) {
    para.textContent = "Invalid Email";
  }
});
email.addEventListener("input", function () {
  if (email.value.includes("@")) {
    para.textContent = "";
    alert("Email Submit Succesfully");
  }
});

// Task no 6
const resetbtn = document.getElementById("reset");
resetbtn.addEventListener("click", function () {
  para.textContent = "";
});
