let admin_data

function getFile(fileName) {
	let request = new XMLHttpRequest()
			request.open('GET', fileName)
			request.onloadend = function () {
				if (request.readyState === 4 && request.status === 200) {
					admin_data = JSON.parse(request.responseText)
				}
			}
	request.send()
}
getFile('/admin-data.json')


$('#login_form').on('submit', function (e) {
	e.preventDefault()
	const adminEmail = admin_data.email,
				adminPass = admin_data.pass,
				adminNmae = admin_data.name,
				adminSurName = admin_data.surname

	let valid, inputId
	
	$(this).find('input').not('[type=submit]').each(function () {

		inputId = $(this).attr('id')

			// Password
			if (inputId === 'pass') { 
				if ($(this).val() !== '' && $(this).val() === adminPass) {
					$(this).removeClass('error')
				} else {
					$(this).addClass('error')
				}
		}
		console.log(adminEmail);
			// Email
			if (inputId === 'email') {
				if ($(this).val() !== '' && $(this).val() === adminEmail) {
					$(this).removeClass('error')
				} else {
					$(this).addClass('error')
				}
			}
		})

	// check error
	if ($('input.error').length) {
		valid = false
	} else {
		valid = true
	}
	setTimeout(() => {
		if (valid) {
			location.href = 'user-cabinet-data.html'
			localStorage.login = true
		}
	}, 1000);
})

$('.pass-show').on('click', function () {
	let thisInput = $(this)[0].parentNode.querySelector('input'),
		thisSlashEye = $(this).find('.eye-slash')[0]
	
	thisInput.type === 'password'
		? (thisInput.type = 'text' && thisSlashEye.setAttribute('hidden', ''))
		: (thisInput.type = 'password') && thisSlashEye.removeAttribute('hidden')
	// thisSlashEye.classList.toggle('hidden')
})
$('#btn_logout').on('click', function (e) {
	e.preventDefault();
	location.href = 'login.html';
	localStorage.login = false;
})
if (localStorage.login === 'true') {
  $('#page').addClass('IS_LOG_IN')
	$('a').each(function () {
		if (this.href.includes('login.html') && !$(this).hasClass('btn-user-login'))
			this.href = 'user-cabinet-data.html';
	})
}


