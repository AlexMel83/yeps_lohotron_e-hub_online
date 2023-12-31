$(document).ready(function () {
   $('.header_burger').click(function (event) {
      $('.header_burger, .header_menu, header, .header_icon').toggleClass('active');
      $('body').toggleClass('lock');
   });
});


$('.header_link').click(function () {
   $('.header_burger, .header_menu, header, .header_icon').removeClass('active');
   $('body').removeClass('lock');
});


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
   let findButtonMobile = document.getElementById('Search-bar-button_mobile');

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
         } if (phoneNumber === "+380561233333" || phoneNumber === "+380800505800") {
            document.location.href = `./number-check-positiv.html?${phoneNumber}`;
         } else console.log("not correct number")
      });
   }

   if (findButtonMobile) {
      findButtonMobile.addEventListener('click', async function (e) {
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
         } if (phoneNumber === "+380561233333" || phoneNumber === "+380800505800") {
            document.location.href = `./number-check-positiv.html?${phoneNumber}`;
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

   async function addPhone() {
      const requestData = {
         fields: [
            { phone: p_url }
         ]
      };

      try {
         const response = await fetch("http://safetalk.fromavdiivka.city:4040/api/phones", {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
         });

         if (response.ok) {
            console.log("Дані успішно надіслано до API");
         } else {
            console.log("Виникла помилка при надсиланні даних до API");
         }
      } catch (error) {
         console.log("Сталася помилка під час виконання POST-запиту:", error);
      }
   }

   let addButton = document.getElementById('addPhone');

   if (addButton) {
      addButton.addEventListener('click', async function (e) {
         e.preventDefault();
         if (p_url.length === 13) {
            const phoneNumber = await addPhone();
            console.log(phoneNumber)
         }
      })


   }


})

const addPhoneButton = document.getElementById("addPhone");

if(addPhoneButton){
   addPhoneButton.addEventListener("click", function () {
      addPhoneButton.disabled = true;
   });
}

