// const scriptURL = https://script.google.com/macros/s/AKfycbxkgwot

// ' XC7T01/exec

// const form = document.forms['google-sheet']

// form.addEventListener('submit', e => {

// e.preventDefault()

// fetch (scriptURL, { method: 'POST', body: new FormData (form)})
// then (response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
// .catch(error => console.error('Error!', error.message))

// })

function generateCaptcha() {
  return Math.floor(100000 + Math.random() * 900000);
}


function displayCaptcha() {
  var captcha = generateCaptcha();
  document.getElementById('captchaDisplay').innerText = captcha;
}


document.getElementById('refreshCaptcha').addEventListener('click', function() {
  displayCaptcha();
});

displayCaptcha();


document.getElementById('captchaForm').addEventListener('submit', function(event) {
  var enteredCaptcha = document.getElementById('captcha').value;
  var displayedCaptcha = document.getElementById('captchaDisplay').innerText;
  
  if (enteredCaptcha !== displayedCaptcha) {
      alert('Captcha incorrect!');
      event.preventDefault();
  }
});