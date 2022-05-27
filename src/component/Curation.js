import React from 'react';

const Curation = () => {

    return (
        <div className='session2'>
            <div className='session2-container'>
                <div className='curation-title-box'>
                    <h1>큐레이션</h1>
                    <span className='more-curation'>
                        <a href='#' title='큐레이션 더보기'>
                            <span>큐레이션 더보기</span>
                            <img src="https://img.megabox.co.kr/static/pc/images/common/btn/btn-more-cross-purple.png" />
                        </a>
                    </span>
                </div>
                <div className='curation-box'>
                    <div className='curation-left-box'>

                        <a ><img src="https://img.megabox.co.kr/SharedImg/2022/05/13/qd9jNdRGEbU4Nxh09zXhi02jLmjChAdv_420.jpg"></img></a>
                        <div className="cur-mark1">
                            <img src="https://www.megabox.co.kr/static/pc/images/main/bg-bage-curation-classic.png"></img>
                        </div>
                        <div className='curation-btn'>
                            <button id="more-info-btn">상세정보</button>
                            <button id="cur-book-btn">예매</button>
                        </div>
                    </div>
                    <div className='curation-right-box'>
                        <div className='cur-sub-title'>#클래식소사이어티</div>
                        <div className='cur-main-title'>[오페라] 리골레토 @The Met</div>
                        <div className='cur-info'>
                            <br />
                            베르디 히트작의 과감하고 강렬한 재해석.<br /><br />
                            1920년대 유럽을 재현한 아름다운 의상과 무대로 시선 강탈!<br /><br />
                            [상영 정보]<br />
                            상영지점 : 센트럴 / 코엑스 / 목동 / 성수 / 분당 / 킨텍스<br />
                            상영일정 : 2022년 5월 24일(화) ~ 7월 2일(토) / 화 19:00, 토 10:00<br />
                            러닝타임 : 174분 *인터미션 없음<br />
                        </div>
                        <div className='cur-list'>
                            <a href='#' title="영화상세보기">
                                <div className='cur-list-item'>
                                    <img src="https://img.megabox.co.kr/SharedImg/2022/04/28/4MimplW77J7bxP032PxbCkAJ0GKFpi7G_230.jpg"></img>
                                    <div className="cur-mark2">
                                        <img src="https://www.megabox.co.kr/static/pc/images/main/bg-bage-curation-film-m.png"></img>
                                    </div>
                                    <div className='cur-list-item-title'>오마주</div>
                                </div>
                            </a>
                            <a href='#' title="영화상세보기">
                                <div className='cur-list-item'>
                                    <img src="https://img.megabox.co.kr/SharedImg/2022/05/17/Wh9wL8ojhGCRwG9ycYokqDHMHAsvIVU8_230.jpg"></img>
                                    <div className="cur-mark2">
                                        <img src="https://www.megabox.co.kr/static/pc/images/main/bg-bage-curation-classic-m.png"></img>
                                    </div>
                                    <div className='cur-list-item-title'>2022 빈 필하모닉 여름음악회</div>
                                </div>
                            </a>
                            <a href='#' title="영화상세보기">
                                <div className='cur-list-item'>
                                    <img src="https://img.megabox.co.kr/SharedImg/2022/04/28/XBEYheQr6qarUquyb1WSiWoEiwt7IhXw_230.jpg"></img>
                                    <div className="cur-mark2">
                                        <img src="https://www.megabox.co.kr/static/pc/images/main/bg-bage-curation-film-m.png"></img>
                                    </div>
                                    <div className='cur-list-item-title'>아치의 노래, 정태춘</div>
                                </div>
                            </a>
                            <a href='#' title="영화상세보기">
                                <div className='cur-list-item'>
                                    <img src="https://img.megabox.co.kr/SharedImg/2021/02/16/D7gnxzwZhk6AonutaH0zUFdEEzvpiE5l_230.jpg"></img>
                                    <div className="cur-mark2">
                                        <img src="https://www.megabox.co.kr/static/pc/images/main/bg-bage-curation-film-m.png"></img>
                                    </div>
                                    <div className='cur-list-item-title'>중경삼립</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Curation; 