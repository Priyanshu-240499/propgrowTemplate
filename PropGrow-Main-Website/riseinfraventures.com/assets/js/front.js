$(document).ready(function() {
  $('.slide-back').on('click', function() {
    var src = $(this).attr('src');
    var centerSrc = $('.centered-img').attr('src')
    $('.centered-img').attr('src', src)
    $(this).attr('src', centerSrc)
  })

  
  //send mail contact
  $('#contact-btn').on('click', function() {
    if(checkError('contact-form')) {
      ajaxRequest(baseURL+ 'ajax/sendMail', 'contact-form')
    }
  })

  //home -mail
  $('#form-top-btn').on('click', function() {
    if(checkError('home-form')) {
      ajaxRequest(baseURL+ 'ajax/sendMail', 'home-form')
    }
    // for()
  })
  //newsletter 
  $('#newsletter-btn').on('click', function() {
    if(checkError('newsletter-form')){
      ajaxRequest(baseURL+ 'ajax/sendMail', 'newsletter-form')
    }
  })
  
  //send
  function ajaxRequest( url, formId, formtype='id' ) {
    console.log(formtype, 'formtype')
    if(formtype == 'class') {
      var formID = '.' + formId 
    }else{
      var formID = '#' + formId 
    }
    var formData = $(formID).serialize()
    // var formData = $('#contact-form').serialize()
    console.log(formData, );
    $.ajax({
      url: url,
      cache: false,
      method: 'POST',
      data: formData,
      success: function(res) {
        res = JSON.parse(res)
        if(res.status == 'success') {
          $(formID).append('<p class="text-success text-center">' + res.message+ '</p>');
        }
      },
      error:function(err) {
        $(formID).append('<p class="text-success text-center">' + err.message+ '</p>');
      }
    })
  }

})

//get all subcategory
function getsubcat(event) {
  data = new FormData();
  data.append("id_category", event.target.value);
  $.ajax({
    data: data,
    type: "POST",
    url: baseURL + "ajax/get_sub_category",
    cache: false,
    contentType: false,
    processData: false,
    success: function(res) {
      res = JSON.parse(res)
      let options = ''
      if(res.status) {
        for (var i = res.results.length - 1; i >= 0; i--) {
          options += `<option value="`+res.results[i].id+`">
                        `+res.results[i].title+`
                      </option>`
        }
        $('#id_sub_cat').append(options)
      }
    }
  });
}
