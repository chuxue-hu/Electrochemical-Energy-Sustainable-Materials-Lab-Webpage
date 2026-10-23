const instituteLogoUrl = new URL('logo/IAMPE_logo_transparent.png', document.currentScript.src).href;

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.querySelector('.institute-link')) {
        const instituteLink = document.createElement('a');
        instituteLink.className = 'institute-link';
        instituteLink.href = 'https://iapme.um.edu.mo/';
        instituteLink.target = '_blank';
        instituteLink.rel = 'noopener noreferrer';
        instituteLink.title = 'Institute of Applied Physics and Materials Engineering';
        instituteLink.setAttribute('aria-label', 'IAPME homepage');
        const instituteLogo = document.createElement('img');
        instituteLogo.src = instituteLogoUrl;
        instituteLogo.alt = 'IAPME';
        instituteLink.appendChild(instituteLogo);
        navbar.appendChild(instituteLink);
    }
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (!menuBtn || !navLinks) return;

    if (!navLinks.id) navLinks.id = 'site-nav-links';
    menuBtn.type = 'button';
    menuBtn.setAttribute('aria-controls', navLinks.id);
    menuBtn.setAttribute('aria-expanded', 'false');

    function setMenuOpen(isOpen) {
        navLinks.classList.toggle('active', isOpen);
        menuBtn.setAttribute('aria-expanded', String(isOpen));
    }

    menuBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        setMenuOpen(!navLinks.classList.contains('active'));
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('click', function(event) {
        if (!(event.target instanceof Element) || !event.target.closest('.navbar')) {
            setMenuOpen(false);
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') setMenuOpen(false);
    });
});
