const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const serialize = function (form) {
        var field,
            l,
            s = [];

        if (typeof form == 'object' && form.nodeName == 'FORM') {
            var len = form.elements.length;

            for (var i = 0; i < len; i++) {
                field = form.elements[i];
                if (
                    field.name &&
                    !field.disabled &&
                    field.type != 'button' &&
                    field.type != 'file' &&
                    field.type != 'hidden' &&
                    field.type != 'reset' &&
                    field.type != 'submit'
                ) {
                    if (field.type == 'select-multiple') {
                        l = form.elements[i].options.length;

                        for (var j = 0; j < l; j++) {
                            if (field.options[j].selected) {
                                s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[j].value);
                            }
                        }
                    } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                        s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value);
                    }
                }
            }
        }
        return s.join('&').replace(/%20/g, '+');
    };
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const theForm = e.currentTarget;
        const formData = 'form-name=' + theForm.name + '&' + serialize(theForm);
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData
        };

        fetch('/', options)
            .then(function (response) {
                openModal(theForm.action);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
}


function openModal() {
    let modalTrigger = document.querySelectorAll('.modal-trigger');
  
    modalTrigger.forEach(function(trigger) {
      trigger.addEventListener('click', function(event) {
  
        // remove "#" from #modal
        const target = this.getAttribute('href').substr(1);
  
        // use dynamic target to reference given modal
        const modalWindow = document.getElementById(target);
  
        if(modalWindow.classList) {
          modalWindow.classList.add('open');
        }
  
        event.preventDefault();
      });
    });
  }