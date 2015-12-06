function AcademicRequirementsSystem(semesterSystem) {

    this.semesterSystem = semesterSystem;
    this.requirements1 = [];
}

AcademicRequirementsSystem.prototype.updateAcademicRequirements = function () {

    var fulfilledRequirements1 = [];

    for (var i = 0; i < this.semesterSystem.semesters.length; i++) {
        for (var j = 0; j < this.semesterSystem.semesters[i].courseList.length; j++) {
            for (var k = 0; k < this.requirements1.length; k++) {
                if (this.semesterSystem.semesters[i].courseList[i].course_title == this.requirements1[k]) {
                    fulfilledRequirements1.push(true);
                }
            }
        }
    }

    console.log(fulfilledRequirements1);
    console.log(this.requirements1);

    if (fulfilledRequirements1.length == this.requirements1.length && this.requirements1.length == 0) {
        $("#BCR").html("Complete - <i class= \"fa fa-check\"></i>");
        $("#BCR").removeClass("IncompleteRequirement");
        $("#BCR").addClass("CompletedRequirement");

    } else {
        $("#BCR").html("Incomplete - <i class= \" fa fa-times-circle-o \" >");
        $("#BCR").removeClass("CompletedRequirement");
        $("#BCR").addClass("IncompleteRequirement");
    }

    var techElectiveCount = 0;
    for (var i = 0; i < this.semesterSystem.semesters.length; i++) {
        for (var j = 0; j < this.semesterSystem.semesters[i].courseList.length; j++) {
            if (this.semesterSystem.semesters[i].courseList[j].isTechElective) {
                techElectiveCount++;

            }
        }
    }

    if (techElectiveCount >= 4) {
        $("#TCR").html("Complete - <i class= \"fa fa-check\"></i>");
        $("#TCR").removeClass("IncompleteRequirement");
        $("#TCR").addClass("CompletedRequirement");

    } else {
        $("#TCR").html("Incomplete - <i class= \" fa fa-times-circle-o \" >");
        $("#TCR").removeClass("CompletedRequirement");
        $("#TCR").addClass("IncompleteRequirement");
    }

};