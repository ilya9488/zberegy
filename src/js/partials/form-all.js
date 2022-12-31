// textarea letter counter
$('textarea').on('input', function(){
  $(this).next('.textarea-maxlength').text($(this).val().length + '/' + $(this)[0].getAttribute('maxlength'))
  // scrol to bottom (need!)
  $(this).scrollTop($(this)[0].scrollHeight);
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