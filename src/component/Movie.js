import React from 'react';

const Movie = ({ movieNum }) => {
    const imgUrl = ['https://img.megabox.co.kr/SharedImg/2022/05/12/adOrIPqpH29ERAnetRFPAJAGlxnOKnK8_420.jpg',
        'https://img.megabox.co.kr/SharedImg/2022/05/23/oZfETtpEvKGpdY2JQo2Z6wFL0S4cpKy5_420.jpg',
        'https://img.megabox.co.kr/SharedImg/2022/05/16/WApIttC9CrStYU7j7jzFRlc2HsIXBQtY_420.jpg',
        'https://img.megabox.co.kr/SharedImg/2022/05/04/4OFqLBLmda67a6BPXjaXCVM5wun7FAtb_420.jpg']

    const movieInfo = [`대한민국은 민주공화국인가 검찰공화국인가 \n검찰의 칼날이 그대에게 향하지 않는다고 자신할 수 있는가\n사냥이 시작됐다. 검찰이 던진 좌표를 따라 언론은 몰려들고 소문은 꼬리를 문다. 분노한 대중 앞에 검찰은 칼을 휘두른다. 저기 쫓기는 자는 누구인가. 그대가 아니라고 자신할 수 있는가.`,
        `“느낌 오지? 이 놈 잡아야 하는 거” \n\n 가리봉동 소탕작전 후 4년 뒤, 금천서 강력반은 베트남으로 도주한 용의자를 인도받아 오라는 미션을 받는다.`,
        `이제 모든 것이 끝난다,\n지상 최대 블록버스터의 압도적 피날레!\n\n공룡들의 터전이었던 이슬라 누블라 섬이 파괴된 후,\n 마침내 공룡들은 섬을 벗어나 세상 밖으로 출몰한다.\n지상에 함께 존재해선 안 될 위협적 생명체인 공룡의 등장으로\n인류 역사상 겪어보지 못한 사상 최악의 위기를 맞이한 인간들. 지구의 최상위 포식자 자리를 걸고 인간과 공룡의 최후의 사투가 펼쳐진다.`,
        '지금껏 본 적 없는 마블의 극한 상상력!\n5월, 광기의 멀티버스가 깨어난다!\n\n끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며 오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’.대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….']

    const movieScore = ['9.6', '9.5', '0', '8.8']
    const movieLike = ['199', '1.3k', '1.1k', '2.9k']

    return (
        <div className='movie-box'>
            <a href='#' title='영화 상세보기'>
                <img src={imgUrl[movieNum]} />
                <div className='movie-rank'>
                    <div>{movieNum + 1}</div>
                    <span className='main-icon-box'><img src="https://www.megabox.co.kr/static/pc/images/common/btn/mov_top_tag_mx.png" /></span>
                </div>
                <div className='movie-info'>
                    <div className='movie-info-content'>{movieInfo[movieNum]}</div>
                    <div className='movie-score-box'>
                        <span className='movie-score-title'>관람평</span>
                        <span className='movie-score-score'>{movieScore[movieNum]}</span>
                    </div>
                </div>
            </a>
            <div className='movie-button-box'>
                <button className='like-btn'>♡      {movieLike[movieNum]}</button>
                <button className='book-btn'>예매</button>
            </div>
        </div>
    )
}

export default Movie; 