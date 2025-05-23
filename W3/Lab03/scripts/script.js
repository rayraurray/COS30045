var w = 700;
var h = 300;
var padding = 40;

var dataset = [
    [5, 20, 4],
    [480, 90, 6],
    [250, 50, 8],
    [100, 33, 5],
    [330, 95, 7],
    [410, 12, 3],
    [475, 44, 6],
    [85, 21, 2],
    [25, 67, 4],
    [220, 88, 9]
];

// =====================================================

var xScale = d3
.scaleLinear()
.domain(
    [d3.min(
        dataset, 
        function(d)
        {
            return d[0];
        }
    ),
    d3.max(
        dataset,
        function(d)
        {
            return d[0];
        }
    )
])
.range([padding, w - padding]);

var yScale = d3
.scaleLinear()
.domain([
    d3.min(
        dataset,
        function(d)
        {
            return d[1]; 
        }
    ),
    d3.max(
        dataset,
        function(d)
        {
            return d[1];
        }
    )
])
.range([h - padding, padding]); 

// =====================================================

var xAxis = d3
.axisBottom()
.ticks(10)
.scale(xScale);

var yAxis = d3
.axisLeft()
.ticks(10)
.scale(yScale)

// =====================================================

var svg = d3
.select(".chart-container")
.append("svg")
.attr("width", w)
.attr("height", h);

svg.append("g")
.attr("transform", "translate(0, "+ (h-padding)+")")
.call(xAxis);

svg.append("g")
.attr("transform", "translate(" + padding + ", 0)")
.call(yAxis);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx",
    function(d, i)
    {
        return xScale(d[0]);
    }
)
.attr("cy",
    function(d)
    {
        return yScale(d[1]);
    }
)
.attr("r", 
    function(d)
    {
        return d[2];
    }
)
.attr("fill", "slategrey")

// =====================================================

svg.selectAll(".label")
.data(dataset)
.enter()
.append("text")
.attr("class", "label")
.text(
    function(d)
    {
        return `${d[0]},${d[1]}`;
    }
)
.attr("x", 
    function(d) 
    {
        return xScale(d[0]) + 5;
    }
)
.attr("y", 
    function(d) 
    {
        return yScale(d[1]) - 5;
    }
)
.attr("font-size", "10px")
.attr("fill", "black");