//this is the logic script for any d3 stuff we want to use
function optionChanged(incomingData) {

    // wordCloud(incomingData);
    // Arc(incomingData);
    dashBoard(incomingData);
    
};

function wordCloud() {

    d3.json(import the json API file here).then((data) => {
        //getting the selected value 

        var sel_value = parseString(d3.select("#selDataset").property("value"));


    });
};

function Arc() {

    d3.json(import API endpoint).then((data) => {

        var sel_value = parseString(d3.select("#selDataset").property("value"));

    })
}

function dashBoard() {

    d3.json(import API endpoint).then((data) => {

        var data = data

        names  = data.(grab names from the json data)
        // appending the names to the dropdown list
        names.forEach(function(Append) {
            var option = d3.select("#selDataset");
            option.append("option").text(Append);
        });


    })
}