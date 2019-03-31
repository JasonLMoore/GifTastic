var topics = ["Kansas Jayhawks", "NBA", "College Basketball", "Basketball Referees", "Insane Basketball Fans", "Monster Dunks", "Basketball Mascots"];

function displayGifs() {
    console.log("click start")
    console.log("//////////////////////")
    console.log($(this));
    var topic = $(this).attr("data-topic");
    console.log("//////////////////////")
    console.log(topic);
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=shNxgbRQV8gE0hvyjnnSdqG6le4hI2jT&q=" + topic + "&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function(response) {
        console.log("|||||||||||||||")
        console.log(queryURL);
        console.log("|||||||||||||||")
        console.log(response);
        var results = response.data;
        
        for (var i = 0; i < results.length; i++) {
            var topicDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            
            var topicGif = $("<img>");
            topicGif.attr("src", results[i].images.fixed_height.url);
            
            topicDiv.append(p);
            topicDiv.append(topicGif);
            $("#gif-container").prepend(topicDiv);
        }
        console.log("click end");
    });
};

function renderButtons() {
    $("#buttons-view").empty();
    console.log("<<<<<<>>>>>>");
    console.log(topics);
    
    for (b=0; b < topics.length; b++) {
        var bttn = $("<button>");
        bttn.addClass("topicBttn");
        bttn.attr("data-topic", topics[b]);
        bttn.text(topics[b]);
        $("#buttons-view").append(bttn);
        console.log("<<<<<<>>>>>>");
        console.log(bttn.attr("data-topic"));
    }
};




$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var newTopic = $("#gif-input").val().trim();
    topics.push(newTopic);
    console.log("---------------")
    console.log($("#gif-input"));
    $("#gif-input").empty();
    renderButtons();
});

$(document).on("click", ".topicBttn", displayGifs);
renderButtons();

    






