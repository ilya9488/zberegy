$('.home-capabilities [data-target^="#"]').on('click', function(){
  let thisDataset = this.dataset.target
  $('.accordion-img').each(function(){
    if(thisDataset === $(this)[0].dataset.img && !$(this)[0].classList.contains('active')){
      $('.accordion-img.active')[0].classList.remove('active')
      $(this)[0].classList.add('active')
    }
    accordionImg()
  })
  // Smooth anchor scrolling
  if(screen.width < 992){
    setTimeout(function(){
      $('.home-capabilities .collapse.show').length === 0
        ? $('html, body').animate({ scrollTop: $('.home-capabilities').offset().top - $('#header').outerHeight() - 20 }, 300)
        : $('html, body').animate({ scrollTop: $(this).offset().top - $('#header').outerHeight() - 10 }, 300);
      }.bind(this), 500);
    }
});
function accordionImg() {
  i = 0, zi = 0;
  $('.accordion-img').each(function(){
    if($(this)[0].classList.contains('active')){
      $(this).css({'top': '0', 'left': '0', 'z-index': '0'})
    }else{
      i += 2; zi++;
      $(this).css({'top': i+'0px', 'left': i+'0px', 'z-index': '-'+zi})
    }
  })
  if(screen.width < 992){
    $('.accordion-img').each(function(){
      let thisDataset = $(this)[0].dataset.img
      $(this).appendTo($(thisDataset+' .card-body')).removeAttr('data-target data-toggle')
    })
  }
  if(screen.width > 992 && $('.card-body .accordion-img').length != 0){
    i=1
    $('.accordion-img').each(function(){
      i++; 
      $(this).appendTo($('.images-wrap')).attr({'data-target': '#collapse_'+i, 'data-toggle': 'collapse'})
      $('[data-target="#collapse_'+($('.accordion-img').length+1)+'"]').attr({'data-target': '#collapse_1'})
    })
  }
}
accordionImg()
// can be deleted
$(window).on('resize', function (){
  if(screen.width < 992){
    accordionImg()
  }
  if(screen.width > 992){
    accordionImg()
  }
})