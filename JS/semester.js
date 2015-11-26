$(document).ready(function () {
    // Set up the fullpage.js
    //  Set the scrollbar to be shown.
    $('#fullpage').fullpage({
        controlArrows: false,
        paddingTop: $("#renderToolbar").height(),
        fixedElements: "#renderToolbar"
    });
    $(document).keydown(keyboardInputHandler);
});


function keyboardInputHandler(event) {
    if (event.which == 65) {
        $("#Class6").removeClass("hiddenClass");
        $("#Class6plus").addClass("hiddenClass");
        //  displaySemsterBlock(true);
    }

    if (event.which == 83) {
        $("#Class6").addClass("hiddenClass");
        $("#Class6plus").removeClass("hiddenClass");
        //  displaySemsterBlock(false);
    }

}

function displayFocusRemover(toggle) {
    console.log("Focus Toggle.");
    if (toggle == true) {
        $("#focusRemover").css("z-index", 1);
    } else {
        $("#focusRemover").css("z-index", -1);
    }
}

function displayInformationBlock(toggle) {
    console.log("Information Toggle.");
    displayFocusRemover(toggle);
    if (toggle == true) {
        $("#informationDisplayWrapper").css("z-index", 2);
    } else {
        $("#informationDisplayWrapper").css("z-index", -2);
    }
}


function displaySemsterBlock(toggle) {
    console.log("Information Toggle.");
    displayFocusRemover(toggle);
    if (toggle == true) {
        $("#semesterDisplayWrapper").css("z-index", 2);
    } else {
        $("#semesterDisplayWrapper").css("z-index", -2);
    }
}

(function() {

  'use strict';

  document.querySelector('.material-design-hamburger__icon').addEventListener(
    'click',
    function() {      
      var child;
      
      document.body.classList.toggle('background--blur');
      this.parentNode.nextElementSibling.classList.toggle('menu--on');

      child = this.childNodes[1].classList;

      if (child.contains('material-design-hamburger__icon--to-arrow')) {
        child.remove('material-design-hamburger__icon--to-arrow');
        child.add('material-design-hamburger__icon--from-arrow');
      } else {
        child.remove('material-design-hamburger__icon--from-arrow');
        child.add('material-design-hamburger__icon--to-arrow');
      }

    });

})();