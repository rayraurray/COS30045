var w = 500;
var h = 100;
var padding = 5;

var svg = d3
.select(".chart-container-3")
.append("svg")
.attr("width", w)
.attr("height", h);

function barChart(data) {
    svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x",
        function(d, i)
        {
            return i * (w / data.length);
        }
    )
    .attr("y",
        function(d)
        {
            return h - (d.wombats * 4)
        }
    )
    .attr("width", (w / data.length) - padding)
    .attr("height", 
        function(d) 
        {
            return d.wombats * 4;
        }
    )
    .attr("fill", "teal");
    ;
}

d3.csv("data/wombat.csv").then(function(data){
    console.log(data);

    barChart(data)
})