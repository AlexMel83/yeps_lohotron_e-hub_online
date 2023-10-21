$(document).ready(function () {

    // INPUTMASK +38 (___) ___-__-__
    jQuery(".phone").inputmask({
        mask: "+38 (999) 999-99-99",
        greedy: false,
    });

    //-------get response from api-----

    async function getPhones() {
        let phones;
        await $.get("http://safetalk.fromavdiivka.city:4040/api/phones", function (data, status) {
            phones = data;
        });
        // let w = $.get('http://safetalk.fromavdiivka.city:4040/api/phones')
        console.log(phones)
    }

    let input = document.querySelector('.phone');
    let findButton = document.getElementById('Search-bar-button');

    findButton.addEventListener('click', function (e) {
        e.preventDefault();
        getPhones();
    })




})

