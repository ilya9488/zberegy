// textarea letter counter
$('textarea').on('input', function(){
  $(this).next('.textarea-maxlength').text($(this).val().length + '/' + $(this)[0].getAttribute('maxlength'))
  // scrol to bottom (need!)
  $(this).scrollTop($(this)[0].scrollHeight);
})

// removeClass error if focus
$('textarea, input').on('focus', function(){
  $(this).removeClass('error')
})

// input that adjusts in height
$('[contenteditable]').on('keyup', function () {
	const thisDataId = $(this)[0].getAttribute('data-input-id')
	$('#' + thisDataId).val($(this).text())
  // console.log($('#' + thisDataId).val())
  $('#' + thisDataId).val() === ''
		? $(this).removeClass('active')
		: $(this).addClass('active')
})

// pass icon or curency icon...
function centeredIconForInput() {
  setTimeout(function () {
    $('.icon-for-input').each(function () {
      $(this).css('top', $(this).next()[0].offsetHeight / 2)
    })
  }, 100);
}
centeredIconForInput()