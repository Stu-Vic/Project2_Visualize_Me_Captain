

var query_url = "http://127.0.0.1:5000/api/dashboard/scatter/?name=%22NASA%22"

var base_api = 'https://twitterusers.herokuapp.com/api/dashboard/?name='
var identity = '"Jimmy Fallon"'
// var query_url = base_api + identity
console.log(query_url)

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 850 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;
    // append the svg object to the body of the page
var svg = d3.select("#svg-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")

d3.json(query_url).then( function(data) {
    console.log("start graph")
    console.log(data)

  // Add X axis
    var x = d3.scaleLinear()
    // .domain([0, 100000])
    .domain(d3.extent(data, d => d.Likes))
    .range([ 0, width ]);
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()  
    // .domain([0, 100000])
    .domain(d3.extent(data, d => d.Retweets))
    .range([ height, 0]);
    svg.append("g")
    .call(d3.axisLeft(y));

    // text label for the x axis
    svg.append("text")             
        .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
        .style("text-anchor", "middle")
        .text("Likes");

    // text label for the y axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Re-Tweets");   

    // chart title
    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2) + 20)
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text(`${identity} Likes vs Retweets`);

    // Add dots
    svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
        // .attr("cx", function (d) { return x(d.Retweets); } )
        .attr("cx", 0)
        .attr("cy", function (d) { return y(d.Retweets); } )
        .attr("r", 2.5)
        .style("fill", "#69b3a2")

    // // new X axis
    // x.domain([0, 100000])
    // svg.select(".myXaxis")
    // .transition()
    // .duration(500)
    // .attr("opacity", "1")
    // .call(d3.axisBottom(x));

    svg.selectAll("circle")
    .transition()
    .delay(function(d,i){return(i*.25)})
    .duration(1000)
    .attr("cx", function (d) { return x(d.Likes); } )
    .attr("cy", function (d) { return y(d.Retweets); } )
});