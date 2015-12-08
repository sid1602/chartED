var semesterSystem = null;
var temp_CourseSys = null;
$(document).ready(function () {
    // Set up the fullpage.js
    //  Set the scrollbar to be shown.
    $('#fullpage').fullpage({
        controlArrows: false,
        paddingTop: $("#optionsToolbar").height(),
        fixedElements: "#optionsToolbar"
    });
    //$(document).keydown(keyboardInputHandler);
});

$(window).load(function () {
    registerToolbarClickHandlers();
    create_courses();
    console.log(course_list);
    semesterSystem = new SemesterSystem();
    semesterSystem.setUpSemesterSystem();
    semesterSystem.setUpAcademicProgressRequirements();
});

function GotoSemster(clicked_id) {
    var temp_id = semesterSystem.getSemesterArrayIDFromGivenID(clicked_id);
    var temp_Sem = new Semster();
    temp_Sem = semesterSystem.semesters[temp_id];
    $('#DummyDiv').removeClass("hiddenClass");

    temp_CourseSys = new CourseSystem(temp_Sem.courseList);
    temp_CourseSys.setUpCourseSystem();
}

function closeButton() {
    $('#DummyDiv').addClass('hiddenClass');
}

function GotoCourseEdit(clicked_id) {
    $('#CourseEdit').removeClass('hiddenClass');
    $('#CourseEditWrapper').removeClass('hiddenClass');
    var temp_cid = temp_CourseSys.getCourseArrayIDFromGivenID(clicked_id);
    temp_CourseSys.populateCourseEdit(temp_cid);
}

function doneButton() {
    $('#CourseEdit').addClass('hiddenClass');
    $('#CourseEditWrapper').addClass('hiddenClass');
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

function registerToolbarClickHandlers() {
    $("#CoursesButton").click(function () {
        $.fn.fullpage.moveTo(0, 0);
    });

    $("#AcademicProgressButton").click(function () {
        $.fn.fullpage.moveTo(0, 1);
    });

    $("#GPAButton").click(function () {
        $.fn.fullpage.moveTo(0, 2);
    });

    setUpMenuHandler();

}

function setUpMenuHandler() {};