/**
 * Created by LENOVO on 2016/9/1.
 */
var pb = $(".pb");
$(document).ready(function(){
    $("#navbar li").each(function(index){
        $(this).click(function(){
            $(".jumbotron div.content").hide().removeClass("content");
            $("#navbar li.active").removeClass("active");
            var div = $(".jumbotron .page").eq(index);
            $(this).addClass("active");
            switch (index){
                case 0:case 2: div.fadeIn(1000);break;
                case 1:case 3: div.slideDown(1000);break;
            }
            div.addClass("content");
        });
    });
    pb.progressbar({max:100});
    pb.each(function(index){changpb(index);});
});

function changpb(index){
    switch(index){
        case 0: pb.eq(index).progressbar("option","value",90);break;
        case 1: pb.eq(index).progressbar("option","value",85);break;
        case 2: pb.eq(index).progressbar("option","value",75);break;
        case 3: pb.eq(index).progressbar("option","value",77);break;
        case 4: pb.eq(index).progressbar("option","value",80);break;
        case 5: pb.eq(index).progressbar("option","value",65);break;
        case 6: pb.eq(index).progressbar("option","value",70);break;
    }
}
/*获取当前可是窗口的宽高*/
$('.bigPic').height();
console.log($('window').height());


/*项目页 .project-sort*/
$('.pro-mainContent>.proAll1>a').each(function(){ 
    $(this).find('.pro1').click(function(){
        // alert('111111111')
       $('.pro-bigPic').css({'display':'block','opacity':'1'});       
        $('.mask').css('display','block');

       var head = $(this).find('.pro-page1').find('ol').children().eq(0).html()
       var cont = $(this).find('.pro-page1').find('ol').children().eq(1).html()
       var sum = $(this).find('.pro-page1').find('ol').children().eq(2).html()
       var sumContent1 = $(this).find('.pro-page1').find('ol').children().eq(3).html()
       var sumContent2 = $(this).find('.pro-page1').find('ol').children().eq(4).html()
       var lianjie = $(this).find('.pro-page1').find('ol').children().eq(5).html()
       var imgRrl = $(this).find('.pro-page1').find('ol').children().eq(6).html()
       var htm = '<div class="show"><h4>'+head+'</h4><p>'+cont+'</p><h4>'+sum+'</h4><p>'+sumContent1+'</p><p>'+sumContent2+'</p><a href="'+lianjie+'" class="address">项目地址:'+lianjie+'</a></div>';
       console.log(htm);
       $('.pro-bigPic').html(htm);
       $('.show').css('background','url('+imgRrl+')');
     })  
})


// 当点击时让pro-bigPic隐藏
$('.mask').click(function(){
    $(this).css('display','none');
    $('.pro-bigPic').css({'display':'none','opacity':'0'});
})


$(function(){
    var ww = $(window).width();
    var wh = $(window).height();
    console.log(ww)
    $('.pro-bigPic').width(ww*2/3+'px').height(wh+'px').css('left',ww/2-ww*2/3/2+'px');
    
})


