/* ============================================
   HotSpring Portable Spas - Main JavaScript
   jQuery Form Validation & Animations
   ============================================ */

$(document).ready(function () {

  /* =============================================
     HERO SLIDER
     ============================================= */
  var currentSlide = 0;
  var slides = $('.hero-slider .slide');
  var dots = $('.slider-dots span');

  function goToSlide(n) {
    slides.removeClass('active');
    dots.removeClass('active');
    currentSlide = (n + slides.length) % slides.length;
    $(slides[currentSlide]).addClass('active');
    $(dots[currentSlide]).addClass('active');
  }

  if (slides.length > 0) {
    var sliderInterval = setInterval(function () { goToSlide(currentSlide + 1); }, 4000);

    $('.slider-nav.next').on('click', function () {
      clearInterval(sliderInterval);
      goToSlide(currentSlide + 1);
    });
    $('.slider-nav.prev').on('click', function () {
      clearInterval(sliderInterval);
      goToSlide(currentSlide - 1);
    });
    dots.on('click', function () {
      clearInterval(sliderInterval);
      goToSlide($(this).index());
    });
  }

  /* =============================================
     RELATED ITEMS CAROUSEL
     ============================================= */
  var relTrack = $('.related-track');
  var relItemWidth = 155;
  var relPos = 0;

  $('.next-btn').on('click', function () {
    var maxPos = -(relTrack.children().length - 4) * relItemWidth;
    if (relPos > maxPos) {
      relPos -= relItemWidth;
      relTrack.css('transform', 'translateX(' + relPos + 'px)');
    }
  });
  $('.prev-btn').on('click', function () {
    if (relPos < 0) {
      relPos += relItemWidth;
      relTrack.css('transform', 'translateX(' + relPos + 'px)');
    }
  });

  /* =============================================
     PRODUCT TABS
     ============================================= */
  $('.tab-nav button').on('click', function () {
    var tab = $(this).data('tab');
    $('.tab-nav button').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').removeClass('active');
    $('#tab-' + tab).addClass('active');
  });

  /* =============================================
     PRODUCT IMAGE THUMBNAILS
     ============================================= */
  $('.product-thumbnails img').on('click', function () {
    var src = $(this).attr('src');
    $('.product-images .main-img').attr('src', src);
    $('.product-thumbnails img').css('border-color', '#ddd');
    $(this).css('border-color', '#cc0000');
  });

  /* =============================================
     PRICE CALCULATOR (Product Detail)
     ============================================= */
  function recalcPrice() {
    var base = 1979;
    var extra = 0;
    $('.price-calculator select').each(function () {
      var val = parseInt($(this).val()) || 0;
      extra += val;
    });
    var qty = parseInt($('.price-calculator input[type="number"]').val()) || 1;
    var total = (base + extra) * qty;
    $('.price-calculator .total-price').text('Total Price: $' + total.toFixed(2));
  }
  $('.price-calculator select, .price-calculator input[type="number"]').on('change input', recalcPrice);

  /* =============================================
     SHIP TO DIFFERENT ADDRESS TOGGLE
     ============================================= */
  $('#ship-different').on('change', function () {
    if ($(this).is(':checked')) {
      $('#shipping-address-form').slideDown(300);
    } else {
      $('#shipping-address-form').slideUp(300);
    }
  });

  /* =============================================
     CART QUANTITY CHANGE
     ============================================= */
  $('.qty-select').on('change', function () {
    var qty = parseInt($(this).val());
    var price = parseFloat($(this).closest('tr').data('price'));
    var $total = $(this).closest('tr').find('.item-total');
    $total.text('$' + (qty * price).toFixed(2));
    updateCartTotal();
  });

  function updateCartTotal() {
    var total = 0;
    $('.qty-select').each(function () {
      var qty = parseInt($(this).val());
      var price = parseFloat($(this).closest('tr').data('price'));
      total += qty * price;
    });
    $('.cart-grand-total').text('Total: $' + total.toFixed(2));
  }

  /* =============================================
     REMOVE CART ITEM
     ============================================= */
  $('.remove-link').on('click', function (e) {
    e.preventDefault();
    $(this).closest('tr').fadeOut(300, function () {
      $(this).remove();
      updateCartTotal();
    });
  });

  /* =============================================
     FORM VALIDATION HELPER
     ============================================= */
  function validateField($input) {
    var val = $input.val().trim();
    var type = $input.attr('type') || 'text';
    var name = $input.attr('name') || '';
    var $err = $input.siblings('.error-msg');

    $input.removeClass('error');
    $err.removeClass('show');

    if ($input.prop('required') && val === '') {
      $input.addClass('error');
      $err.text('This field is required.').addClass('show');
      return false;
    }

    if (type === 'email' && val !== '') {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        $input.addClass('error');
        $err.text('Please enter a valid email address.').addClass('show');
        return false;
      }
    }

    if (type === 'password' && val !== '') {
      if (val.length < 6 || val.length > 20) {
        $input.addClass('error');
        $err.text('Password must be 6–20 characters.').addClass('show');
        return false;
      }
    }

    if (name === 'confirm_password') {
      var pass = $('input[name="password"]').val();
      if (val !== pass) {
        $input.addClass('error');
        $err.text('Passwords do not match.').addClass('show');
        return false;
      }
    }

    if (name === 'phone' && val !== '') {
      var phoneRegex = /^[\d\s\+\-\(\)]{7,15}$/;
      if (!phoneRegex.test(val)) {
        $input.addClass('error');
        $err.text('Please enter a valid phone number.').addClass('show');
        return false;
      }
    }

    if (name === 'zip_code' && val !== '') {
      var zipRegex = /^\d{4,10}$/;
      if (!zipRegex.test(val)) {
        $input.addClass('error');
        $err.text('Please enter a valid zip code.').addClass('show');
        return false;
      }
    }

    if (name === 'card_number' && val !== '') {
      var cardRegex = /^\d{16}$/;
      if (!cardRegex.test(val.replace(/\s/g, ''))) {
        $input.addClass('error');
        $err.text('Card number must be 16 digits.').addClass('show');
        return false;
      }
    }

    if (name === 'cvv' && val !== '') {
      if (!/^\d{3,4}$/.test(val)) {
        $input.addClass('error');
        $err.text('CVV must be 3–4 digits.').addClass('show');
        return false;
      }
    }

    return true;
  }

  /* Live validation on blur */
  $('input[required], textarea[required]').on('blur', function () {
    validateField($(this));
  });

  /* =============================================
     LOGIN FORM VALIDATION
     ============================================= */
  $('#login-form').on('submit', function (e) {
    e.preventDefault();
    var valid = true;
    $(this).find('input[required]').each(function () {
      if (!validateField($(this))) valid = false;
    });
    if (valid) {
      $(this).find('button[type="submit"]').text('Signing in...').prop('disabled', true);
      setTimeout(function () {
        window.location.href = 'my_account.html';
      }, 1000);
    }
  });

  /* =============================================
     REGISTER FORM VALIDATION
     ============================================= */
  $('#register-form').on('submit', function (e) {
    e.preventDefault();
    var valid = true;
    $(this).find('input[required]').each(function () {
      if (!validateField($(this))) valid = false;
    });
    if (valid) {
      $(this).find('button[type="submit"]').text('Creating Account...').prop('disabled', true);
      setTimeout(function () {
        showSuccessMsg('Account created successfully! Redirecting...');
        setTimeout(function () { window.location.href = 'login.html'; }, 1500);
      }, 1000);
    }
  });

  /* =============================================
     FORGOT PASSWORD FORM VALIDATION
     ============================================= */
  $('#forgot-form').on('submit', function (e) {
    e.preventDefault();
    var $email = $(this).find('input[name="email"]');
    if (validateField($email)) {
      showSuccessMsg('Password reset link sent to your email!');
      $(this)[0].reset();
    }
  });

  /* =============================================
     CONTACT FORM VALIDATION
     ============================================= */
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();
    var valid = true;
    $(this).find('input[required], textarea[required]').each(function () {
      if (!validateField($(this))) valid = false;
    });
    if (valid) {
      showSuccessMsg('Your message has been sent! We will get back to you shortly.');
      $(this)[0].reset();
    }
  });

  /* =============================================
     EDIT PROFILE / ADDRESS FORMS
     ============================================= */
  $('#edit-account-form, #edit-billing-form, #edit-shipping-form').on('submit', function (e) {
    e.preventDefault();
    var valid = true;
    $(this).find('input[required]').each(function () {
      if (!validateField($(this))) valid = false;
    });
    if (valid) {
      showSuccessMsg('Details updated successfully!');
    }
  });

  /* =============================================
     PAYMENT FORM VALIDATION
     ============================================= */
  $('#payment-form').on('submit', function (e) {
    e.preventDefault();
    var valid = true;
    $(this).find('input[required]').each(function () {
      if (!validateField($(this))) valid = false;
    });
    if (!$('#terms-check').is(':checked')) {
      $('#terms-error').addClass('show');
      valid = false;
    } else {
      $('#terms-error').removeClass('show');
    }
    if (valid) {
      $(this).find('button[type="submit"]').text('Processing...').prop('disabled', true);
      setTimeout(function () {
        window.location.href = 'order_summary.html';
      }, 1500);
    }
  });

  /* =============================================
     NEWSLETTER FORM
     ============================================= */
  $('.newsletter-form').on('submit', function (e) {
    e.preventDefault();
    var $input = $(this).find('input');
    if ($input.val().trim() === '') {
      $input.css('border-color', '#cc0000');
    } else {
      $input.css('border-color', '#5cb85c');
      showSuccessMsg('Thank you for subscribing!');
      $input.val('');
    }
  });

  /* =============================================
     ADD TO CART ANIMATION
     ============================================= */
  $('.btn-add-cart').on('click', function (e) {
    e.preventDefault();
    var $btn = $(this);
    var origText = $btn.html();
    $btn.html('✓ Added!').css('background', '#5cb85c');
    setTimeout(function () {
      $btn.html(origText).css('background', '');
    }, 1200);
  });

  /* =============================================
     SEARCH BAR FOCUS ANIMATION
     ============================================= */
  $('nav.main-nav .nav-search input').on('focus', function () {
    $(this).animate({ width: '300px' }, 200);
  }).on('blur', function () {
    $(this).animate({ width: '260px' }, 200);
  });

  /* =============================================
     SMOOTH SCROLL TO TOP
     ============================================= */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('#back-to-top').fadeIn(300);
    } else {
      $('#back-to-top').fadeOut(300);
    }
  });
  $('#back-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  /* =============================================
     PRODUCT CARD HOVER EFFECTS
     ============================================= */
  $('.product-card').on('mouseenter', function () {
    $(this).find('.card-links').slideDown(150);
  }).on('mouseleave', function () {
    // Keep visible on desktop
  });

  /* =============================================
     UTILITY: Show success message
     ============================================= */
  function showSuccessMsg(msg) {
    var $alert = $('<div class="alert-success" style="display:none;"></div>').text(msg);
    $('.content-box').first().prepend($alert);
    $alert.fadeIn(300);
    setTimeout(function () { $alert.fadeOut(400, function () { $(this).remove(); }); }, 3000);
  }

  /* =============================================
     PAGE LOAD FADE-IN ANIMATION
     ============================================= */
  $('.content-box').each(function (i) {
    var $el = $(this);
    $el.css({ opacity: 0, transform: 'translateY(15px)' });
    setTimeout(function () {
      $el.animate({ opacity: 1 }, 400);
      $el.css('transform', 'translateY(0)');
    }, 100 + i * 80);
  });

  /* =============================================
     MOBILE NAV TOGGLE
     ============================================= */
  $('.mobile-nav-toggle').on('click', function () {
    $('nav.main-nav ul').slideToggle(250);
  });

});
