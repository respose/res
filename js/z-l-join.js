/**
 * Created by hp1 on 2017/4/18.
 */
window.onload=function(){
    function getFigure(str3, str4, str5) {
        var flag = true;
        var picture = document.querySelectorAll(str3);
        console.log(picture.length);
        var circles = document.querySelectorAll(str4);
        console.log(circles.length)
        var div = document.querySelector(str5);
        var n = 0;
        var t = setInterval(move, 3000);//����move������ʹ��ʱ�亯���������Զ��仯��
        function move(way = "right") {//����move��Ĳ���Ĭ����right
            if (way == "right") {//���������Ĭ���������ԭ����������һ������n�Լ�
                n++;
                if (n >= picture.length) {//��ͼƬ�������һ��ʱ�����丳ֵΪ0����ͷ��ʼѭ��
                    n = 0;
                }
            }
            picture.forEach(function (value, index) {//ѭ��ͼƬ
                value.classList.remove("first-two")//�����к���first-one��first-one-one�Ƴ�
                circles[index].classList.remove("first-one")
            });
            picture[n].classList.add("first-two");//����ʱnֵ��������ͼƬ
            circles[n].classList.add("first-one");
        }
        div.onmouseover = function () {//�������ʱ��ֹͣ�ֲ�ͼѭ��
            clearInterval(t)
        }
        div.onmouseout = function () {
            t = setInterval(move, 3000);//���Ƴ���ʱ�򣬵���move��������������ѭ��
        }
        var m;
        circles.forEach(function (value, index) {//
            value.onmouseover = function () {
                clearTimeout(m)
                m = setTimeout(function () {
                    clearTimeout(m);
                    picture.forEach(function (value, index) {
                        value.classList.remove("first-two")
                        circles[index].classList.remove("first-one")
                    })
                    picture[index].classList.add("first-two");
                    value.classList.add("first-one");
                    n = index;
                }, 200)
            }
            value.onmouseout = function () {
                clearTimeout(m)
            }
        });
        picture.forEach(function (value) {
            value.addEventListener('transitionend', function () {
                flag = true;
            })
        });
    }
    getFigure('.tutu','.diandian .changtiao','.z-banner')
    getFigure('.tutu2','.diandian2 .changtiao2','.z-banner2')
    getFigure('.z-x-banner4','.diandian1 .changtiao4','.imgbox12')
    getFigure('.z-x-banner5','.diandian1 .changtiao5','.imgbox13')
    getFigure('.z-x-banner6','.diandian1 .changtiao6','.imgbox14')
}
//С��
$(function(){
    var body=$('body');
    var html=$('html');
    window.onresize=function() {
        var width=$(window).width();
        if(width<=1200){
            $('.z-nav-3').off();
            $('.z-nav-3').click(function(){
                body.toggleClass('buhuadong');
                html.toggleClass('buhuadong');
                $('body > ul').slideToggle(1000,function(){
                    $('body > ul').clearQueue();
                });
                $('body > ul > li').toggleClass('chuxian');
            })
        }else{
            body.attr({class:""});
            html.attr({class:""});
            $('body > ul').css('display','none')
        }
    }
    $(window).triggerHandler('resize');
    //ѡ�
    function xuanxuan(xuan1,xuan2,xuan3=''){
        $(xuan1).mouseover(function(){
            $(xuan1).removeClass('first');
            $(this).addClass('first');
            $(xuan2).removeClass('first');
            $(xuan2).eq($(this).index(xuan3)).addClass('first');
        })
    }
    xuanxuan(".z-content-l .z-smallimg img",".z-content-l .z-bigimg img")
    xuanxuan('.z-zi',".dian",".z-zi");
    xuanxuan('.z-zizi','.imgbox1','.z-zizi');
});
