// pass show/hide function
$('.pass-show').on('click', function () {
  let thisInput = $(this)[0].parentNode.querySelector('input'),
    thisSlashEye = $(this).find('.eye-slash')[0]

  thisInput.type === 'password'
    ? (thisInput.type = 'text' && thisSlashEye.setAttribute('hidden', ''))
    : (thisInput.type = 'password') && thisSlashEye.removeAttribute('hidden')
  // thisSlashEye.classList.toggle('hidden')
})

// LOGOUT
$('#btn_logout').on('click', function (e) {
  e.preventDefault();
  location.href = 'login.html';
  localStorage.login = false;
})
if (localStorage.login === 'true') {
  $('#page').addClass('IS_LOG_IN')
  $('a').each(function () {
    if (this.href.includes('login.html') && !$(this).hasClass('btn-user-login'))
      this.href = 'user-cabinet-data.html';
  })
}

// let memorialImgPath = '';
// input file
function fileImgLoad(input, viewImg, callFunc) {
  // memorialImgPath = viewImg.length ? viewImg[0].src : '';
  input.on('change', function () {
    if (this.files && this.files[0]) {
      let readerImg = new FileReader();
      readerImg.onload = function (e) {
        memorialImgPath = e.target.result;
        viewImg[0].src = memorialImgPath
      }
      // readerImg.readAsDataURL(e.target.files[0]); // ? how better
      readerImg.readAsDataURL(this.files[0]);
      // activate the save button
      if (callFunc) { callFunc()}
    }
  })
}


// all input autocomplete off
$('input:not([type="checkbox"], [type="radio"], [type="submit"])').each(function () { this.setAttribute('autocomplete', 'off') })

// textarea letter counter
function textareaLetterCounter(){
  $('textarea[maxlength]').on('input', function(){
    $(this).next('.textarea-maxlength').text($(this).val().length + '/' + $(this)[0].getAttribute('maxlength'))
    // scrol to bottom (need!)
    $(this).scrollTop($(this)[0].scrollHeight);
  })
}
textareaLetterCounter()

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
// function centeredIconForInput() {
//   setTimeout(function () {
//     $('.icon-for-input').each(function () {
//       $(this).css('top', $(this).next()[0].offsetHeight / 2)
//     })
//   }, 100);
// }
// centeredIconForInput()

// Only-Letter & UK lang (!) (class .only-letter_uk to input)
$('.only-letter_uk').on('input', function () {
  if (/[a-zA-ZЪъЫыЭэЁё]/i.test(this.value)) {
    alert('Можна писати тільки українською')
  }
  this.value = this.value.replace(/[^а-яА-ЯєЄЇїІіҐґ']/g, "");
  this.value = this.value.replace(/[ЪъЫыЭэЁё]/g, "");
});