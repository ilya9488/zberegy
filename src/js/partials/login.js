$('#login_form').on('submit', function (e) {
	e.preventDefault()
	
  if (true){
		location.href = 'user_cabinet.html'
		localStorage.login = true
	}

	// let admin_data

	// function getFile(fileName) {
	// 	let request = new XMLHttpRequest()
	// 	request.open('GET', fileName)
	// 	request.onloadend = function () {
	// 		admin_data = JSON.parse(request.responseText)
	// 		console.log(admin_data)
	// 	}
	// 	request.send()
	// }
	// getFile('/admin-data.json')


  // else {
	// 	location.href = '/'
	// 	localStorage.login = false
	// }
})



$('.pass-show').on('click', function () {
	let thisInput = $(this)[0].parentNode.querySelector('input'),
		thisSlashEye = $(this).find('.eye-slash')[0]
	
	thisInput.type === 'password'
		? (thisInput.type = 'text' && thisSlashEye.setAttribute('hidden', ''))
		: (thisInput.type = 'password') && thisSlashEye.removeAttribute('hidden')
	// thisSlashEye.classList.toggle('hidden')
})
$('#btn_logout').on('click', function () {
		location.href = 'login.html'
		localStorage.login = false
})
if (localStorage.login === 'true') {
  $('#page').addClass('IS_LOG_IN')
}

