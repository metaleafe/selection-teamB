$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".toggle").on("click", function () {
        // headerにopenクラスがあるか判定する
        if ($("header").hasClass("open")) {
            // headerにopenクラスが存在しない場合、openクラスを削除する
            $("header").removeClass("open");
        } else {
            // headerにopenクラスが存在する場合、openクラスを加える
            $("header").addClass("open");
        }
    });

    // メニューが表示されている時に画面をクリックした場合
    $("#mask").on("click", function () {
        $("header").removeClass("open");
    });

    // リンクをクリックした時にメニューを閉じる
    $('.hamburger-link a').on('click', function () {
        // ここでheaderからopenクラスを削除します
        $('header').removeClass('open');
    });

    // スクロール後のヘッダー出現設定
    $(function () {
        $(window).on("scroll", function () {
            let scrollPoint = window.innerWidth <= 900 ? 200 : 300;
            $(".header-box").toggleClass("fixed", $(this).scrollTop() > scrollPoint);
        });
    });


    /*=================================================
    スムーススクロール
    ===================================================*/
    $('a[href^="#"]').click(function () {
        // クリックしたaタグのリンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
        let target = $(href == "#" || href == "" ? "html" : href);
        // ページトップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
        // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        // urlが変化しないようにfalseを返す
        return false;
    });
})

// -------------------------------------------------------
// mainvisual画像
// -------------------------------------------------------
$('.mainvisual-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000, // 画像が表示される時間（ミリ秒）
    speed: 800,          // フェード・スライドの切り替え速度
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,          // スライド
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
});


// -------------------------------------------------------
// GALLERY画像
// -------------------------------------------------------
$('.slider').slick({
    autoplay: true,//自動的に動き出すか
    infinite: true,//スライドをループさせるか
    speed: 500,//スライドのスピード。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: false,//下部ドットナビゲーションの表示
    responsive: [{
        breakpoint: 500,
        settings: {
            slidesToShow: 1
        }
    }]
});

// -------------------------------------------------------
// Q&A
// -------------------------------------------------------

$('.question').click(function () {
    $('.question').not(this).next().slideUp();
    $('.question').not(this).removeClass('active');
    $(this).next().slideToggle();
    $(this).toggleClass('active');
});

// -------------------------------------------------------
// CONTACT
// -------------------------------------------------------
$('.js-input').keyup(function () {
    if ($(this).val()) {
        $(this).addClass('not-empty');
    } else {
        $(this).removeClass('not-empty');
    }
});

// aa
// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('textarea + label + span').css({ 'opacity': 1 });
        }
        else {
            $this.removeClass('focused');
            $('textarea + label + span').css({ 'opacity': 0 });
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:first-child input + label + span').css({ 'opacity': 1 });
        }
        else {
            $this.removeClass('focused');
            $('.field:first-child input + label + span').css({ 'opacity': 0 });
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:nth-child(2) input + label + span').css({ 'opacity': 1 });
        }
        else {
            $this.removeClass('focused');
            $('.field:nth-child(2) input + label + span').css({ 'opacity': 0 });
        }
    });
});

// -------------------------------------------------------
// loading
// -------------------------------------------------------
$(window).on('load', function () {
    setTimeout(function () {

        $('.loading').fadeOut();
    }, 500)
});

// -------------------------------------------------------
// Page top
// -------------------------------------------------------
const button = document.querySelector('.page-top');

button.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        button.classList.add('is-active');
    } else {
        button.classList.remove('is-active');
    }
});