function CourseSystem(courseList) {

    this.courses = [];

    var newCourse = null;

    for (var i = 0; i < courseList.length; i++) {
        this.courses.push(courseList[i]);
    };

    this.courses[0].course_id = "Class1";
    this.courses[1].course_id = "Class2";
    this.courses[2].course_id = "Class3";
    this.courses[3].course_id = "Class4";
    this.courses[4].course_id = "Class5";
    this.courses[5].course_id = "Class6";

/*
    newCourse = new Course();
    this.courses.push(newCourse);

    newCourse = new Course();
    this.courses.push(newCourse);

    newCourse = new Course();
    this.courses.push(newCourse);

    newCourse = new Course();
    this.courses.push(newCourse);

    newCourse = new Course();
    this.courses.push(newCourse);

    newCourse = new Course();
    this.courses.push(newCourse);
*/
    console.log(this.courses);
}

CourseSystem.prototype.setUpCourseSystem = function () {

    for (var i = 0; i < this.courses.length; i++) {
        this.courses[i].associatedCell = $("#" + this.courses[i].course_id);
    }
};

CourseSystem.prototype.fillInCourseSystem = function () {
    for (var i = 0; i < this.courses.length; i++) {
        this.fillInCourse(i);
    }
};

CourseSystem.prototype.fillInCourse = function (givenCourseArrayPosition) {

    this.courses[givenCourseArrayPosition].fillInCourseInfo();
};

/*SemesterSystem.prototype.moveCourseBetweenSemesters = function (courseName, fromSemesterGivenID, toSemesterGivenID) {

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
};*/