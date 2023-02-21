const user_cabinet_menu = $('#user_cabinet_menu')

$('.btn-back-to-menu').on('click', function (e) {
  e.preventDefault()
  user_cabinet_menu.addClass('active')
})

user_cabinet_menu.find('.active').on('click', function(e){
  e.preventDefault()
  user_cabinet_menu.removeClass('active')
})

$('#delete_accout').on('click',function(){
  $('#delAccModal').modal('show')
})

// 
$('#btnConfirmDelMemorial').on('click', function () {
  $('#delMemorialModal').modal('hide')
  $('#infoModal').modal('show')
  $('#infoModal .modal-title')[0].innerText = this.dataset.confirmText
  $('#'+this.dataset.whichDelMemorial).remove()
})
$('[data-id=btnDelMemorial]').on('click',function(){
  $('#delMemorialModal').modal('show')
  $('#btnConfirmDelMemorial')[0].setAttribute('data-which-del-memorial', this.dataset.parentMemorial)
})