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
// IF LOGIN
if (localStorage.login === 'true') {
  $('#page').addClass('IS_LOG_IN')
  $('a').each(function () {
    if (this.href.includes('login.html') && !$(this).hasClass('btn-user-login'))
    // this.href = 'user-cabinet-data.html';
      this.href = 'user-cabinet-management.html';
  })
}


// input file
function fileImgLoad(input, viewImg, callFunc) {
  let memorialImgPath = '';
  if (input[0] !== undefined) {

    input[0].addEventListener('change', function () {
      if (this.files && this.files[0]) {

        let maxW = 1000, maxH = 1000, minW = 150, minH = 150, thisImgW = 0, thisImgH = 0;
        let readerImg = new FileReader();

        let url = window.URL || window.webkitURL;
        let img = new Image();
        img.onload = function () {
          thisImgW = this.width;
          thisImgH = this.height;
        }
        img.src = url.createObjectURL(this.files[0]);

        if(thisImgW < minW || thisImgH < minH){
          console.log(1231321);
          input.addClass('error')
          // $('#' + input.id + ' ~ .error-mess')[0].textContent = 'Вкажіть email'
          return false;
        }else if(thisImgW > maxW || thisImgH > maxH){
          console.log(1231321);
          return false;
        }

        readerImg.onload = function (e) {
          memorialImgPath = e.target.result;
          viewImg[0].src = memorialImgPath
        }
        readerImg.readAsDataURL(this.files[0]);
        // activate the save button
        if (callFunc) { callFunc()}
      }
    })
  }
}


// all input autocomplete off
$('input:not([type="checkbox"], [type="radio"], [type="submit"])').each(function () { this.setAttribute('autocomplete', 'off') })

// textarea letter counter
function textareaLetterCounter() {
  $('textarea[maxlength]').each(function () {
    if ($(this).next('.textarea-maxlength').length) {
      $(this).next('.textarea-maxlength').text($(this).val().length + '/' + $(this)[0].getAttribute('maxlength'))
    }
  })
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
// centeredIconForInput()

$('.auto-h').on('keyup', function () {
  // auto height
  this.style.height = "1px";
  this.style.height = this.scrollHeight + "px"
});