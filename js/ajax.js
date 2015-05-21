var Ajax = {
    sendAjax: function (url, formData) {
        $.ajax({
            type: 'POST',
            url: url,
            data: formData.serialize(),
            success: function (respons) {
                var returnData = JSON.parse(respons);
                if (returnData.status == 1) {
                    alert("GOOD");
                } else {
                    var errors = returnData.errors;
                    jQuery.each(errors, function (kay, value) {
                        console.log(kay);
                        console.log(value);
                    });
                }
            },
            error: function () {
                alert('Sorry');
            }
        })

    }

}