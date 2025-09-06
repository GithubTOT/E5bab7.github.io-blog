
// Year
const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();
// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', ()=>{
  const open = mobileMenu.hasAttribute('hidden');
  mobileMenu.toggleAttribute('hidden');
  menuBtn.setAttribute('aria-expanded', String(open));
});
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
