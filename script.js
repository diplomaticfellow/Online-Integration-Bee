document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.querySelector('.heroContainer');
    const video = document.getElementById('backgroundVideo');
    const typewriter = document.getElementById('typewriter');
    const text = "Online Integration Bee - 2024";
    let typewriterIndex = 0;

    // 3D effect on hero section
    document.addEventListener('mousemove', function (e) {
        const rect = heroContainer.getBoundingClientRect();
        const offsetX = (e.clientX - (rect.left + rect.width / 2)) / 20;
        const offsetY = (e.clientY - (rect.top + rect.height / 2)) / 20;

        heroContainer.style.transform = `rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
    });

    // Adjust video playback rate
    video.playbackRate = 1.5;

    // Typewriter effect for main heading
    function typeWriter() {
        if (typewriterIndex < text.length) {
            typewriter.innerHTML += text.charAt(typewriterIndex);
            typewriterIndex++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            const speed = 0.5;
            const yPos = -(window.scrollY * speed);
            section.style.backgroundPositionY = yPos + 'px';
        });
    });

    // Fade in elements as they come into view
    const fadeInElements = document.querySelectorAll('.fade-in');
    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    // Typewriter effect for section headings
    const headings = {
        'event-info-heading': "Event Information",
        'competition-rules-heading': "Competition Rules",
        'about-us-heading': "About Us",
        'organizing-staff-heading': "Organizing staff",
        'sponsors-heading': "Our Sponsors",
        'contact-us-heading': "Contact Us"
    };

    function typeHeading(headingId, text) {
        const heading = document.getElementById(headingId);
        let index = 0;

        function type() {
            if (index < text.length) {
                heading.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 100);
            } else {
                heading.style.borderRight = 'none';
            }
        }

        type();
    }

    // Intersection Observer for section headings
    const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.innerHTML === '') {
                typeHeading(entry.target.id, headings[entry.target.id]);
                headingObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe all section headings
    Object.keys(headings).forEach(headingId => {
        const heading = document.getElementById(headingId);
        if (heading) {
            headingObserver.observe(heading);
        }
    });
});
