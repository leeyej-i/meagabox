import React from 'react';
import Movie from './Movie.js';

const Main = () => {
    return (
        <div className="main">
            <div className='main-image'></div>
            <div className='main-bg'>
                <div className='main-container'>
                    <div className='main-top'>
                        <button>박스오피스</button>
                        <span className='more-movie'>
                            <a href='#' title='더 많은 영화보기'>
                                더 많은 영화보기
                                <i></i>
                            </a>
                        </span>
                    </div>
                    <div className='main-content'>
                        <Movie movieNum={0} />
                        <Movie movieNum={1} />
                        <Movie movieNum={2} />
                        <Movie movieNum={3} />
                    </div>
                    <div className='main-sub-bar'>
                        <div className='main-sub-bar-item'>
                            <div className='main-sub-bar-search'>
                                <input type='text' placeholder='영화명을 입력해 주세요            ' title='영화 검색'></input>
                                <button id="movie-search-btn"></button>
                            </div>
                            <a href='#' title="상영시간표 보기">
                                <div className='main-sub-bar-icon'>
                                    <img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-schedule-main.png" ></img>
                                </div>
                                <div className='main-sub-bar-title'>상영시간표</div>
                            </a>
                            <a href='#' title="박스오피스 보기">
                                <div className='main-sub-bar-icon'>
                                    <img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-boxoffice-main.png" ></img>
                                </div>
                                <div className='main-sub-bar-title'>박스오피스</div>
                            </a>
                            <a href='#' title="빠른예매 보기">
                                <div className='main-sub-bar-icon'>
                                    <img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-quick-reserve-main.png" ></img>
                                </div>
                                <div className='main-sub-bar-title'>빠른예매</div>
                            </a>
                        </div>
                    </div>
                    <div className='main-mouse-icon'>
                        <img src="https://www.megabox.co.kr/static/pc/images/common/ico/ico-mouse.png" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main; 