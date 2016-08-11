var Register = {
    registerCustomer: function (idForm) {
        Validator.validate(idForm);
        $('input, textarea').removeClass('fieldError');
        
        if (Validator.errors.length) {
            var fieldError = Validator.errors;
            for (var i = 0; i < fieldError.length; ++i) {
                var fieldRed = $('[name=' + fieldError[i] + ']').addClass('fieldError');
                Validator.errors = [];
            }
        } else {
            var url = $(idForm).attr('action');
            Ajax.sendAjax(url, $(idForm));
            $(idForm).removeClass('fieldError');
        }
    }
}
