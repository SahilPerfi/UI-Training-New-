var images= [
    "https://i.ibb.co/5cyWgrR/86569ff32bf66e39dcd79d66fcfae814.jpg",
    "https://i.ibb.co/wczYVKJ/640x640.jpg",
    "https://i.ibb.co/ZcDKnhD/ETOWi-A5-WAAAgf5-P.jpg",
    "https://i.ibb.co/NVZ7hm2/Selena-Gomez-De-Una-Vez-Official-Single-Cover.png",
    "https://i.ibb.co/7Gvt4Fg/Uyire-1998-500x500.jpg"];
var num=0;//num is a variable to hold the current image

function next()
{
  var slider =document.getElementById('slider');
  num++;
  
  //checking whether the new position of image is greater or equal to the no. of images we use
  if(num>=images.length)//images is the defined arary
  {
    num=0;
    //if the condition is true num is defined to hold to first image of the slider
  }
  slider.src=images[num];
}

function previous()
{
  var slider =document.getElementById('slider');
  num--;
  
  //checking whether the new position of image is bfore or after the first image 
  if(num<0)//images is the defined arary
  {
    num=images.length-1;
    //if the condition is true num is defined to hold to last image of the slider
  }
  slider.src=images[num];
}