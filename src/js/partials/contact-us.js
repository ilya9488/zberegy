$('#contact_us_form').on('submit', function (e) {
  e.preventDefault()

  let valid, inputId

  $(this).find('input, option, textarea').not('[type=submit]').each(function () {

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

    // Email
    if (inputId === 'email') {
      if (!emailReg.test($(this).val()) || $(this).val() == '') {
        $(this).addClass('error')
      } else {
        $(this).removeClass('error')
      }
    }

    // Message subject
    if (inputId === 'message_subject') {
      if ($(this).val() === 'none' || $(this).val() === '') {
        this.parentElement.classList.add('error')
      } else {
        this.parentElement.classList.remove('error')
      }
    }

    // Text
    if (inputId === 'text') {
      if ($(this).val() == '') {
        $(this).addClass('error')
      } else {
        $(this).removeClass('error')
      }
    }

  })

  // check error
  if ($(this).find('.error').length) {
    valid = false
  } else {
    valid = true
  }

  if (valid) {
    $('#sucsesModalLabel').text("Ваше повідомлення успішно надіслано. Ми спробуємо зв'язатися з Вами якнайшвидше!")
    setTimeout(function () {
      $('#contact_us_form').find('input, option, textarea').not('[type=submit]').each(function () {
        $(this).val('').text('')
      })
      $('[data-dropdown-id="message_subject"]').removeClass('in-active')
      $('[data-dropdown-id="message_subject"] .select-sort').text('Оберіть певну тему')

      $('#sendMessageModal').modal('hide')
      $('#sucsesModal').modal('show')
      setTimeout(function () {
        $('#sucsesModal').modal('hide')
      }, 5000);
    }, 1000);
  }
})