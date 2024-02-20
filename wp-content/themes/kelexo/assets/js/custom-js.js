/* menu-select */
$(document).ready(function () {
    $('.main_nav a.nav-link[href*=\\#]').removeClass('active')
    $('.main_nav a.nav-link[href*=\\#]').bind('click', function (e) {
        e.preventDefault();
        $('.navbar-toggler').removeClass('collapsed');
        $('.navbar-toggler').attr("aria-expanded", "false");
        $('.navbar-collapse.collapse').removeClass('show');
        $('.main_nav a.nav-link[href*=\\#]').removeClass('active')
        $(this).addClass('active');
        var headerHt = $('header nav').outerHeight();
        var target = $(this).attr("href");
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - headerHt,
        }, 400, function () {
            location.hash = target - headerHt;
        });
        return false;
    });
});

// Header
window.addEventListener('scroll', () => {
    let windowTop = window.pageYOffset;
    let header = document.querySelector('header');
    if (windowTop > 10) {
        header.classList.add('sticky')
    }
    else {
        header.classList.remove('sticky')
    }
})

// menu-button
const navbarMenu = document.getElementById("navbarSupportedContent");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        navbarMenu.classList.toggle("active");
    });
}

// Close Navbar Menu on Click Menu Links
// if (document.querySelector(".menu-link")) {
// document.querySelectorAll(".menu-link").forEach((link) => {
//     link.addEventListener("click", () => {
//         burgerMenu.classList.remove("active");
//         navbarMenu.classList.remove("active");
//     });
// });
// }

$(document).ready(function () {
    $('.menu-link').on('click', function () {
        // Remove 'active' class from all menu links
        $('.menu-link').removeClass('active');

        // Toggle the 'active' class on the clicked menu link
        $(this).addClass('active');
    });
});

// Swiper
var swiper = new Swiper(".roadmapSwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: false,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        680: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1600.99: {
            slidesPerView: 4,
        },
    },
});

// Add the current-slide class to the first .swiper-slide by default
// $('.swiper-slide:first').addClass('current-slide');

$('.next-box').on('click', function () {
    // Remove the class from all .swiper-slide elements
    $('.swiper-slide').removeClass('current-slide');

    // Add the class to the parent .swiper-slide of the clicked button
    $(this).closest('.swiper-slide').addClass('current-slide');
});


window.addEventListener('scroll', function () {
    var sidebar = document.querySelector('.sidebar-sociallinks');
    if (window.scrollY > 0) {
        sidebar.classList.add('scrolled');
    } else {
        sidebar.classList.remove('scrolled');
    }
});

$(document).ready(function () {
    $(".menu-item").click(function () {
        $('.navbar-toggler').attr('aria-expanded', 'false').removeClass("active");
        $('.navbar-collapse').removeClass("active show");

    });
});