$('#comments_form').on('submit', function (e){
  e.preventDefault()
})

$('#comment_add_foto').on('change', function(e){
  if (this.files && this.files[0]) {
    let readerImg = new FileReader();
      readerImg.onload = function (e) {
        $('.label-add-foto')[0].classList.add('active')
        $('.label-add-foto')[0].style.backgroundImage = 'url('+e.target.result+')';
      }
      // readerImg.readAsDataURL(e.target.files[0]); // ?
      readerImg.readAsDataURL(this.files[0]);
  }
})
$('.label-add-foto.active').on('click', function(e){e.preventDefault()})

$('.btn-remove-img').on('click', function(e){
  e.preventDefault()
  const thisParent = $(this)[0].parentElement.parentElement,
  thisParentFor = thisParent.getAttribute('for')
  
  $('#'+thisParentFor).val('')
  thisParent.classList.remove('active')
  $('.label-add-foto')[0].style.backgroundImage = 'none';
});