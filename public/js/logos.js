$(document).ready(function() {
    $(".sponsor-logos a, .partner-logos a").each(function() {
        let randomMargin = Math.floor(Math.random() * (50 - 10 + 1) + 10);  // Generates a random margin between 10 and 50 pixels.
        $(this).css("margin-bottom", randomMargin + "px");
    });
});