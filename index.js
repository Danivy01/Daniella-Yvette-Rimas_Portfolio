// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior.

  var name = document.getElementById("name").value.trim();

  console.log("Name:", name);
  console.log("Name Validation:", validateName(name));

  // var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;


  // if (!name || !validateName(name)) {
  //   alert("Please enter a valid name (at least 2 characters).");
  // } else 
  if (!email || !validateEmail(email)) {
    alert("Please enter a valid email address.");
  } else if (!message) {
    alert("Please enter a message.");
  } else {
    var params = {
      name: name,
      email: email,
      message: message
    }

    emailjs.send("service_x569wne","template_zd8dsv9", params)
      .then(function (res) {
        alert("Sent! " + res.status);
        document.getElementById("form").reset();
      });
  }
});


function validateName(name) {
  var namePattern = /^[A-Za-z]{2,}$/; // At least 2 alphabetical characters
  return namePattern.test(name);
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
