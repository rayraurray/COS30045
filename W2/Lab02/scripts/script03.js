var w = 550;
var h = 150;
var padding = 5;

var dataset = [
    [5, 20, 4],
    [480, 90, 6],
    [250, 50, 8],
    [100, 33, 5],
    [330, 95, 7],
    [410, 12, 3],
    [475, 44, 6],
    [25, 67, 4],
    [220, 88, 9]
];

var svg = d3
.select(".chart-container-2")
.append("svg")
.attr("width", w)
.attr("height", h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx",
function(d, i)
{
    return d[0] + padding;
}
)
.attr("cy",
function(d)
{
    return h - d[1] - padding;
}
)
  .attr("r", 
function(d) 
{
    return d[2];
}
)
.attr("fill", "slategrey")

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(
function(d)
{
    return d[0] + "," + d[1];
}
)
.attr("x", 
function(d) 
{
    return d[0] + 5 + padding;
}
)
.attr("y", 
function(d) 
{
    return h - d[1] - 5 - padding;
}
)
.attr("font-size", "10px")
.attr("fill", "black");