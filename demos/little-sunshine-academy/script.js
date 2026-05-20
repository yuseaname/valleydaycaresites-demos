/* Magnolia Woodman Child Care — Scripts */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const toggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('navLinks');
    toggle.addEventListener('click', () => { toggle.classList.toggle('active'); nav.classList.toggle('active'); });
    nav.querySelectorAll('a').forEach(l => l.addEventListener('click', () => { toggle.classList.remove('active'); nav.classList.remove('active'); }));

    // Sticky nav
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 10));

    // Form
    document.getElementById('enrollForm').addEventListener('submit', e => {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        const orig = btn.textContent;
        btn.textContent = 'Sending...'; btn.disabled = true;
        setTimeout(() => {
            btn.textContent = '✓ Visit Requested!'; btn.style.background = '#22C55E'; btn.style.borderColor = '#22C55E';
            setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.style.borderColor = ''; btn.disabled = false; e.target.reset(); }, 3000);
        }, 1500);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const t = document.querySelector(a.getAttribute('href'));
            if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); }
        });
    });

    // Scroll animations
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; obs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.enrichment-card, .program-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        obs.observe(el);
    });

    // Mobile CTA
    const mcta = document.getElementById('mobileCta');
    if (mcta && window.innerWidth <= 768) {
        mcta.style.transition = 'transform 0.3s ease'; mcta.style.transform = 'translateY(100%)';
        window.addEventListener('scroll', () => { mcta.style.transform = window.scrollY > 300 ? 'translateY(0)' : 'translateY(100%)'; });
    }

    // Tour date min
    const d = document.getElementById('tourDate');
    if (d) { const t = new Date(); t.setDate(t.getDate() + 1); d.min = t.toISOString().split('T')[0]; }

    console.log('✅ Magnolia Woodman Child Care — Demo Loaded');
});
