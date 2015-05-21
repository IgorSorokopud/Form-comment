var Validator = {
    errors: [],
    validate: function (idForm) {
        var self = this;
        var validateClass = $(idForm + ' [class^=validate]');
        var inputClass = [];
        validateClass.each(function () {
            inputClass[0] = $(this).attr('class');
            var nameFunctionValidate = self.getNameFunction(inputClass[0]);
            if (typeof self[nameFunctionValidate] == 'function') {
                if (!self[nameFunctionValidate]($(this).val())) {
                    self.errors.push($(this).attr('name'));
                }
            }
            inputClass = [];
        });
    },
    getNameFunction: function (inputClass) {
        var prefix = 'validate';
        var classParts = inputClass.split(/[\s-]+/, 2);
        var suffix = classParts[classParts.length - 1];
        suffix = suffix.substr(0, 1).toUpperCase() + suffix.substr(1);
        return prefix + suffix;
    },
    validateName: function (value) {
        var regName = /^[a-zA-Z]+$/;
        return regName.test(value);
    },
    validateEmail: function (value) {
        var regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return regEmail.test(value);
    },
    validateWebsite: function (value) {
        var regWebsite = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
        return regWebsite.test(value);
    },
    validateText: function (value) {
        if (value) {
            return true;
        } else {
            return false;
        }
    }
}