// Change active scroll point on scrollbar.
const sections = document.querySelectorAll('section');
const topDot = document.querySelectorAll('.scroll-item')[0];
const middleDot = document.querySelectorAll('.scroll-item')[1];
const bottomDot = document.querySelectorAll('.scroll-item')[2];
const options = {
  root: null,
  threshold: 0,
  rootMargin: '-40%'
};
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.target.id === "profile" && entry.isIntersecting === true) {
      middleDot.classList.remove('active');
      bottomDot.classList.remove('active');
      topDot.setAttribute('class', 'scroll-item active');
    }
    if (entry.target.id === "research" && entry.isIntersecting === true) {
      topDot.classList.remove('active')
      bottomDot.classList.remove('active')
      middleDot.setAttribute('class', 'scroll-item active');
    }
    if (entry.target.id === "contact" && entry.isIntersecting === true) {
      topDot.classList.remove('active')
      middleDot.classList.remove('active')
      bottomDot.setAttribute('class', 'scroll-item active');
    }
  })
}, options);
sections.forEach(section => {
  observer.observe(section);
})