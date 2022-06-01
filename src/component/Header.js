import React, { useState } from 'react';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [searchOpened, setSearchOpened] = useState(false);
    const [menuOpened1, setMenuOpened1] = useState(false);
    const [menuOpened2, setMenuOpened2] = useState(false);
    const [menuOpened3, setMenuOpened3] = useState(false);
    const [menuOpened4, setMenuOpened4] = useState(false);
    const [menuOpened5, setMenuOpened5] = useState(false);
    return (
        <header>
            <div className="header">
                <div className="head-container">
                    <div className="sub-link">
                        <div className="left-link">
                            <a href="#">VIP LOUNGE</a>
                            <a href="#">멤버십</a>
                            <a href="#">고객센터</a>
                        </div>
                        <div className="right-link">
                            <a href="#">로그인</a>
                            <a href="#">회원가입</a>
                            <a href="#">빠른예매</a>
                        </div>
                    </div>
                    <a href="#" title="MEGABOX 메인으로 가기" className="main-logo"></a>
                    <div className="main-link">
                        <div className='main-left-link'>
                            <span className="icon-left-box">
                                {menuOpened === false ?
                                    <a className='header-menu-icon' onClick={() => setMenuOpened(true)}></a> :
                                    <a className='header-menu-close-icon' onClick={() => setMenuOpened(false)}></a>}
                                {searchOpened === false ?
                                    <a className='header-search-icon' onClick={() => setSearchOpened(true)}></a> :
                                    <a className='header-menu-close-icon' onClick={() => setSearchOpened(false)}></a>}
                            </span>
                            <a className='header-underline-a' href="#" onMouseEnter={() => setMenuOpened1(true)}
                                onMouseLeave={() => setMenuOpened1(false)}>영화</a>
                            <a className='header-underline-a' href="#" onMouseEnter={() => setMenuOpened2(true)} onMouseLeave={() => setMenuOpened2(false)}>예매</a>
                            <a className='header-underline-a' href="#" onMouseEnter={() => setMenuOpened3(true)} onMouseLeave={() => setMenuOpened3(false)}>극장</a>
                        </div>
                        <div className='main-right-link'>
                            <a className='header-underline-a' href="#" onMouseEnter={() => setMenuOpened4(true)} onMouseLeave={() => setMenuOpened4(false)}>이벤트</a>
                            <a href="#">스토어</a>
                            <a className='header-underline-a' href="#" onMouseEnter={() => setMenuOpened5(true)} onMouseLeave={() => setMenuOpened5(false)}>혜택</a>
                            <span className="icon-right-box">
                                <a className='header-calender-icon'></a>
                                <a className='header-my-box-icon'></a>
                            </span>
                        </div>

                    </div>
                    {menuOpened1 ? <div className='header-menu-opened1' onMouseEnter={() => setMenuOpened1(true)}
                        onMouseLeave={() => setMenuOpened1(false)}>
                        <a href='#'>전제영화</a>
                        <a href='#'>큐레이션</a>
                        <a href='#'>무비포스트</a>
                    </div> : null}
                    {menuOpened2 ? <div className='header-menu-opened2 ' onMouseEnter={() => setMenuOpened2(true)}
                        onMouseLeave={() => setMenuOpened2(false)}>
                        <a href='#'>빠른예매</a>
                        <a href='#'>상영시간표</a>
                        <a href='#'>더 부티크 프라이빗 예매</a>
                    </div> : null}
                    {menuOpened3 ? <div className='header-menu-opened3' onMouseEnter={() => setMenuOpened3(true)}
                        onMouseLeave={() => setMenuOpened3(false)}>
                        <a href='#'>전체극장</a>
                        <a href='#'>특별관</a>
                    </div> : null}
                    {menuOpened4 ? <div className='header-menu-opened4' onMouseEnter={() => setMenuOpened4(true)}
                        onMouseLeave={() => setMenuOpened4(false)}>
                        <a href='#'>진행 중 이벤트</a>
                        <a href='#'>지난 이벤트</a>
                        <a href='#'>당첨자발표</a>
                    </div> : null}
                    {menuOpened5 ? <div className='header-menu-opened5' onMouseEnter={() => setMenuOpened5(true)}
                        onMouseLeave={() => setMenuOpened5(false)}>
                        <a href='#'>메가박스 멤버십</a>
                        <a href='#'>제휴/할인</a>
                    </div> : null}

                </div>
            </div>
            {menuOpened ?
                <div className='header-menu'>
                    <div className='header-menu-container'>
                        <div className='header-menu-container-title'>SITEMAP</div>
                        <div className='header-menu-content'>
                            <div className='header-menu-content-item'>
                                <div className='header-menu-content-item-top'>
                                    <div className='header-menu-content-item-title'>영화</div>
                                    <a href='#'>전체영화</a>
                                    <a href='#'>큐레이션</a>
                                    <a href='#'>영화제</a>
                                    <a className='header-menu-content-item-final-a' href='#'>무비포스트</a>
                                </div>
                                <div className='header-menu-content-item-title'>혜택</div>
                                <a href='#'>멤버십 안내</a>
                                <a href='#'>VIP LOUNGE</a>
                                <a className='header-menu-content-item-final-a' href='#'>제휴/할인</a>
                            </div>
                            <div className='header-menu-content-item'>
                                <div className='header-menu-content-item-top'>
                                    <div className='header-menu-content-item-title'>예매</div>
                                    <a href='#'>빠른예매</a>
                                    <a href='#'>상영시간표</a>
                                    <a className='header-menu-content-item-final-a' href='#'>더 부티크 프라이빗 예매</a>
                                </div>
                                <div className='header-menu-content-item-title'>고객센터</div>
                                <a href='#'>고객센터 홈</a>
                                <a href='#'>자주묻는질문</a>
                                <a href='#'>공지사항</a>
                                <a href='#'>1:1문의</a>
                                <a href='#'>단체/대관문의</a>
                                <a className='header-menu-content-item-final-a' href='#'>분실문문의</a>
                            </div>
                            <div className='header-menu-content-item'>
                                <div className='header-menu-content-item-top'>
                                    <div className='header-menu-content-item-title'>극장</div>
                                    <a href='#'>전체극장</a>
                                    <a className='header-menu-content-item-final-a' href='#'>특별관</a>
                                </div>
                                <div className='header-menu-content-item-title'>회사소개</div>
                                <a href='#'>메가박스소개</a>
                                <a href='#'>사회공헌</a>
                                <a href='#'>홍보자료</a>
                                <a href='#'>제휴/부대사업문의</a>
                                <a href='#'>온라인제보센터</a>
                                <a href='#'>IR자료</a>
                                <a href='#'>인재채용</a>
                                <a className='header-menu-content-item-final-a' href='#'>윤리경영</a>
                            </div>
                            <div className='header-menu-content-item'>
                                <div className='header-menu-content-item-top'>
                                    <div className='header-menu-content-item-title'>이벤트</div>
                                    <a href='#'>진행중 이벤트</a>
                                    <a href='#'>지난 이벤트</a>
                                    <a className='header-menu-content-item-final-a' href='#'>당첨자발표</a>
                                </div>
                                <div className='header-menu-content-item-title'>이용정책</div>
                                <a href='#'>이용약관</a>
                                <a href='#'>위치기반서비스 이용약관</a>
                                <a href='#'>개인정보처리방침</a>
                                <a className='header-menu-content-item-final-a' href='#'>스크린배정에관한기준</a>
                            </div>
                            <div className='header-menu-content-item'>
                                <div className='header-menu-content-item-title'>스토어</div>
                                <a href='#'>새로운 상품</a>
                                <a href='#'>메가티켓</a>
                                <a href='#'>메가찬스</a>
                                <a className='header-menu-content-item-final-a' href='#'>팝콘/음료/굿즈</a>
                            </div>
                            <div className='header-menu-content-item'>
                                <div className='header-menu-content-item-title'>나의 메가박스</div>
                                <a href='#'>나의 메가박스 홈</a>
                                <a href='#'>예매/구매내역</a>
                                <a href='#'>영화관람권</a>
                                <a href='#'>스토어교환권</a>
                                <a href='#'>할인/제휴쿠폰</a>
                                <a href='#'>멤버십포인트</a>
                                <a href='#'>나의 무비스토리</a>
                                <a href='#'>나의 이벤트 응모내역</a>
                                <a href='#'>나의 문의내역</a>
                                <a href='#'>자주쓰는 할인 카드</a>
                                <a className='header-menu-content-item-final-a' href='#'>회원정보</a>
                            </div>
                        </div>
                    </div>
                </div> :
                null}

        </header>
    )
}

export default Header; 