'use strict';
const get = (target) => {
    return document.querySelector(target);
};
const getAll = (target) => {
    return document.querySelectorAll(target);
};

//sub1.js

//sub2.js
const exhArr = [
    { exhName: '전시관 1', exhAddr: '전시관 주소1', url: 'http://www.naver.com' },
    { exhName: '전시관 2', exhAddr: '전시관 주소2', url: 'http://www.google.com' },
    { exhName: '전시관 3', exhAddr: '전시관 주소3', url: 'http://www.nate.com' },
    { exhName: '전시관 4', exhAddr: '전시관 주소4', url: 'http://www.daum.net' },
];
let $exhName = getAll('.sub2 article ul li strong');
let $exhAddr = getAll('.sub2 article ul li p');
let $exhList = getAll('.sub2 article ul li');
let $pic = getAll('.sub2 article em img');
let $prev = get('.sub2 article .btn-wrap .prev');
let $next = get('.sub2 article .btn-wrap .next');
let exhtxt = '',
    cnt = 0,
    size = $exhList.length;
console.log($pic);

exhArr.forEach((_item, idx) => {
    $exhName.forEach((item, idx) => {
        item.textContent = `${exhArr[idx].exhName}`;
    });
    $exhAddr.forEach((item, idx) => {
        item.textContent = `${exhArr[idx].exhAddr}`;
    });
    $pic.forEach((item, idx) => {
        item.setAttribute('src', `images/content/exhImg${idx}.png`);
    });

    $exhList.forEach((_item, idx) => {
        $exhList.addEventListener('click', (e) => {
            e.target.classList.remove('on');
            e.target.classList.remove('on');
            e.target.classList.remove('on');
            $pic[0].setAttribute('src', `images/content/exhImg${idx}.png`);
            $exhList[idx].classList.add('on');
        });
    });
});

// $exhList[0].addEventListener('click', (e) => {
//     $exhList[0].classList.add('on');
//     $exhList[1].classList.remove('on');
//     $exhList[2].classList.remove('on');
//     $exhList[3].classList.remove('on');
//     $pic[0].setAttribute('src', `images/content/exhImg0.png`);
// });

// $exhList[1].addEventListener('click', (e) => {
//     $exhList[1].classList.add('on');
//     $exhList[0].classList.remove('on');
//     $exhList[2].classList.remove('on');
//     $exhList[3].classList.remove('on');
//     $pic[1].setAttribute('src', `images/content/exhImg1.png`);
// });
