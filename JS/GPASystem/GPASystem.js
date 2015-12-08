function GPASystem(givenSemesterSystem) {

    this.average_array = [];
    this.user_array = [];

    this.svgWidth = 850;
    this.svgHeight = 800;
    this.givenSemsterSystem = givenSemesterSystem;

    this.vis = d3.select("#visualisation").attr("width", this.svgWidth).attr("height", this.svgHeight);
}

GPASystem.prototype.setUpArrays = function () {
    for (var i = 0; i < this.givenSemsterSystem.semesters.length; i++) {
        this.givenSemsterSystem.semesters[i].computeCHGPA();
        this.user_array.push(this.givenSemsterSystem.semesters[i].GPA);
        this.average_array.push(this.givenSemsterSystem.semesters[i].average_GPA);
    }

    for (var i = 0; i < 16; i++) {

        this.average_array.push(Math.random() * 4.0);
    }
};


GPASystem.prototype.updateSVG = function () {

    var barWidth = 5;
    var barHeight = 400;
    var space = (this.svgWidth - (16 * 40 + 10)) / 2;


    for (var i = 0; i < 16; i++) {
        this.vis.append("rect")
            .attr("width", barWidth)
            .attr("height", barHeight * this.average_array[i] / 4.0)
            .attr("x", space + i * 40)
            .attr("y", 200)
            .style("fill", "lightblue");

        this.vis.append("rect")
            .attr("width", barWidth)
            .attr("height", barHeight * this.user_array[i] / 4.0)
            .attr("x", space + i * 40 + 10)
            .attr("y", 200)
            .style("fill", "lightgreen");

        this.vis.append("text")
            .attr("class", "legendXAxis")
            .attr("transform", "translate(" + (space + i * (40) + 6) + "," + 200 + ") rotate(-60)")
            .attr("text-anchor", "start")
            .style("fill", "black")
            .text(this.givenSemsterSystem.semesters[i].givenID);
    }
};