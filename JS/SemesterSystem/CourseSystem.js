function CourseSystem(courseList) {

    this.courses = [];

    var newCourse = null;

    for (var i = 0; i < courseList.length; i++) {
        newCourse = courseList[i];
        this.courses.push(newCourse);
        this.courses[i].course_id = "Class"+i;
    };

/*

    this.courses[0].course_id = "Class1";
    this.courses[1].course_id = "Class2";
    this.courses[2].course_id = "Class3";
    this.courses[3].course_id = "Class4";
    this.courses[4].course_id = "Class5";
    this.courses[5].course_id = "Class6";

    newCourse = courseList[0];
    this.courses.push(newCourse);

    newCourse = courseList[1];
    this.courses.push(newCourse);

    newCourse = courseList[2];
    this.courses.push(newCourse);

    newCourse = courseList[3];
    this.courses.push(newCourse);

    newCourse = courseList[4];
    this.courses.push(newCourse);

    newCourse = courseList[5];
    this.courses.push(newCourse);
*/

    console.log(this.courses);
}

CourseSystem.prototype.setUpCourseSystem = function () {

    for (var i = 0; i < this.courses.length; i++) {
        this.courses[i].associatedCell = $("#" + this.courses[i].course_id);
    }
    this.fillInCourseSystem();
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
};*/

CourseSystem.prototype.getCourseArrayIDFromGivenID = function (courseID) {

    for (var i = 0; i < this.courses.length; i++) {
        if (this.courses[i].givenID == courseID) {
            return i;
        }
    }
};

CourseSystem.prototype.populateCourseEdit = function (courselist_id) {

    var editcourse = courses[courselist_id];

    this.associatedCell.html("<div> " + editcourse.course_title + " </div>");
    this.associatedCell.html(this.associatedCell.html() + "<div> Credit Hours : " + editcourse.default_credit_hours + " </div>");
    this.associatedCell.html(this.associatedCell.html() + "<div> Grade : " + editcourse.user_grade + "  </div>");
    this.associatedCell.html(this.associatedCell.html() + "<div> Professor : " + editcourse.professor_name + "  </div>");
    this.associatedCell.html(this.associatedCell.html() + "<div> Course Type : " + editcourse.course_type + "  </div>");
};