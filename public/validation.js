//signup 




const password = document.getElementById("pass1");
const nameInput = document.getElementById("name");
const password2 = document.getElementById('pass2')
const email = document.getElementById("email")
const mobile = document.getElementById("mobile")
const errorMessage = document.querySelector('#errorMessage')
const errorMessage1 = document.querySelector('#errorMessage1')
const errorMessage2 = document.querySelector('#errorMessage2')
const errorMessage3 = document.querySelector('#errorMessage3')
const errorMessage4 = document.querySelector('#errorMessage4')
const errorMessage5 = document.querySelector('#errorMessage5')
let form = document.querySelector('form')
let testElement = document.querySelector(".testElement")

// Regular expression for basic email validation
let regexName = /^[a-zA-Z\s]+$/;
// let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let regex = /^\S+@\S+\.\S+$/; //email--

const nameFunction = () => {
  if (nameInput.value.length < 6) {
    errorMessage5.textContent = 'Atleast six Letter'
    return false
  } else if (!regexName.test(nameInput.value)) {
    errorMessage5.textContent = 'Please enter a valid name'
    return false
  } else {
    errorMessage5.textContent = ''
    return true

  }
}

const passwordFunction = () => {
  if (password.value == "") {
    errorMessage1.textContent = "please enter your password"
    return false
  } else if (!regexPassword.test(password.value)) {
    errorMessage1.textContent = "Password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one digit, and one special character (@, $, !, %, *, ?, or &)"
    return false
  } else if (password.value != password2.value) {
    errorMessage1.textContent = "Password did not match"
    return false
  } else {
    errorMessage1.textContent = ''
    return true
  }
}

const password2Fuction = () => {
  if (password.value == "") {
    errorMessage2.textContent = "please enter your password"
    return false
  } else if (!regexPassword.test(password2.value)) {
    errorMessage2.textContent = "Password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one digit, and one special character (@, $, !, %, *, ?, or &)"
    return false
  } else if (password.value != password2.value) {
    errorMessage2.textContent = "Password did not match"
    return false
  } else {
    errorMessage2.textContent = ''
    return true
  }
}

const emailFunction = () => {
  if (email.value == "") {
    errorMessage4.textContent = "Please enter your email address"
    return false
  } else {
    if (regex.test(email.value) === false) {
      errorMessage4.textContent = "Please enter a valid email address"
      return false
    } else {
      errorMessage4.textContent = ""
      return true
    }
  }
}

const phoneFunction = () => {
  if (mobile.value == "") {
    errorMessage3.textContent = "Please enter your mobile number"
    return false
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(mobile.value) === false) {
      errorMessage3.textContent = "Please enter a valid 10 digit mobile number"
      return false
    } else {
      errorMessage3.textContent = ""
      return true
    }
  }
}
