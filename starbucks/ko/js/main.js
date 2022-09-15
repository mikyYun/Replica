const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", () => {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})
window.addEventListener("scroll", _.throttle(() => {
  if (window.scrollY > 500) {
    /** USE gsap */
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: "none"
    });
    /** SHOW BUTTON */
    gsap.to(toTopEl, .2, {
      x: 0
    })
    } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: "block"
    });
    /** HIDE BUTTON */
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));



const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
  speed: 700
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next"
  }
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next"
  }
})

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  isHidePromotion ? promotionEl.classList.add("hide") : promotionEl.classList.remove("hide");
});

function floatingObj(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObj(".floating1", 1, 15)
floatingObj(".floating2", .5, 15)
floatingObj(".floating3", 1.5, 20)

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

const spyEls =  document.querySelectorAll("section.scroll-spy")
spyEls.forEach(el => {
  new ScrollMagic
    .Scene({
      triggerElement: el,
      triggerHook: .8
    })
    .setClassToggle(el, "show")
    .addTo(new ScrollMagic.Controller());
})

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();