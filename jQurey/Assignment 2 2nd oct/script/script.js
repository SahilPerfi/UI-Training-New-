$(document).ready(function(){
    $("section").hide();
    $("#healthcareLink").click(function(){
        $("#healthcare").slideDown();
        function responsive(maxWidth){
            if (maxWidth.matches) {
                $("#financial, #consumer").css({'display':'none'});
            }
        }
        var maxwidth = window.matchMedia("(max-width:600px)")
        responsive(maxWidth)
        maxWidth.addEventListener(responsive);
    });

    $("#financialLink").click(function(){
        $("#financial").slideDown();
        $("#healthcare, #consumer").hide();
    });

    $("#consumerLink").click(function(){
        $("#consumer").slideDown();
        $("#healthcare, #financial").hide();
    });
});
