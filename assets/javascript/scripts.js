var topics = ["Kansas Jayhawks", "NBA", "College Basketball", "Referees", "Insane Fans", "Monster Dunks", "Mascots"];
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=shNxgbRQV8gE0hvyjnnSdqG6le4hI2jT";

function renderButtons() {
    $("#buttons-view").empty();
    
    for (b=0; b < topics.length; b++) {
        var bttn = $("<button>");
        bttn.addClass("topic");
        bttn.attr("data-name", topics[b]);
        bttn.text(topics[b]);
        $("#buttons-view").append(bttn);
    }

}

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var topic = $("#gif-input").val().trim();
    topics.push(topic);
    console.log(topics);
    renderButtons();
    
});
renderButtons();
console.log(topics)