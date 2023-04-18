const user_cabinet_menu = $('#user_cabinet_menu')

$('.btn-back-to-menu').on('click', function (e) {
  e.preventDefault()
  user_cabinet_menu.addClass('active')
})

user_cabinet_menu.find('.active').on('click', function(e){
  e.preventDefault()
  user_cabinet_menu.removeClass('active')
})

$('#delete_accout').on('click',function(){
  $('#delAccModal').modal('show')
})

// 
$('#btnConfirmDelMemorial').on('click', function () {
  $('#delMemorialModal').modal('hide')
  $('#infoModal').modal('show')
  $('#infoModal .modal-title')[0].innerText = this.dataset.confirmText
  $('#'+this.dataset.whichDelMemorial).remove()
})
$('[data-id=btnDelMemorial]').on('click',function(){
  $('#delMemorialModal').modal('show')
  $('#btnConfirmDelMemorial')[0].setAttribute('data-which-del-memorial', this.dataset.parentMemorial)
})

$('.user-cabinet-content .card-header').on('click', function () {
  setTimeout(() => {
    $('html, body').animate({ scrollTop: $(this).offset().top - $('#header').outerHeight() - 20 }, 300)
  }, 500);
})

// get countries + cities
function getCountriesCities(countries, cities) {
  if (countries.length && cities.length) {
    // $('.select-sort').on('click', function(){

    // example of countries and cities
    let requestUrl = 'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json';
    let xhr = new XMLHttpRequest();

    xhr.open('GET', requestUrl, true);
    xhr.responseType = 'json';
    xhr.send()

    xhr.onload = function () {
      let countryList = xhr.response,
        arrCountryList = Object.keys(countryList)
      arrCountryList.sort()
      countryFunction(arrCountryList);
    }

    function countryFunction(jsonObj) {
      // for (let key in jsonObj) {
      jsonObj.forEach(function (item) {
        if (item.length !== 0) {
          let countryName = document.createElement('li')
          countryName.classList.add('site-dropdown-options')
          countryName.innerHTML = item
          // $('#country').append(countryName)
          countries.append(countryName)
        }
      })
    }

    $(countries)[0].parentNode.querySelector('.select-dropdown').change = function () {
      const chosenCountry = this.value;

      xhr.open('GET', requestUrl, true);
      xhr.responseType = 'json';
      xhr.send()
      xhr.onload = function () {
        let countryList = xhr.response;
        countryList[chosenCountry].sort().forEach(function (item) {
          $(cities).empty();
          setTimeout(function () {
            let cityName = document.createElement('li')
            cityName.classList.add('site-dropdown-options')
            cityName.innerHTML = item;
            // $('#city').append(cityName);
            cities.append(cityName);
          }, 100);
        });
      }
    }
    // })
  }
}
getCountriesCities($('#country'), $('#city'))
getCountriesCities($('#burial_countries_list'), $('#burial_cities_list'))

//  - - - - calendar datapicker settings - - - - //
pickmeup.defaults.locales['uk'] = {
  days: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'],
  daysShort: ['Нед', 'Пон', 'Вів', 'Сер', 'Чет', 'Птн', 'Суб'],
  daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
  monthsShort: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру']
};
function pmuInit(input) {
  pickmeup($(input)[0], {
    locale: 'uk',
    format: 'm.d.Y',
    position: 'bottom',
    first_day: 1,
    hide_on_select: true,
    prev: '&#x276E;',
    next: '&#x276F;',
    default_date: false,
    // max: 'today'
  })
  $('.pickmeup').each(function () {
    $(this).css('width', this.__pickmeup_target.offsetWidth)
  })
  $(input).on('click', function () {
    $('.pickmeup').each(function () {
      $(this).css('width', this.__pickmeup_target.offsetWidth)
    })
    pickmeup($(input)[0]).update()
  })
}
pmuInit('#birth_day')
pmuInit('#death_day')
pmuInit('#memorable_event_birth_day')