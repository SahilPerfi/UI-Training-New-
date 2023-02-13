$(document).ready(function(){
    var $window = $(window);
    $(window).resize(function() {
        if($window.width() <= 768) {
            location.reload();
        } else if (768 < $window.width() < 1440) {
            location.reload();
        }
    });
    $("section, #healthcare1, #financial1, #consumer1").hide();
    $("#healthcare").click(function(){
        $("#contentHealthcare").slideDown();
        $("#contentFinancial, #contentConsumer").hide();
        function responsive(maxWidth) {
            if (maxWidth.matches) { 
               $("#financial, #consumer").css({'display':'none'});
               $("#financial1, #consumer1").show();
               $("#financial, #consumer").css({"background-color":"red", "border":"none"})

            }  
        }
        var maxWidth = window.matchMedia("(max-width: 600px)");   
        responsive(maxWidth);
        maxWidth.addEventListener(responsive);
    });        
    $("#financial").click(function(){
        $("#contentFinancial").slideDown();
        $("#contentHealthcare, #contentConsumer").hide();
        function responsive(maxWidth) {
            if (maxWidth.matches) { 
               $("#consumer").css({'display':'none'});
               $("#consumer1").show();
               $("#consumer").css({"background-color":"red", "border":"none"})
               $("#financial").css({"background-color":"red", "border":"none"})
               
            } 
        }
        var maxWidth = window.matchMedia("(max-width: 600px)");   
        responsive(maxWidth);
        maxWidth.addEventListener(responsive);
    });
    $("#financial1").click(function(){
        $("#financial").show();
        $("#contentFinancial").slideDown();
        $("#contentHealthcare, #contentConsumer").hide();
        function responsive(maxWidth) {
            if (maxWidth.matches) { 
               $("#financial1, #consumer").css({'display':'none'});
               $("#consumer1").show();
            } 
        }
        var maxWidth = window.matchMedia("(max-width: 600px)");   
        responsive(maxWidth);
        maxWidth.addEventListener(responsive);
    });
    $("#consumer1").click(function(){
        $("#financial, #consumer").show();
        $("#contentConsumer").slideDown();
        $("#contentHealthcare, #contentFinancial").hide();
        function responsive(maxWidth) {
            if (maxWidth.matches) { 
               $("#consumer1, #financial1").css({'display':'none'});
               $("#financial").css({"background-color":"black"})
            } 
        }
        var maxWidth = window.matchMedia("(max-width: 600px)");   
        responsive(maxWidth);
        maxWidth.addEventListener(responsive);
    });
    $("#consumer").click(function(){
        $("#contentConsumer").slideDown();
        $("#contentHealthcare, #contentFinancial").hide();
    }); 
});