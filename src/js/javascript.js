// validation start
  $(document).ready(function() {    
    $('#phone-input').inputmask('+38 (999) 999-99-99', {
      placeholder: '+38 (___) ___-__-__',
    });

   
    $('#phone-input').on('input', function(e) {
      var value = $(this).val();
      var cleaned = value.replace(/[^0-9+]/g, ''); 
      $(this).val(cleaned);
    });
  });

// validation end