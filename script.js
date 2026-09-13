const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menu = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
  const open = links.style.display === 'flex';
  links.style.display = open ? '' : 'flex';
  if (!open) {
    links.style.position = 'absolute';
    links.style.top = '78px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.padding = '20px 6%';
    links.style.background = '#080808';
    links.style.flexDirection = 'column';
  }
});
