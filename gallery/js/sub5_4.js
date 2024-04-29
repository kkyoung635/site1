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
    // let $album = get('.sub5 .album');
    let $ul = get('.sub5 .album ul'),
        $lis = getAll('.sub5 .album ul li'),
        $paging = getAll('.sub5 .paging li'),
        $prev = get('.sub5 .btn .prev'),
        $next = get('.sub5 .btn .next'),
        len = $lis.length,
        currentIdx = 0,
        lisWidth = 250,
        lisMargin = 0;

    $ul.style.width = $lis.length * (lisWidth + lisMargin) - lisMargin + 'px';
    function moveAlbum(num) {
        $ul.style.left = -num * (lisWidth + lisMargin) + 'px';
        currentIdx = num;
    }
    $next.addEventListener('click', function () {
        if (currentIdx < len - 1) {
            moveAlbum(currentIdx + 1);
        } else {
            moveAlbum(0);
        }
    });
    $prev.addEventListener('click', (e) => {
        if (currentIdx > 0) {
            moveAlbum(currentIdx - 1);
        } else {
            moveAlbum(len - 4);
        }
    });
};
(() => {
    album();
})();
