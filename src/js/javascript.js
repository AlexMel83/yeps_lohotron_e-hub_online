$(document).ready(function () {
    let phones;

    // INPUTMASK +38 (___) ___-__-__
    jQuery(".phone").inputmask({
        mask: "+38 (999) 999-99-99",
        greedy: false,
    });

    //-------get response from api-----

    async function getPhones() {

        const response = await $.get("http://safetalk.fromavdiivka.city:4040/api/phones");

        return response;

    }

    let input = document.querySelector('.phone');
    let findButton = document.getElementById('Search-bar-button');

    findButton.addEventListener('click', async function (e) {
        e.preventDefault();
        const phoneNumbers = await getPhones();
        let exists = phoneNumbers.some(item => item.phone === input.value);
        if (exists) {
            document.location.href = "./number-check.html";
        } else {
            console.log('Number not exists');
        }
    });




})
