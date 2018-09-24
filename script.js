var slideWidth = 800;   // 画像の幅(px)
var currentSlide = 0;   // 現在表示中のスライドが何枚目か(0からカウント)
var numSlides;          // スライドの合計枚数

// index番目のスライドを表示する関数
function showSlide(index) {
    // 1番目のスライドは左矢印を非表示(誤作動防止)
    if (index === 0) {
        $('.carousel-control-prev').hide();
    } else {
        $('.carousel-control-prev').show();
    }

    // 最後のスライドは右1矢印を非表示(誤作動防止)
    if (index === numSlides - 1) {
        $('.carousel-control-next').hide();
    } else {
        $('.carousel-control-next').show();
    }

    // 実行中のアニメーションがあればキャンセルした後、leftを変化させるアニメーションを開始
    $('#slides').stop().animate({
        left: -slideWidth * currentSlide + 'px'
    }, 600);
}

jQuery(function($) {
    numSlides = $('#slides > li').length;   // スライドの合計枚数を取得
    showSlide(currentSlide);    // 最初のスライドを表示

    // 左矢印がクリックされたら1つ前のスライドを表示
    $('.carousel-control-prev').click(function() {
        currentSlide--;
        showSlide(currentSlide);
        return false;
    });

    // 右矢印がクリックされたら1つ後のスライドを表示
    $('.carousel-control-next').click(function() {
        currentSlide++;
        showSlide(currentSlide);
        return false;
    });
});