$('#change_pass').on('click', function(e){
  $('.pass-recovery')[0].hidden = false
  this.form.hidden = true
  scrollToEl($('.pass-recovery'))

  centeredIconForInput()
})
$('#btn_back_to_us_data').on('click', function(){
  $('.pass-recovery')[0].hidden = true
  $('#user_data_form')[0].hidden = false
  scrollToEl($('#user_data_form'))
})

$('#pass_recovery').on('submit', function (e) {
  e.preventDefault()
  $('#sucsesModalLabel').text('Пароль змінено')
  setTimeout(function () {
    $('#complainModal').modal('hide')
    $('#sucsesModal').modal('show')
    $('.pass-recovery')[0].hidden = true
    $('#user_data_form')[0].hidden = false
    setTimeout(function () {
      $('#sucsesModal').modal('hide')
    }, 5000);
  }, 1000);
})

