const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);
const $links = getAll('a[href="#"]');
$links.forEach((links) => {
    links.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

const board = () => {
    let posts = [
        { id: 23, title: `대림바스, 한국산업의 브랜드파워(K-BPI) 2개 부문서 1위 차지`, date: `2024-03-27` },
        { id: 22, title: `[보도자료] 대림케어, 주방 상판 UV코팅 케어서비스 새롭게 선봬`, date: `2024-03-14` },
        { id: 21, title: `[보도자료] 대림바스, 국내 특급 호텔∙리조트 시장 점유율 80%로 ‘1위’`, date: `2024-02-28` },
        { id: 20, title: `[보도자료] 대림바스, 국내 최초로 장루·요루 환자 위한 세척기 세트 개발`, date: `2024-01-30` },
        { id: 19, title: `[보도자료] 대림바스, 감염 질환 예방 위한 위생·살균 아이템 추천`, date: `2024-01-16` },
        { id: 18, title: `[보도자료] 대림바스, 안전보건경영시스템 [ISO45001] 인증 획득`, date: `2023-12-27` },
        { id: 17, title: `[보도자료] 대림바스, 2023 디자인 어워드 수상 쾌거`, date: `2023-11-14` },
        { id: 16, title: `[보도자료] 대림바스, 홈케어 서비스 확대… 케어 사업 본격화`, date: `2023-10-31` },
        { id: 15, title: `[보도자료] 대림바스, 이나피스퀘어와 일러스트 더한 욕실 콜라보 제품 선봬`, date: `2023-10-05` },
        { id: 14, title: `[보도자료] 대림바스&키친, 리모델링 추석 감사제 실시··· 최대 55% 할인`, date: `2023-09-15` },
        { id: 13, title: `[보도자료] 대림바스, 위생도기 기술력 BI 리뉴얼… “자체 기술력 강화”`, date: `2023-08-25` },
        { id: 12, title: `[보도자료] 대림바스, 말레이시아 국제 건축전시회 ‘아키덱스 2023’ 참가`, date: `2023-07-27` },
        { id: 11, title: `[보도자료] 대림바스&키친, 욕실 패키지 ‘무드 베이지’ 출시`, date: `2023-07-12` },
        { id: 10, title: `[보도자료] 대림바스, ‘BATH COLLECTION’ 위생도기 시리즈 3종 출시`, date: `2023-06-20` },
        { id: 9, title: `[보도자료] 대림바스, 홈케어·재활·복지 전시회서 유니버셜 디자인 제품 선봬`, date: `2023-06-09` },
        { id: 8, title: `[보도자료] “국내 위생도기 시장서 최정상 입지 다시 한번 지켜” 대림바스, 국내 위생도기 시장 점유율 20년 연속 1위`, date: `2023-04-26` },
        { id: 7, title: `[보도자료] “욕실 리모델링∙위생도기 부문 2관왕” 대림바스, 한국산업의 브랜드파워(K-BPI) 2개 부문 1위`, date: `2023-03-30` },
        { id: 6, title: `[보도자료] “6리터 초과 양변기 불법” ‘세계 물의 날’… 욕실업계 “양변기만 바꿔도 물 절약”`, date: `2023-03-22` },
        { id: 5, title: `[보도자료] “B2B∙B2C 고객 모두 위한 통합 사이트 구축”...대림바스, 2022 앤어워드 전문몰 분야 최고상 수상`, date: `2023-02-08` },
        { id: 4, title: `[보도자료] 대림바스, 2023년 욕실 소비 트렌드는 ‘V.E.N.U.E’`, date: `2023-01-31` },
        { id: 3, title: `[보도자료] “6리터 초과 양변기 불법” ‘세계 물의 날’… 욕실업계 “양변기만 바꿔도 물 절약”`, date: `2023-03-22` },
        { id: 2, title: `[보도자료] “B2B∙B2C 고객 모두 위한 통합 사이트 구축”...대림바스, 2022 앤어워드 전문몰 분야 최고상 수상`, date: `2023-02-08` },
        { id: 1, title: `[보도자료] 대림바스, 2023년 욕실 소비 트렌드는 ‘V.E.N.U.E’`, date: `2023-01-31` },
    ];

    const $tbody = get('.page.notice .con2 table tbody');
    const $boardPaging = get('.page.notice .con2 .paging');
    let atag = '';
    let row = '';
    let totalPages = posts.length;
    let postsPerPage = 5;
    let currentPage = 1,
        firstPost,
        lastPost,
        pageNumber,
        postMod,
        old = 0;
    let getData = () => {
        pageNumber = Math.ceil(totalPages / postsPerPage);
        postMod = totalPages % postsPerPage;
        console.log(totalPages, pageNumber, postMod);

        for (let i = 1; i <= pageNumber; i++) {
            atag += `
                <a href="#">${i}</a>
                `;
        }
        $boardPaging.innerHTML = atag;
        const $pagings = getAll('.notice .con2 .paging a ');

        $pagings[currentPage - 1].classList.add('on');

        pageList(currentPage);

        $pagings.forEach((aitem, idx) => {
            aitem.addEventListener('click', (e) => {
                currentPage = idx + 1;
                if (old !== idx) {
                    $pagings[idx].classList.add('on');
                    $pagings[old].classList.remove('on');
                    old = idx;
                    pageList(currentPage);
                }
            });
        });

        function pageList(num) {
            row = '';
            lastPost = num * postsPerPage; //5
            firstPost = lastPost - postsPerPage; //0
            if (postMod !== 0 && num === pageNumber) {
                lastPost = firstPost + postMod;
            }

            for (let i = firstPost; i < lastPost; i++) {
                row += `
                    <tr>
                        <td>${posts[i].id}</td>
                        <td>${posts[i].title}</td>
                        <td>${posts[i].date}</td>
                    </tr>
                    `;
            }
            $tbody.innerHTML = row;
        }
    };
    getData();
};
(() => {
    board();
})();
