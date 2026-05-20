/* Happy Preschool Land — Scripts */
document.addEventListener('DOMContentLoaded', () => {
    const t = document.getElementById('mobileToggle'), n = document.getElementById('navLinks');
    t.addEventListener('click', () => { t.classList.toggle('active'); n.classList.toggle('active'); });
    n.querySelectorAll('a').forEach(l => l.addEventListener('click', () => { t.classList.remove('active'); n.classList.remove('active'); }));
    const nb = document.getElementById('navbar');
    window.addEventListener('scroll', () => nb.classList.toggle('scrolled', window.scrollY > 10));
    document.getElementById('enrollForm').addEventListener('submit', e => {
        e.preventDefault(); const b = e.target.querySelector('button[type="submit"]'), o = b.textContent;
        b.textContent = 'Sending...'; b.disabled = true;
        setTimeout(() => { b.textContent = '✓ Tour Requested!'; b.style.background = '#22C55E'; b.style.borderColor = '#22C55E';
            setTimeout(() => { b.textContent = o; b.style.background = ''; b.style.borderColor = ''; b.disabled = false; e.target.reset(); }, 3000);
        }, 1500);
    });
    document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { const el = document.querySelector(a.getAttribute('href')); if (el) { e.preventDefault(); window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); } }); });
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; obs.unobserve(e.target); } }); }, { threshold: 0.1 });
    document.querySelectorAll('.program-card, .why-card, .review-card').forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; obs.observe(el); });
    const mc = document.getElementById('mobileCta');
    if (mc && window.innerWidth <= 768) { mc.style.transition = 'transform 0.3s ease'; mc.style.transform = 'translateY(100%)'; window.addEventListener('scroll', () => { mc.style.transform = window.scrollY > 300 ? 'translateY(0)' : 'translateY(100%)'; }); }
    console.log('✅ Happy Preschool Land — Demo Loaded');
});
