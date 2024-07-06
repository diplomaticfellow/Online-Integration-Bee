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
});

// Add this to your existing JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // ... (keep your existing code)

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
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (keep your existing code)

    // Typewriter effect
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

    // ... (keep the rest of your existing code)
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (keep your existing code)

    // Typewriter effect for Event Information
    const eventInfoHeading = document.getElementById('event-info-heading');
    const eventInfoText = "Event Information";
    let eventInfoIndex = 0;

    function typeEventInfo() {
        if (eventInfoIndex < eventInfoText.length) {
            eventInfoHeading.innerHTML += eventInfoText.charAt(eventInfoIndex);
            eventInfoIndex++;
            setTimeout(typeEventInfo, 100); // Adjust the speed here (lower number = faster)
        } else {
            // Remove the border-right to stop the blinking effect
            eventInfoHeading.style.borderRight = 'none';
        }
    }

    // Intersection Observer for Event Information section
    const eventInfoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && eventInfoIndex === 0) {
                typeEventInfo();
                eventInfoObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    eventInfoObserver.observe(document.getElementById('event-info'));

    // ... (keep the rest of your existing code)
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (keep your existing code)

    // Typewriter effect for Competition Rules
    const competitionRulesHeading = document.getElementById('competition-rules-heading');
    const competitionRulesText = "Competition Rules";
    let competitionRulesIndex = 0;

    function typeCompetitionRules() {
        if (competitionRulesIndex < competitionRulesText.length) {
            competitionRulesHeading.innerHTML += competitionRulesText.charAt(competitionRulesIndex);
            competitionRulesIndex++;
            setTimeout(typeCompetitionRules, 100); // Adjust the speed here (lower number = faster)
        } else {
            // Remove the border-right to stop the blinking effect
            competitionRulesHeading.style.borderRight = 'none';
        }
    }

    // Intersection Observer for Competition Rules section
    const competitionRulesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && competitionRulesIndex === 0) {
                typeCompetitionRules();
                competitionRulesObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    competitionRulesObserver.observe(document.querySelector('.competition-rules'));

    // ... (keep the rest of your existing code)
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (keep your existing code)

    // Typewriter effect for About Us
    const aboutUsHeading = document.getElementById('about-us-heading');
    const aboutUsText = "About Us";
    let aboutUsIndex = 0;

    function typeAboutUs() {
        if (aboutUsIndex < aboutUsText.length) {
            aboutUsHeading.innerHTML += aboutUsText.charAt(aboutUsIndex);
            aboutUsIndex++;
            setTimeout(typeAboutUs, 100); // Adjust the speed here (lower number = faster)
        } else {
            // Remove the border-right to stop the blinking effect
            aboutUsHeading.style.borderRight = 'none';
        }
    }

    // Intersection Observer for About Us section
    const aboutUsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && aboutUsIndex === 0) {
                typeAboutUs();
                aboutUsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    aboutUsObserver.observe(document.getElementById('about-us'));

    // ... (keep the rest of your existing code)
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (keep your existing code)

    // Typewriter effect for Organizing Committee
    const organizingCommitteeHeading = document.getElementById('organizing-committee-heading');
    const organizingCommitteeText = "Organizing Committee";
    let organizingCommitteeIndex = 0;

    function typeOrganizingCommittee() {
        if (organizingCommitteeIndex < organizingCommitteeText.length) {
            organizingCommitteeHeading.innerHTML += organizingCommitteeText.charAt(organizingCommitteeIndex);
            organizingCommitteeIndex++;
            setTimeout(typeOrganizingCommittee, 100); // Adjust the speed here (lower number = faster)
        } else {
            // Remove the border-right to stop the blinking effect
            organizingCommitteeHeading.style.borderRight = 'none';
        }
    }

    // Intersection Observer for Organizing Committee section
    const organizingCommitteeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && organizingCommitteeIndex === 0) {
                typeOrganizingCommittee();
                organizingCommitteeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    organizingCommitteeObserver.observe(document.getElementById('organizing-committee-heading'));

    // ... (keep the rest of your existing code)
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (keep your existing code)

    // Typewriter effect for Sponsors
    const sponsorsHeading = document.getElementById('sponsors-heading');
    const sponsorsText = "Our Sponsors";
    let sponsorsIndex = 0;

    function typeSponsors() {
        if (sponsorsIndex < sponsorsText.length) {
            sponsorsHeading.innerHTML += sponsorsText.charAt(sponsorsIndex);
            sponsorsIndex++;
            setTimeout(typeSponsors, 100); // Adjust the speed here (lower number = faster)
        } else {
            // Remove the border-right to stop the blinking effect
            sponsorsHeading.style.borderRight = 'none';
        }
    }

    // Intersection Observer for Sponsors section
    const sponsorsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && sponsorsIndex === 0) {
                typeSponsors();
                sponsorsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sponsorsObserver.observe(document.getElementById('sponsors'));

    // ... (keep the rest of your existing code)
});