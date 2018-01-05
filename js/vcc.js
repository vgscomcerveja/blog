function init() {
  checkScroll();
  window.addEventListener('scroll', function(e) {
    checkScroll();
  });
}

function checkScroll() {
  if (window.innerWidth >= 860) {
    var distanciaY = window.pageYOffset || document.documentElement.scrollTop,
        tamanhoCab = 180,
        cab = document.querySelector(".site-header"),
        cabLogo = document.querySelector("#header-logo");
        pageContent = document.querySelector(".page-content");
    var classe = "smaller";
    if (distanciaY >= tamanhoCab) {
      addClass(cab, classe);
      addClass(cabLogo, classe);
      addClass(pageContent, classe);
    } else {
      if (hasClass(cab, classe)) {
        removeClass(cab, classe);
        removeClass(cabLogo, classe);
        removeClass(pageContent, classe);
      }
    }
  }
}

function hasClass(e, className) {
  if (e.classList) {
    return e.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(e.className);
  }
}

function addClass(e, className) {
  if (e.classList) {
    e.classList.add(className);
  } else {
    e.className += ' ' + className;
  }
}

function removeClass(e, className) {
  if (e.classList) {
    e.classList.remove(className);
  } else {
    e.className = e.className.replace(
        new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

window.addEventListener("load", init, false);
