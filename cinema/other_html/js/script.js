// loader
let mask = document.querySelector('.mask');
let body = document.getElementsByTagName('body');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
      mask.remove();
  }, 100);
});


// language
$(document).ready(function() {

  $('.ukr').on('click', function() {
      let r = $('.lang-change').each(function() {
        let el = $(this);
        let key = (el.attr('caption'));
        el.text(ukr[key]);
      });
  });


  $('.eng').on('click', function() {
      let r = $('.lang-change').each(function() {
        let el = $(this);
        let key = (el.attr('caption'));
        el.text(eng[key]);
      });
  });

  $('.pol').on('click', function() {
    let r = $('.lang-change').each(function() {
      let el = $(this);
      let key = (el.attr('caption'));
      el.text(pol[key]);
    });
});



  let ukr = {
      home: 'Головна',
      film: 'Фільми',
      Cart: 'Мультфільми',
      Anim: 'Аніме',
      Seria: 'Серіали',
      Spider: 'Spider-Man: без дороги додому',
      Star: 'В головних ролях:',
      Starsman: 'Том Харді, Вуді Гаррельсон, Мішель Вільямс.',
      Genr: 'Жанри:',
      genreman: 'Бойовик, Пригоди, Фентезі.',
      tagg: 'Тег:',
      opisspide: 'Коли особу Людини-павука тепер розкрито, Пітер просить Доктора Стренджа про допомогу. Коли заклинання йде не так, починають з’являтися небезпечні вороги з інших світів, що змушує Пітера дізнатися, що насправді означає бути Людиною-павуком.',
      trillwtch: 'Переглянути трейлер',
      attentionf: 'якщо ваш фільм не завантажується, оновіть сторінку або натисніть - ',
      ahrfilmatt: 'що робити?',
  };
  let eng = {
    home: 'Home',
    film: 'Films',
    Cart: 'Cartoons',
    Anim: 'Anime',
    Seria: 'Serials',
    Spider: 'Spider-Man: No Way Home',
    Star: 'Starring:',
    Starsman: 'Tom Hardy, Woody Harrelson, Michelle Williams.',
    Genr: 'Genres:',
    genreman: 'Action, Adventure, Fantasy.',
    tagg: 'Tag:',
    opisspide: 'With Spider-Man`s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',
    trillwtch: 'Watch Trailer',
    attentionf: 'if your movie is not loading, refresh the page or click - ',
    ahrfilmatt: 'what to do?',
  };

   let pol = {
    home: 'Główna',
    film: 'Filmy',
    Cart: 'Kreskówki',
    Anim: 'Anime',
    Seria: 'Seriali',
    Spider: 'Spider-Man: Bez drogi do domu',
    Star: 'W roli głównej:',
    Starsman: 'Tom Hardy, Woody Harrelson, Michelle Williams.',
    Genr: 'Gatunek:',
    genreman: 'Akcja, przygoda, fantazja.',
    tagg: 'Tag:',
    opisspide: 'Po ujawnieniu tożsamości Spider-Mana Peter prosi Doktora Strange o pomoc. Kiedy zaklęcie się nie udaje, zaczynają pojawiać się niebezpieczni wrogowie z innych światów, zmuszając Petera do odkrycia, co to naprawdę znaczy być Spider-Manem.',
    trillwtch: 'Oglądać zwiastun',
    attentionf: 'jeśli film się nie ładuje, odśwież stronę lub kliknij - ',
    ahrfilmatt: 'co zrobić?',
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

  // best films


(function($) { "use strict";



//Switch light/dark

$(".switch").on('click', function () {
  if ($("body").hasClass("light")) {
    $("body").removeClass("light");
    $(".switch").removeClass("switched");
  }
  else {
    $("body").addClass("light");
    $(".switch").addClass("switched");
  }
});

$(document).ready(function() {	
  
  /* Hero Case study images */			
  
  $('.slide-buttons li:nth-child(1)').on('mouseenter', function() {
    $('.slide-buttons li.activee').removeClass('activee');
    $('.hero-center-section.showw').removeClass("showw");
    $('.hero-center-section:nth-child(1)').addClass("showw");
    $('.slide-buttons li:nth-child(1)').addClass('active');
  })

  $('.slide-buttons li:nth-child(2)').on('mouseenter', function() {
    $('.slide-buttons li.activee').removeClass('activee');
    $('.hero-center-section.showw').removeClass("showw");
    $('.hero-center-section:nth-child(2)').addClass("showw");
    $('.slide-buttons li:nth-child(2)').addClass('active');
  })

  $('.slide-buttons li:nth-child(3)').on('mouseenter', function() {
    $('.slide-buttons li.activee').removeClass('activee');
    $('.hero-center-section.showw').removeClass("showw");
    $('.hero-center-section:nth-child(3)').addClass("showw");
    $('.slide-buttons li:nth-child(3)').addClass('active');
  })

  $('.slide-buttons li:nth-child(4)').on('mouseenter', function() {
    $('.slide-buttons li.activee').removeClass('activee');
    $('.hero-center-section.showw').removeClass("showw");
    $('.hero-center-section:nth-child(4)').addClass("showw");
    $('.slide-buttons li:nth-child(4)').addClass('active');
  })

  $('.slide-buttons li:nth-child(1)').trigger('mouseenter')   
  
});

})(jQuery); 

  $(".notification").hide(100);

 $('#main-navigation-toggle').click(function() {
   $('body').toggleClass('no-scroled');
 })

  $(".fav_btn").click(function() {
    $('body').addClass('no-scroled');
      $(".overlay").click(function(){
        $('body').removeClass('no-scroled');
    });
  })


// Warning
    $(".Warning").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".warning-f").css('display', 'flex');
      $(".warning-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".warning-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    // vesper
    $(".Vesper").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".vesper-f").css('display', 'flex');
      $(".vesper-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".vesper-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

// prey
    $(".Prey").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".prey-f").css('display', 'flex');
      $(".prey-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".prey-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

// Contractor
    $(".Contractor").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".contractor-f").css('display', 'flex');
      $(".contractor-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".contractor-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    // Black-Widow
    $(".Black-Widow").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".black-f").css('display', 'flex');
      $(".black-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".black-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    // Requin
    $(".Requin").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".requin-f").css('display', 'flex');
      $(".requin-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".requin-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    //Thor
    $(".Thor").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".thor-f").css('display', 'flex');
      $(".thor-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".thor-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    $(".tor-tit-btn").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".thor-f").css('display', 'flex');
      $(".thor-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".thor-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    // shan-chi
    $(".Shan-chi").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".shan-f").css('display', 'flex');
      $(".shan-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".shan-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    // Triumph
    $(".Triumph").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".tri-f").css('display', 'flex');
      $(".tri-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".tri-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    // Hocus
    $(".Hocus-Pocus").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".hoc-f").css('display', 'flex');
      $(".hoc-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".hoc-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    // Takedown
    $(".Takedown").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".take-f").css('display', 'flex');
      $(".take-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".take-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

// venom
    $(".VENOM").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".veno-f").css('display', 'flex');
      $(".veno-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".veno-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    // Dune
    $(".Dune").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".dun-f").css('display', 'flex');
      $(".dun-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".dun-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    // massive Talent
    $(".Massive").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".mass-f").css('display', 'flex');
      $(".mass-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".mass-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })



// Matrix Resurrections
    $(".Matrix").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".matr-f").css('display', 'flex');
      $(".matr-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".matr-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })


    // Scream 2022
    $(".Scream").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".screm-f").css('display', 'flex');
      $(".screm-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".screm-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })


    // Home Alone 1
    $(".Home-Alone-1").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".homa-f").css('display', 'flex');
      $(".homa-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".homa-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

// Doctor Strange 2
    $(".Doctor-Strange").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".Doctor-f").css('display', 'flex');
      $(".Doctor-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".Doctor-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })


    // Free Guy
    $(".Free-Guy").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".Guy-f").css('display', 'flex');
      $(".Guy-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".Guy-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })


// space jam
    $(".Space-Jam").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".spa-f").css('display', 'flex');
      $(".spa-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".spa-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })


// Home Alone 2
    $(".Home-Alone-2").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".homa2-f").css('display', 'flex');
      $(".homa2-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".homa2-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })


// finch
    $(".Finch").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".fin-f").css('display', 'flex');
      $(".fin-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".fin-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })


// avrangers
    $(".Avengers").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".avg-f").css('display', 'flex');
      $(".avg-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".avg-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })


    $(".avg-film-btn-show").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".avg-f").css('display', 'flex');
      $(".avg-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".avg-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })


    // Good Boys
    $(".Good-boys").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".Boy-f").css('display', 'flex');
      $(".Boy-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".Boy-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    // Mass
    $(".Mass").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".mass2-f").css('display', 'flex');
      $(".mass2-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".mass2-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

        // Identifying
        $(".Identifying").click(function() {
          $(".first-vid-cont").css('display', 'flex');
          $(".Identifying-f").css('display', 'flex');
          $(".Identifying-t").css('display', 'flex');
          setTimeout(function () {
            $(".first-vid-cont").animate({opacity: '1'});
            $(".Identifying-f").animate({opacity: '1'});
            }, 100);
    
          $('body').addClass('no-scroled');
          $(overlay).addClass("show");
        })

            // Alley
    $(".Alley").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".Alley-f").css('display', 'flex');
      $(".Alley-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".Alley-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

                // Parallel Mothers
    $(".Mothers").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".Mothers-f").css('display', 'flex');
      $(".Mothers-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".Mothers-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })


                // Cyrano
    $(".Cyrano").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".Cyrano-f").css('display', 'flex');
      $(".Cyrano-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".Cyrano-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

                    // Alley
    $(".Jock").click(function() {
      $(".first-vid-cont").css('display', 'flex');
      $(".Jockey-f").css('display', 'flex');
      $(".Jockey-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-cont").animate({opacity: '1'});
        $(".Jockey-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

    





    // up block films

    // Jackass Forever

    $(".first-best-b").click(function() {
      $(".first-vid-contt").css('display', 'flex');
      $(".Brian-f").css('display', 'flex');
      $(".Brian-t").css('display', 'flex');
      setTimeout(function () {
        $(".first-vid-contt").animate({opacity: '1'});
        $(".Brian-f").animate({opacity: '1'});
        }, 100);

      $('body').addClass('no-scroled');
      $(overlay).addClass("show");
    })

// Maverick

$(".second-best-b").click(function() {
  $(".first-vid-contt").css('display', 'flex');
  $(".Maverick-f").css('display', 'flex');
  $(".Maverick-t").css('display', 'flex');
  setTimeout(function () {
    $(".first-vid-contt").animate({opacity: '1'});
    $(".Maverick-f").animate({opacity: '1'});
    }, 100);

  $('body').addClass('no-scroled');
  $(overlay).addClass("show");
})

// Good Boss

$(".third-best-b").click(function() {
  $(".first-vid-contt").css('display', 'flex');
  $(".Boss-f").css('display', 'flex');
  $(".Boss-t").css('display', 'flex');
  setTimeout(function () {
    $(".first-vid-contt").animate({opacity: '1'});
    $(".Boss-f").animate({opacity: '1'});
    }, 100);

  $('body').addClass('no-scroled');
  $(overlay).addClass("show");
})

// Dinner

$(".fours-best-b").click(function() {
  $(".first-vid-contt").css('display', 'flex');
  $(".Dinner-f").css('display', 'flex');
  $(".Dinner-t").css('display', 'flex');
  setTimeout(function () {
    $(".first-vid-contt").animate({opacity: '1'});
    $(".Dinner-f").animate({opacity: '1'});
    }, 100);

  $('body').addClass('no-scroled');
  $(overlay).addClass("show");
})


// end inter
































    // back-btn
    $(".back-go-btn-f").click(function() {

      setTimeout(function () {
      $(".first-vid-cont").css('display', 'none');
      $("iframe").css('display', 'none');
      $(".xsxsfasf").css('display', 'none');
      $(".first-vid-contt").css('display', 'none');
    }, 300);

        $(".first-vid-cont").animate({opacity: '0'});
        $(".first-vid-contt").animate({opacity: '0'});
      $('body').removeClass('no-scroled');
      $(overlay).removeClass("show");
    })

    $(".All-f").click(function(){
      $(".action").show(300);
      $(".action").css('display', '');
      $(".Fantasy").show(300);
      $(".Fantasy").css('display', '');
      $(".Horror").show(300);
      $(".Horror").css('display', '');
      $(".comedy").show(300);
      $(".comedy").css('display', '');
      $(".Drama").show(300);
      $(".Drama").css('display', '');
      $(".Documentary").show(300);
        $(".Documentary").css('display', '');
      $(".All-f").css('border-bottom', '2px solid #fff');
      $(".Action-f").css('border-bottom', 'none');
      $(".Horror-f").css('border-bottom', 'none');
      $(".Fantasy-f").css('border-bottom', 'none');
      $(".Comedy-f").css('border-bottom', 'none');
      $(".Drama-f").css('border-bottom', 'none');
      $(".Documentary-f").css('border-bottom', 'none');
    })


    $(".Action-f").click(function(){
      if ($(".box-photo").hasClass("action")) {
        $(".action").show(300);
        $(".action").css('display', '');
        $(".Fantasy").hide(300);
        $(".Fantasy").css('display', 'none');
        $(".Horror").hide(300);
        $(".Horror").css('display', 'none');
        $(".comedy").hide(300);
        $(".comedy").css('display', 'none');
        $(".Drama").hide(300);
        $(".Drama").css('display', 'none');
        $(".Documentary").css('display', 'none');
        $(".Documentary").hide(300);
        $(".Action-f").css('border-bottom', '2px solid #fff');
        $(".Horror-f").css('border-bottom', 'none');
        $(".Fantasy-f").css('border-bottom', 'none');
        $(".Comedy-f").css('border-bottom', 'none');
        $(".All-f").css('border-bottom', 'none');
        $(".Drama-f").css('border-bottom', 'none');
        $(".Documentary-f").css('border-bottom', 'none');
      }else{
          alert("ja daun&")
      }
    })

    $(".Fantasy-f").click(function(){
      if ($(".box-photo").hasClass("Fantasy")) {
        $(".Fantasy").show(300);
        $(".Fantasy").css('display', '');
        $(".action").hide(300);
        $(".action").css('display', 'none');
        $(".Horror").hide(300);
        $(".Horror").css('display', 'none');
        $(".comedy").hide(300);
        $(".comedy").css('display', 'none');
        $(".Drama").hide(300);
        $(".Drama").css('display', 'none');
        $(".Documentary").css('display', 'none');
        $(".Documentary").hide(300);
        $(".Fantasy-f").css('border-bottom', '2px solid #fff');
        $(".Horror-f").css('border-bottom', 'none');
        $(".Comedy-f").css('border-bottom', 'none');
        $(".Action-f").css('border-bottom', 'none');
        $(".All-f").css('border-bottom', 'none');
        $(".Drama-f").css('border-bottom', 'none');
        $(".Documentary-f").css('border-bottom', 'none');
      }else{
          alert("ja daun&")
      }
    })

    $(".Horror-f").click(function(){
      if ($(".box-photo").hasClass("Horror")) {
        $(".Horror").show(300);
        $(".Horror").css('display', '');
        $(".action").hide(300);
        $(".action").css('display', 'none');
        $(".Fantasy").hide(300);
        $(".Fantasy").css('display', 'none');
        $(".comedy").hide(300);
        $(".comedy").css('display', 'none');
        $(".Drama").hide(300);
        $(".Drama").css('display', 'none');
        $(".Documentary").css('display', 'none');
        $(".Documentary").hide(300);
        $(".Horror-f").css('border-bottom', '2px solid #fff');
        $(".Comedy-f").css('border-bottom', 'none');
        $(".Fantasy-f").css('border-bottom', 'none');
        $(".Action-f").css('border-bottom', 'none');
        $(".All-f").css('border-bottom', 'none');
        $(".Drama-f").css('border-bottom', 'none');
        $(".Documentary-f").css('border-bottom', 'none');
      }else{
          alert("ja daun&")
      }
    })

    $(".Comedy-f").click(function(){
      if ($(".box-photo").hasClass("comedy")) {
        $(".comedy").show(300);
        $(".comedy").css('display', '');
        $(".action").hide(300);
        $(".action").css('display', 'none');
        $(".Fantasy").hide(300);
        $(".Fantasy").css('display', 'none');
        $(".Horror").hide(300);
        $(".Horror").css('display', 'none');
        $(".Drama").hide(300);
        $(".Drama").css('display', 'none');
        $(".Documentary").css('display', 'none');
        $(".Documentary").hide(300);
        $(".Comedy-f").css('border-bottom', '2px solid #fff');
        $(".Horror-f").css('border-bottom', 'none');
        $(".Fantasy-f").css('border-bottom', 'none');
        $(".Action-f").css('border-bottom', 'none');
        $(".All-f").css('border-bottom', 'none');
        $(".Drama-f").css('border-bottom', 'none');
        $(".Documentary-f").css('border-bottom', 'none');
      }else{
          alert("ja daun&")
      }
    })

    $(".Drama-f").click(function(){
      if ($(".box-photo").hasClass("Drama")) {
        $(".Drama").show(300);
        $(".Drama").css('display', '');
        $(".action").hide(300);
        $(".action").css('display', 'none');
        $(".Fantasy").hide(300);
        $(".Fantasy").css('display', 'none');
        $(".Horror").hide(300);
        $(".Horror").css('display', 'none');
        $(".comedy").hide(300);
        $(".Documentary").css('display', 'none');
        $(".Documentary").hide(300);
        $(".comedy").css('display', 'none');
        $(".Comedy-f").css('border-bottom', 'none');
        $(".Horror-f").css('border-bottom', 'none');
        $(".Fantasy-f").css('border-bottom', 'none');
        $(".Action-f").css('border-bottom', 'none');
        $(".All-f").css('border-bottom', 'none');
        $(".Documentary-f").css('border-bottom', 'none');
        $(".Drama-f").css('border-bottom', '2px solid #fff');
      }else{
          alert("ja daun&")
      }
    })

    $(".Documentary-f").click(function(){
      if ($(".box-photo").hasClass("Documentary")) {
        $(".Documentary").show(300);
        $(".Documentary").css('display', '');
        $(".action").hide(300);
        $(".action").css('display', 'none');
        $(".Fantasy").hide(300);
        $(".Fantasy").css('display', 'none');
        $(".Horror").hide(300);
        $(".Horror").css('display', 'none');
        $(".Drama").hide(300);
        $(".Drama").css('display', 'none');
        $(".comedy").hide(300);
        $(".comedy").css('display', 'none');
        $(".Comedy-f").css('border-bottom', 'none');
        $(".Horror-f").css('border-bottom', 'none');
        $(".Fantasy-f").css('border-bottom', 'none');
        $(".Action-f").css('border-bottom', 'none');
        $(".All-f").css('border-bottom', 'none');
        $(".Drama-f").css('border-bottom', 'none');
        $(".Documentary-f").css('border-bottom', '2px solid #fff');
      }else{
          alert("ja daun&")
      }
    })
});



// search

const search = () => {
  const searchbox = document.getElementById("searchbox").value.toUpperCase();
  const filmitem = document.getElementById("film-list")
  const film = document.querySelectorAll(".box-photo")
  const filmname = filmitem.getElementsByTagName("h3")

  for (var i = 0; i < filmname.length; i++) {
    let match = film[i].getElementsByTagName('h3')[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        film[i].style.display = "";
      } else {
        film[i].style.display = "none";
      }
    }
  }
}


// favorite list


// Photo Data

let photoData = [
  {
    imgUrl: "https://m.media-amazon.com/images/M/MV5BYmEzYjE0NGQtZTg1Ni00NDFmLWExZDYtNTZjNDdlMmE3NWFiXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_.jpg",
    title: "Warning (2021)",
    addClass: "Warning",
    classNames: ("action"),
    liked: false,
    id: 1
  },
  {
    imgUrl: "https://m.media-amazon.com/images/M/MV5BYTFhM2FkNDUtYzU1Mi00ZTUxLWE1MTMtYjMwOWU4YTZhZDVhXkEyXkFqcGdeQXVyMjQ1MzM3MDM@._V1_.jpg",
    title: "Vesper (2022)",
    addClass: "Vesper",
    classNames: ("Drama"),
    liked: false,
    id: 2
  },
  
  {
    imgUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Prey-poster_1654881818.jpg",
    title: "Prey Movie (2022)",
    addClass: "Prey",
    classNames: ("Drama"),
    liked: false,
    id: 3
  },
  {
    imgUrl: "https://m.media-amazon.com/images/M/MV5BOWQ3MDg1MTgtMmI4ZC00YjU3LWIyZGEtNmRkNzI0Y2QyN2ExXkEyXkFqcGdeQXVyNzgzODI1OTE@._V1_.jpg",
    title: "Contractor (2022)",
    addClass: "Contractor",
    classNames: ("action"),
    liked: false,
    id: 4
  },
  {
    imgUrl:"https://n1s1.hsmedia.ru/1e/d6/bd/1ed6bd973f727bac5b3b5684d401aba3/728x1078_1_30921bc46619db445dd4b19ecd64102a@1688x2500_0xac120003_12000686941608908419.jpg", 
    title: "Black x Widow",
    addClass: "Black-Widow",
    classNames: ("action"),
    liked: false,
    id: 5
  },
  {
    imgUrl: "https://images.squarespace-cdn.com/content/v1/61ddbfe6d9f29c244b990a0c/2148d69a-1711-4031-8d9b-f555c7dd0a98/MV5BYzc4YmU5YzEtY2I3Yi00OGMxLTgzZmMtMTExNDFhMDI4NjhjXkEyXkFqcGdeQXVyMTY5Nzc4MDY%40._V1_+%282%29.jpg",
    title: "The Requin (2022)",
    addClass: "Requin",
    classNames: ("Horror"),
    liked: false,
    id: 6
  },
  {
    imgUrl: "https://cdn1.naekranie.pl/wp-content/uploads/2022%2F06%2Fthor_62a7593c425db.jpeg",
    title: "Thor: Love and Thunder (2022)",
    addClass: "Thor",
    classNames: ("action"),
    liked: false,
    id: 7
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/ru/5/5c/%D0%A8%D0%B0%D0%BD-%D0%A7%D0%B8_%D0%BE%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
    title: "Шан-Чи легенда 10 колец",
    addClass: "Shan-chi",
    classNames: ("action"),
    liked: false,
    id: 8
  },
  {
    imgUrl: "https://www.kinonews.ru/insimgs/2021/poster/poster102802_1.jpg",
    title: "Triumph (2021)",
    addClass: "Triumph",
    classNames: ("Drama"),
    liked: false,
    id: 9
  },
  {
    imgUrl: "https://www.gamespot.com/a/uploads/scale_medium/1562/15626911/4004371-3.jpg",
    title: "Hocus Pocus 2",
    addClass: "Hocus-Pocus",
    classNames: ("comedy"),
    liked: false,
    id: 10
  },
  {
    imgUrl: "https://www.naijaprey.com/wp-content/uploads/2022/05/The-Takedown.jpg",
    title: " Takedown (2022)",
    addClass: "Takedown 2",
    classNames: ("comedy"),
    liked: false,
    id: 11
  },
  {
    imgUrl: "https://thequorum.com/wp-content/uploads/2021/10/venom_let_there_be_carnage_ver4.jpg",
    title: "Venom 2: Carnage (2021)",
    addClass: "VENOM",
    classNames: ("action"),
    liked: false,
    id: 12
  },

  {
    imgUrl: "http://www.multiplexalbenga.it/media/content/3494/Dune-2020.jpg",
    title: "Dune (2021)",
    addClass: "Dune",
    classNames: ("Fantasy"),
    liked: false,
    id: 13
  },
  {
    imgUrl: "https://lightbox-prod.imgix.net/images/assets/100328810-8084581-The_Unbearable_Weight_Massive_Talent_2022_CA1.jpg",
    title: "Massive Talent (2022)",
    addClass: "Massive",
    classNames: ("comedy"),
    liked: false,
    id: 14
  },
  
  {
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    title: "The Matrix Resurrections",
    addClass: "Matrix",
    classNames: ("Fantasy"),
    liked: false,
    id: 15
  },
  {
    imgUrl: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/01/04164606/MV5BZGRjNzdiMjMtYTE5Ny00MjcxLWI0ZjktZGY4NGE2ZDMwMTFjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_-703x1024.jpg",
    title: "Scream Movie",
    addClass: "Scream",
    classNames: ("Horror"),
    liked: false,
    id: 16
  },
  {
    imgUrl:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ca0e3aff104ed30a7ff826243a50b7fbd978a97a3a2e797b2fe903511b13784d._RI_V_TTW_.jpg", 
    title: "Home Alone 1",
    addClass: "Home-Alone-1",
    classNames: ("action"),
    liked: false,
    id: 17
  },
  {
    imgUrl: "https://rytmy.pl/wp-content/uploads/2022/04/FPn5XwMVgAE8v2x-e1649413554350.jpg",
    title: "Doctor Strange 2",
    addClass: "Doctor-Strange",
    classNames: ( "action"),
    liked: false,
    id: 18
  },
  {
    imgUrl: "https://fwcdn.pl/fpo/82/06/828206/7969398.3.jpg",
    title: "Free Guy (2021)",
    addClass: "Free-Guy",
    classNames: ("comedy"),
    liked: false,
    id: 19
  },
  {
    imgUrl: "https://media.pathe.nl/nocropthumb/620x955/gfx_content/Space-Jam-A-New-Legacy-OV-_ps_1_jpg_sd-high_Copyright-2021-Warner-Bros-Entertainment-Inc-All-Rights-Reserved.jpg",
    title: "Space Jam (2021)",
    addClass: "Space-Jam",
    classNames: ("comedy"),
    liked: false,
    id: 20
  },
  {
    imgUrl: "https://lumiere-a.akamaihd.net/v1/images/homealone2_7706aa6d.jpeg",
    title: "Home Alone 2",
    addClass: "Home-Alone-2",
    classNames: ("Fantasy"),
    liked: false,
    id: 21
  },
  {
    imgUrl: "https://csn.naekranie.pl/wp-content/uploads/2021/09/finch_614f46007302b.jpeg",
    title: "Finch (2021)",
    addClass: "Finch",
    classNames: ("Fantasy"),
    liked: false,
    id: 22
  },
  {
    imgUrl: "https://www.kibrispdr.org/data/8/avengers-endgame-poster-hd-2.jpg",
    title: " Avengers Endgame",
    addClass: "Avengers",
    classNames: ("Fantasy"),
    liked: false,
    id: 23
  },
  {
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTc1NjIzODAxMF5BMl5BanBnXkFtZTgwMTgzNzk1NzM@._V1_.jpg",
    title: "Good boys",
    addClass: "Good-boys",
    classNames: ("Fantasy"),
    liked: false,
    id: 24
  },
  {
    imgUrl: "https://www.cinemaclock.com/images/posters/1000x1500/88/mass-2021-poster.jpg",
    title: "Mass (2021)",
    addClass: "Mass",
    classNames: ("action"),
    liked: false,
    id: 25
  },
  {
    imgUrl: "https://m.media-amazon.com/images/I/71l866XBtPL._RI_.jpg",
    title: "Identifying Features",
    addClass: "Identifying",
    classNames: ("action"),
    liked: false,
    id: 26
  },
  
  {
    imgUrl: "https://lumiere-a.akamaihd.net/v1/images/pp_nightmarealley_22529_1120c0ed.jpeg",
    title: "Nightmare Alley",
    addClass: "Alley",
    classNames: ("Fantasy"),
    liked: false,
    id: 27
  },
  {
    imgUrl: "https://npr.brightspotcdn.com/59/fa/f439652e41ccb15cb7eb56912f15/parallel-mothers-movie-poster.jpg",
    title: "Parallel Mothers",
    addClass: "Mothers",
    classNames: ("action"),
    liked: false,
    id: 28
  },
  {
    imgUrl:"https://filmynadzis.pl/wp-content/uploads/2022/04/7999349.3.jpg", 
    title: "Cyrano (2021)",
    addClass: "Cyrano",
    classNames: ("Horror"),
    liked: false,
    id: 29
  },
  {
    imgUrl: "https://m.media-amazon.com/images/M/MV5BNTljZTY0NWYtMDE0Ny00M2RmLTk1M2UtMzg5NjVhY2RiZjk4XkEyXkFqcGdeQXVyNTE4MDAyNzE@._V1_FMjpg_UX1000_.jpg",
    title: "Jockey (2021)",
    addClass: "Jock",
    classNames: ("comedy"),
    liked: false,
    id: 30
  },
  {
    imgUrl: "https://static.kinoafisha.info/k/movie_posters/1080x1920/upload/movie_posters/0/4/4/8364440/283979921653468614.jpg",
    title: "Хороший, плохой, коп",
    addClass: "good-bad",
    classNames: ("action"),
    liked: false,
    id: 31
  },
  {
    imgUrl: "https://i1.fdbimg.pl/x1/cx70em12/1200x1739_qi51iq.jpg",
    title: "Nine Days (2020)",
    addClass: "Days",
    classNames: ("Horror"),
    liked: false,
    id: 32
  },
  {
    imgUrl: "https://pics.filmaffinity.com/The_Card_Counter-664730287-large.jpg",
    title: "The Card Counter (2021)",
    addClass: "Counter",
    classNames: ("Horror"),
    liked: false,
    id: 33
  },
  {
    imgUrl: "https://kulturaupodstaw.pl/wp-content/uploads/2021/08/coda_plakat1.jpg",
    title: "CODA (2021)",
    addClass: "COD",
    classNames: ("comedy"),
    liked: false,
    id: 34
  },
  {
    imgUrl: "https://cdn1.naekranie.pl/media/cache/amp/2021/07/reen_60e41d93665ba.jpeg",
    title: "The Green Knight",
    addClass: "Knight",
    classNames: ("comedy"),
    liked: false,
    id: 35
  },
  {
    imgUrl: "https://rytmy.pl/wp-content/uploads/2021/09/Licorice-Pizza-plakat-692x1024.jpeg",
    title: "Licorice Pizza",
    addClass: "Pizza",
    classNames: ("Horror"),
    liked: false,
    id: 36
  },

  {
    imgUrl: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/3c82c67bdbb947b8ed57ee9f4c89531bfc755426839b8598c275c799591c1288._RI_V_TTW_.jpg",
    title: "Spider-Man: No Way Home",
    addClass: "Spider-Man",
    classNames: ("action"),
    liked: false,
    id: 37
  },
  {
    imgUrl: "https://npr.brightspotcdn.com/f4/48/9891f00b43069c5659e5506a98da/mv5bzgrhyje2nwutn2fkny00ngi3ltkxywmtmdk4yjg5zji3mwi2xkeyxkfqcgdeqxvymteymjm2ndc2._V1_FMjpg_UX1000_.jpg",
    title: "The Power of the Dog",
    addClass: "Power",
    classNames: ("Drama"),
    liked: false,
    id: 38
  },
  
  {
    imgUrl: "https://www.batcave.com.pl/wordpress/wp-content/uploads/2021/03/ExafFT_UcAEOkVT.jpg",
    title: "The Suicide Squad",
    addClass: "Squad",
    classNames: ("action"),
    liked: false,
    id: 39
  },
  {
    imgUrl: "https://rafaelfilm.cafilm.org/wp-content/uploads/2020/11/mayor_social2.png",
    title: "Mayor (2020)",
    addClass: "Mayor",
    classNames: ("Documentary"),
    liked: false,
    id: 40
  },
  {
    imgUrl:"https://m.media-amazon.com/images/M/MV5BMmEyYTJkZjEtZWZkZC00OWRkLWFiZWQtODFjMzEzZWFiZDM2XkEyXkFqcGdeQXVyMTMwNjQxNDU1._V1_.jpg", 
    title: "Luzzu (2021)",
    addClass: "Luzzu",
    classNames: ( "Drama"),
    liked: false,
    id: 41
  },
  {
    imgUrl: "https://m.media-amazon.com/images/M/MV5BNjc4OTVjZWItNGM4OC00MTIwLWI4ZmQtZmM1NTkzOTM5ZTFiXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
    title: "Sabaya (2021)",
    addClass: "Sabaya",
    classNames: ("Documentary"),
    liked: false,
    id: 42
  },
  {
    imgUrl: "https://m.media-amazon.com/images/I/819G9-7WbWL._RI_.jpg",
    title: "Acasa, My Home",
    addClass: "Acasa",
    classNames: ("Documentary"),
    liked: false,
    id: 43
  },
  {
    imgUrl: "https://m.media-amazon.com/images/M/MV5BOGRlZjJkN2QtMzE0NS00MzA4LTliYzEtMDEyMjRlNDAyNzFhXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",
    title: "Changing the Game",
    addClass: "the-Game",
    classNames: ("Documentary"),
    liked: false,
    id: 44
  },
  {
    imgUrl: "https://www.film.ru/sites/default/files/movies/posters/49618006-1463479.jpg",
    title: "Дом на другой стороне",
    addClass: "Home-site",
    classNames: ("Horror"),
    liked: false,
    id: 45
  },
  {
    imgUrl: "https://www.film.ru/sites/default/files/movies/posters/49620307-1730556.jpg",
    title: "Don't look up",
    addClass: "look",
    classNames: ("comedy"),
    liked: false,
    id: 46
  },
  {
    imgUrl: "https://thumbs.dfs.ivi.ru/storage9/contents/0/a/bd9cef43331b42698c70a7e2032bc6.jpg",
    title: "Король Ричард (2021)",
    addClass: "Rich-ard",
    classNames: ("Drama"),
    liked: false,
    id: 47
  },
  {
    imgUrl: "https://fs.kinomania.ru/file/film/e/32/e32bf177412cf8b2ebe9656492c8133a.jpeg",
    title: "Тем больнее падать",
    addClass: "Harder-fall",
    classNames: ("action"),
    liked: false,
    id: 48
  }
];

let menuLiked = document.querySelector(".menu_liked");
let toggleMenu = document.querySelector(".toggleMenu");
let overlay = document.querySelector('.overlay');
let photo_container = document.querySelector('.photo_container');
let drawPhotosUI;
let favoritePhoto;

toggleMenu.addEventListener('click', openMenu);
toggleMenu.addEventListener('click', stopPropagationFunc);
window.addEventListener('click', closeMenu);


// Function Draw Photos
(drawPhotosUI = function () {

  let photoDataStorage = JSON.parse(localStorage.getItem('productFavorite'))
    ? JSON.parse(localStorage.getItem('productFavorite')) : photoData;

  let photoBox = photoDataStorage.map((item) => {
    return `
    
    <div class="box-photo ${item.classNames}">
      <img src="${item.imgUrl}" alt="Photo ${item.title}" draggable="false">

        <button class="learn-more ${item.addClass}" title="Watch">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow">
              <i class="fa fa-play mr-2" aria-hidden="true"></i>
            </span>
          </span>
        </button>

      <div class="fav-icon" title="Add to Favorite">
        <i class="fa fa-heart heart-films" style="color: 
        ${item.liked === true ? '#ff0019' : '#6666ff99'}" // Here I Check If The Liked True
        onclick="addFavorite(${item.id})"></i>
        
      </div>
      <h3>${item.title}</h3>
    </div>
    
    `
  });
  photo_container.innerHTML = photoBox.join('');

})();




// Function Add Favorite
function addFavorite(id) {

  let photoDataStorage = JSON.parse(localStorage.getItem('productFavorite'))
    ? JSON.parse(localStorage.getItem('productFavorite')) : photoData;
  let choseenPhoto = photoDataStorage.find((photo) => photo.id === id);

  if (choseenPhoto.liked === true) {
    choseenPhoto.liked = false;
  } else {
    choseenPhoto.liked = true; 
  }

  localStorage.setItem("productFavorite", JSON.stringify(photoDataStorage));
  let likedPhotosFilterd = photoDataStorage.filter(item => item.liked === true);
  favoritePhoto(likedPhotosFilterd);

  drawPhotosUI();
};


function stopPropagationFunc(e) {
  e.stopPropagation();
}


(favoritePhoto = function (likedProducts) {

  let photoDataStorage = JSON.parse(localStorage.getItem('productFavorite'))
    ? JSON.parse(localStorage.getItem('productFavorite')) : photoData;
  let likedPhotosFilterd = photoDataStorage.filter(item => item.liked === true);
  let photosLiked = (likedProducts ? likedProducts : likedPhotosFilterd)

  photoLikedInMenu(photosLiked)

})();

function photoLikedInMenu(photosLiked) {
  if (photosLiked.length !== 0) {

    let newPhotosLiked = photosLiked.map((item) => {
      return `
      <div class="menu_photoBox">
        <img src="${item.imgUrl}" alt="Photo Sea" width="50">
        <div class="photo-title">${item.title}</div>
        <div class="actions">
          <button title="Remove From The Favorite" onclick="removeFromFavoriet(${item.id})"> <i class="fa fa-trash"></i> </button>
        </div>
      </div>
      `;
    });


    menuLiked.innerHTML = newPhotosLiked.join('');

  } else { 
    menuLiked.innerHTML = '';
    menuLiked.innerHTML = `<p class="noFavPhoto">No Favorite Films Yet</p>`;

  };

};

// Function Open Menu Liked
function openMenu() {
  menuLiked.classList.toggle("open");
  toggleMenu.classList.toggle("anim");
  overlay.classList.toggle("show");
};

function closeMenu(e) {
    if (e.target === overlay) {
      if (menuLiked.classList.contains('open')) {
        menuLiked.classList.remove("open");
        toggleMenu.classList.remove("anim");
        overlay.classList.remove("show");
      };
    };
};

// Function Reove Photo From The Favorite
 function removeFromFavoriet(id) {
   addFavorite(id);
 }




