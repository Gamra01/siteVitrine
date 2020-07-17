// +++++++++++++++++++++++++ [ navbar ] +++++++++++++++++++++++++++++++++
function openNav() {
  const nav = document.getElementById("main-nav");
  const hamburger = document.getElementById("hamburger");

  if (!nav.classList.contains("main-nav-open")) {
    // if main-nav-open class not defined , add both
    nav.classList.add("main-nav-open");
    hamburger.classList.add("hamburger-open");
  } else {
    // if main-nav-open defined , remove both
    nav.classList.remove("main-nav-open");
    hamburger.classList.remove("hamburger-open");
  }
}

// +++++++++++++++++++++++++ [ Contact ] +++++++++++++++++++++++++++++++++

(function($) {
  "use strict";

  /*FOCUS*/
  $(".input2").each(function() {
    $(this).on("blur", function() {
      if (
        $(this)
          .val()
          .trim() != ""
      ) {
        $(this).addClass("has-val");
      } else {
        $(this).removeClass("has-val");
      }
    });
  });

  let name = $('.validate-input input[name="name"]');
  let email = $('.validate-input input[name="email"]');
  let message = $('.validate-input textarea[name="message"]');

  $(".validate-form").on("submit", function() {
    let check = true;

    if (
      $(name)
        .val()
        .trim() == ""
    ) {
      showValidate(name);
      check = false;
    }

    if (
      $(email)
        .val()
        .trim()
        .match(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        ) == null
    ) {
      showValidate(email);
      check = false;
    }

    if (
      $(message)
        .val()
        .trim() == ""
    ) {
      showValidate(message);
      check = false;
    }

    return check;
  });

  $(".validate-form .input2").each(function() {
    $(this).focus(function() {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    let thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    let thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }
})(jQuery);
// +++++++++++++++++++++++++ [ Gallery ] +++++++++++++++++++++++++++++++++
