// Dataset we will be using to set the height of our rectangles
// var booksReadThisYear = [17, 23, 20, 34];

// // Append an SVG wrapper to the page and set a variable equal to a reference to it
// // YOUR CODE HERE

// // Append the SVG wrapper to the page, set its height and width, and create a variable which references it
// var svg = d3.select("#svg-area").append("svg");
// svg.attr("width","600px").attr("height","400px");

// // Append a rectangle and set its height in relation to the booksReadThisYear value

// var rectangle = svg.selectAll("rect");

// rectangle.data(booksReadThisYear)
//     .enter()
//     .append("rect")
//     .classed("bar", true)
//     .attr("width", 100)
//     .attr("height", function(d) {return 10 *d;})
//     .attr("stroke", "black")
//     .attr("fill", "red")
//     .attr("x", function(d,i) {return i*125})
//     .attr("y", function(d,i) {return d * 2})

//     console.log("hit")
// // Vertical Bar Chart
// YOUR CODE HERE

// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.

function printout(inputdata) {
    inputdata.forEach(element => {
        console.log(element)
    });
}

var query_url = "https://twitterusers.herokuapp.com/api/wordcloud/?identity=%22BBC%22"
d3.json(query_url).then(printout)
