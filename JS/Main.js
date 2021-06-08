function selectText() {
    var element = event.target
    var range;
    if(document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    }else if(window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}

function deSelectText(){
    if(window.getSelection) {
        window.getSelection().removeAllRanges();
    }else if(document.selection) {
        document.selection.empty();
    }
}

function copyText() {
    event.preventDefault();
    selectText();
    document.execCommand("copy");
    deSelectText();
    alert('Email copied!');
}


$(document).ready(function(){
  var docEl = $(document),
      headerEl = $('header'),
      headerWrapEl = $('.profilepic'),
      navEl = $('nav'),
      linkScroll = $('.scroll');

  docEl.on('scroll', function(){
    if ( docEl.scrollTop() > 60 ){
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');
    }
    else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');
    }
  });

  linkScroll.click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top
      }, 900);
   });
});


let myElement = document.querySelector('.title');
let shadow = myElement.attachShadow({mode: 'open'});
shadow.innerHTML =`
  <p>Vanessa Hermansson</p>
`;
class AnotherElement extends HTMLElement {
  constructor() {
    super();

  }
}
