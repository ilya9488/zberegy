// delete this code (start code)
// $('#sucsesModal').modal('show')

// delete this code (start code)
$('[data-title]').each(function () {
  let thisElPos = this.getBoundingClientRect(),
      thisElRightPos = window.innerWidth - thisElPos.right
  if (thisElPos.x < 100) {
		this.classList.add('left')
	}
  if (thisElRightPos < 100) {
		this.classList.add('right')
	}
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