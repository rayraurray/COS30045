var dataset = [14, 5, 26, 23, 9];

d3
.select(".chart-container-0")
.selectAll("p")
.data(dataset)
.enter()
.append("p")
.text(function(d) {
    if (d < 10){
        return "Joe watched " + d + " cat videos today";
    } else {
        return "Damn: Joe watched " + d + " cat videos today";
    }
}); 