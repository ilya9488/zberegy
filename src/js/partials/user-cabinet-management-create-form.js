// /* del */
// $('#galleryDescrModal').modal('show')
// $('#galleryVideoModal').modal('show')
// /* del  */

let memorialImgPath = $('#form_create_memorial .select-img img').length ? $('#form_create_memorial .select-img img')[0].src : '';

// input file
$('#load_memorial_img').on('change', function () {
  if (this.files && this.files[0]) {
    let readerImg = new FileReader();
    readerImg.onload = function (e) {
      memorialImgPath = e.target.result;
      $('#form_create_memorial .select-img img')[0].src = memorialImgPath
    }
    // readerImg.readAsDataURL(e.target.files[0]); // ? how better
    readerImg.readAsDataURL(this.files[0]);
    // activate the save button
    // isChangeForm()
  }
})

$('#del_memorial_img').on('click', function (e) {
  // letiable for recording the old value
  memorialImgPath = this.dataset.resetImg;
  // assign the default image
  $('#form_create_memorial .select-img img')[0].src = memorialImgPath;
  // reset the input
  $('#load_memorial_img')[0].value = ''
  $('#load_memorial_img')[0].setAttribute('value', '')
  // activate the save button
  // isChangeForm()
})

//  - - - - custom template - - - - //
function customTemplate(){
  $('[name="templates"]').each(function(){
    this.checked = false
  })
  $('[name="templates"]:not(#donl_templ)').on('click', function(){
    $('#donl_templ_img')[0].src = 'static/img/fake-img.png';
  })
  $('#donl_templ').on('click',function(){
    customTemplate()
  })
}
// input download template bg
fileImgLoad($('#donl_templ'), $('#donl_templ_img'), customTemplate)
//  - - - - /custom template - - - - //

//  - - - - /datapicker settings - - - - //

//  - - - - monument foto - - - - //
fileImgLoad($('#monument_foto'), $('#monument_foto_img'))

$('#del_monument_foto').on('click', function (e) {
  // assign the default image
  $('#monument_foto_img')[0].src = this.dataset.resetImg;
  // letiable for recording the old value
  memorialImgPath = this.dataset.resetImg;
  // reset the input
  $('#monument_foto')[0].value = ''
  $('#monument_foto')[0].setAttribute('value', '')
  // activate the save button
  // isChangeForm()
})
//  - - - - /monument foto - - - - //

$('#form_create_memorial').on('submit', function (e) {
  e.preventDefault()
})



//  - - - - - 2 - - - - --

$('#formGallery').on('submit', function (e) {
  e.preventDefault();
})

let input = document.querySelector('#gallery_img');
const preview = document.querySelector('#gallery_img_imgs_previews');

const button = document.getElementById('btn_save_gallery');
// list of files
const fileList = [];


// Обработчик кнопки Send
if(button){button.addEventListener('click', (e) => {
  e.preventDefault();
  if (!fileList.length) {
    console.log('Empty!');
    return;
  }
  // console.log(JSON.stringify(fileList.map(({ name, modified, size, description }) => ({ name, modified, size, data: '<[!FILEDATA]>', description })), null, 2));
});}

if (input) {
  input.addEventListener('change', onChange);
}

function onChange() {
  
  [...input.files].forEach(file => {
    // We create a reader
    const reader = new FileReader;
      // We hang an event on the reader
      reader.addEventListener('loadend', () => {
      // List element preview
      const itemWrap = document.createElement('div');
            itemWrap.classList.add('select-img-wrap', 'square-type')

      const item = document.createElement('div');
            item.classList.add('select-img')
      // Picture for a pre -examination
      const image = new Image;
      // URI Pictures
      image.src = `data:${file.type};base64,${btoa(reader.result)}`;

      const editImg = document.createElement('button');
            editImg.type = "button";
            editImg.classList.add('btn-load-select-img', 'btn-edit')
            editImg.id = 'btn_edit_gallery_img'
            editImg.innerHTML = '<svg width = "30" height = "30" viewBox = "0 0 30 30" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><circle cx="15" cy="15" r="15" fill="currentColor"></circle><path d="M21.4873 10.987L20.1844 12.2899L17.6714 9.85386L19.0128 8.51249C19.3409 8.18435 19.7859 8 20.25 8C20.7141 8 21.1591 8.18435 21.4873 8.51249C21.8154 8.84062 21.9997 9.28568 21.9997 9.74974C21.9997 10.2138 21.8154 10.6588 21.4873 10.987ZM19.4214 13.052L11.4108 21.0626L8 22.0129L8.93538 18.589L16.9163 10.6081L19.4214 13.052Z" fill="white"></path></svg>';
      const сhangeImage = document.createElement('input');
            сhangeImage.type = 'file';
            сhangeImage.id = 'сhange_image'
            сhangeImage.setAttribute('hidden', '')
      const remove = document.createElement('button');
            remove.type = "button";
            remove.classList.add('btn-del-select-img', 'btn-delete')
            remove.innerHTML = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15"></circle><path d="M17.4998 7.5C17.7209 7.5 17.9328 7.5878 18.0891 7.74408C18.2454 7.90036 18.3332 8.11232 18.3332 8.33333H19.9998C20.2209 8.33333 20.4328 8.42113 20.5891 8.57741C20.7454 8.73369 20.8332 8.94565 20.8332 9.16667C20.8332 9.38768 20.7454 9.59964 20.5891 9.75592C20.4328 9.9122 20.2209 10 19.9998 10H9.99984C9.77882 10 9.56686 9.9122 9.41058 9.75592C9.2543 9.59964 9.1665 9.38768 9.1665 9.16667C9.1665 8.94565 9.2543 8.73369 9.41058 8.57741C9.56686 8.42113 9.77882 8.33333 9.99984 8.33333H11.6665C11.6665 8.11232 11.7543 7.90036 11.9106 7.74408C12.0669 7.5878 12.2788 7.5 12.4998 7.5H17.4998Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 10.8334H20V20.8334C20 21.2754 19.8244 21.6993 19.5118 22.0119C19.1993 22.3244 18.7754 22.5 18.3333 22.5H11.6667C11.2246 22.5 10.8007 22.3244 10.4882 22.0119C10.1756 21.6993 10 21.2754 10 20.8334V10.8334ZM12.9167 12.5C12.8062 12.5 12.7002 12.5439 12.622 12.6221C12.5439 12.7002 12.5 12.8062 12.5 12.9167V20.4167C12.5 20.5272 12.5439 20.6332 12.622 20.7113C12.7002 20.7895 12.8062 20.8334 12.9167 20.8334C13.0272 20.8334 13.1332 20.7895 13.2113 20.7113C13.2894 20.6332 13.3333 20.5272 13.3333 20.4167V12.9167C13.3333 12.8062 13.2894 12.7002 13.2113 12.6221C13.1332 12.5439 13.0272 12.5 12.9167 12.5ZM17.0833 12.5C16.9728 12.5 16.8668 12.5439 16.7887 12.6221C16.7106 12.7002 16.6667 12.8062 16.6667 12.9167V20.4167C16.6667 20.5272 16.7106 20.6332 16.7887 20.7113C16.8668 20.7895 16.9728 20.8334 17.0833 20.8334C17.1938 20.8334 17.2998 20.7895 17.378 20.7113C17.4561 20.6332 17.5 20.5272 17.5 20.4167V12.9167C17.5 12.8062 17.4561 12.7002 17.378 12.6221C17.2998 12.5439 17.1938 12.5 17.0833 12.5Z" fill="currentColor"></path></svg>';
      const descrTextarea = document.createElement('textarea');
            descrTextarea.name = "gallery_descr_text"
            descrTextarea.id = "gallery_descr_text"
            descrTextarea.placeholder = "Напишіть текст"
            descrTextarea.setAttribute('maxlength', '1000')
      const descrTextareaCounter = document.createElement('span');
            descrTextareaCounter.classList.add('textarea-maxlength')
            descrTextareaCounter.innerText = '0/1000'
            
      
      // The element of the array fileList
      let fileItem = {
        name: file.name,
        modified: file.lastModified,
        size: file.size,
        data: reader.result,
        description: ''
      };
      // Add the element to the unloading list
      fileList.push(fileItem);
      
      editImg.addEventListener('click', function () {
        let galleryDescrModal = $('#galleryDescrModal')
        galleryDescrModal.modal('show')
        galleryDescrModal[0].querySelector('img').setAttribute('src', this.parentNode.querySelector('img').src)
        galleryDescrModal[0].querySelector('#gallery_descr_text').replaceWith(descrTextarea);
        galleryDescrModal[0].querySelector('#gallery_descr_text').value = fileList[fileList.indexOf(fileItem)].description
        galleryDescrModal[0].querySelector('#сhange_image').replaceWith(сhangeImage);
        galleryDescrModal[0].querySelector('.textarea-maxlength').replaceWith(descrTextareaCounter);
      })
      // change one image to another in a gallery
      сhangeImage.addEventListener('change', function () {
        if (this.files && this.files[0]) {
          let readerImg = new FileReader();

          readerImg.onload = function (e) {

            $('#galleryDescrModal')[0].querySelector('img').setAttribute('src', e.target.result)
            $(itemWrap)[0].querySelector('img').src = e.target.result;

            [...сhangeImage.files].forEach(file => {
              fileList[fileList.indexOf(fileItem)].name = file.name
              fileList[fileList.indexOf(fileItem)].modified = file.lastModified
              fileList[fileList.indexOf(fileItem)].size = file.size
              fileList[fileList.indexOf(fileItem)].data = reader.result
            });
            setTimeout(() => { onChange() }, 100)
          }
          readerImg.readAsDataURL(this.files[0]);
        }
      })

      // add & edit description
      descrTextarea.addEventListener('focus', function () {
        $(this).next('.textarea-maxlength').text($(this).val().length + '/' + $(this)[0].getAttribute('maxlength'))
        textareaLetterCounter()
      })
      descrTextarea.addEventListener('input', function(){
        fileList[fileList.indexOf(fileItem)].description = this.value
      })
      $('#gallery_descr_form').on('submit', function (e) {
        e.preventDefault();
        $('#galleryDescrModal').modal('hide')
        onChange()
      })
        
      // Click handler at the exclusion link of the picture
      remove.addEventListener('click', (e) => {
        e.preventDefault();
        // Exclude an element with a picture from the unloading list
        fileList.splice(fileList.indexOf(fileItem), 1);
        // Remove the list element(<div>) from <.imgs-previews>
        itemWrap.classList.add('removing');
        setTimeout(function () { itemWrap.remove() }, 100);
        setTimeout(function(){ onChange() }, 100)
      });
      itemWrap.appendChild(remove);
      itemWrap.appendChild(editImg);
      item.appendChild(image);
        itemWrap.appendChild(item);
        console.log(itemWrap);
        console.log(preview);

      preview.appendChild(itemWrap);
    });
    // Launch a file reading
    reader.readAsBinaryString(file);
  });
  // We drop the meaning <input>
  input.value = '';
  // Create a clone <input>
  const newInput = input.cloneNode(true);
  // Replaceable <input> clone
  input.replaceWith(newInput);
  // Now Input will indicate the clone
  input = newInput;
  // we’ll hang the onchange function for the change event in the new <nput>
  input.addEventListener('change', onChange);
  console.log(fileList);
  return;
}



// gallery video form
$('#btn_add_gallery_video').on('click', function () {
  $('#galleryVideoModal').modal('show')
})

$('.btn-del-select-video').on('click', function () {
  // e.preventDefault();
  this.parentElement.remove()
});

$('#gallery_video_form').on('submit', function (e) {
  e.preventDefault()
  const thisInput = this.input_gallery_video

  if (thisInput.value.length) {
    thisInput.classList.remove('error')

    let div = document.createElement('div')
        div.classList.add('iframe-wrap')
    const editVideo = document.createElement('button');
          editVideo.type = "button";
          editVideo.classList.add('btn-load-select-video', 'btn-edit')
          editVideo.innerHTML = '<svg width = "30" height = "30" viewBox = "0 0 30 30" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><circle cx="15" cy="15" r="15" fill="currentColor"></circle><path d="M21.4873 10.987L20.1844 12.2899L17.6714 9.85386L19.0128 8.51249C19.3409 8.18435 19.7859 8 20.25 8C20.7141 8 21.1591 8.18435 21.4873 8.51249C21.8154 8.84062 21.9997 9.28568 21.9997 9.74974C21.9997 10.2138 21.8154 10.6588 21.4873 10.987ZM19.4214 13.052L11.4108 21.0626L8 22.0129L8.93538 18.589L16.9163 10.6081L19.4214 13.052Z" fill="white"></path></svg>';
    const remove = document.createElement('button');
          remove.type = "button";
          remove.classList.add('btn-del-select-video', 'btn-delete')
          remove.innerHTML = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15"></circle><path d="M17.4998 7.5C17.7209 7.5 17.9328 7.5878 18.0891 7.74408C18.2454 7.90036 18.3332 8.11232 18.3332 8.33333H19.9998C20.2209 8.33333 20.4328 8.42113 20.5891 8.57741C20.7454 8.73369 20.8332 8.94565 20.8332 9.16667C20.8332 9.38768 20.7454 9.59964 20.5891 9.75592C20.4328 9.9122 20.2209 10 19.9998 10H9.99984C9.77882 10 9.56686 9.9122 9.41058 9.75592C9.2543 9.59964 9.1665 9.38768 9.1665 9.16667C9.1665 8.94565 9.2543 8.73369 9.41058 8.57741C9.56686 8.42113 9.77882 8.33333 9.99984 8.33333H11.6665C11.6665 8.11232 11.7543 7.90036 11.9106 7.74408C12.0669 7.5878 12.2788 7.5 12.4998 7.5H17.4998Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 10.8334H20V20.8334C20 21.2754 19.8244 21.6993 19.5118 22.0119C19.1993 22.3244 18.7754 22.5 18.3333 22.5H11.6667C11.2246 22.5 10.8007 22.3244 10.4882 22.0119C10.1756 21.6993 10 21.2754 10 20.8334V10.8334ZM12.9167 12.5C12.8062 12.5 12.7002 12.5439 12.622 12.6221C12.5439 12.7002 12.5 12.8062 12.5 12.9167V20.4167C12.5 20.5272 12.5439 20.6332 12.622 20.7113C12.7002 20.7895 12.8062 20.8334 12.9167 20.8334C13.0272 20.8334 13.1332 20.7895 13.2113 20.7113C13.2894 20.6332 13.3333 20.5272 13.3333 20.4167V12.9167C13.3333 12.8062 13.2894 12.7002 13.2113 12.6221C13.1332 12.5439 13.0272 12.5 12.9167 12.5ZM17.0833 12.5C16.9728 12.5 16.8668 12.5439 16.7887 12.6221C16.7106 12.7002 16.6667 12.8062 16.6667 12.9167V20.4167C16.6667 20.5272 16.7106 20.6332 16.7887 20.7113C16.8668 20.7895 16.9728 20.8334 17.0833 20.8334C17.1938 20.8334 17.2998 20.7895 17.378 20.7113C17.4561 20.6332 17.5 20.5272 17.5 20.4167V12.9167C17.5 12.8062 17.4561 12.7002 17.378 12.6221C17.2998 12.5439 17.1938 12.5 17.0833 12.5Z" fill="currentColor"></path></svg>';
      div.appendChild(remove);
      div.appendChild(editVideo);
      div.insertAdjacentHTML('beforeend', '<iframe width="216" height="216" src="https://www.youtube.com/embed/' + this.input_gallery_video.value.split("/").pop() + '" title="video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

    $('.videos-wrap')[0].appendChild(div);
    this.input_gallery_video.value = ''
    $('#galleryVideoModal').modal('hide')

    $('.btn-del-select-video').on('click', function () {
      this.parentElement.remove()
    });

    $('.btn-load-select-video').on('click', function () {
      let iframeWrap = $(this).closest('.iframe-wrap');
          iframeWrap.addClass('current');

      $('#galleryEditVideoModal').modal('show')
      $('#galleryEditVideoModal').find('#input_edit_gallery_video')[0].value = $('.iframe-wrap.current iframe')[0].src

      $('#gallery_edit_video_form').on('submit', function (e) {
        e.preventDefault()
        const thisInput = this.input_edit_gallery_video

        if (thisInput.value.length) {
          $('.iframe-wrap.current iframe')[0].src = '';
          $('.iframe-wrap.current iframe')[0].src = 'https://www.youtube.com/embed/' + this.input_edit_gallery_video.value.split("/").pop();
          setTimeout(() => {
            thisInput.value = ''
            $('#galleryEditVideoModal').modal('hide')
          }, 100);
          thisInput.classList.remove('error')
        } else {
          thisInput.classList.add('error')
        }
      })
    });

    $('#galleryEditVideoModal').on('show.bs.modal', function () {
      setTimeout(() => {
        $('#input_edit_gallery_video').trigger('focus')
      }, 100);
    })
    $('#galleryEditVideoModal').on('hide.bs.modal', function () {
      $('.iframe-wrap.current').removeClass('current')
    })
  } else {
    thisInput.classList.add('error')
  }
})


$('#memorable_events_form').on('submit', function (e) {
  e.preventDefault();
  
});

$('#btn_memorable_events').on('click', function () {
  
});

