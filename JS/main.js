var semesterSystem = null;
var temp_CourseSys = null;
var curr_sem = null;
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
    curr_sem = clicked_id;
    $('#DummyDiv').removeClass("hiddenClass");

    temp_CourseSys = new CourseSystem(temp_Sem.courseList);
    temp_CourseSys.setUpCourseSystem();
}

function closeButton() {
    //Step 4 - Clear the divs
    for (var i = 0; i < 6; i++) {
        var course_id = "Class" + i;
        document.getElementById(course_id).innerHTML = "";
    };

    $('#DummyDiv').addClass('hiddenClass');
}

function GotoCourseEdit(clicked_id) {
    $('#CourseEdit').removeClass('hiddenClass');
    $('#CourseEditWrapper').removeClass('hiddenClass');
    var temp_cid = temp_CourseSys.getCourseArrayIDFromGivenID(clicked_id);
    temp_CourseSys.populateCourseEdit(temp_cid);
}

function doneButton() {

    var sem_id = semesterSystem.getSemesterArrayIDFromGivenID(curr_sem);
    //Step 1 - get values from dropdown menu
    var selected_course = document.getElementById("Select_Course").value;
    var selected_grade = document.getElementById("Select_Grade").value;
    //Step 2 - Send value to function called addCourseToSemesterFromCourseList w/ values of current Semester and dropdown menu values
    var flag = 0;
    for (var i = 0; i < semesterSystem.semesters[sem_id].courseList.length; i++) {
        if (semesterSystem.semesters[sem_id].courseList[i].course_title == selected_course) {
            flag = 1;
        }
    }
    if (flag != 1)
        semesterSystem.addCourseToSemesterFromCourseList(selected_course, curr_sem);
    //Step 3 - Go into the course that you just added and add the user grade
    for (var i = 0; i < semesterSystem.semesters[sem_id].courseList.length; i++) {
        if (semesterSystem.semesters[sem_id].courseList[i].course_title == selected_course) {
            semesterSystem.semesters[sem_id].courseList[i].user_grade = selected_grade;
        }
    }
    //Step 4 - Hide the stuff
    $('#CourseEdit').addClass('hiddenClass');
    $('#CourseEditWrapper').addClass('hiddenClass');
    GotoSemster(curr_sem);
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
        console.log("Reached");
        semesterSystem.gpaSystem.setUpArrays();
        semesterSystem.gpaSystem.updateSVG();
        $.fn.fullpage.moveTo(0, 2);

    });

    setUpMenuHandler();

}

function setUpMenuHandler() {};