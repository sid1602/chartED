function Semster() {

    this.name = "";
    this.givenID = "";
    this.courseList = [];
    this.associatedCell = null;
    this.CreditHours = 0;
    this.GPA = 0;
    this.semsterStatus = "Incomplete";
    this.active = false;
    this.average_GPA = 0.0;
}

Semster.prototype.computeCHGPA = function () {

    this.CreditHours = 0;
    this.GPA = 0;
    this.average_GPA = 0;
    for (var i = 0; i < this.courseList.length; i++) {
        this.CreditHours += this.courseList[i].user_course_hours;
        //this.GPA += this.courseList[i].user_course_hours;
        this.GPA += this.courseList[i].user_course_hours * GradeToGPA(this.courseList[i].user_grade);
        this.average_GPA += this.courseList[i].user_course_hours * GradeToGPA(this.courseList[i].average_grade);
    }

    if (this.CreditHours != 0) {
        this.GPA = this.GPA / this.CreditHours;
        this.average_GPA = this.average_GPA / this.CreditHours;
    }

    this.GPA = Math.round(this.GPA * 100) / 100;
    this.average_GPA = Math.round(this.average_GPA * 100) / 100;
    console.log(this.average_GPA);
    //this.GPA = 3.33;
};

function GradeToGPA(grade) {
    var gpa_val = 0;

    if (grade == 'A+')
        gpa_val = 4.00;
    else if (grade == 'A')
        gpa_val = 4.00;
    else if (grade == 'A-')
        gpa_val = 3.67;
    else if (grade == 'B+')
        gpa_val = 3.33;
    else if (grade == 'B')
        gpa_val = 3.00;
    else if (grade == 'B-')
        gpa_val = 2.67;
    else if (grade == 'C+')
        gpa_val = 2.33;
    else if (grade == 'C')
        gpa_val = 2.00;
    else if (grade == 'C-')
        gpa_val = 1.67;
    else if (grade == 'D+')
        gpa_val = 1.33;
    else if (grade == 'D')
        gpa_val = 1.00;
    else if (grade == 'D-')
        gpa_val = 0.67;
    else gpa_val = 0;

    return gpa_val;

}

Semster.prototype.addCourse = function (givenCourse) {
    this.courseList.push(givenCourse);
    this.computeCHGPA();
};

Semster.prototype.removeCourse = function (givenCourseName) {

    var course = null;
    var splicePoint = -1;
    for (var i = 0; i < this.courseList.length; i++) {
        if (this.courseList[i].course_title == givenCourseName) {
            splicePoint = i;
        }
    }

    if (splicePoint != -1) {
        course = this.courseList.splice(splicePoint, 1);
    }

    this.computeCHGPA();
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