const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 30));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 70);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.addEventListener('mousemove', e => {
  const glow = document.querySelector('.cursor-glow');
  glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px';
});
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.navbar .nav-link').forEach(link => link.addEventListener('click', () => {
  const menu = document.getElementById('menu');
  if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));
