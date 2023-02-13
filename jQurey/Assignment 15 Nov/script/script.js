let slideIndex = 5;
let r=0;
function moveSlides(n) {
    p=n;
    displaySlide(slideIndex += n,p);
}
$(document).ready(function(){
    var slideList = [
        {
            "ID": "1"
        },
        {
            "ID": "2" 
        },
        {
            "ID": "3"
        },
        {
            "ID": "4" 
        },
        {
            "ID": "5"
        },
        {
            "ID": "6" 
        },
        {
            "ID": "7"
        },
        {
            "ID": "8" 
        },
        {
            "ID": "9"
        },
        {
            "ID": "10" 
        },
    ]
    let slideHtml = "";
    if(slideList.length>5){
        for(let i=1;i<=slideList.length;i++){
            slideHtml += '<div class="item">'+i+'</div>';
        }
        $(".content").html(slideHtml);
        for (let i = 5; i <$('.item').length; i++) {
            $('.item').eq(i).hide();
        }
    }else{
        for(let i=1;i<=slideList.length;i++){
            slideHtml += '<div class="item" >'+i+'</div>';
        }
        $(".content").html(slideHtml);
    }
})

function displaySlide(n,j) {
    if (n > $('.item').length) {
        slideIndex = $('.item').length;
    }
    
    else if (n < 5) {
        slideIndex =5;
    }
    else if(j==1){
        r +=260;
        $('.item').animate({right:r});
        $('.item').eq(slideIndex-1).show();
    }
    else if(j==-1){
        $('.item').animate({right:'-=255px'});
        $('.item').eq(slideIndex - 5).show();
    }
    if(slideIndex==$('.item').length){
        $(".next").hide();
    }
    if(slideIndex==5){
        $(".pervious").hide();
    }
    if(slideIndex>5 && slideIndex<$('.item').length){
        $(".pervious").show();
        $(".next").show();
    }
}