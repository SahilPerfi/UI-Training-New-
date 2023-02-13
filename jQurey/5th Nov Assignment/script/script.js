$(document).ready(function(){
    $("section").hide();
    $("#poemTab").click(function(){
        $("#poem").slideDown();
        $("#quote, #joke").hide();
        $("div").hide();
    });

    $("#jokeTab").click(function(){
        $("#joke").slideDown();
        $("#poem, #quote").hide();
        $("div").hide();
    });

    $("#quoteTab").click(function(){
        $("#quote").slideDown();
        $("#poem, #joke").hide();
        $("div").hide();
    });
});