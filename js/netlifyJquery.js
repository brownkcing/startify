$("#my-form").submit(function(e) {
    e.preventDefault();
  
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      $('#success').modal('show');
      alert("Thank you!");
    });
  });

