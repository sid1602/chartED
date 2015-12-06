function Semster() {

    this.name = "";
    this.givenID = "";
    this.courseList = [];
    this.associatedCell = null;
    this.CreditHours = 0;
    this.GPA = 0;
    this.semsterStatus = "Incomplete";
    this.active = false;
    this.average_GPA = 3.5;
}

Semster.prototype.computeCHGPA = function () {

    this.CreditHours = 0;
    this.GPA = 0;
    for (var i = 0; i < this.courseList.length; i++) {
        this.CreditHours += this.courseList[i].user_course_hours;
        this.GPA += this.courseList[i].user_grade;
    }

};


Semster.prototype.addCourse = function (givenCourse) {
    console.log(givenCourse);
    this.courseList.push(givenCourse);
    console.log(this.courseList);
    this.computeCHGPA();

};

Semster.prototype.removeCourse = function (givenCourseName) {

    var course = null;
    var splicePoint = -1;
    for (var i = 0; i < this.courseList.length; i++) {
        console.log(this.courseList[i].course_title);
        if (this.courseList[i].course_title == givenCourseName) {
            splicePoint = i;
        }
    }

    if (splicePoint != -1) {
        course = this.courseList.splice(splicePoint, 1);
    }

    this.computeCHGPA();

    console.log(course);
    return course[0];
};

Semster.prototype.fillInSemster = function () {

    this.associatedCell.html("<div> " + this.name + " </div>");
    this.computeCHGPA();
    this.associatedCell.html(this.associatedCell.html() + "<div> Credit Hours : " + this.CreditHours + " </div>");
    this.associatedCell.html(this.associatedCell.html() + "<div> GPA : " + this.GPA + "  </div>");

};

Semster.prototype.setSemsterStatus = function (given_status) {
    this.semsterStatus = given_status;
    this.associatedCell.removeClass("completeSemster");
    this.associatedCell.removeClass("ongoingSemster");
    this.associatedCell.removeClass("incompleteSemester");
    if (this.semsterStatus == "Incomplete") {
        this.associatedCell.addClass("incompleteSemester");
    } else if (this.semsterStatus == "Ongoing") {
        this.associatedCell.addClass("ongoingSemster");
    } else {
        this.associatedCell.addClass("completeSemster");
    }
};