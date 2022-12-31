$('.btn-goto-add-gift').on('click', function(){
  $('html, body').animate({ scrollTop: $('.memorial-sidebar .btn-add-gift').offset().top - $('#header').outerHeight() - 150 }, 500);
})


function giftsCount(){ 
  if($('#gifts-count').length){
    const giftsCount = $('.memorial-sidebar .gifts-wrap .gift-img').not('.gift-no').length
    $('#gifts-count')[0].setAttribute('data-gifts-count', giftsCount)
  }
}
giftsCount()

function newImg(src){
  let giftImg = new Image
      giftImg.src = src
  return giftImg
}
$('#giftsModal .gift-img').on('click',function(){
  let giftWrap = document.createElement('div'),
      thisSrc = $(this).children('img')[0].src
      
      giftWrap.classList.add('gift-img')
      giftWrap.append(newImg(thisSrc))

    // add img to sidebar
    $('.memorial-sidebar .gifts-wrap').prepend(giftWrap)
    // add img to header memorial img
    $('.memorial-header .gift-wrap').html(newImg(thisSrc))

  // maybe delete (?)
  if($('.gift-no').length){
    $('.gift-no')[0].remove()
  }
  // appdate count on sidebar
  giftsCount()
  // modal hide
  $('#giftsModal').modal('hide')
})
