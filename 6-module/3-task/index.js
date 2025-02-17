import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem;
    this.CreateSlides();
    this.initCarousel();
  }
  CreateSlides() {
    this.elem = document.createElement("div")
    this.elem.classList.add("carousel")
      this.elem.insertAdjacentHTML("beforeend",
      `
      <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
      ${this.slides.map(({name, price, image, id})=> `
      <div class="carousel__slide" data-id="${id}">
  <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${price.toFixed(2)}</span>
    <div class="carousel__title">${name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>`
  ).join("")}
    </div>
    `);
    document.body.append(this.elem)
  }

  initCarousel() {
    const carousel = document.querySelector('.carousel');
    let carouselInner = carousel.querySelector(".carousel__inner");
    let carouselSlide = carousel.querySelector(".carousel__slide");
    const buttonRight = carousel.querySelector('.carousel__arrow_right');
    const buttonLeft = carousel.querySelector('.carousel__arrow_left');
    let countSlide = carousel.children.length;
    let slidewidth = carouselSlide.offsetWidth;
    let count = 0;
    console.log(slidewidth)
    console.log(carousel.clientWidth)


    buttonLeft.style.display = "none";

    carousel.addEventListener("click", (event)=> {
      if (event.target.className === "carousel__arrow carousel__arrow_right") {

        if (countSlide > 0 && countSlide < 4) {
          countSlide--;
          count -= slidewidth;
          carouselInner.style.transform = `translateX(${count}px)`;
          return;
        }
      }
      else if (event.target.className === "carousel__arrow carousel__arrow_left") {

        if (countSlide >= 0 && countSlide < 3) {
          countSlide++;
          count += slidewidth;
          carouselInner.style.transform = `translateX(${count}px)`;
          return;
        }
      }
    });
  }
  }

