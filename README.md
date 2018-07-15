# visualization_using_d3

<!DOCTYPE html>
<script src="//d3js.org/d3.v3.min.js"></script>

<style>
.chart rect { fill: steelblue }
.axis path,
.axis line {
    fill: none;
    stroke: black;
    shape-rendering: crispEdges;
}

.axis text {
    font-family: sans-serif;
    font-size: 11px;
}
</style>

<html><body>
<p>Here are the magic numbers from Lost: <span id="data"></span></p>

<svg class="chart"></svg>

<script>
var margin = 30;
var width = 120;
var height = 300;

var data = [4,8,15,16,23,42];
document.getElementById("data").innerHTML = data;

var x = d3.scale.ordinal()
	.domain([0,1,2,3,4,5])
    .rangeBands([0,width]);
    
var y = d3.scale.linear()
	.domain([0,42])
    .range([height,0]);

var chart = d3.select(".chart");

chart.attr("width",width + 2*margin)
    .attr("height",height + 2*margin)
    .append("g")
        .attr("transform","translate(" + margin + "," + margin + ")")
    .selectAll("rect")
	.data(data)
    .enter().append("rect")
    .attr("width",19)
    .attr("height",function(d) { return height - y(d); })
    .attr("x",function(d,i) { return x(i); })
    .attr("y",function(d) { return y(d); });

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(1);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(5);

chart.append("g")
    .attr("transform", "translate(" + margin + "," + (height+margin) + ")")
    .attr("class","axis")
    .call(xAxis);
    
chart.append("g")
    .attr("transform", "translate(" + margin + "," + margin + ")")
    .attr("class","axis")
    .call(yAxis);
</script>

</body></html>