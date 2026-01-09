const positiveForm = {
  firstName: 'Felicia',
  lastName: 'Kalalo',
  gender: 'Female',
  mobile: '083141258833'
}

const negativeFormEmptyFirstName = {
  firstName: '',
  lastName: 'Kalalo',
  gender: 'Female',
  mobile: '083141258833'
}

const negativeFormInvalidMobile = {
  firstName: 'Felicia',
  lastName: 'Kalalo',
  gender: 'Female',
  mobile: 'abc123'
}

const negativeFormEmptyGender = {
  firstName: 'Felicia',
  lastName: 'Kalalo',
  gender: null,
  mobile: '083141258833'
}

module.exports = { positiveForm, negativeFormEmptyFirstName, negativeFormInvalidMobile, negativeFormEmptyGender }
