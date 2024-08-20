var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
});

times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});



var tl = gsap.timeline();

    tl.from(" nav .logo", {
        opacity: 0,
        duration: 1,
        scale: 0.1,
        y: 30
    })

    tl.from(" nav .item a", {
        opacity: 0,
        duration: 1,
        y: -30
        // stagger:0.2
    })

    tl.from(" nav .item button", {
        opacity: 0,
        duration: 1,
        y: -30
    })



gsap.from(" section.home .first h2", {
    opacity: 0,
    duration: 2,
    // scale: 0.1,
    y: 300
})

gsap.from(" section.home .first .sales", {
    opacity: 0,
    duration: 2,
    // scale: 0.1,
    y: 200,
    stagger: 0.3
})
// gsap.from("section.home .second #gen",{
//     // scale:0.1,
//     // rotate:360,
//     // duration:5
//     x:-100,
//     scrollTrigger:{
//         trigger:" section.home.second #gen",
//         scroller:"body",
//         markers:true,
//         start:"top 20%",
//         end:"bottom 10%",
//         // scrub:5,
//         scrub:true

//     }
// })
