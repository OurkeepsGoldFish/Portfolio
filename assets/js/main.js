/*============= MENU SHOW & HIDDEN =============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
/*============= MENU SHOW =============*/
/*Validate if constant exists*/
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});
}

/*============= MENU HIDDEN =============*/
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});
}

/*============= REMOVE MENU MOBILE =============*/

const navLink = document.querySelectorAll('.nav-link');

const linkAction =() => {
  const navMenu = document.getElementById('nav-menu');

  navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*============= CHANGE BACKGROUND HEADER =============*/
const scrollHeader = () => {
  const header = document.getElementById('header');

  window.scrollY >= 20 
    ? header.classList.add('scroll-header') 
    : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);

/*============= SCROLL SECTIONS ACTIVE LINK =============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']'
    );

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    }else {
      sectionClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive)

/*============= SCROLL ABOUT ANIMATION =============*/
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.text-gradient').forEach((span) => {
  gsap.to(span, {
    backgroundSize: '100% 100%',
    ease: 'none',
    scrollTrigger: {
      trigger: span,
      start: 'top bottom',
      end: 'top center',
      scrub: true,
    }
  })
});

/*============= DARK LIGHT THEME =============*/

window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    if(theme === 'light') {
      document.body.classList.add('light-theme');
      toggleBtn.classList.remove('ri-sun-line');toggleBtn.classList.add('ri-moon-line');
    } else {
      document.body.classList.remove('light-theme');
      toggleBtn.classList.add('ri-sun-line');toggleBtn.classList.remove('ri-moon-line');
    }

    localStorage.setItem('theme', theme)
  }

  const savedTheme = localStorage.getItem('theme') || 'dark'; applyTheme(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-theme');
    applyTheme(isLight ? 'dark' : 'light');
  });
});

/*============= MIXITUP FILTER PORTFOLIO =============*/
var mixer = mixitup('.work-container', {
  selectors: {
    target: '.mix',
  },
  animation: {
    duration: 300,
  },
});


/* Active work */

/*============= EMAIL JS =============*/

const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactMessage = document.getElementById('contact-message'),
message = document.getElementById('message');

const sendEmail = (e) => {
  e.preventDefault();


  if(
    contactName.value === '' || 
    contactEmail.value === '' || 
    contactMessage.value === ''
  ) {
   message.textContent = 'Fill up all the fields';

   setTimeout(() => {
    message.textContent = '';
   }, 3000);
  } else {
      emailjs
      .sendForm(
        'service_8bt8akq', 
        'template_bbuikbr', 
        '#contact-form', 
        'UAD5a48rFPLgFavcC')
        
      .then(
        () => {
          message.textContent = 'Message sent';

          setTimeout(() => {
            message.textContent = '';
          }, 5000);
       },
       (error) => {
         alert('Something Went Wrong!!!', error);
       }
      );
      contactName.value = '';
      contactEmail.value = '';
      contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);



/*============= SCROLL REVEAL ANIMATION =============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '16px',
  duration: 500,
  delay: 100,
  easing: 'ease-out',
  reset: false
});

/* ================= HOME ================= */
sr.reveal('.home-img-wrapper');

sr.reveal('.home-title', { delay: 120 });
sr.reveal('.home-job', { delay: 160 });
sr.reveal('.home-description', { delay: 200 });
sr.reveal('.button', { delay: 240 });

sr.reveal('.home-social-link', {
  interval: 70,
  delay: 260
});

/* ================= ABOUT ================= */
sr.reveal('.about-experience');
sr.reveal('.about-description', { delay: 120 });
sr.reveal('.about-item', { interval: 80, delay: 160 });

/* ================= SERVICES ================= */
sr.reveal('.services-card', {
  interval: 100
});

/* ================= SKILLS ================= */
sr.reveal('.skills-group');
sr.reveal('.skills-data', {
  interval: 80,
  delay: 120
});

/* ================= RESUME ================= */
sr.reveal('.resume-item', {
  interval: 120
});

/* ================= PORTFOLIO ================= */
sr.reveal('.work-item', {
  interval: 80
});

sr.reveal('.work-card', {
  interval: 120,
  delay: 100
});

/* ================= My Journey ================= */

/* LEFT SIDE ITEMS */
sr.reveal('.resume-item', {
  interval: 300
});

/* LEFT ITEMS */
sr.reveal('.resume-item:nth-of-type(odd)', {
  origin: 'left',
  distance: '40px'
});

/* RIGHT ITEMS */
sr.reveal('.resume-item:nth-of-type(even)', {
  origin: 'right',
  distance: '40px'
});

/* ================= FOOTER ================= */
sr.reveal('.footer-social, .footer-copyright', {
  delay: 120
});

/* ================= GLOBAL ================= */
sr.reveal('.section-title');