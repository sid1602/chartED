function Course() {

    this.course_title = "";
    this.default_credit_hours = 0;
    this.user_course_hours = 0;
    this.user_grade = 0;
    this.course_type = "Normal";
    this.professor_name = "";
    this.notes = "";
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