'use strict';
let artist = [
    {
        name: 'Pawel Czerwinski',
        desc: 'Colored lights in defocus - 초점이 흐려진 컬러 조명',
        imgUrl: 'images/content/listimg0.jpg',
        bigimgUrl: 'url(images/content/bigListimg0.jpg)',
    },
    {
        name: 'Evie S.',
        desc: 'Old photo film - 오래된 사진 필름',
        imgUrl: 'images/content/listimg1.jpg',
        bigimgUrl: 'url(images/content/bigListimg1.jpg)',
    },
    {
        name: 'Noita Digital',
        desc: 'Damaged bonnet - 손상된 보닛',
        imgUrl: 'images/content/listimg2.jpg',
        bigimgUrl: 'url(images/content/bigListimg2.jpg)',
    },
    {
        name: 'Tina Dawson',
        desc: 'Oil painting of waves - 파도를 담은 유화',
        imgUrl: 'images/content/listimg3.jpg',
        bigimgUrl: 'url(images/content/bigListimg3.jpg)',
    },
    {
        name: 'Henrik Dønnestad',
        desc: 'Dust Overlay - 흩뿌려진 더스티 텍스쳐',
        imgUrl: 'images/content/listimg4.jpg',
        bigimgUrl: 'url(images/content/bigListimg4.jpg)',
    },
    {
        name: 'Sigmund',
        desc: 'Black paint roller - 흑색의 페인트 롤러',
        imgUrl: 'images/content/listimg5.jpg',
        bigimgUrl: 'url(images/content/bigListimg5.jpg)',
    },
    {
        name: 'sydney Rae',
        desc: 'Silk made from dots - 점으로 탄생한 실크',
        imgUrl: 'images/content/listimg6.jpg',
        bigimgUrl: 'url(images/content/bigListimg6.jpg)',
    },
    {
        name: 'Pawel Czerwinski',
        desc: 'Texture of old wall - 오래된 벽의 질감',
        imgUrl: 'images/content/listimg7.jpg',
        bigimgUrl: 'url(images/content/bigListimg7.jpg)',
    },
    {
        name: 'Kobby Mendez',
        desc: 'Oil paint texture - 유화 물감 텍스쳐',
        imgUrl: 'images/content/listimg8.jpg',
        bigimgUrl: 'url(images/content/bigListimg8.jpg)',
    },
];
let li = document.querySelectorAll('.sub1 .left .listimg li');
let pic = document.querySelector('.sub1 .left .listimg li img');
let numbering = document.querySelector('.sub1 .left .numbering');
let prev = document.querySelector('.sub1 .left .btn-wrap .prev');
let next = document.querySelector('.sub1 .left .btn-wrap .next');
let bgimg = document.querySelector('.sub1 .right');
let art2 = document.querySelector('.sub1 .left strong');
let desc2 = document.querySelector('.sub1 .left span');
let xi = document.querySelector('.sub1 .left em i');
let cnt = 0,
    imgUrl,
    bigimgUrl,
    timer = null,
    interval = 5000,
    size = artist.length,
    isPlay = true;

numbering.textContent = `${cnt + 1} / ${size}`;
const listing = () => {
    imgUrl = artist[cnt].imgUrl;
    bigimgUrl = artist[cnt].bigimgUrl;
    numbering.textContent = `${cnt + 1} / ${size}`;
    pic.setAttribute('src', imgUrl);
    pic.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    bgimg.style.backgroundImage = bigimgUrl;
    bgimg.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    art2.textContent = artist[cnt].name;
    desc2.textContent = artist[cnt].desc;
    console.log(bigimgUrl);
    console.log(bgimg.style.backgroundImageigimgUrl);
};
const make = () => {
    cnt++;
    if (cnt > artist.length - 1) {
        cnt = 0;
    }
    listing();
};
const prevAct = () => {
    cnt--;
    if (cnt < 0) {
        cnt = artist.length - 1;
    }
    listing();
    clearInterval(timer);
    timer = setInterval(make, interval);
};
const nextAct = () => {
    cnt++;
    if (cnt > artist.length - 1) {
        cnt = 0;
    }
    listing();
    clearInterval(timer);
    timer = setInterval(make, interval);
};

listing();
timer = setInterval(make, interval);
prev.addEventListener('click', prevAct);
next.addEventListener('click', nextAct);
xi.addEventListener('click', (e) => {
    if (isPlay) {
        xi.classList.replace('xi-pause-circle', 'xi-play-circle');
        clearInterval(timer);
    } else {
        xi.classList.replace('xi-play-circle', 'xi-pause-circle');
        timer = setInterval(make, interval);
    }
    isPlay = !isPlay;
});
