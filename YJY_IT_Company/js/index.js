$(document).ready(function(){
   console.log("1111111");

    var orinalWidth = 0;
    var orinalHeight = 0;
    var zoomRatio = 1.5;//缩放比率

/*商品选中与取消选中的效果*/

    $(".display_container").mouseover(function () {
       $(this).children(".play_video").show();

    });

    $(".display_container").mouseleave(function () {
       $(this).children(".play_video").hide()
    });


});