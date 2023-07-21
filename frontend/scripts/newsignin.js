const signUpButton = document.getElementById("signup");
const signInButton = document.getElementById("signin");
const container = document.getElementById("container");
const display = document.getElementById("display");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
// ..................................................Sign In and Sign Up.......................................................

// let users = JSON.parse(localStorage.getItem("usersData")) || [];
// const signUp = document.getElementById("signUp")
// console.log(signUp)
// const signIn = document.getElementById("signIn")

let signIn = document.querySelector(".sign-in-container form");
let signUp = document.querySelector(".sign-up-container form");

let users = JSON.parse(localStorage.getItem("usersData")) || [];

signUp.addEventListener("submit", (e) => {
  e.preventDefault();
  signup();
  // alert("SignupSuccess")
  Swal.fire({
    position: "top",
    icon: "success",
    title: "Signup Successfully",
    showConfirmButton: false,
    timer: 1500,
  });
  setTimeout(() => {
    window.location.href = "newsignin.html";
  }, 1000);
});
function signup() {
  let userObj = {
    name: signUp.name.value,
    lastname: signUp.lastname.value,
    email: signUp.email.value,
    password: signUp.password.value,
    mobile: signUp.mobile.value
  };
  fetch(`https://travelocity-backend.onrender.com/user/register`, {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

signIn.addEventListener("submit", (e) => {
  e.preventDefault();
  CheckEmployee(signIn.email1.value, signIn.password1.value);
});


let myform = document.getElementById("signIn")
myform.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email1").value
  let password = document.getElementById("password1").value

  let obj = {
    email: email,
    password: password

  }
  console.log(obj)

  fetch("https://travelocity-backend.onrender.com/user/login", {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.token);
      setTimeout(() => {
        window.location.href = "./index.html";

      }, 5000);

    })
    .catch((err) => {
      console.log(err);
    })

})
function check(data, email, pass) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].email == email && data[i].password == pass) {
      localStorage.setItem("login", data[i].name);
      return true;
    }
  }
}