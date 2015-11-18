$(document).ready(function () {
    // Set up the fullpage.js
    //  Set the scrollbar to be shown.
    $('#fullpage').fullpage({});
    $(document).keydown(keyboardInputHandler);
    registerOnClicks();
});


function keyboardInputHandler(event) {
    if (event.which == 65) {
        displayInformationBlock(true);
    }

    if (event.which == 83) {
        displayInformationBlock(false);
    }

}

function registerOnClicks() {

    $("#entry").click(function () {
        displayInformationBlock(true);
    });
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