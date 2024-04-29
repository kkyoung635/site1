'use stricts';
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);
let $links = getAll('a[href="#"]');
$links.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
// sub4 db
let comuArr = [
    {
        id: 1,
        news: '전송 공시 (201,070 WEMIX)',
        imgUrl: 'images/content/communication/comImg0.png',
        siteUrl: 'https://www.wemix.com/ko/communication/transfer-disclosure-(201,070-wemix)-39ba5d1d2ea2',
        date: '2023년 9월 22일',
    },
    {
        id: 2,
        news: '위메이드 장현국 대표 스무번째 위믹스 매입',
        imgUrl: 'images/content/communication/comImg1.png',
        siteUrl:
            'https://www.wemix.com/ko/communication/henry-chang%E2%80%99s-20th-wemix-purchase-announcement-6270620f1152',
        date: '2023년 9월 23일',
    },
    {
        id: 3,
        news: 'WEMIX PLAY & PLAY Wallet 업데이트 완료',
        imgUrl: 'images/content/communication/comImg2.png',
        siteUrl: 'https://www.wemix.com/ko/communication/wemix-play-&-play-wallet-updated-50d4a6e22128',
        date: '2023년 9월 24일',
    },
    {
        id: 4,
        news: '위믹스, 옴니체인 네트워크 우나기 생태계 구축 위해 ‘체인링크 랩스’와 협력',
        imgUrl: 'images/content/communication/comImg3.png',
        siteUrl:
            'https://www.wemix.com/ko/communication/-wemix-and-chainlink-labs-to-build-omnichain-network-unagi-ecosystem-together-bf4becac9f17',
        date: '2023년 9월 24일',
    },
    {
        id: 5,
        news: 'ORANGE BANANA PUNCH 사전예약이 시작 되었습니다.',
        imgUrl: 'images/content/communication/comImg4.png',
        siteUrl:
            'https://www.wemix.com/ko/communication/pre-registration-for-orange-banana-punch-is-now-available!-06b357a00c51',
        date: '2023년 9월 25일',
    },
];

let $p = get('.sub4 .left p'); //뉴스 타이틀
let $pic1 = get('.sub4 .left em img'); // 좌측 이미지
let $ul = get('.sub4 .right ul');

let imgUrl,
    cnt = 0,
    interval = 3000,
    timer = null,
    size,
    output = '';

comuArr.forEach((item, idx) => {
    output += `
    <li class="on">
    <div class="txt">
    <p class="news-title">${item.news}</p>
    <span>${item.date}</span>
    </div>
    <em><img src="${item.imgUrl}" alt="" /></em>
    </li>
    `;
});
$ul.innerHTML = output;
let $liNews = getAll('.sub4 .right ul li ');
let $title = get('.sub4 .right ul li .txt .news-title');
let $day = get('.sub4 .right ul li .txt span');
let $pic2 = get('.sub4 .right ul li em img'); // 우측 썸네일 이미지
size = $liNews.length;
const lsiting = () => {
    $liNews.forEach((liItem) => {
        liItem.classList.remove('on');
    });
    $liNews[cnt].classList.add('on');
    $pic1.setAttribute('src', comuArr[cnt].imgUrl);
    $p.textContent = comuArr[cnt].news;
};
const make = () => {
    // cnt++;
    // if (cnt > size - 1) {
    //     cnt = 0;
    // }
    cnt = cnt >= size - 1 ? 0 : cnt + 1;
    lsiting();
    console.log($liNews[cnt]);
};
lsiting();
timer = setInterval(make, interval);

$liNews.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        cnt = idx;

        lsiting();
        clearInterval(timer);
        timer = setInterval(make, interval);
    });
});

$pic1.addEventListener('mouseenter', (e) => {
    clearInterval(timer);
});
$pic1.addEventListener('mouseleave', (e) => {
    timer = setInterval(make, interval);
});
$pic1.addEventListener('click', (e) => {
    window.open(comuArr[cnt].siteUrl);
});
