let old_user_data_filds = '', new_user_data_filds, userImgPath = $('.user-img img').length ? $('.user-img img')[0].src : '';

function oldUserDataFilds() {
  old_user_data_filds = '';
  $('#user_data_form input').each(function () {
    // if (this.type !== 'file') {
      old_user_data_filds += this.value
    // }
  })
}
oldUserDataFilds()

function isChangeForm(){
  new_user_data_filds = ''
  $('#user_data_form input').each(function () {
    new_user_data_filds += this.value
  })
  setTimeout(function () {
    if (old_user_data_filds !== new_user_data_filds) {
      // e.target.form.dataset.change = true
      $('#user_data_form')[0].dataset.change = true
    } else {
      // e.target.form.dataset.change = false
      $('#user_data_form')[0].dataset.change = false
    }
  }, 300);
}

/* for a beautiful display of emale in the cabinet */
function thisValInp() {
  if (this.id === 'user_email'){this.nextElementSibling.textContent = this.value}
}
thisValInp.call($('#user_email')[0])

// input file
$('#load_user_img').on('change', function () {
  if (this.files && this.files[0]) {
    let readerImg = new FileReader();
    readerImg.onload = function (e) {
      userImgPath = e.target.result;
      $('.user-img img')[0].src = userImgPath
    }
    // readerImg.readAsDataURL(e.target.files[0]); // ? how better
    readerImg.readAsDataURL(this.files[0]);
    // activate the save button
    isChangeForm()
  }
})

// reset the image
$('#del_user_img').on('click', function (e) {
  // assign the default image
  $('.user-img img')[0].src = this.dataset.resetImg;
  // variable for recording the old value
  userImgPath = this.dataset.resetImg;
  // reset the input
  $('#load_user_img')[0].value =''
  $('#load_user_img')[0].setAttribute('value', '')
  // activate the save button
  isChangeForm()
})


// all inputs
$('#user_data_form input').on('keyup', function () {
  
  if (this.id === 'user_email') {
    this.nextElementSibling.textContent = this.value
  }
  // activate the save button
  isChangeForm()
})

// submit - save / edit
$('#btn_edit_user_data').on('click', function (e) {
  // e.preventDefault()
  
  e.target.textContent = "Зберегти"

  if (e.target.form.getAttribute('disabled') === 'true') {
    e.target.form.setAttribute('disabled', 'false')
  } else {
    // remember the old image value
    $('#load_user_img')[0].dataset.oldValue = userImgPath
    console.log(userImgPath);
    e.target.form.setAttribute('disabled', 'true')
    e.target.form.dataset.change = false
    e.target.textContent = "Редагувати"
    oldUserDataFilds()
    // old values for fields
    $('#user_data_form input').each(function () {
      // if (this.type !== 'file') {
        this.setAttribute('value', this.value)
      // }
    })
  }

  $(e.target.form).on('submit', function (e) {
    e.preventDefault()

    let valid, inputId

    $(this).find('input').not('[type=submit]').each(function () {

      inputId = $(this).attr('id')

      let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

      // Name
      if (inputId === 'user_name') {
        if ($(this).val() !== '') {
          $(this).removeClass('error')
        } else {
          $(this).addClass('error')
        }
      }

      // Email
      if (inputId === 'user_email') {
        if (!emailReg.test($(this).val()) || $(this).val() == '') {
          $(this).addClass('error')
        } else {
          $(this).removeClass('error')
        }
      }
    })

    // check error
    setTimeout(() => {

      if ($('input.error').length) {
        valid = false
      } else {
        valid = true
      }

      if (valid) {

        setTimeout(() => {
          // location.href = 'mail_confirmation.html'
        }, 1000);
  
      }
      
    }, 100);
    
  })
})

// btn form.reset
$('#btn_reset_user_data_form').on('click', function (e) {
  e.target.form.reset()
  $('.user-img img')[0].src = $('#load_user_img')[0].dataset.oldValue
  thisValInp.call($('#user_email')[0])
  e.target.form.dataset.change = false
  e.target.form.setAttribute('disabled', 'true')
  $('#btn_edit_user_data')[0].textContent = "Редагувати"
})




// if ($('#user_data_form').length !== 0) {
  
//   const validFilds = {
//           // user_last_name: false,
//           user_name: false,
//           // user_surname: false,
//           // user_email: false,
//         };

//   $('#user_data_form').on('submit', function (e) {
//     e.preventDefault()

    
// }