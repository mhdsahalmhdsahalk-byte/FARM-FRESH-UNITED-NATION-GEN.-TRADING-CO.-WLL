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
        { name: "Spinach", icon: "fa-leaf" },
        { name: "Spring Onion", img: "assets/spring_onion_1774323624797.png" },
        { name: "Curry Leaves", icon: "fa-leaf" },
        { name: "SCRAPED COCONUT", icon: "fa-bowl-rice" }, /* Using a bowl/nature icon as fallback */
        { name: "Drumstick Leaves", icon: "fa-leaf" },
        { name: "Lalshak (Cheera)", icon: "fa-leaf" },
        { name: "Green Shak", icon: "fa-leaf" },
        { name: "Rai-shak (Mustasa)", icon: "fa-leaf" },
        { name: "Poysaag (m/s)", icon: "fa-leaf" },
        { name: "Molokhiya", icon: "fa-leaf" },
        { name: "Peachay", icon: "fa-leaf" },
        { name: "Kangoone", icon: "fa-leaf" },
        { name: "Kangongur (Hambada Baji)", icon: "fa-leaf" },
        { name: "Lady Finger", icon: "fa-pepper-hot" },
        { name: "Bitter Guard (Long)", icon: "fa-carrot" },
        { name: "Bitter Guard (Small)", icon: "fa-carrot" },
        { name: "Lemon Grass", icon: "fa-seedling" },
        { name: "Brinjal (Purple)", icon: "fa-apple-whole" },
        { name: "Brinjal Star", icon: "fa-apple-whole" },
        { name: "Brinjal Green", icon: "fa-apple-whole" },
        { name: "Thoray", icon: "fa-seedling" },
        { name: "Dandool", icon: "fa-seedling" },
        { name: "Bad Badi (Long Beens)", icon: "fa-carrot" },
        { name: "Long Kaddu", icon: "fa-carrot" },
        { name: "Seem", icon: "fa-seedling" }
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
