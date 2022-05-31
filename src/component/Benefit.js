import React, { useState, useEffect, useRef } from 'react';

const Benefit = () => {
    const [slideNum, setSlideNum] = useState(0);
    const [move, setMove] = useState(true);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(true);
    const [active, setActive] = useState([true, false, false, false, false, false, false, false]);
    function useInterval(callback, delay) {
        const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

        useEffect(() => {
            savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
        }, [callback]);

        useEffect(() => {
            function tick() {
                savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
            }
            if (delay !== null) {
                // 만약 delay가 null이 아니라면
                let intervalId = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
                return () => clearInterval(intervalId); // unmount될 때 clearInterval을 해준다.
            }
        }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
    }

    useInterval(
        () => {
            setSlideNum(slideNum + 1 === 8 ? 0 : slideNum + 1);
        },
        move ? 3000 : null
    );

    useEffect(() => {
        let newActive = [false, false, false, false, false, false, false, false]
        newActive[slideNum] = true;
        setActive(newActive);
        if (slideNum === 0) {
            setPrev(false);
            setNext(true);
            return;
        }
        if (slideNum === 7) {
            setNext(false);
            return;
        }
        setPrev(true);
        setNext(true);
    }, [slideNum]);

    const handleChangeMove = () => {
        setMove(!move);

    }
    const handleChangePrev = () => {
        setMove(false)
        setSlideNum(slideNum === 0 ? 0 : slideNum - 1);
    }
    const handleChangeNext = () => {
        setMove(false)
        setSlideNum(slideNum === 7 ? 7 : slideNum + 1);

    }

    const bfImg1 = ["https://img.megabox.co.kr/SharedImg/BnftMng/2022/05/23/EtOpjnLmAOSR6Q7xmLjuLG2lkCYpu2T8.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/05/16/Qqjyg1WUK5ElOB8cpyNm4pi5OSZajVUc.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/05/04/4coptcfQ3Khlgc46Qv0S5hEYTIRzxFeR.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/04/26/1RgWXF8H6ITWCUlydgXwQ9ile94CkBzC.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/04/25/xjBVzi25V6oLS7Q7i1ZRgqK3CZUnuRzE.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/05/19/6iBsf8ASsvehkEBk7uq91bxsmINHAAT6.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/01/14/mmitS7eSkiQVzZL1paP0NxK5m6j3uVKT.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2021/02/01/f7RPSplY1eWEFFhKNBDJK4JIXKv9NBZK.jpg"]
    const bfImg2 = ["https://img.megabox.co.kr/SharedImg/BnftMng/2022/05/23/aM8yWJKSkb7XxWPSK0bvvyYKsCHLsv8e.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/05/16/UsLIrkxe3LUNQ0qorhbyrcKxxbTVBPdR.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/05/04/fZx1Hh717150CUEjoTV9hq3T3ww89vco.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/04/26/Q2y9h9vRaofEgs2WsYtlGgEROFl8XDpg.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/04/25/f509FdJABFDs6erpBAUqJx0uNColbDOs.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/05/19/pATmXt3mU6XP9F2hYWslUkpllWa1cxJ4.png",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2022/01/14/yDRjd4ejz8oirC4wLrukvHK3KIWH1tCY.jpg",
        "https://img.megabox.co.kr/SharedImg/BnftMng/2021/02/01/fZ8glF2ggujTRrF5vtRuE1iE2UjjV1oF.jpg"]

    return (
        <div className='session1'>
            <div className='session1-container'>
                <div className='benefit-title-box'>
                    <h1>혜택</h1>
                    <span className='more-benefit'>
                        <a href='#' title='더 많은 영화보기'>
                            <img src="https://img.megabox.co.kr/static/pc/images/common/btn/btn-more-cross-purple.png" />
                        </a>
                    </span>
                </div>
                <div className='benefit-box'>
                    <div className='benefit-slide'>
                        <div className='slide-item'>
                            <div className='slide-item-left'>
                                <a href='#'><img src={bfImg1[slideNum]} /></a>
                                <div className='slide-bar'>
                                    <div className='slide-page-bar'>
                                        {active[0] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                        {active[1] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                        {active[2] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                        {active[3] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                        {active[4] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                        {active[5] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                        {active[6] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                        {active[7] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                    </div>
                                    <div className='slide-btn-box'>
                                        {prev === true ? <button onClick={handleChangePrev} id="slide-prev"></button> : <button id="slide-prev-off"></button>}
                                        {next === true ? <button onClick={handleChangeNext} id="slide-next"></button> : <button id="slide-next-off"></button>}
                                        {move === true ? <button id="slide-move" onClick={handleChangeMove}></button> : <button id="slide-stop" onClick={handleChangeMove}></button>}
                                        <div className='page-num'>{slideNum + 1} / 8</div>
                                    </div>
                                </div>
                            </div>
                            <div className='slide-item-right'>
                                <a href='#'><img src={bfImg2[slideNum]} /></a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className='benefit-big-img-a'>
                        <img className="beneift-big-img" src="https://mlink-cdn.netinsight.co.kr/2022/05/19/e4360c233c12b3ca0f16462cf7e59329.png"></img>
                    </a>
                </div>
                <div className='benefit-box2'>
                    <a href='#' className='benefit-img-a'><img className="benefit-img" src="https://img.megabox.co.kr/SharedImg/event/2021/12/30/t27cRA3hbn6TMmTm0c7OUaQ37TuxGLOh.jpg"></img></a>
                    <a href='#' className='benefit-img-a2'><img className="benefit-img2" src="https://img.megabox.co.kr/SharedImg/event/2022/01/14/ACdDJx36kS3ytWbf8JuflttgFwbvJ0Mt.jpg"></img></a>
                </div>
                <div className="benefit-menu">
                    <a href='#' title='VIP LOUNGE 페이지로 이동'>
                        <div className="benefit-menu-item">
                            <img src="https://www.megabox.co.kr/static/pc/images/common/ico/ico-vip-main.png"></img>
                            <div className='benefit-menu-item-title'>VIP LOUNGE</div>
                        </div>
                    </a>
                    <a href='#' title='멤버십 페이지로 이동'>
                        <div className="benefit-menu-item">
                            <img src="https://www.megabox.co.kr/static/pc/images/common/ico/ico-membership-main.png"></img>
                            <div className='benefit-menu-item-title'>멤버십</div>
                        </div>
                    </a>
                    <a href='#' title='할인카드안내 페이지로 이동'>
                        <div className="benefit-menu-item">
                            <img src="https://www.megabox.co.kr/static/pc/images/common/ico/ico-card-main.png"></img>
                            <div className='benefit-menu-item-title'>할인카드안내</div>
                        </div>
                    </a>
                    <a href='#' title='이벤트 페이지로 이동'>
                        <div className="benefit-menu-item">
                            <img src="https://www.megabox.co.kr/static/pc/images/common/ico/ico-event-main.png"></img>
                            <div className='benefit-menu-item-title'>이벤트</div>
                        </div>
                    </a>
                    <a href='#' title='스토어 페이지로 이동'>
                        <div className="benefit-menu-item">
                            <img src="https://www.megabox.co.kr/static/pc/images/common/ico/ico-store-main.png"></img>
                            <div className='benefit-menu-item-title'>스토어</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='session1-bg2'>
            </div>
        </div>
    )
}

export default Benefit; 