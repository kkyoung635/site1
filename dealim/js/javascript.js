const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);
const $links = getAll('a[href="#"]');
$links.forEach((links) => {
    links.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

const mainBanner = () => {
    let $mainBanner = get('#visual .main-banner');
    let $txt = getAll('#visual .main-banner li .txt');
    let $paging = getAll('#visual .paging li');
    let cnt = 0;

    $paging[cnt].classList.add('on');
    $txt[cnt].classList.add('on');

    $paging.forEach((paging, idx) => {
        paging.addEventListener('click', (e) => {
            cnt = idx;
            $mainBanner.style.transform = `translateX(-${cnt * 100}%)`;
            $paging.forEach((paging) => {
                paging.classList.remove('on');
                $txt[cnt].classList.remove('on');
            });
            $paging[cnt].classList.add('on');
            $txt[cnt].classList.add('on');
        });
    });
};
const subBanner = () => {
    const $subBgs = getAll('.intro2 .sub-banner li');
    const $pagings = getAll('.intro2 .paging2 li');

    $pagings.forEach((pItem, idx) => {
        pItem.addEventListener('mouseenter', (e) => {
            $pagings.forEach((items) => {
                items.classList.remove('on');
            });
            e.currentTarget.classList.add('on');

            $subBgs.forEach((bgItem) => {
                bgItem.style.opacity = 0;
            });
            const nodes = [...e.target.parentElement.children];
            const index = nodes.indexOf(e.target);
            $subBgs[index].style.opacity = 1;
        });
    });
};

const rallHotel = () => {
    const $hotelBgs = getAll('.intro5 .roll-hotel .hotel-bg li');
    const $icons = getAll('.intro5 .roll-hotel .hotel-icon li');
    $icons.forEach((iItem, idx) => {
        iItem.addEventListener('mouseenter', (e) => {
            $icons.forEach((items) => {
                items.classList.remove('on');
            });
            e.currentTarget.classList.add('on');

            $hotelBgs.forEach((bgItem) => {
                bgItem.style.opacity = 0;
            });
            const nodes = [...e.target.parentElement.children];
            const index = nodes.indexOf(e.target);
            $hotelBgs[index].style.opacity = 1;
        });
    });
};
const family = () => {
    let $title = get('#footer .inner .flot .family .title');
    let $icon = get('#footer .inner .flot .family .title i');
    let $ul = get('#footer .inner .flot .family ul');
    let isOpen = null;
    // let height = $ul.offsetHeight;

    $ul.style.height = `0px`;

    $title.addEventListener('click', (e) => {
        $title.classList.toggle('on');
        isOpen = $title.classList.contains('on');
        if (isOpen) {
            $icon.classList.replace('xi-caret-down-min', 'xi-caret-up-min');
            // $ul.style.height = `${height}px`;
            $ul.style.height = `105px`;
        } else {
            $icon.classList.replace('xi-caret-up-min', 'xi-caret-down-min');
            $ul.style.height = `0px`;
        }
    });
};

(() => {
    mainBanner();
    subBanner();
    rallHotel();
    family();
})();
