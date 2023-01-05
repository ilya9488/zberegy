$('#signup_form').on('submit', function (e) {
  e.preventDefault()

  let valid, inputId

  $(this).find('input').not('[type=submit]').each(function () {

    inputId = $(this).attr('id')

    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    // Name
    if (inputId === 'name') {
      if ($(this).val() !== '') {
        $(this).removeClass('error')
      } else {
        $(this).addClass('error')
      }
    }

    // Surname
    if (inputId === 'surname') {
      if ($(this).val() !== '') {
        $(this).removeClass('error')
      } else {
        $(this).addClass('error')
      }
    }
    
    // Password
    if (inputId === 'pass') {
      if ($(this).val() !== '' && $(this).val().length > 3) {
        $(this).removeClass('error')
      } else {
        $(this).addClass('error')
      }
    }

    // Email
    if (inputId === 'email') {
      if (!emailReg.test($(this).val()) || $(this).val() == '') {
        $(this).addClass('error')
      } else {
        $(this).removeClass('error')
      }
    }
  })

  // check error
  if ($('input.error').length) {
    valid = false
  } else {
    valid = true
  }
  if (valid) { 
    localStorage.login = true
    localStorage.name = $(this).find('#name')[0].value
    localStorage.surname = $(this).find('#surname')[0].value
    localStorage.email = $(this).find('#email')[0].value
    localStorage.pass = $(this).find('#pass')[0].value

    setTimeout(() => {
      location.href = 'mail_confirmation.html'
    }, 1000);
    
  }
})