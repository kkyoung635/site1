'use strict';
const get = (target) => {
    return document.querySelector(target);
};
const getAll = (target) => {
    return document.querySelectorAll(target);
};

//sub1.js

//sub2.js
const urlArr = [
    'https://groundseesaw.co.kr/',
    'https://www.instagram.com/renoburgmuseum/',
    'https://www.instagram.com/thart_official/',
    'https://songdoconvensia.visitincheon.or.kr/',
];
let $exhName = get('.sub2 article ul li strong');
let $exhAddr = get('.sub2 article ul li p');
let $exhList = getAll('.sub2 article ul li');
let $pic = get('.sub2 article em img');
let $prev = get('.sub2 article .btn-wrap .prev');
let $next = get('.sub2 article .btn-wrap .next');
let exhtxt = '',
    imgurl,
    cnt = 0,
    size = $exhList.length,
    timer = null,
    interval = 3000;

const exh = () => {
    imgurl = `images/content/exhImg${cnt}.png`;
    $pic.setAttribute('src', imgurl);
    $pic.animate([{ opacity: 0 }, { opacity: 1 }], 400);

    $exhList.forEach((liItem) => {
        liItem.classList.remove('on');
    });
    $exhList[cnt].classList.add('on');
};
const make = () => {
    cnt++;
    if (cnt > size - 1) {
        cnt = 0;
    }
    exh();
};
exh();
make();
timer = setInterval(make, interval);

$exhList.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        cnt = idx;
        exh();
        clearInterval(timer);
        timer = setInterval(make, interval);
    });
});
$next.addEventListener('click', (e) => {
    cnt++;
    if (cnt > size - 1) {
        cnt = 0;
    } else if (cnt == 4) {
        cnt = 0;
    }
    exh();
    clearInterval(timer);
    timer = setInterval(make, interval);
});
$prev.addEventListener('click', (e) => {
    cnt--;
    if (cnt < 0) {
        cnt = size - 1;
    }
    exh();
    clearInterval(timer);
    timer = setInterval(make, interval);
});

$pic.addEventListener('mouseenter', (e) => {
    clearInterval(timer);
});

$pic.addEventListener('mouseleave', (e) => {
    timer = setInterval(make, interval);
});

$pic.addEventListener('click', (e) => {
    window.open(urlArr[cnt]);
});
