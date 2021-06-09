//this is the logic script for any d3 stuff we want to use


init();

function init() {

    d3.json(`"https://twitterusers.herokuapp.com/api/names`).then((data) => {

        var data = data

        names  = data.(grab names from the json data)
        // appending the names to the dropdown list
        names.forEach(function(Append) {
            var option = d3.select("#selDataset");
            option.append("option").text(Append);
        });

    

    })
}



////// 


/api/Akshay%20Kumar



//////this is to run after the json is exposed by the API

function optionChanged(value) {
 // call the API with the name selected, so call ..../Katy Perry from the database
    wordCloud(value);
    Arc(value);
    dashBoard(value)
        
};

function wordCloud(data) {

    var user_imput = data

    d3.json(`"https://twitterusers.herokuapp.com/api/wordcloud/?identity=" + ${user_input}`).then((data) => {
        //getting the selected value 

        //var sel_value = parseString(d3.select("#selDataset").property("value"));


    });
};

function Arc() {

    d3.json(import API endpoint).then((data) => {

        //var sel_value = parseString(d3.select("#selDataset").property("value"));

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