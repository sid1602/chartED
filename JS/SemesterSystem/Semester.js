function Semster() {

    this.name = "";
    this.givenID = "";
    this.courseList = [];
    this.associatedCell = null;
    this.CreditHours = 0;
    this.GPA = 0;
}

Semster.prototype.computeCHGPA = function () {
    this.CreditHours = -3;
    this.GPA = 0;
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
    var fillingHTML = "";

    for (var i = 0; i < this.courseList.length; i++) {
        fillingHTML = fillingHTML + "<div> " + this.courseList[i].course_title + " </div>";
    }

    return fillingHTML;
};