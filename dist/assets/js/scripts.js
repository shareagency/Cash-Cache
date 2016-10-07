// $(document).on('click', 'button', function(event) {
 
//   // Stop form from submitting normally
//   event.preventDefault();

//   // Get id
//   var type = $(this).attr('id');

//   // Empty message
//   $('#message').empty();
 
//   // Get some values from elements on the page:
//   var $form = $("#credentials"),
//     username = $form.find( "input[name='username']" ).val(),
//     password = $form.find( "input[name='password']" ).val(),
//     remember = $form.find( "input[name='remember']" ).val(),
//     url = "/" + type;
 
//   // Send the data using post
//   var posting = $.post(url, {
//     username: username,
//     password: password,
//     remember: remember
//   });
 
//   // Wait for results
//   posting.done(function(res) {
    
//     // Redirect if successful
//     if (res.redirect)
//       window.location = window.location.origin + res.redirect;
//     // Else show message
//     else {
//       $('#message').append('<div class="alert alert-danger">' + res.message + '</div>');
//     }

//   });

// });

function navToggle() {
  var navSecondary = document.getElementById('navbar1');
  navSecondary.style.display = navSecondary.style.display === 'none' ? '' : 'none';
}

var navSwitch = document.getElementById('nav-switch');
navSwitch.addEventListener('click', navToggle, false)

function checkToggle() {
  var termSecondary = document.getElementById('terms-select');
  var className = termSecondary.getAttribute("class");
  if(className == "show terms-check") {
    termSecondary.className = "hide terms-check";
    termSecondary.setAttribute("data-check", "unchecked");
  }
  else{
    termSecondary.className = "show terms-check";
    termSecondary.setAttribute("data-check", "checked");
  }
}

var termSwitch = document.getElementById('terms');
termSwitch.addEventListener('click', checkToggle, false)