
const track = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.dot');


dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    const cardWidth = document.querySelector('.carousel-card').offsetWidth + 20; // 20px for margin
    track.style.transform = `translateX(-${index * cardWidth}px)`;
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});


window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNavbar');
  const scrollThreshold = 100; // Adjust this value as needed
  
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add('fixed-navbar', 'active');
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
  } else {
    navbar.classList.remove('fixed-navbar', 'active');
    document.body.style.paddingTop = 0;
  }
});


window.addEventListener('resize', function() {
  const navbar = document.getElementById('mainNavbar');
  if (navbar.classList.contains('fixed-navbar')) {
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
  }
});