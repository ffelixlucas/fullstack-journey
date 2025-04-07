// ===== CONSTANTES =====
const navToggle = document.getElementById('nav-toggle'),
      navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navLinks = document.querySelectorAll('.nav__link'),
      scrollUp = document.getElementById('scroll-up'),
      sections = document.querySelectorAll('section[id]');

// ===== MENU SHOW/HIDE =====
// Menu show
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hide
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking on nav links
function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(link => link.addEventListener('click', linkAction));

// ===== CHANGE BACKGROUND HEADER =====
function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// ===== SHOW SCROLL UP =====
function scrollUpShow() {
    if(this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUpShow);

// ===== SCROLL SECTIONS ACTIVE LINK =====
function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
              sectionTop = section.offsetTop - 50,
              sectionId = section.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// ===== SCROLL REVEAL ANIMATION =====
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal('.home__data, .home__social, .home__image');
sr.reveal('.about__image, .about__content', {origin: 'left'});
sr.reveal('.skills__content, .projects__container, .contact__content', {interval: 100});
sr.reveal('.soft-skills__card', {interval: 100, origin: 'bottom'});

// ===== ANIMAÇÃO DE DIGITAÇÃO =====
const typed = new Typed('.home__subtitle', {
    strings: ['Desenvolvedor Full Stack', 'Solucionador de Problemas', 'Apaixonado por Tecnologia'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// ===== ANIMAÇÃO DE PARTICULAS =====
particlesJS('home', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ff4d4d"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ff4d4d",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// ===== FORMULÁRIO DE CONTATO =====
const contactForm = document.querySelector('.contact__form'),
      contactName = document.getElementById('name'),
      contactEmail = document.getElementById('email'),
      contactSubject = document.getElementById('subject'),
      contactMessage = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validação simples
    if(contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Simulação de envio
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    contactForm.reset();
});

// ===== ANIMAÇÃO AO ROLAR =====
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Executa uma vez ao carregar a página