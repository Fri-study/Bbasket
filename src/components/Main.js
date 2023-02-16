import Slider from './SliderBanner';
import Collection from './Collection';
import { useState } from 'react';

function Main(props){

    //Todo  아래 테스트값 API와 연결하기
    const testVal =[
                    {backdrop_path : "TEST THUMNAIL.png", title: "테스트북마크에대한제목1", from: "테스트출처1"},
                    {backdrop_path : "TEST THUMNAIL-2.png", title: "테스트북마크에대한제목2", from: "테스트출처2"},
                    {backdrop_path : "TEST THUMNAIL-3.png", title: "테스트북마크에대한제목3", from: "테스트출처3"}
                ]

    //state에 따라서 메인배너,검색창,출력 visible을 조정한다
    const defaultMain = 'main';
    const [isMain, setisMain]  = useState(props.isMain || defaultMain);

    return(
    <div>
        {isMain ==='main' && <Slider/>}
        {isMain ==='userMain' 
            && 
            <Collection results={testVal}/>
            //todo 여기에 중간위치하는 검색창 넣기
        }
    </div>
    );
}

export default Main;
