var topics = ["Kansas Jayhawks", "NBA", "College Basketball", "Basketball Referees", "Insane Basketball Fans", "Monster Dunks", "Basketball Mascots"];

function displayGifs() {
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
            topicGif.attr("src", results[i].images.fixed_height_still.url);
            //Puase and unpause//
            topicGif.attr("data-still", results[i].images.fixed_height_still.url);
            topicGif.attr("data-animate", results[i].images.fixed_height.url);
            topicGif.attr("data-state", "still");
            topicGif.addClass("bballGif");
            topicDiv.append(p);
            topicDiv.append(topicGif);
            $("#gif-container").prepend(topicDiv);
            //////////
            console.log("////////////")
            console.log(topicGif);
            ///////////
        }
    });
};

function pauseUnpause() {
    console.log("click");
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        console.log("was still now animated")
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
        console.log("was animated now still");
    }
};

function renderButtons() {
    $("#buttons-view").empty();
    
    for (b=0; b < topics.length; b++) {
        var bttn = $("<button>");
        bttn.addClass("topicBttn");
        bttn.attr("data-topic", topics[b]);
        bttn.text(topics[b]);
        $("#buttons-view").append(bttn);
       
    }
};
    




$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var newTopic = $("#gif-input").val().trim();
    topics.push(newTopic);
    //Bug: Will not empty after button is clicked//
    $("#gif-input").empty();
    ///////////////////////////////////////////////
    renderButtons();
});

$(document).on("click", ".topicBttn", displayGifs);
$(document).on("click", ".bballGif", pauseUnpause);
renderButtons();

    






