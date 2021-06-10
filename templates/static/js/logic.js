//this is the logic script for any d3 stuff we want to use


init();

function init() {

    d3.json("/api/test/", function(data) {

        var names = data;

        console.log(names);

        // appending the names to the dropdown list
        names.forEach(function(Append) {
            var option = d3.select("#selDataset");
            option.append("option").text(Append);
        });
        
    })
    // .catch(function(error) {
    //     // Do some error handling.
    //     return error;
    // });
};

function optionChanged(value) {
 // call the API with the name selected, so call ..../Katy Perry from the database
    wordCloud(value);
    // Arc(value);
    // dashBoard(value)
        
};

function wordCloud(value) {

    // var user_input = d3.select("#selDataset").property("value")

    d3.json(`"/api/wordcloud/?identity=" + ${value}`).then((data) => {
        

        //var sel_value = parseString(d3.select("#selDataset").property("value"));


    });
};

// function Arc() {

//     d3.json(import API endpoint).then((data) => {

//         //var sel_value = parseString(d3.select("#selDataset").property("value"));

//     })
// }

function dashBoard() {

    d3.json(`"/api/dynamictest/" + ${value}`).then((data) => {

        var data = data

        console.log(data);

    

    })
}