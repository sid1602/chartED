function SemesterSystem() {

    this.semesters = [];
    this.aRPS = null;

    var newSemester = null;

    newSemester = new Semster();
    newSemester.name = "Year 1 - Fall Semester";
    newSemester.givenID = "Y1Fall";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 1 - Winter Semester";
    newSemester.givenID = "Y1Winter";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 1 - Spring Semester";
    newSemester.givenID = "Y1Spring";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 1 - Summer Semester";
    newSemester.givenID = "Y1Summer";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 2 - Fall Semester";
    newSemester.givenID = "Y2Fall";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 2 - Winter Semester";
    newSemester.givenID = "Y2Winter";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 2 - Spring Semester";
    newSemester.givenID = "Y2Spring";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 2 - Summer Semester";
    newSemester.givenID = "Y2Summer";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 3 - Fall Semester";
    newSemester.givenID = "Y3Fall";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 3 - Winter Semester";
    newSemester.givenID = "Y3Winter";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 3 - Spring Semester";
    newSemester.givenID = "Y3Spring";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 3 - Summer Semester";
    newSemester.givenID = "Y3Summer";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 4 - Fall Semester";
    newSemester.givenID = "Y4Fall";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 4 - Winter Semester";
    newSemester.givenID = "Y4Winter";
    this.semesters.push(newSemester);


    newSemester = new Semster();
    newSemester.name = "Year 4 - Spring Semester";
    newSemester.givenID = "Y4Spring";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 4 - Summer Semester";
    newSemester.givenID = "Y4Summer";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 5 - Fall Semester";
    newSemester.givenID = "Y5Fall";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 4 - Winter Semester";
    newSemester.givenID = "Y5Winter";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 5 - Spring Semester";
    newSemester.givenID = "Y5Spring";
    this.semesters.push(newSemester);

    newSemester = new Semster();
    newSemester.name = "Year 5 - Summer Semester";
    newSemester.givenID = "Y5Summer";
    this.semesters.push(newSemester);

    console.log(this.semesters);
}

SemesterSystem.prototype.setUpSemesterSystem = function () {

    for (var i = 0; i < this.semesters.length; i++) {
        this.semesters[i].associatedCell = $("#" + this.semesters[i].givenID);
    }
    this.fillInSemesterSystem();

    // Course Example
    //    var course = new Course();
    //    course.course_title = "CS 101";
    //    this.addCourseToSemester(course, "Y1Spring");
    //    this.moveCourseBetweenSemesters("CS 101", "Y1Spring", "Y1Fall");

};

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
};

SemesterSystem.prototype.addCourseToSemester = function (givenCourse, givenSemesterGivenID) {
    var semesterID = this.getSemesterArrayIDFromGivenID(givenSemesterGivenID);
    this.semesters[semesterID].addCourse(givenCourse);
    this.fillInSemster(semesterID);

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
    this.fillInSemster(fromS);
    this.fillInSemster(toS);
};

SemesterSystem.prototype.getSemesterArrayIDFromGivenID = function (semesterID) {

    for (var i = 0; i < this.semesters.length; i++) {
        if (this.semesters[i].givenID == semesterID) {
            return i;
        }
    }
};