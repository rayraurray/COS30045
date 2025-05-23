let dataCSV;
const margin = { top: 40, right: 20, bottom: 50, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

const svg = d3.select("#chart")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", `translate(${margin.left},${margin.top})`);

const x0 = d3.scaleBand().range([0, width]).paddingInner(0.2);
const x1 = d3.scaleBand().padding(0.05);
const y = d3.scaleLinear().range([height, 0]);
const color = d3.scaleOrdinal().range(["#716581", "#b9adbb"]);

const xAxis = svg.append("g")
  .attr("transform", `translate(0,${height})`);

const yAxis = svg.append("g");

d3.csv("./data/pet_ownership.csv").then(data => {
  data.forEach(d => {
    d["pets2019"] = +d["pets2019"];
    d["pets2021"] = +d["pets2021"];
  });
  dataCSV = data;
  updateChart("both"); // default
});

function updateChart(view) {
  let keys;
  if (view === "both") {
  keys = ["pets2019", "pets2021"];
  } else {
  keys = [view];
  }

  x0.domain(dataCSV.map(d => d.animal));
  x1.domain(keys).range([0, x0.bandwidth()]);
  y.domain([0, d3.max(dataCSV, d => d3.max(keys, key => d[key]))]).nice();

  svg.selectAll(".bar-group").remove();

  const barGroups = svg.selectAll(".bar-group")
  .data(dataCSV)
  .enter().append("g")
  .attr("class", "bar-group")
  .attr("transform", d => `translate(${x0(d.animal)},0)`);

  barGroups.selectAll("rect")
  .data(d => keys.map(key => ({ key, value: d[key] })))
  .enter().append("rect")
  .attr("x", d => x1(d.key))
  .attr("y", d => y(d.value))
  .attr("width", x1.bandwidth())
  .attr("height", d => height - y(d.value))
  .attr("fill", d => color(d.key));

  xAxis.call(d3.axisBottom(x0));
  yAxis.transition().duration(500).call(d3.axisLeft(y));
}
