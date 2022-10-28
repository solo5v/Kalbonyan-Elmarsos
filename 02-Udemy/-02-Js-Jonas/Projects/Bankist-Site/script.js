'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));
;

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



//////////////////////
  // LECTURES
//////////////////////

//  Selecting, Creating, and Deleting Elements
// Selecting;
// console.log(document.documentElement); // => Html-NODE;
// console.log(document.head); // => head-NODE;
// console.log(document.body); // => body-NODE;

// get ELEMENTS by class name;
const btns   = document.getElementsByClassName("btn"); // => HTMLCollection

// get ELEMENT by  querySelector;
const header = document.querySelector(".header");


// get ELEMENTs by  querySelector;
const allSection = document.querySelectorAll(".section"); // => NodeList;


// get ELEMENT by  id;
// const section1 = document.getElementById('section--1')


// get ELEMENTs by tagName;
const  allBtns = document.getElementsByTagName('button'); //=> HTMLCollection

// console.log(allBtns);


// CREATING AND INSERTING ELEMENTS;

// .insertAdjacentHTML;

const msg = document.createElement('div');
      msg.classList.add('cookie-message');

// ADD text Content
// msg.textContent = `We use cookied for imporved functinoality and analytics`;

// ADD text Content BY INNER HTML

msg.innerHTML = `We use cookied for imporved functinoality and analytics <button class="btn btn--close--cookie">Got it!</button>`;

// -----.prepend-----INNER--------.append----
// APPEND A CHILD NODE INSIDE THE PARAENT ELEMENT 
// after || before child of the parent element;
// header.prepend(msg); // in the first child (before);
header.append(msg); // in the last child (after);
// -------------------------------------------

// -----.before-----OUTER--------.after----
// APPEND a NODE BEFORE A SPECIFIC ELEMENT OR AFTER;
// header.before(msg); 
// header.after(msg);

// DELETE ELEMENT

const deleteBtnCookie = document.querySelector('.btn--close--cookie');
      deleteBtnCookie.addEventListener('click', function () {
            msg.remove();
      });

// STYLES
msg.style.backgroundColor = '#37383d';
msg.style.width = '120%';
msg.style.position = 'sticky';

// console.log(msg.style.color); // => empty;
// console.log(msg.style.backgroundColor); // => rgb(55, 56, 61)

// console.log(getComputedStyle(msg).color) // => the current color
// console.log(getComputedStyle(msg).height) // => the current color



msg.style.height = Number.parseInt(
  getComputedStyle(msg).height, 10
) + 30 + 'px';


// ATTRIBUTES;
const logo =  document.querySelector('.nav__logo');
            // console.log(logo.alt);
            // console.log(logo.className);
            logo.alt = 'Beautiful minimalist logo';


// NOn- standard;
// console.log(logo.designer);  // undefiend;
// console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist');

// console.log(logo.src);// URL
// console.log(logo.getAttribute('src')); ///www.#####.####

const link = document.querySelector('.nav__link--btn');

// console.log(link.href);  // URL
// console.log(link.getAttribute('href')); // www.#####.####

// Data attributes;
// console.log(logo.dataset.versionNumber)


// CLASSES;

logo.classList.add('c','j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// DON'T USE; IT WILL OVERRIDE THE EXISTING CLASSES
// logo.className  =' joj';

/*-------------------------------*/
// Implementing Smooth Scrolling
/*-------------------------------*/

const btnScroll = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");


// console.log(section1.getBoundingClientRect());
// console.log(window.pageYOffset);
// console.log(window.pageXOffset);

// // WIDHT / HEIGHT VIEWPORT
// console.log(document.documentElement.clientHeight)
// console.log(document.documentElement.clientWidth)


// SCROOLING;
btnScroll.addEventListener('click', function() {

    const s1coords = section1.getBoundingClientRect();

    // WITH OLD WAY
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // )

  //  TO SMOOTHING;
  
    window.scrollTo({
      left: s1coords.left + window.pageXOffset,
      top:   s1coords.top + window.pageYOffset,
      behavior: "smooth",
    });


    // WITH MODERN WAY; with modern browser;

    section1.scrollIntoView({behavior: "smooth"})
  
});

/*-------------------------------*/
// Event Delegation: Implementing Page Navigation
/*-------------------------------*/

// const navLinks = document.querySelectorAll('.nav__link'); // => NODELIST;

// navLinks.forEach((el) => {

//   el.addEventListener('click', function (e) {

//       e.preventDefault();
//       const id = this.getAttribute('href');
      
//       document.querySelector(id)
//       .scrollIntoView({behavior: "smooth"});
//     })
// })


const ulLinks = document.querySelector('.nav__links')
      .addEventListener('click', function(e) {

        e.preventDefault();    
        // MATHCHING STRATEGY;
        if(e.target.classList.contains('nav__link')) {

          const id = e.target.getAttribute('href');
          document.querySelector(id)
                  .scrollIntoView({behavior: "smooth"});
        };
});

/*-------------------------------*/
// --Building a Tabbed Component--
/*-------------------------------*/

const tabs = document
      .querySelectorAll(".operations__tab");

const tabsContainer = document
      .querySelector('.operations__tab-container');

const tabsContent = document
      .querySelectorAll('.operations__content');


// EVENTS DELEGATINO. best pracitce;

tabsContainer.addEventListener('click', function(e) {

    const clikced = e.target.closest('.operations__tab'); // => tab-BTNS


      // GURAD CLAUSE;
        if (!clikced) return;

        
        
        tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));


        
        // ACTIVE TAB
      clikced.classList.add('operations__tab--active');

      // ACIVATE CONTENT AREA;
      document.querySelector(`.operations__content--${clikced.dataset.tab}`)
              .classList.add('operations__content--active');

})


/*-------------------------------*/
//    --MENU FADE ANIMATION--
/*-------------------------------*/
const nav = document.querySelector(".nav");


// HANDELR FUNCTION;
const handelHover = function (e) {

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    })

    logo.style.opacity = this;
  }
};


nav.addEventListener('mouseover', handelHover.bind(.5))

nav.addEventListener('mouseout', handelHover.bind(1))


// nav.addEventListener('mouseover', function (e) {

//     if (e.target.classList.contains('nav__link')) {
//       const link = e.target;
//       const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//       const logo = link.closest('.nav').querySelector('img');

//       siblings.forEach(el => {
//         if(el !== link) el.style.opacity = .5;
//       })

//       logo.style.opacity = .5;
//     }
// })

// nav.addEventListener('mouseout', function (e) {

//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if(el !== link) el.style.opacity = 1;
//     })

//     logo.style.opacity = 1;
//   }
// })


/*-------------------------------*/
//    -- Sticky Navigation --
/*-------------------------------*/

// const initialCoords = section1.getBoundingClientRect();


// window.addEventListener('scroll', function() {
  
//   if (window.scrollY > initialCoords.top)
//       nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })



/*-------------------------------*/
// -- The Intersection Observer API --
/*-------------------------------*/


const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);


/*-------------------------------*/
//-- Revealing Elements on Scroll --
/*-------------------------------*/
const revealSection = function (entries, observer) {

  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.observe(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: .15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
});



//  Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;


  if (!entry.isIntersecting) return;

  // replace src with data-src;

  entry.target.src = entry.target.dataset.src;


  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target)
}



const imgObserver = new IntersectionObserver(loadImg, {
  root: null, 
  threshold: 0,
  rootMargin: '200px',
})

imgTargets.forEach(img => imgObserver.observe(img))



// . Building a Slider Component



const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();




















/*-------------------------------*/
// Types of Events and Event Handlers
/*-------------------------------*/

// const h1 = document.querySelector('h1');

// // h1.onmouseenter = _ => alert('onmouseenter: Great It\'s work');

// // const alertH1 = (e) => alert('addEventListener: Greate It\'s work');

// // h1.addEventListener('mouseenter', alertH1)


// // setTimeout(_ => h1.removeEventListener('mouseenter', alertH1), 5000)


/*-------------------------------*/
// Event Propagation in Practice
/*-------------------------------*/
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();


//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });


/*-----------------*/
// DOM Traversing
/*-----------------*/
/*
const h1 = document.querySelector('h1');

// GOING DOWNWARDS: (child);


console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white';


// GOING UPWARDS: PARENTS;
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// GOING SIDEWAYS: (siblings);

console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)


console.log(h1.previousSibling);
console.log(h1.nextSibling);



[...h1.parentElement.children].forEach(function(el) {
  if (el !== h1) el.style.transform = 'scale(.5)';
})
*/


