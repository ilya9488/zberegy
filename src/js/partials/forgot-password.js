$('#forgot_password_form').on('submit', function (e) {
  e.preventDefault()

  let valid, inputId

  $(this).find('input').not('[type=submit]').each(function () {

    inputId = $(this).attr('id')

    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

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

    setTimeout(() => {
      $('#forgot_password_form').slideUp()
    }, 1000);

    setTimeout(() => {
      $('.forgot-password-message').slideDown()
    }, 1000);
    
  }
})