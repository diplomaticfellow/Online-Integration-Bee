document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.querySelector('.heroContainer');
    const video = document.getElementById('backgroundVideo');
    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date('2024-12-31T00:00:00').getTime();

    // 3D effect on hero section
    document.addEventListener('mousemove', function (e) {
        const rect = heroContainer.getBoundingClientRect();
        const offsetX = (e.clientX - (rect.left + rect.width / 2)) / 20;
        const offsetY = (e.clientY - (rect.top + rect.height / 2)) / 20;

        heroContainer.style.transform = `rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
    });

    // Adjust video playback rate
    video.playbackRate = 1.5;

    // Countdown timer
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Event starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Event has started!";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

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

    // Toggle mobile menu
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰';
    document.querySelector('nav').appendChild(menuToggle);

    const navList = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Close mobile menu when a link is clicked
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
        });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.button-3d, nav ul li a');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 1000);
        });
    });

    // Add hover effect to navigation buttons
    const navButtons = document.querySelectorAll('nav ul li a');

    navButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animate buttons on scroll
    const animateButtons = () => {
        const buttons = document.querySelectorAll('.button-3d');
        buttons.forEach(button => {
            const buttonTop = button.getBoundingClientRect().top;
            const buttonBottom = button.getBoundingClientRect().bottom;
            if (buttonTop < window.innerHeight && buttonBottom > 0) {
                button.style.opacity = '1';
                button.style.transform = 'translateY(0)';
            } else {
                button.style.opacity = '0';
                button.style.transform = 'translateY(20px)';
            }
        });
    };

    window.addEventListener('scroll', animateButtons);
    animateButtons(); // Call once to check initial state

    // Typewriter effect for main heading
    const typewriter = document.getElementById('typewriter');
    const text = "Online Integration Bee - 2024";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriter.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust the speed here (lower number = faster)
        }
    }

    typeWriter();

    // Typewriter effect for Event Information
    const eventInfoHeading = document.getElementById('event-info-heading');
    const eventInfoText = "Event Information";
    let eventInfoIndex = 0;

    function typeEventInfo() {
        if (eventInfoIndex < eventInfoText.length) {
            eventInfoHeading.innerHTML += eventInfoText.charAt(eventInfoIndex);
            eventInfoIndex++;
            setTimeout(typeEventInfo, 100);
        } else {
            eventInfoHeading.style.borderRight = 'none';
        }
    }

    // Typewriter effect for Competition Rules
    const competitionRulesHeading = document.getElementById('competition-rules-heading');
    const competitionRulesText = "Competition Rules";
    let competitionRulesIndex = 0;

    function typeCompetitionRules() {
        if (competitionRulesIndex < competitionRulesText.length) {
            competitionRulesHeading.innerHTML += competitionRulesText.charAt(competitionRulesIndex);
            competitionRulesIndex++;
            setTimeout(typeCompetitionRules, 100);
        } else {
            competitionRulesHeading.style.borderRight = 'none';
        }
    }

    // Typewriter effect for About Us
    const aboutUsHeading = document.getElementById('about-us-heading');
    const aboutUsText = "About Us";
    let aboutUsIndex = 0;

    function typeAboutUs() {
        if (aboutUsIndex < aboutUsText.length) {
            aboutUsHeading.innerHTML += aboutUsText.charAt(aboutUsIndex);
            aboutUsIndex++;
            setTimeout(typeAboutUs, 100);
        } else {
            aboutUsHeading.style.borderRight = 'none';
        }
    }

    // Typewriter effect for Organizing staff
    const organizingStaffHeading = document.getElementById('organizing-staff-heading');
    const organizingStaffText = "Organizing staff";
    let organizingStaffIndex = 0;

    function typeOrganizingStaff() {
        if (organizingStaffIndex < organizingStaffText.length) {
            organizingStaffHeading.innerHTML += organizingStaffText.charAt(organizingStaffIndex);
            organizingStaffIndex++;
            setTimeout(typeOrganizingStaff, 100);
        } else {
            organizingStaffHeading.style.borderRight = 'none';
        }
    }

    // Typewriter effect for Sponsors
    const sponsorsHeading = document.getElementById('sponsors-heading');
    const sponsorsText = "Our Sponsors";
    let sponsorsIndex = 0;

    function typeSponsors() {
        if (sponsorsIndex < sponsorsText.length) {
            sponsorsHeading.innerHTML += sponsorsText.charAt(sponsorsIndex);
            sponsorsIndex++;
            setTimeout(typeSponsors, 100);
        } else {
            sponsorsHeading.style.borderRight = 'none';
        }
    }

    // Typewriter effect for Contact Us
    const contactUsHeading = document.getElementById('contact-us-heading');
    const contactUsText = "Contact Us";
    let contactUsIndex = 0;

    function typeContactUs() {
        if (contactUsIndex < contactUsText.length) {
            contactUsHeading.innerHTML += contactUsText.charAt(contactUsIndex);
            contactUsIndex++;
            setTimeout(typeContactUs, 100);
        } else {
            contactUsHeading.style.borderRight = 'none';
        }
    }

    // Intersection Observers for all sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                switch(entry.target.id) {
                    case 'event-info':
                        if (eventInfoIndex === 0) typeEventInfo();
                        break;
                    case 'competition-rules':
                        if (competitionRulesIndex === 0) typeCompetitionRules();
                        break;
                    case 'about-us':
                        if (aboutUsIndex === 0) typeAboutUs();
                        break;
                    case 'organizing-staff-heading':
                        if (organizingStaffIndex === 0) typeOrganizingStaff();
                        break;
                    case 'sponsors':
                        if (sponsorsIndex === 0) typeSponsors();
                        break;
                    case 'contact-us':
                        if (contactUsIndex === 0) typeContactUs();
                        break;
                }
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe all sections
    document.querySelectorAll('.content-section').forEach(section => {
        sectionObserver.observe(section);
    });
    sectionObserver.observe(document.getElementById('organizing-staff-heading'));
});
