$(document).ready(function () {
  var zoom1 = 100;
  $(".zoomIn").click(function () {
    if (zoom1 < 500) {
      zoom1 += 25;
      console.log(zoom1)
      $("#bagImageZoom").css("zoom",zoom1+"%");
    }
  });
  $(".zoomOut").click(function () {
    if (zoom1 > 100) {
      zoom1 -= 25;
      $("#bagImageZoom").css("zoom",zoom1+"%");
      console.log(zoom1);
    }
  });
});