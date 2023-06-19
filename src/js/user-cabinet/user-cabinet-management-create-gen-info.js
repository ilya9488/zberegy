/****************************************
  1 - Filling in the data of the memorial.
*******************************************/

let memorialImgPath = $('#form_create_memorial .select-img img').length ? $('#form_create_memorial .select-img img')[0].src : '';

// input file
$('#load_memorial_img').on('change', function () {
  if (this.files && this.files[0]) {
    let readerImg = new FileReader();
    readerImg.onload = function (e) {
      memorialImgPath = e.target.result;
      $('#main_img img')[0].src = memorialImgPath
    }
    readerImg.readAsDataURL(this.files[0]);
    // activate the save button
    // isChangeForm()
  }
})

$('#del_memorial_img').on('click', function (e) {
  // letiable for recording the old value
  memorialImgPath = this.dataset.resetImg;
  // assign the default image
  $('#main_img img')[0].src = memorialImgPath;
  // reset the input
  $('#load_memorial_img')[0].value = ''
  $('#load_memorial_img')[0].setAttribute('value', '')
})

//  - - - - custom template - - - - //
function customTemplate() {
  $('[name="templates"]').each(function () {
    this.checked = false
  })
  $('[name="templates"]:not(#donl_templ)').on('click', function () {
    $('#donl_templ_img')[0].src = 'static/img/fake-img.png';
  })
  $('#donl_templ').on('click', function () {
    customTemplate()
  })
}
// input download template bg
fileImgLoad($('#donl_templ'), $('#donl_templ_img'), customTemplate)
//  - - - - /custom template - - - - //

//  - - - - /datapicker settings - - - - //

//  - - - - monument foto - - - - //
fileImgLoad($('#monument_foto'), $('#monument_foto_img'))

$('#del_monument_foto').on('click', function (e) {
  // assign the default image
  $('#monument_foto_img')[0].src = this.dataset.resetImg;
  // letiable for recording the old value
  memorialImgPath = this.dataset.resetImg;
  // reset the input
  $('#monument_foto')[0].value = ''
  $('#monument_foto')[0].setAttribute('value', '')
  // activate the save button
  // isChangeForm()
})

//  - - - - /monument foto - - - - //

const
  memorialLastlName = $('#memorial_last_name'),
  memorialName = $('#memorial_name'),
  memorialSurname = $('#memorial_surname'),
  memorialBirthDay = $('#birth_day'),
  memorialDeath_day = $('#death_day'),
  memorialCountry = $('#memorial_country'),
  memorialCity = $('#memorial_city')
  ;

$('#form_create_memorial').on('submit', function (e) {
  e.preventDefault()

  // validation inputs
  if (memorialLastlName[0].value == '') {
    memorialLastlName.addClass('error')
    $('#' + memorialLastlName[0].id + ' ~ .error-mess')[0].textContent = 'Додайте інформацію'
  }
  if (memorialLastlName[0].value.length === 1) {
    memorialLastlName.addClass('error')
    $('#' + memorialLastlName[0].id + ' ~ .error-mess')[0].textContent = ' Не меньше двох символiв'
  }
  if (memorialName[0].value == '') {
    memorialName.addClass('error')
    $('#' + memorialName[0].id + ' ~ .error-mess')[0].textContent = "Додайте інформацію"
  }
  if (memorialName[0].value.length === 1) {
    memorialName.addClass('error')
    $('#' + memorialName[0].id + ' ~ .error-mess')[0].textContent = 'Не меньше двох символiв'
  }
  if (memorialSurname[0].value == '') {
    memorialSurname.addClass('error')
    $('#' + memorialSurname[0].id + ' ~ .error-mess')[0].textContent = 'Додайте інформацію'
  }
  if (memorialSurname[0].value.length === 1) {
    memorialSurname.addClass('error')
    $('#' + memorialSurname[0].id + ' ~ .error-mess')[0].textContent = 'Не меньше двох символiв'
  }
  if (memorialBirthDay[0].value == '') {
    memorialBirthDay.addClass('error')
  }
  if (memorialDeath_day[0].value == '') {
    memorialDeath_day.addClass('error')
  }
  if (memorialCountry[0].value == '') {
    memorialCountry.addClass('error')
  }
  if (memorialCity[0].value == '') {
    memorialCity.addClass('error')
  }
  
  if ($('#form_create_memorial .error').length) {
    $('html, body').animate({ scrollTop: $('#form_create_memorial .error').offset().top - $('#header').outerHeight() - 20 }, 300)
     return false; 
  }

  $('#event_birth_day')[0].value = memorialBirthDay[0].value;
  $('#event_death_day')[0].value = memorialBirthDay[0].value;

  let formData = new FormData(e.target);
  let jsonData = {};

  formData.forEach(function (value, key) { jsonData[key] = value; });
  jsonData = JSON.stringify(jsonData);

  console.log(jsonData);

  $.ajax({
    url: "/",
    type: "POST",
    data: jsonData,
    success: function (jsonData) {
      // code
      $('#headCrMem_2').removeAttr('style')
    },
    error: function (error) {
      // code
    }
  });


})