// Dropdown Menu Bottom Form
$('.site-dropdown').on('click',function (e) {

  $(this).toggleClass('active')
  
  let selectSort = $(this).find('.select-sort'),
  selectSortOptoon = $(this).find('.site-dropdown-options'),
  hideSelectOption = $('.select-dropdown option')
  
  if(selectSortOptoon.is(e.target)){
    let selectVal = $(e.target).text()
    selectSort.text(selectVal)
    hideSelectOption.val(selectVal).text(selectVal)
    // curent item (.active)
    selectSortOptoon.each(function(){$(this).removeClass('curent')})
    $(e.target).addClass('curent')
  }
})