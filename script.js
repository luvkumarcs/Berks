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


gsap.to("section.home .first img", {
    scale: 1.2,
    duration: 5,

})

gsap.from(" section.home .first h2", {
    opacity: 0,
    duration: 2,
    y: 300
})

gsap.from(" section.home .first .sales", {
    opacity: 0,
    duration: 2,
    y: 200,
    stagger: 0.3
})

gsap.from("section.about .container #out", {
    opacity: 0,
    duration: 2,
    x: -250,
    scrollTrigger: "section.about .container #out",
})

gsap.from("section.about .container #in", {
    opacity: 0,
    duration: 2,
    y: 250,
    scrollTrigger: "section.about .container #in",
})

gsap.from("section.about .container #intl", {
    opacity: 0,
    duration: 2,
    y: -250,
    scrollTrigger: "section.about .container #intl",
})

gsap.from("section.about .container #appt", {
    opacity: 0,
    duration: 2,
    x: 250,
    scrollTrigger: "section.about .container #appt",
})

gsap.from("section.carrier #unique", {
    opacity: 0,
    duration: 2,
    x: 250,
    scrollTrigger: "section.carrier #unique",
})

gsap.from("section.carrier #ambassadors", {
    opacity: 0,
    duration: 2,
    x: -250,
    scrollTrigger: "section.carrier #ambassadors",
})

gsap.from("section.carrier #fit", {
    opacity: 0,
    duration: 2,
    x: 250,
    scrollTrigger: "section.carrier #fit",
})

gsap.from("section.contact .client #chris ", {
    opacity: 0,
    duration: 2,
    x: -250,
    scrollTrigger: "section.contact .client #chris ",
})

gsap.from("section.contact .client #ken ", {
    opacity: 0,
    scale: 0,
    duration: 3,
    scrollTrigger: "section.contact .client #ken ",
})

gsap.from("section.contact .client #dave ", {
    opacity: 0,
    duration: 2,
    x: 250,
    scrollTrigger: "section.contact .client #dave ",
})

gsap.from("section.carrier .icon-container .icon", {
    opacity: 0,
    duration: 2,
    x: -250,
    stagger: 0.3,
    scrollTrigger: "section.carrier .icon-container .icon",
})

gsap.from("section.carrier .icon-container .tick", {
    opacity: 0,
    duration: 2,
    x: -250,
    stagger: 0.3,
    scrollTrigger: "section.carrier .icon-container .icon",
})

// ------------------------------for about section-------------------------

gsap.from("section.about .team_member .ben", {
    opacity: 0,
    duration: 2,
    x: -250,
    // stagger: 0.3,
    scrollTrigger: "section.about .team_member .ben",
})

gsap.from("section.about .team_member .cody", {
    opacity: 0,
    scale: 0,
    duration: 3,
    // x:-250,
    // stagger: 0.3,
    scrollTrigger: "section.about .team_member .cody",
})

gsap.from("section.about .team_member .nadeem", {
    opacity: 0,
    duration: 2,
    x: 250,
    // stagger: 0.3,
    scrollTrigger: "section.about .team_member .nadeem",
})


// ------------------------------------------for carreer page-------------------------

const accordians = document.querySelectorAll(".accordian");

accordians.forEach((accordian) => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {
        answer.classList.toggle('deactive');
        icon.classList.toggle('deactive');
    })

})


