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
        { nameEn: "Rocket", nameAr: "(جرجير)", img: "assets/rocket_arugula_1774323536447.png" },
        { nameEn: "Parsley", nameAr: "(بقدونس)", img: "assets/parsley_leaves_1774323558206.png" },
        { nameEn: "Coriander", nameAr: "(كزبرة)", img: "assets/coriander_leaves_1774323574755.png" },
        { nameEn: "Mint", nameAr: "(نعناع)", img: "assets/mint_leaves_1774323590746.png" },
        { nameEn: "Shabanth", nameAr: "(شبت)", img: "assets/dill_leaves_1774323609057.png" },
        { nameEn: "Spinach", nameAr: "(سبانخ)", img: "assets/spinach.png" },
        { nameEn: "Curry Leaves", nameAr: "(أوراق الكاري)", img: "assets/curry_leaves.png" },
        { nameEn: "SCRAPED COCONUT", nameAr: "(جوز الهند المبشور)", img: "assets/scraped_coconut.png" },
        { nameEn: "Drumstick Leaves", nameAr: "(أوراق المورينجا)", img: "assets/drumstick_leaves.png" },
        { nameEn: "Lalshak (Cheera)", nameAr: "(لالشاك (شيرا))", img: "assets/lalshak.png" },
        { nameEn: "Green Shak", nameAr: "(شاك أخضر)", img: "assets/green_shak.png" },
        { nameEn: "Rai-shak (Mustasa)", nameAr: "(راي-شاك (مستاسا))", img: "assets/rai_shak.png" },
        { nameEn: "Poysaag (m/s)", nameAr: "(بويساج)", img: "assets/poysaag.png" },
        { nameEn: "Molokhiya", nameAr: "(ملوخية)", img: "assets/molokhiya.png" },
        { nameEn: "Peachay", nameAr: "(بيتشاي)", img: "assets/Peachay.jpg" },
        { nameEn: "Kangoone", nameAr: "(كانجون)", img: "assets/water spinach.jpg" },
        { nameEn: "Kangongur (Hambada Baji)", nameAr: "(كانجونجور (هامبادا باجي))", img: "assets/Kangongur (Hambada Baji).jpg" },
        { nameEn: "Lady Finger", nameAr: "(بامية)", img: "assets/ledis finger.jpg" },
        { nameEn: "Bitter Guard (Long)", nameAr: "(قرع مر (طويل))", img: "assets/Bitter Guard (Long).webp" },
        { nameEn: "Bitter Guard (Small)", nameAr: "(قرع مر (صغير))", img: "assets/BitterGourd-Small.webp" },
        { nameEn: "Lemon Grass", nameAr: "(عشب الليمون)", img: "assets/Lemon Grass.jpg" },
        { nameEn: "Brinjal (Purple)", nameAr: "(باذنجان (بنفسجي))", img: "assets/Brinjal (Purple).jpg" },
        { nameEn: "Brinjal Star", nameAr: "(باذنجان نجمي)", img: "assets/Brinjal Star.webp" },
        { nameEn: "Brinjal Green", nameAr: "(باذنجان أخضر)", img: "assets/Brinjal Green.webp" },
        { nameEn: "Thoray", nameAr: "(ثوراي)", img: "assets/Thoray.jpg" },
        { nameEn: "Dandool", nameAr: "(داندول)", img: "assets/Dandool.webp" },
        { nameEn: "Bad Badi (Long Beens)", nameAr: "(باد بادي (فاصوليا طويلة))", img: "assets/Bad Badi (Long Beens).webp" },
        { nameEn: "Long Kaddu", nameAr: "(كادو طويل)", img: "assets/Long Kaddu.jpg" },
        { nameEn: "Seem", nameAr: "(سيم)", img: "assets/Seem.webp" }
    ];

    const productsGrid = document.getElementById('dynamic-products-grid');
    if (productsGrid) {
        productsData.forEach((product, index) => {
            const delayClass = (index % 3 === 1) ? 'delay-1' : (index % 3 === 2) ? 'delay-2' : '';
            
            let visualHTML = '';
            if (product.img) {
                visualHTML = `<img src="${product.img}" alt="${product.nameEn}">`;
            } else {
                visualHTML = `<div class="product-icon-bg"><i class="fa-solid ${product.icon}"></i></div>`;
            }

            const cardHTML = `
                <div class="product-card fade-up ${delayClass}">
                    <div class="product-img">
                        ${visualHTML}
                    </div>
                    <div class="product-info" style="text-align: center;">
                        <h3 style="margin-bottom: 5px;">${product.nameEn}</h3>
                        <h4 style="color: var(--primary-green); font-size: 1.1rem; font-weight: bold;">${product.nameAr}</h4>
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
