// loader
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
      mask.remove();
   }, 400);
});


// language
$(document).ready(function() {

   $('.ukr').on('click', function() {
      let r = $('.localization').each(function() {
         let el = $(this);
         let key = (el.attr('caption'));
         el.text(ukr[key]);
      });
   });


   $('.eng').on('click', function() {
      let r = $('.localization').each(function() {
         let el = $(this);
         let key = (el.attr('caption'));
         el.text(eng[key]);
      });
   });



   let ukr = {
      home: 'Головна',
      about: 'Про нас',
      contact: 'Контакти',
      lang: 'МОВА',
      ukr: 'Українська',
      eng:'Англійська',
      pol:'Польська',
   };
   let eng = {
     home: 'Home',
     about: 'About',
     contact: 'Contact',
     lang: 'LANGUAGE',
     ukr:'Ukrainian',
     eng:'English',
     pol:'Polish',
   };

});


// скролы
window.addEventListener ("scroll", function(){
   let header = document.querySelector ("header");
   header.classList.toggle("sticky", window.scrollY > 100);
 })

window.addEventListener ("scroll", function(){
   let hamburger = document.querySelector ("span");
   hamburger.classList.toggle("sticky", window.scrollY > 0);
 })

$(document).ready(function(){

 $('#main-navigation-toggle').click(function() {
   $('body').toggleClass('no-scroled');
 })

});




//  carusel - news

$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

// email

$('.a_email').on('mouseenter mouseleave', function(e) {
  var text = e.type === 'mouseleave' 
             ? '[email protected]'
             : 'officalwoolf@gmail.com';
  
  $('span', this).stop().hide().text(text).fadeIn();
});

// typing text

const text = document.querySelector('.typing-text');

const words = [
  "Films.",
  "Cartoons.",
  "Anime.",
  "Serials."
];

setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}
