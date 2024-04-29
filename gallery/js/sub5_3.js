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
    let leftX = [
        // { no: 0, left: -250 },
        { no: 1, left: 0 },
        { no: 2, left: 250 },
        { no: 3, left: 500 },
        { no: 4, left: 750 },
        { no: 5, left: 1000 },
        { no: 6, left: 1250 },
        { no: 7, left: 1500 },
        { no: 7, left: 1750 },
    ];
    let $album = get('.sub5 .album');
    let $ul = get('.sub5 .album ul');
    let $albums = getAll('.sub5 .album ul li');
    let $paging = getAll('.sub5 .paging li');
    let $prev = get('.sub5 .btn .prev');
    let $next = get('.sub5 .btn .next');
    let len = $albums.length;
    let ran = '';
    let nextLast = 1,
        prevLast = len,
        move = 0,
        old = 0,
        wid = 250;
    let x = 0,
        y = 0,
        cnt = 0;
    let output = '';
    // 이미지 가로 250px

    // li 높이 랜덤으로
    // for (let i = 0; i <= len; i++) {
    //     ran = Math.floor(Math.random() * 80);
    //     hei.push(ran);
    // }
    // $albums.forEach((item, idx) => {
    //     item.style.marginTop = `${hei[idx]}px`;
    // });
    // $albums[0].transform = `translateX(2000px)`;

    $next.addEventListener('click', (e) => {
        cnt++;
        $ul.style.transform = `translateX(-${wid * cnt}px)`;
        // if (move == 0) {
        //     $ul.style.transform = `translateX(-${wid * (move + 1)}px)`;
        //     move = 1;
        // } else if (move == 1) {
        //     $ul.style.transform = `translateX(-${wid * (move + 1)}px)`;
        //     move = 2;
        // }
        if (cnt >= 2) {
            y = x;
            $albums[y].style.left = `${2000 + x * wid}px`;
            // console.log(2000 + x * wid);
            x = x + 1;
        }
        if (cnt == len + 1) {
            cnt = 0;
            $ul.style.transform = `translateX(-${wid * cnt}px)`;
            $albums.forEach((item, idx) => {
                $album[idx].style = `${leftX[idx].left}`;
            });
        }

        // for (let i = 0; i <= len - 1; i++) {
        //     $albums[cur].style.left = `${leftX[cur].left}px`;
        //     $albums[cur + i].style.left = `${leftX[cur + i].left}px`;
        // }
    });
    // $prev.addEventListener('click', (e) => {
    //     cur = cur <= 0 ? len - 1 : cur - 1;
    //     $origin.style.transform = `translateX(${wid * cur}px)`;
    //     $origin.style.transition = `0.4s`;
    // });
};
(() => {
    album();
})();
