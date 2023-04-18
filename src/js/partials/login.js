let admin_data

// backend simulation with jason ( get email and password )
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
				adminPass = admin_data.pass;

	let valid, inputId;
	
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
