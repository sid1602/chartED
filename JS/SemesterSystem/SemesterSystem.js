function SemesterSystem() {

    this.semesters = [];
    this.aRPS = null;

    var newSemester = null;

    newSemester = new Semster();
    newSemester.name = "Year 1 - Fall Semester";
    newSemester.givenID = "Y1Fall";
    newSemester.average_GPA = Math.random() * 0.0;
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 1 - Winter Semester";
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.givenID = "Y1Winter";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 1 - Spring Semester";
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.givenID = "Y1Spring";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.name = "Year 1 - Summer Semester";
    newSemester.givenID = "Y1Summer";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 2 - Fall Semester";
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.givenID = "Y2Fall";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 2 - Winter Semester";
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.givenID = "Y2Winter";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.name = "Year 2 - Spring Semester";
    newSemester.givenID = "Y2Spring";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.name = "Year 2 - Summer Semester";
    newSemester.givenID = "Y2Summer";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.name = "Year 3 - Fall Semester";
    newSemester.givenID = "Y3Fall";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.name = "Year 3 - Winter Semester";
    newSemester.givenID = "Y3Winter";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.name = "Year 3 - Spring Semester";
    newSemester.givenID = "Y3Spring";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.name = "Year 3 - Summer Semester";
    newSemester.givenID = "Y3Summer";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 4 - Fall Semester";
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.givenID = "Y4Fall";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 4 - Winter Semester";
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.givenID = "Y4Winter";
    this.semesters.push(newSemester);


    newSemester = new Semster();
    newSemester.name = "Year 4 - Spring Semester";
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.givenID = "Y4Spring";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 4 - Summer Semester";
    newSemester.givenID = "Y4Summer";
    newSemester.average_GPA = Math.random() * 0.0;
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 5 - Fall Semester";
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.givenID = "Y5Fall";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 4 - Winter Semester";
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.givenID = "Y5Winter";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 5 - Spring Semester";
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.givenID = "Y5Spring";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 5 - Summer Semester";
    newSemester.average_GPA = Math.random() * 0.0;
    newSemester.givenID = "Y5Summer";
    this.semesters.push(newSemester);

    console.log(this.semesters);
}

SemesterSystem.prototype.setUpSemesterSystem = function () {

    for (var i = 0; i < this.semesters.length; i++) {
        this.semesters[i].associatedCell = $("#" + this.semesters[i].givenID);
    }

    // Course Example
    // var course = new Course();
    // course.course_title = "CS 101";
    // course.user_grade = 4;
    // course.user_course_hours = 3;
    // this.addCourseToSemester(course, "Y1Spring");
    // this.moveCourseBetweenSemesters("CS 101", "Y1Spring", "Y1Fall");
    //this.addCourseToSemesterFromCourseList("Math 231", "Y1Spring");
    this.addCourseToSemesterFromCourseList("Math 221", "Y1Fall");
    this.addCourseToSemesterFromCourseList("Phys 211", "Y1Fall");
};


SemesterSystem.prototype.addCourseToSemesterFromCourseList = function (givenCourseTitle, givenSemester) {
    var course1 = new Course();

    for (var i = 0; i < course_list.length; i++) {
        if (course_list[i].course_title == givenCourseTitle) {
            course1.course_title = course_list[i].course_title;
            course1.user_course_hours = course_list[i].user_course_hours;
            course1.user_grade = course_list[i].user_grade;
            course1.professor_name = course_list[i].professor_name;
            course1.isTechElective = course_list[i].isTechElective;
            course1.average_grade = course_list[i].average_grade;
            break;
        }
    }

    this.addCourseToSemester(course1, givenSemester);
    this.fillInSemesterSystem();
}

SemesterSystem.prototype.fillInSemesterSystem = function () {
    for (var i = 0; i < this.semesters.length; i++) {
        this.fillInSemster(i);
    }
};

SemesterSystem.prototype.fillInSemster = function (givenSemesterArrayPosition) {

    this.semesters[givenSemesterArrayPosition].fillInSemster();
    this.semesters[givenSemesterArrayPosition].setSemsterStatus("Incomplete");
};


SemesterSystem.prototype.setUpAcademicProgressRequirements = function () {

    this.aRPS = new AcademicRequirementsSystem(this);
    this.aRPS.updateAcademicRequirements();

    //  
    this.gpaSystem = null;

    //
    this.gpaSystem = new GPASystem(this);
    this.gpaSystem.setUpArrays();
    this.gpaSystem.updateSVG();

};

SemesterSystem.prototype.addCourseToSemester = function (givenCourse, givenSemesterGivenID) {
    var semesterID = this.getSemesterArrayIDFromGivenID(givenSemesterGivenID);
    this.semesters[semesterID].addCourse(givenCourse);
    this.fillInSemesterSystem();

};

SemesterSystem.prototype.removeCourseFromSemester = function (givenCourseName, givenSemesterGivenID) {
    var semesterID = this.getSemesterArrayIDFromGivenID(givenSemesterGivenID);
    var removedCourse = this.semesters[semesterID].removeCourse(givenCourseName);
    this.fillInSemster(semesterID);
    return removedCourse;
};


SemesterSystem.prototype.moveCourseBetweenSemesters = function (courseName, fromSemesterGivenID, toSemesterGivenID) {

    var fromS = this.getSemesterArrayIDFromGivenID(fromSemesterGivenID);
    var toS = this.getSemesterArrayIDFromGivenID(toSemesterGivenID);

    var removedCourse = this.removeCourseFromSemester(courseName, fromSemesterGivenID);
    if (removedCourse != null) {
        this.addCourseToSemester(removedCourse, toSemesterGivenID);
    }
    this.fillInSemesterSystem();
};

SemesterSystem.prototype.getSemesterArrayIDFromGivenID = function (semesterID) {

    for (var i = 0; i < this.semesters.length; i++) {
        if (this.semesters[i].givenID == semesterID) {
            return i;
        }
    }
};