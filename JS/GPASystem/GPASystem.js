function GPASystem(givenSemesterSystem) {

    this.average_array = [];
    this.user_array = [];

    this.svgWidth = 850;
    this.svgHeight = 600;
    this.givenSemesterSystem = givenSemesterSystem;

    this.vis = d3.select("#visualisation").attr("width", this.svgWidth).attr("height", this.svgHeight);
}

GPASystem.prototype.setUpArrays = function () {
    this.average_array = [];
    this.user_array = [];
    console.log(this.givenSemesterSystem);
    for (var i = 0; i < this.givenSemesterSystem.semesters.length; i++) {
        this.givenSemesterSystem.semesters[i].computeCHGPA();
        this.user_array.push(this.givenSemesterSystem.semesters[i].GPA);
        this.average_array.push(this.givenSemesterSystem.semesters[i].average_GPA);
    }

    console.log(this.user_array);
    console.log(this.average_array);
};


GPASystem.prototype.updateSVG = function () {

    d3.selectAll("svg > *").remove();
    this.vis = d3.select("#visualisation").attr("width", this.svgWidth).attr("height", this.svgHeight);


    var barWidth = 5;
    var barHeight = 300;
    var space = (this.svgWidth - (16 * 40 + 10)) / 2;



    for (var i = 0; i < 16; i++) {
        console.log("Appending" + barHeight * this.average_array[i] / 4.0);
        this.vis.append("rect")
            .attr("width", barWidth)
            .attr("height", barHeight * this.average_array[i] / 4.0)
            .attr("x", space + i * 40)
            .attr("y", 60)
            .style("fill", "lightblue");

        this.vis.append("rect")
            .attr("width", barWidth)
            .attr("height", barHeight * this.user_array[i] / 4.0)
            .attr("x", space + i * 40 + 10)
            .attr("y", 60)
            .style("fill", "lightgreen");

        this.vis.append("text")
            .attr("class", "legendXAxis")
            .attr("transform", "translate(" + (space + i * (40) + 6) + "," + 50 + ") rotate(-60)")
            .attr("text-anchor", "start")
            .style("fill", "black")
            .text(this.givenSemesterSystem.semesters[i].givenID);


        if (this.average_array[i] != 0) {
            this.vis.append("text")
                .attr("class", "legendYAxis")
                .attr("transform", "translate(" + (space + i * (40) + 4) + "," + (70.0 + barHeight * this.average_array[i] / 4.0) + ") rotate(-90)")
                .attr("text-anchor", "end")
                .style("fill", "black")
                .text(this.average_array[i] + " / 4.0");

            this.vis.append("text")
                .attr("class", "legendYAxis")
                .attr("transform", "translate(" + (space + i * (40) + 10 + 4) + "," + (70.0 + barHeight * this.user_array[i] / 4.0) + ") rotate(-90)")
                .attr("text-anchor", "end")
                .style("fill", "black")
                .text(this.user_array[i] + " / 4.0");
        }

    }


};