$(document).ready(function () {

    // INPUTMASK +38 (___) ___-__-__
    jQuery(".phone").inputmask({
        mask: "+38 (999) 999-99-99",
        greedy: false,
    });

    //-------get response from api-----
    async function getPhones() {
        var phones = $.get("http://localhost:4040/api/phones", function (data, status) {
            // alert("Data: " + data + "\nStatus: " + status);
        });

        // let w = $.get('http://safetalk.fromavdiivka.city:4040/api/phones')

        console.log(phones)
    }

    getPhones()

})
