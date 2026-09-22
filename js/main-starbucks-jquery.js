$('.search').click(function() {
    console.log('클릭됨');
    let i = 0;
    i++;
    
    $('input').focus();
});
$('.material-symbols-outlined').click(function() {
    $('input').focus();
});
$('input').focus(function() {
    $('input').attr('placeholder', '통합검색');  // attr은 setAttribute와 같은 기능
});
$('input').blur(function() {
    $('input').attr('placeholder', '');
});

// 책갈피 애니메이션 처리
const badgeEl = document.querySelector('header .badges');
// _.throttle(콜백함수, 지연시간(ms));
window.addEventListener('scroll', _.throttle(function () {
    console.log('scroll!!!');
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        // 책갈피 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션(객체));
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none',
        });
    } else {
        // 책갈피 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block',
        });
    }

}, 300));
// window.addEventListener('scroll', function () {
//     console.log('scroll!!!');
//     console.log(window.scrollY);
// });

// visual fade-in 처리
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, idx) {
    gsap.to(fadeEl, 1, {
        delay: (idx + 1) * .7,   // 0.7, 1.4, 2.1, 2.8
        opacity: 1,
    })
});

// swiper 동작시작(notice)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: {
        delay: 1000, // 1초 동안 머물렀다가 넘어감
        speed: 1000,   
    },
    loop: true,
});
// swiper promotion
new Swiper('.promotion .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이의 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    pagination: {
        el: '.promotion .swiper-pagination',  // 페이지 번호 요소
        clickable: true, // 사용자가 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

// promotion 열기/닫기 제어
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtnEl = document.querySelector('.toggle-promotion');
let isHidePromotion = false;        // 처음 시작시에는 열린 상태
promotionToggleBtnEl.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion; // 열려있을 때는 hide를 false, 닫혀있을 때는 hide를 true
    if (isHidePromotion) // 숨김 처리
        //promotionEl.style.display = 'none';
        promotionEl.classList.add('hide');
    else                // 보임 처리
        //promotionEl.style.display = 'block';
        promotionEl.classList.remove('hide');

});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// youtube floating images
function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, 1, {
        y: size,    // 위로 size픽셀만큼 이동
        repeat: -1, // 무한반복
        yoyo: true,
        delay: random(0, delay),
        // ease: Power1.easeInOut,
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);
