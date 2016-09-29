/**
 * Created by Sunshine on 16/9/29.
 */
$(function (){

    //切换搜索框
    (function(){
        var aLi = $("#menu li");
        var oText = $("#search").find(".form .text");
        var arrText = [
            '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
            '例如：昌平区育新站龙旗广场2号楼609室',
            '例如：万达影院双人情侣券',
            '例如：东莞出事了，大老虎是谁？',
            '例如：北京初春降雪，天气变幻莫测'
        ];
        var iNow = 0;

        oText.val(arrText[iNow]);

        aLi.each(function(index){
           $(this).click(function(){
               aLi.attr("class","gradient");
               $(this).attr("class","active");
               iNow = index;
               oText.val(arrText[iNow]);
           });
        });

        oText.focus(function(){
            if($(this).val() == arrText[iNow])
            {
                $(this).val("");
            }
        });

        oText.blur(function(){
            if($(this).val() == "")
            {
                $(this).val(arrText[iNow]);
            }
        });

    })();


    // update文字弹性滑动
    (function(){
        var oDiv = $(".update");
        var oUl = oDiv.find("ul");
        var arrData = [
            { 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' },
            { 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.baidu.com' },
            { 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.baidu.com' },
            { 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' },
            { 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' },
            { 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.baidu.com' },
            { 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.baidu.com' },
            { 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' }
        ];
        var iH = 0;
        var str = "";
        var oBtnUp = $('#updateUpBtn');
        var oBtnDown = $('#updateDownBtn');
        var iNow = 0;
        var timer = null;

        for(var i = 0; i<arrData.length; i++)
        {
            str += '<li><a href=" '+ arrData[i].url +' "><strong>'+ arrData[i].name +'</strong><span>'+ arrData[i].time +'分钟前</span> 写了一篇新文章：'+ arrData[i].title +'…</a></li>';
        }
        oUl.html(str);

        iH = oUl.find("li").height();

        oBtnUp.click(function(){
            doMove(-1);
        });
        oBtnDown.click(function(){
            doMove(1);
        });

        oDiv.hover(function(){
            clearInterval(timer);
        },autoPlay);

        function autoPlay(){
            timer = setInterval(function(){
                doMove(-1);
            },2500);
        }

        autoPlay();

        function doMove(num){
            iNow += num;
            if(Math.abs(iNow) > arrData.length-1)
            {
                iNow = 0;
            }
            if(iNow > 0)
            {
                iNow = -(arrData.length-1);
            }
            oUl.stop().animate(
                {
                    'top':iH*iNow
                }
            ,2200,'elasticOut');
        }
    })();

});