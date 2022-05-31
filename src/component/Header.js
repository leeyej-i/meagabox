import React, { useState } from 'react';
import useHover from '../hooks/useHover';

const Header = () => {
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
                                <a className='header-menu-icon'></a>
                                <a className='header-search-icon'></a>
                            </span>
                            <a href="#" onMouseEnter={() => setMenuOpened1(true)}
                                onMouseLeave={() => setMenuOpened1(false)}>영화</a>
                            <a href="#" onMouseEnter={() => setMenuOpened2(true)} onMouseLeave={() => setMenuOpened2(false)}>예매</a>
                            <a href="#" onMouseEnter={() => setMenuOpened3(true)} onMouseLeave={() => setMenuOpened3(false)}>극장</a>
                        </div>
                        <div className='main-right-link'>
                            <a href="#" onMouseEnter={() => setMenuOpened4(true)} onMouseLeave={() => setMenuOpened4(false)}>이벤트</a>
                            <a href="#">스토어</a>
                            <a href="#" onMouseEnter={() => setMenuOpened5(true)} onMouseLeave={() => setMenuOpened5(false)}>혜택</a>
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

        </header>
    )
}

export default Header; 