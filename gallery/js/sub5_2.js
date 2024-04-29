'use stricts';
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);
let $links = getAll('a[href="#"]');
$links.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
// sub5 db
const album = () => {
    let $album = get('.sub5 .album');
    let $origin = get('.sub5 .album ul');
    let $albums = getAll('.sub5 .album ul li');
    let $paging = getAll('.sub5 .paging li');
    let $prev = get('.sub5 .btn .prev');
    let $next = get('.sub5 .btn .next');
    let len = $albums.length;
    let hei = [];
    console.log(len);
    let ran = '';
    let cur = 0,
        old = 0,
        wid = 250;
    // 이미지 가로 250px
    //append, prepend 는 data로?
    // li 높이 랜덤으로
    // for (let i = 0; i <= len; i++) {
    //     ran = Math.floor(Math.random() * 80);
    //     hei.push(ran);
    // }
    // $albums.forEach((item, idx) => {
    //     item.style.marginTop = `${hei[idx]}px`;
    // });
    for (let i = 0; i <= len - 1; i++) {
        let clLis = $albums[i].cloneNode(true);
        clLis.classList.add(`next-clone${i}`);
        $origin.append(clLis);
    }
    for (let i = len - 1; i >= 0; i--) {
        let clLis = $albums[i].cloneNode(true);
        clLis.classList.add(`prev-clone${i}`);
        $origin.prepend(clLis);
    }
    $origin.style.transform = `translateX(-${wid * len}px)`;

    $next.addEventListener('click', (e) => {
        cur = cur >= len - 1 ? 0 : cur + 1;

        $origin.style.transform = `translateX(-${wid * cur}px)`;
        $origin.style.transition = `0.4s`;
        console.log(wid);
    });
    $prev.addEventListener('click', (e) => {
        cur = cur <= 0 ? len - 1 : cur - 1;
        $origin.style.transform = `translateX(${wid * cur}px)`;
        $origin.style.transition = `0.4s`;
    });
};

(() => {
    album();
})();
