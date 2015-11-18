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
        $("#Y1Summer").removeClass("hiddenClass");
        $("#Y1plus").addClass("hiddenClass");
        //  displaySemsterBlock(true);
    }

    if (event.which == 83) {
        $("#Y1Summer").addClass("hiddenClass");
        $("#Y1plus").removeClass("hiddenClass");
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


function addFifthYear() {
    $("#Y5").addClass("hiddenClass");
}

function removeFifthYear() {
    $("#Y5").removeClass("hiddenClass");
}