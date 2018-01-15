// document is ready
$(document).ready(function() {

      // Variables
      var introBackground = document.getElementById('intro');
      var introTopText = document.getElementsByClassName('top_text');
      var logo = document.getElementsByClassName('logo');
      var introQuote = document.getElementsByClassName('intro_quote');
      var introSplitText = new SplitText(introQuote, {type: 'words'});
      var introNote = document.getElementsByClassName('intro_footnote');
      var buttonEnter = document.getElementsByClassName('button_enter_container');
      var heroBackground = document.getElementById('hero');
      var heroTitle = document.getElementsByClassName('title');
      var heroSub = document.getElementsByClassName('subtitle');
      var buttonFaces = document.getElementsByClassName('button_faces');
      var heroSplitText = new SplitText(heroTitle, {type: 'words'});
      var buttonShare = document.getElementsByClassName('share_button');
      var arrowDown = document.getElementsByClassName('arrow_icon');
      var navItems = $('.share_list > li');
      var dot = document.getElementsByClassName('dot');
      var loader = document.getElementById('loader');
      var loaderWrapper = document.getElementsByClassName('loader_wrapper');


      // Loader Animation
      var tlLoader = new TimelineMax({repeat: 3, onComplete: loadIntro})
               .staggerFromTo(dot, 0.3, {y: 0, autoAlpha: 0}, {y: 20, autoAlpha: 1, ease: Back.easeInOut}, 0.05)
               .fromTo(loader, 0.3, {autoAlpha: 1, scale: 1.3}, {autoAlpha: 0, scale: 1, ease: Power0.easeNone}, 0.9);

      // Intro Animation
      var tlIntroText = new TimelineMax({paused: true})
               .to(loaderWrapper, 0.25, {autoAlpha: 0})
               .to(introBackground, 0.5, {autoAlpha: 1, ease: Power1.easeIn}, '-=0.25')
               .from(introTopText, 0.35, {autoAlpha: 0}, '-=0.25')
               .from(logo, 0.35, {autoAlpha: 0}, '-=0.35')
               .staggerFrom(introSplitText.words, 0.75, {opacity: 0, ease: Power2.easeInOut, cycle: {opacity: [0, 0]}}, 0.15)
               .from(introNote, 0.35, {autoAlpha: 0, ease: Power1.easeIn}, '-=0.5')
               .from(buttonEnter, 0.35, {autoAlpha: 0, ease: Power1.easeIn});

      // Header Animation
      var tlHeroAnim = new TimelineMax({paused: true})
               .staggerTo(introSplitText.words, 0.25, {opacity: 0, ease: Power4.easeOut, cycle: {opacity: [0, 0]}}, 0.015)
               .to(introNote, 0.25, {autoAlpha: 0, ease: Power1.easeInOut}, '-=0.55')
               .to(buttonEnter, 0.25, {autoAlpha: 0, y: 20, ease: Power1.easeInOut}, '-=0.35')
               .to(introBackground, 0.15, {opacity: 0, display: 'none', zIndex: '0', ease: Power1.easeInOut})
               .to(heroBackground, 0.15, {autoAlpha: 1, ease: Power1.easeInOut})
               .from(heroTitle, 1, {autoAlpha: 0, y: -20, ease: Power1.easeInOut})
               .from(heroSub, 1, {autoAlpha: 0, ease: Power1.easeInOut}, '-=0.25')
               .from(buttonFaces, 0.5, {autoAlpha: 0, y: -20, ease: Power1.easeInOut})
               .from(buttonShare, 0.5, {autoAlpha: 0, x: 20, ease: Power1.easeInOut})
               .to(arrowDown, 1, {autoAlpha: 0, y: 50, ease: Power0.easeInOut, repeatDelay: 0.25, repeat: -1});

      // Share Animation
      var tlShare = new TimelineLite({paused: true})
            .staggerFrom(navItems, 1, {autoAlpha: 0, y: -20, ease:Power2.easeOut}, 0.2);



      function loadIntro() {

         tlIntroText.play();
      }



      // Refresh Page on Top
      $(window).on('beforeunload', function() {

         $(window).scrollTop(0);

      });

      // Enter Click
      $('.button_enter').click(function() {

         tlHeroAnim.play();

      });

      // Faces Click
      $('.button_faces').click(function() {

         $("body").removeClass('overflow_active');
         TweenMax.to(window, 1, {scrollTo: "#faces"});

      });

      // Share Click
      $('.share_button').on('click', function(){

         $('#share_container').addClass('is-visible');
         tlShare.play();
         tlShare.restart();

      });


      // Cards Animation
      window.sr = ScrollReveal();
      sr.reveal('.item_flexcard_dark',
      {
         duration: 1000,
         delay: 100,
         origin: 'bottom',
         distance: '2rem',
         reset: true,
         viewFactor: 0.6
      });



});
