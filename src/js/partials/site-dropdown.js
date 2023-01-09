// Dropdown Menu Bottom Form

$('[data-dropdown-for]').on('click', function () {
  $('[data-dropdown-id="' + this.dataset.dropdownFor + '"]').toggleClass('active').addClass('in-active')
})

$('.site-dropdown').on('click',function (e) {
  
  $(this).toggleClass('active').addClass('in-active')
  
  let selectSort = $(this).find('.select-sort'),
      selectSortOptoon = $(this).find('.site-dropdown-options'),
      hideSelectOption = $('.select-dropdown option')
  
  if(selectSortOptoon.is(e.target)){
    let selectVal = $(e.target).text()
        selectSort.text(selectVal)
        hideSelectOption.val(selectVal).text(selectVal)
    // curent item (.active)
    selectSortOptoon.each(function () { $(this).removeClass('curent') })
    $(this).find('select').removeClass('error')
    $(e.target).addClass('curent')
  }
})