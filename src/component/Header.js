import React from 'react';

const Header = () => {
    return (
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
                        <a href="#">영화</a>
                        <a href="#">예매</a>
                        <a href="#">극장</a>
                    </div>
                    <div className='main-right-link'>
                        <a href="#">이벤트</a>
                        <a href="#">스토어</a>
                        <a href="#">혜택</a>
                        <span className="icon-right-box">
                            <a className='header-calender-icon'></a>
                            <a className='header-my-box-icon'></a>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header; 