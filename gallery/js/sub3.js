'use strict';
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);
let $links = getAll('a[href="#"]');
$links.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
// sub3 db
let listArr = [
    {
        id: 1,
        desc: 'olored lights in defocus - 초점이 흐려진 컬러 조명',
        imgUrl: `images/content/thumImg01.jpg`,
        siteUrl: `http://naver.com`,
    },
    {
        id: 2,
        desc: 'Old photo film - 오래된 사진 필름',
        imgUrl: `images/content/thumImg02.jpg`,
        siteUrl: `http://naver.com`,
    },
    {
        id: 3,
        desc: 'Damaged bonnet - 손상된 보닛',
        imgUrl: `images/content/thumImg03.jpg`,
        siteUrl: `http://naver.com`,
    },
    {
        id: 4,
        desc: 'Oil painting of waves - 파도를 담은 유화',
        imgUrl: `images/content/thumImg04.jpg`,
        siteUrl: `http://naver.com`,
    },
    {
        id: 5,
        desc: 'Dust Overlay - 흩뿌려진 더스티 텍스쳐',
        imgUrl: `images/content/thumImg05.jpg`,
        siteUrl: `http://naver.com`,
    },
    {
        id: 6,
        desc: 'Black paint roller - 흑색의 페인트 롤러',
        imgUrl: `images/content/thumImg06.jpg`,
        siteUrl: `http://naver.com`,
    },
    {
        id: 7,
        desc: 'Silk made from dots - 점으로 탄생한 실크',
        imgUrl: `images/content/thumImg07.jpg`,
        siteUrl: `http://naver.com`,
    },
    {
        id: 8,
        desc: 'Texture of old wall - 오래된 벽의 질감',
        imgUrl: `images/content/thumImg08.jpg`,
        siteUrl: `http://naver.com`,
    },
    {
        id: 9,
        desc: 'Oil paint texture - 유화 물감 텍스쳐',
        imgUrl: `images/content/thumImg09.jpg`,
        siteUrl: `http://naver.com`,
    },
    {
        id: 10,
        desc: 'Oil paint texture - 유화 물감 텍스쳐',
        imgUrl: `images/content/thumImg10.jpg`,
        siteUrl: `http://naver.com`,
    },
    {
        id: 11,
        desc: 'Oil paint texture - 유화 물감 텍스쳐',
        imgUrl: `images/content/thumImg11.jpg`,
        siteUrl: `http://naver.com`,
    },
    {
        id: 12,
        desc: 'Oil paint texture - 유화 물감 텍스쳐',
        imgUrl: `images/content/thumImg12.jpg`,
        siteUrl: `http://naver.com`,
    },
];

let $thumList = get('.sub3 .right ul'); // 썸네일 전체
let $desc = get('.sub3 .left p');
let $pic = get('.sub3 .left em img');
let $cur = get('.sub3 .right span');
let output = '';

listArr.forEach((item, idx) => {
    //thum 이미지 li 생성
    output += `<li><img src=${item.imgUrl}></li>`;
});

$thumList.innerHTML = output;

let $thumLi = getAll('.sub3 .right ul li');

let cnt = 0,
    timer = null,
    interval = 3000,
    size = $thumLi.length,
    total = size;

$cur.innerHTML = `${cnt + 1}</span> / <span>${size}`;

const listing = () => {
    $desc.textContent = listArr[cnt].desc;
    $pic.setAttribute('src', listArr[cnt].imgUrl);
    $pic.animate([{ opacity: 0 }, { opacity: 1 }], 400);

    $thumLi[cnt].setAttribute('src', listArr[cnt].imgUrl);
    $cur.innerHTML = `<span>${cnt + 1}&nbsp</span><span> / ${size}</span>`;

    $thumLi.forEach((liitem) => {
        liitem.classList.remove('on');
    });
    $thumLi[cnt].classList.add('on');
};
const make = () => {
    cnt = cnt > size - 2 ? 0 : cnt + 1;
    listing();
};
listing();
timer = setInterval(make, interval);

$thumLi.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        cnt = idx; // cnt 대입할 때는 클릭이벤트 내에 삽입하기.
        listing();

        clearInterval(timer);
        timer = setInterval(make, interval);
    });
});

$pic.addEventListener('mouseenter', (e) => {
    clearInterval(timer);
});

$pic.addEventListener('mouseleave', (e) => {
    timer = setInterval(make, interval);
});

$pic.addEventListener('click', (e) => {
    window.open(listArr[cnt].siteUrl);
});
