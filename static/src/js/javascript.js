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

    if (findButton) {
        findButton.addEventListener('click', async function (e) {
            e.preventDefault();
            const phoneNumbers = await getPhones();
            let phoneNumber = "+" + input.value.replace(/\D/g, "");

            console.log(phoneNumber);

            let exists = phoneNumbers.some(item => item.phone === phoneNumber);
            if (phoneNumber.length === 13) {
                if (exists) {
                    document.location.href = `./number-check.html?${phoneNumber}`;
                } else {
                    document.location.href = `./number-check-neutral.html?${phoneNumber}`;
                }
            } else console.log("not correct number")

        });
    }

    let phoneNumberText = document.querySelectorAll('.phone-number');
    var p_url = location.search.substring(1);

    if (phoneNumberText) {
        for (let i = 0; i < phoneNumberText.length; i++) {
            phoneNumberText[i].innerHTML = p_url;
        }
    }




})

