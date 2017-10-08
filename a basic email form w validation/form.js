var pilotForm = document.querySelector('#pilotForm')
var submitBtn = document.querySelector('#postme')

function validate() {
  var formIsValid = pilotForm.checkValidity()

  if (formIsValid) {
    console.log('form valid')
    submitBtn.disabled = false
  } else {
    console.log('form invalid')
    submitBtn.disabled = true
  }
}

pilotForm.addEventListener('change', function() {
  validate()
})
