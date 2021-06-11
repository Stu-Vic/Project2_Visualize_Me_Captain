//this is the logic script for any d3 stuff we want to use


init();

function init() {

    d3.json("/api/identitylist/", function(data) {

        var names = data.map(a => a.Identities);

        // console.log(names);

        // appending the names to the dropdown list
        names.forEach(function(Append) {
            var option = d3.select("#selDataset");
            option.append("option").text(Append);
        });
        
        dashBoard("Akshay Kumar");
        scatter("Akshay Kumar");
    })

};

function optionChanged(incomingData) {
    console.log(incomingData);
 // call the API with the name selected, so call ..../Katy Perry from the database
    dashBoard(incomingData);
    scatter(incomingData);
};

function dashBoard(name) {

    console.log(name);

    d3.json(`/api/dashboard/?name=${name}`).then((data) => {

        var data = data

        console.log(data);

        d3.select("#user-totals").html("");
        d3.select("#month-totals").html("");
        d3.select("#day-totals").html("");

        Object.entries(data).forEach(([key, value]) => {
            if (key.includes('Total')) {
                d3.select("#user-totals").append("h5").text(`${key}: ${value}`);
            }
        });
        
        Object.entries(data).forEach(([key, value]) => {
            if (key.includes('Month')) {
                d3.select("#month-totals").append("h5").text(`${key}: ${value}`);
            }
        });

        Object.entries(data).forEach(([key, value]) => {
            if (key.includes('Day')) {
                d3.select("#day-totals").append("h5").text(`${key}: ${value}`);
            }
        });
    })
}

function scatter(name) {

    //removing the scatterplot
    d3.select("#scatter").html("");

    console.log(name);
    
    var identity = name;

    var margin = {top: 50, right: 30, bottom: 50, left: 60},
    width = 1000 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;
    
    // append the svg object to the body of the page
    var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform","translate(" + margin.left + "," + margin.top + ")")

    d3.json(`/api/dashboard/scatter/?name=${name}`).then((data) => {
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
            .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top) + ")")
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
            .attr("y", 0 - (margin.top / 2)-10)
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

        

    })

}