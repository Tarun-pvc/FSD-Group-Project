setTimeout(() => {
    $(document).ready(function () {
        //Preloader
        preloaderFadeOutTime = 550;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });
}, 2000);

function loadLoginPage() {
    // Load the login page into the current window
    window.location.href = "views/Login_SignUp.html";
  }
