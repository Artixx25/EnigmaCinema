// loader
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
      mask.remove();
   }, 400);
});

// faq

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// img 

$("#see-full").on('click', function(){
    $(".cent").animate({opacity: '1'});
    $(".cent").css('display', 'block');
})

$("#close").on('click', function(){
    $(".cent").css('display', 'none');
    $(".cent").animate({opacity: '0'});
})