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
        lisMargin = 0,
        pNum = 0,
        timer = null,
        interval = 3000;

    makeClone();
    $paging[0].classList.add('on');
    timer = setInterval(make, interval);
    function make() {
        moveSlide(currentIdx + 1);
        pagingUp(currentIdx);
    }
    function makeClone() {
        // 앞 뒤로 클론 노트 생성
        for (let i = 0; i < len; i++) {
            // a.cloneNode(), or (true)
            let cloneSlide = $lis[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            $ul.append(cloneSlide);
        }
        for (let i = len - 1; i >= 0; i--) {
            let cloneSlide = $lis[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            $ul.prepend(cloneSlide);
        }
        updateWidth();
        setInitialPos();
        setTimeout(() => {
            $ul.classList.add('ani');
        }, 100);
    }
    function updateWidth() {
        // 복사된 lis 총 너비 부여
        let $currentLis = getAll('.sub5 .album ul li');
        let newLen = $currentLis.length;
        let newlisWidth = (lisWidth + lisMargin) * newLen - lisMargin;
        $ul.style.width = newlisWidth + 'px';
    }
    function setInitialPos() {
        // 원본 lis가 자리잡도록 ul 자리 초기값 설정
        // prepend 된 lis 너비 만큼 ul 위치값 수정
        let infinitalTranslateValue = -(lisWidth + lisMargin) * len;
        console.log(`infinitalTranslateValue` + infinitalTranslateValue);
        $ul.style.transform = `translateX(${infinitalTranslateValue}px)`;
    }

    // 이벤트 진행
    $next.addEventListener('click', (e) => {
        moveSlide(currentIdx + 1);
        pagingUp(currentIdx);
        clearInterval(timer);
        timer = setInterval(make, interval);
    });
    $prev.addEventListener('click', (e) => {
        moveSlide(currentIdx - 1);
        pagingDown(currentIdx);
        clearInterval(timer);
        timer = setInterval(make, interval);
    });
    function moveSlide(num) {
        $ul.style.left = -num * (lisWidth + lisMargin) + 'px';
        currentIdx = num;
        console.log(`currentIdx = num : ${(currentIdx = num)}`);
        if (currentIdx == len || currentIdx == -len) {
            // 바뀐 후 애니메이션이 제거되어 이동하는 모션이 안 보임
            setTimeout(() => {
                // 이동 후 바뀌는것으로 0.4초 딜레이
                $ul.classList.remove('ani');
                $ul.style.left = '0px';
                currentIdx = 0;
                // 마지막 번호에서 초기화
            }, 400);
            setTimeout(() => {
                $ul.classList.add('ani');
            }, 450);
        }
    }
    function pagingUp(pNum) {
        $paging.forEach((pitem) => pitem.classList.remove('on'));
        if (pNum >= 8 || pNum == 0 || pNum == -1 || pNum == 8) {
            $paging[0].classList.add('on');
        } else if (pNum <= -1) {
            pNum = len + pNum;
            $paging[pNum].classList.add('on');
        } else {
            $paging[pNum].classList.add('on');
        }
    }
    function pagingDown(num) {
        pNum = len + num;
        $paging.forEach((pitem) => pitem.classList.remove('on'));
        if (pNum < -8 || pNum == 0 || pNum == -1 || pNum == 8) {
            $paging[0].classList.add('on');
        } else if (pNum >= 9) {
            pNum = pNum - len;
            $paging[pNum].classList.add('on');
        } else {
            console.log(pNum);
            $paging[pNum].classList.add('on');
        }
    }
    $ul.addEventListener('mouseenter', (e) => {
        clearInterval(timer);
    });
    $ul.addEventListener('mouseleave', (e) => {
        timer = setInterval(make, interval);
    });
};
(() => {
    album();
})();
