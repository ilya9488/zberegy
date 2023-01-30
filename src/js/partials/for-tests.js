// delete this code (start code)
// $('#sucsesModal').modal('show')

// delete this code (start code)
// setInterval(function () {
function dataTitlePos() {
$('[data-title]').each(function() {
    let thisElPos = this.getBoundingClientRect(),
      thisElRightPos = window.innerWidth - thisElPos.right
    if (thisElPos.x < 100) {
      this.classList.remove('right')
      this.classList.add('left')
    } else {
      this.classList.remove('left')
    }
    if (thisElRightPos < 100) {
      this.classList.remove('left')
      this.classList.add('right')
    } else {
      this.classList.remove('right')
    }
  })
}
dataTitlePos()

$(window).on('click', function(){
  setTimeout(() => { dataTitlePos() }, 500);
})

$('.btn-lock').on('click',function(e){
  e.preventDefault() // because we are inside the link
})

$('[data-favorite]').on('click',function(e){
  e.preventDefault() // because we are inside the link
  if($(this)[0].getAttribute('data-favorite') === 'remove-from-favorite'){
    this.setAttribute('data-favorite', 'add-to-favorite')
    this.setAttribute('data-title', 'Додати в Обрані Меморіали')
  }else{
    this.setAttribute('data-favorite', 'remove-from-favorite')
    this.setAttribute('data-title', 'Видалити з Обраного')
  }
})
// find img: not atrr width
// $('img').each(function (){
//   if(!this.hasAttribute('width')){
//     console.log(this);
//   }
// })

// Current Menu Item
$('a').each(function(){
  if ( this.href === window.location.href
    && this.href.includes(window.location.pathname))
    
    this.classList.add('active')
})
  
  

// delete this code (end code) /