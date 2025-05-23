var w = 500;
var h = 100;
var padding = 5;

var dataset = [14, 5, 26, 23, 9, 18, 30, 12, 7, 21];

var svg = d3
.select(".chart-container-1")
.append("svg")
.attr("width", w)
.attr("height", h);

svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x", 
function(d, i)
{
    return i * (w / dataset.length);
}
)
.attr("y", 
function(d)
{
    return h - d * 4; 
}
)
.attr("width", (w / dataset.length) - padding)
.attr("height",
function(d)
{
    return d * 4;
}
)
.attr("fill", "steelblue")