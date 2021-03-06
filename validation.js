const inputs = document.querySelectorAll('input');
console.log(inputs)

const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{6,20}$/,
  telephone: /^\d{10}$/,
  nickname: /^[a-z\d-]{8,20}$/
}

// validation function
const validate = (field, regex) => {
  if (regex.test(field.value)) {
    field.className = 'valid'
  } else {
    field.className = 'invalid'
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value])    
  })
})

