import React from 'react';

const Guide = () => {

    return (
        <div className='session3'>
            <div className='session3-container'>
                <div className='guide-title-box'>
                    <h1>메가박스 안내</h1>
                </div>
                <div className='guide-box'>
                    <a href='#' tilte="Dolby Cinema 페이지로 이동">
                        <img src="https://www.megabox.co.kr/static/pc/images/main/bg-main-megainfo-dolby.png"></img>
                        <div className='guide-box-new'>NEW</div>

                    </a>
                    <a href='#' tilte="THE BOUTIQUE PRIVATE 페이지로 이동">
                        <img src="https://www.megabox.co.kr/static/pc/images/main/bg-main-megainfo-private.png"></img>
                    </a>
                    <a href='#' tilte="THE BOUTIQUE 페이지로 이동">
                        <img src="https://www.megabox.co.kr/static/pc/images/main/bg-main-megainfo-boutique.png"></img>
                    </a>
                    <a href='#' tilte="MX 페이지로 이동">
                        <img src="https://www.megabox.co.kr/static/pc/images/main/bg-main-megainfo-mx.png"></img>
                    </a>
                    <a href='#' tilte="COMFORT 페이지로 이동">
                        <img src="https://www.megabox.co.kr/static/pc/images/main/bg-main-megainfo-comfort.png"></img>
                    </a>
                    <a href='#' tilte="MEGABOX KIDS 페이지로 이동">
                        <img src="https://www.megabox.co.kr/static/pc/images/main/bg-main-megainfo-kids.png"></img>
                    </a>

                </div>
            </div>
            <div className='notice'>
                <div className='notice-container'>
                    <div className='writer'>메가박스</div>
                    <a href='#' title='공지사항 상세보기'><div className='title'><span>[공지]</span> [GS&POINT] 시스템 정기 점검 안내(6/9)</div></a>
                    <div className='date'>2022. 05. 27</div>
                    <a>
                        <div className='notice-more'>
                            더보기
                            <img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-arr-right-gray.png" />

                        </div>
                    </a>
                </div>
            </div>
            <div className='guide-menu-container'>
                <a href='#' title='고객센터 페이지로 이동'>
                    <img src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-customer.png'></img>
                    <div>고객센터</div>
                </a>
                <a href='#' title='자주 묻는 질문 페이지로 이동'>
                    <img src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-faq.png'></img>
                    <div>자주 묻는 질문</div>
                </a>
                <a href='#' title='1:1 문의 페이지로 이동'>
                    <img src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-qna.png'></img>
                    <div>1:1 문의</div>
                </a>
                <a href='#' title='단체/대관 문의로 이동'>
                    <img src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-group.png'></img>
                    <div>단체/대관 문의</div>
                </a>
                <a href='#' title='분실문 문의/접수 페이지로 이동'>
                    <img src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-lost.png'></img>
                    <div>분실문 문의/접수</div>
                </a>
                <a href='#' title='더 부티크 프라이빗 대관예매 페이지로 이동'>
                    <img src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-boutique.png'></img>
                    <div>더 부티크 프라이빗<br />대관예매</div>
                </a>
            </div>
        </div >

    )
}

export default Guide;