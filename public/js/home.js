// Change active scroll point on click.
$('.scroll-item').last().on('click', function() {
  $('.scroll-item').first().removeClass('active');
  $('nav').addClass('hide');
  $(this).addClass('active');
});
$('.scroll-item').first().on('click', function() {
  $('.scroll-item').last().removeClass('active');
  $('nav').removeClass('hide');
  $(this).addClass('active');
});

// Change active scroll point on scroll.
const workSection = document.getElementById('work-section');
const sections = document.querySelectorAll('section');
const topDot = document.querySelectorAll('.scroll-item')[0];
const bottomDot = document.querySelectorAll('.scroll-item')[1];

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-40%'
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.target.id === "greeting-section" && entry.isIntersecting === true) {
      bottomDot.classList.remove('active')
      topDot.setAttribute('class', 'scroll-item active');
    }
    if (entry.target.id === "work-section" && entry.isIntersecting === true) {
      topDot.classList.remove('active')
      bottomDot.setAttribute('class', 'scroll-item active');
    }
  })
}, options);

sections.forEach(section => {
  observer.observe(section);
})