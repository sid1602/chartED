function Course() {

    this.course_title = "";
    this.course_id = "";
    this.default_credit_hours = 0;
    this.user_course_hours = 0;
    this.user_grade = 0;
    this.course_type = "Normal";
    this.professor_name = "";
    this.notes = "";
    this.isTechElective = false;
}

Course.prototype.setCourseTitle = function (givenTitle) {
    this.course_title = givenTitle;
};

Course.prototype.set_default_credit_hours = function (givenDefaultCreditHours) {
    this.default_credit_hours = givenDefaultCreditHours;
};

Course.prototype.set_user_grade = function (givenUserGrade) {
    this.user_grade = givenUserGrade;
};

Course.prototype.set_course_type = function (givenCourseType) {
    this.course_type = givenCourseType;
};

Course.prototype.set_professor_name = function (givenProfessorName) {
    this.professor_name = givenProfessorName;
};

Course.prototype.notes = function (givenNotes) {
    this.notes = givenNotes;
};

Course.prototype.fillInCourseInfo = function () {

    this.associatedCell.html("<div> " + this.course_title + " </div>");
    this.associatedCell.html(this.associatedCell.html() + "<div> Credit Hours : " + this.user_course_hours + " </div>");
    this.associatedCell.html(this.associatedCell.html() + "<div> Grade : " + this.user_grade + "  </div>");
    this.associatedCell.html(this.associatedCell.html() + "<div> Professor : " + this.professor_name + "  </div>");
    this.associatedCell.html(this.associatedCell.html() + "<div> Course Type : " + this.course_type + "  </div>");
};