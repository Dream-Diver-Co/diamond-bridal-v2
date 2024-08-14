(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 1) {
    //         $('.navbar').fadeIn('slow').css('display', 'flex');
    //     } else {
    //         $('.navbar').fadeOut('slow').css('display', 'none');
    //     }
    // });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);



// review

sessionStorage.setItem('added', 0);
  var status_add = sessionStorage.getItem('added');
$('.list_add-review-cta').click(function(){
  sessionStorage.setItem('added', 1);
  console.log(status_add);
  let username = document.getElementById("review-username").value;
   let message = document.getElementById("rewiew_message").value;
  let userimage = $("#review-userimage").val();
  $('.main_reviews-container').append('<div class="border py-3 my-2 border-dark rounded faq_inner container" style="padding: 15px;"><div class="accordian-link d-flex align-items-center pointer py-2"><img src="img/testimonial-3.jpg" class="img-fluid user_image"><h3 class="reveiew_user_name ps-3">'+username+'</h3></div><p class="review_answer">'+message+'</p></div>');
  clearvalues();
});
  function clearvalues(){
  document.getElementById("review-username").value = "";
document.getElementById("rewiew_message").value = "";
 $('#review-userimage').val('');
  }

//   <!-- WhatsApp Button -->
  document.getElementById('whatsapp-button').addEventListener('click', function() {
    this.style.display = 'none';
  });



//   <!-- Script to Load Image in Modal -->

    document.addEventListener('DOMContentLoaded', function () {
        var imageModal = document.getElementById('imageModal');
        imageModal.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget;
            var imageSrc = button.getAttribute('data-bs-image');
            var modalImage = imageModal.querySelector('#modalImage');
            modalImage.src = imageSrc;
        });
    });


