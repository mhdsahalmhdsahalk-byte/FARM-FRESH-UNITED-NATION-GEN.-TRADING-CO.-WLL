document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Header Scroll Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            header.style.padding = '5px 0';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
            header.style.padding = '0';
        }
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });

    // Scroll Animation (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Render 30 Products Dynamically
    const productsData = [
        { name: "Rocket", img: "assets/rocket_arugula_1774323536447.png" },
        { name: "Parsley", img: "assets/parsley_leaves_1774323558206.png" },
        { name: "Coriander", img: "assets/coriander_leaves_1774323574755.png" },
        { name: "Mint", img: "assets/mint_leaves_1774323590746.png" },
        { name: "Shabanth", img: "assets/dill_leaves_1774323609057.png" },
        { name: "Spinach", img: "assets/spinach.png" },
        { name: "Curry Leaves", img: "assets/curry_leaves.png" },
        { name: "SCRAPED COCONUT", img: "assets/scraped_coconut.png" }, 
        { name: "Drumstick Leaves", img: "assets/drumstick_leaves.png" },
        { name: "Lalshak (Cheera)", img: "assets/lalshak.png" },
        { name: "Green Shak", img: "assets/green_shak.png" },
        { name: "Rai-shak (Mustasa)", img: "assets/rai_shak.png" },
        { name: "Poysaag (m/s)", img: "assets/poysaag.png" },
        { name: "Molokhiya", img: "assets/molokhiya.png" },
        { name: "Peachay", img: "assets/Peachay.jpg" },
        { name: "Kangoone", img: "assets/water spinach.jpg" },
        { name: "Kangongur (Hambada Baji)", img: "assets/Kangongur (Hambada Baji).jpg" },
        { name: "Lady Finger", img: "assets/ledis finger.jpg" },
        { name: "Bitter Guard (Long)", img: "https://loremflickr.com/500/400/bitter,melon" },
        { name: "Bitter Guard (Small)", img: "assets/BitterGourd-Small.webp" },
        { name: "Lemon Grass", img: "assets/Lemon Grass.jpg" },
        { name: "Brinjal (Purple)", img: "assets/Brinjal (Purple).jpg" },
        { name: "Brinjal Star", img: "assets/Brinjal Star.webp" },
        { name: "Brinjal Green", img: "assets/Brinjal Green.webp" },
        { name: "Thoray", img: "https://loremflickr.com/500/400/ridge,gourd" },
        { name: "Dandool", img: "https://loremflickr.com/500/400/sponge,gourd" },
        { name: "Bad Badi (Long Beens)", img: "assets/Bad Badi (Long Beens).webp" },
        { name: "Long Kaddu", img: "assets/Long Kaddu.jpg" },
        { name: "Seem", img: "assets/Seem.webp" }
    ];

    const productsGrid = document.getElementById('dynamic-products-grid');
    if (productsGrid) {
        productsData.forEach((product, index) => {
            const delayClass = (index % 3 === 1) ? 'delay-1' : (index % 3 === 2) ? 'delay-2' : '';
            
            let visualHTML = '';
            if (product.img) {
                visualHTML = `<img src="${product.img}" alt="${product.name}">`;
            } else {
                visualHTML = `<div class="product-icon-bg"><i class="fa-solid ${product.icon}"></i></div>`;
            }

            const cardHTML = `
                <div class="product-card fade-up ${delayClass}">
                    <div class="product-img">
                        ${visualHTML}
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                    </div>
                </div>
            `;
            productsGrid.insertAdjacentHTML('beforeend', cardHTML);
        });

        // Re-observe newly injected elements for scroll animation
        const newFadeElements = productsGrid.querySelectorAll('.fade-up');
        newFadeElements.forEach(el => observer.observe(el));
    }

});
