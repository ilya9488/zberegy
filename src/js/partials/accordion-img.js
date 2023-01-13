$('.accordion-images-wrap').each(function () {
  let thisParent = $(this),
      type = thisParent.hasClass('revers-type') ? 'right': 'left';

  thisParent.find('[data-target^="#"]').on('click', function () {
    let thisDataset = this.dataset.target;

    thisParent.find('.accordion-img').each(function () {
      if (thisDataset === $(this)[0].dataset.img && !$(this)[0].classList.contains('active')) {
        thisParent.find('.accordion-img.active')[0].classList.remove('active')
        $(this)[0].classList.add('active')
      }
      accordionImg(type, thisParent, 0, 0);
    })
    // Smooth anchor scrolling
    if (screen.width < 992) {
      setTimeout(function () {
        thisParent.find('.collapse.show').length === 0
          ? $('html, body').animate({ scrollTop: $('.accordion-images-wrap').offset().top - $('#header').outerHeight() - 20 }, 300)
          : $('html, body').animate({ scrollTop: $(this).offset().top - $('#header').outerHeight() - 10 }, 300);
      }.bind(this), 500);
    }
  })
  accordionImg(type, thisParent, 0, 0);
});

function accordionImg(pos, thisParent, i, zi) {
  // pos = type left / rigpt img position
  thisParent.find('.accordion-img').each(function () {
    if ($(this)[0].classList.contains('active')) {
      $(this).css({ 'top': '0', [pos]: '0', 'z-index': '0' })
    } else {
      i += 2; zi++;
      $(this).css({ 'top': i + '0px', [pos]: i + '0px', 'z-index': '-' + zi })
    }
  })
  if (screen.width < 992) {
    $('.accordion-img').each(function () {
      let thisDataset = $(this)[0].dataset.img
      $(this).appendTo($(thisDataset + ' .card-body')).removeAttr('data-target data-toggle')
    })
  }  
  if (screen.width > 992 && $('.card-body .accordion-img').length != 0) {
    i = 1
    $('.accordion-img').each(function () {
      i++;
      $(this).appendTo($('.images-wrap')).attr({ 'data-target': '#collapse_' + i, 'data-toggle': 'collapse' })
      $('[data-target="#collapse_' + ($('.accordion-img').length + 1) + '"]').attr({ 'data-target': '#collapse_1' })
    })
  }
}
/* show / hide #accordion 2 first elem */
if (screen.width > 992 && $('#accordionCapabilities_2').length !== 0) {
  $('#accordionCapabilities_2 .accordion-btn')[0].classList.remove('collapsed');
  $('#accordionCapabilities_2 .accordion-btn')[0].setAttribute('aria-expanded', 'true');
  $('#accordionCapabilities_2 .collapse')[0].classList.add('show');
}
// update accordion
$(window).on('resize', function () {
  if (screen.width < 992 && $('.accordion-images-wrap').length !== 0) {
    window.location = window.location
  }
  if (screen.width > 992 && $('.accordion-images-wrap').length !== 0) {
    window.location = window.location
  }
})