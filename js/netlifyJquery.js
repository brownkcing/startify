$("contactform").submit(function(e) {
    e.preventDefault();
  
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        $('#registration').modal('show');
        return false;
    });
  });

