var topics = ["Kansas Jayhawks", "NBA", "College Basketball", "Referees", "Insane Fans", "Monster Dunks", "Mascots"];


function renderButtons() {
    $("#buttons-view").empty();
    
    for (b=0; b < topics.length; b++) {
        var bttn = $("<button>");
        bttn.addClass("topic");
        bttn.attr("data-topic", topics[b]);
        bttn.text(topics[b]);
        $("#buttons-view").append(bttn);
    }
    
};
renderButtons();


$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var topic = $("#gif-input").val().trim();
    topics.push(topic);
    renderButtons();
    console.log(topics)
});

$("button").on("click", function() {
    var topic = $(this).attr("data-topic");
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=shNxgbRQV8gE0hvyjnnSdqG6le4hI2jT&q=" + topic + "&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function(response) {
        console.log(queryURL);
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
    });
    
    
    
    
});