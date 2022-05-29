import React from 'react';

const Footer = () => {

    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-link-box'>
                    <div className='footer-a-link'>
                        <a href='#'>회사소개</a>
                        <a href='#'>인재채용</a>
                        <a href='#'>사회공헌</a>
                        <a href='#'>제휴/광고/부대사업문의</a>
                        <a href='#'>이용약관</a>
                        <a href='#'>위치기반서비스 이용약관</a>
                        <a href='#' className='info'>개인정보처리방침</a>
                        <a href='#'>윤리경영</a>
                    </div>
                    <a href='#'>
                        <div className='search-theater'>
                            <img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-footer-search.png"></img>
                            <div>극장찾기</div>
                        </div>
                    </a>
                </div>
                <div className='footer-info'>
                    <div className='footer-img'>
                        <img src="https://img.megabox.co.kr/static/pc/images/common/ci/logo-opacity_new2.png"></img>
                    </div>
                    <div className='footer-text'>
                        <div>서울특별시 마포구 월드컵로 240, 지상2층(성산동, 월드컵주경기장) ARS 1544-0070</div>
                        <div>대표자명 홍정인 · 개인정보보호책임자 공성진 · 사업자등록번호 211-86-59478 · 통신판매업신고번호 제 2020-서울마포-4545 호</div>
                        <div>COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</div>
                    </div>
                    <div className='footer-icon-box'>
                        <a href="#"><img src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-youtubeN.png'></img></a>
                        <a href="#"><img src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-instagramN.png'></img></a>
                        <a href="#"><img src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-facebookN.png'></img></a>
                        <a href="#"><img src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-twitterN.png'></img></a>
                    </div>
                </div>
            </div>
        </footer >

    )
}

export default Footer;