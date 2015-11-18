function Year() {
    this.active = false;
    this.complete = false;
    this.yearNumber = 0;
    this.semesters = [];
}


Year.prototype.setActive = function (flag) {
    this.active = flag;
};

Year.prototype.setComplete = function (flags) {
    this.active = flag;
};

Year.prototype.setYearNumber = function (givenYearNo) {
    this.yearNumber = givenYearNo;
};