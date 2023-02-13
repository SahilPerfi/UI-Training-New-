$(document).ready(function(){
    $("section").hide();
    $("#healthcareLink").click(function(){
        $("#healthcare").slideDown();
        $("#financial, #consumer, #automotive, #life, #Manufacturing, #Telecommunications, #energy").hide();
    });

    $("#financialLink").click(function(){
        $("#financial").slideDown();
        $("#healthcare, #consumer, #automotive, #life, #Manufacturing, #Telecommunications, #energy").hide();
    });

    $("#consumerLink").click(function(){ 
        $("#consumer").slideDown();
        $("#healthcare, #financial, #automotive, #life, #Manufacturing, #Telecommunications, #energy").hide();
    });

    $("#automotiveLink").click(function(){
        $("#automotive").slideDown();
        $("#healthcare, #financial, #consumer, #life, #Manufacturing, #Telecommunications, #energy").hide();
    });

    $("#lifeLink").click(function(){
        $("#life").slideDown();
        $("#healthcare, #financial, #consumer, #automotive, #Manufacturing, #Telecommunications, #energy").hide();
    });

    $("#ManufacturingLink").click(function(){
        $("#Manufacturing").slideDown();
        $("#healthcare, #financial, #consumer, #automotive, #life, #Telecommunications, #energy").hide();
    });

    $("#energyLink").click(function(){
        $("#energy").slideDown();
        $("#healthcare, #financial, #consumer, #automotive, #life, #Manufacturing, #Telecommunications").hide();
    });

    $("#TelecommunicationsLink").click(function(){
        $("#Telecommunications").slideDown();
        $("#healthcare, #financial, #consumer, #automotive, #life, #Manufacturing, #energy").hide();
    });
});
