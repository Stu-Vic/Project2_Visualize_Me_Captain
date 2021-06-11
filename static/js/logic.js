//this is the logic script for any d3 stuff we want to use


init();

function init() {

    d3.json("/api/identitylist/", function(data) {

        var names = data.map(a => a.Identities);

        console.log(names);

        // appending the names to the dropdown list
        names.forEach(function(Append) {
            var option = d3.select("#selDataset");
            option.append("option").text(Append);
        });
        
    })
};

function optionChanged(value) {
 // call the API with the name selected, so call ..../Katy Perry from the database
    dashBoard(value);
        
};

function wordCloud() {

    d3.json(`/api/wordcloud/?identity=${user_input}`).then((data) => {

         console.log(data);          


        
        //var sel_value = parseString(d3.select("#selDataset").property("value"));

    });
};

function dashBoard(value) {

    // var user_input = d3.select("#selDataset").val();
    // console.log(user_input);

    d3.json(`/api/dashboard/?name=${value}`).then((data) => {

        var data = data

        console.log(data);

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