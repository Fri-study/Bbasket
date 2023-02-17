import Slider from './SliderBanner';
import Collection from './Collection';
import SearchBar from './SearchBar';
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
        {/* 기본메인화면 진입시 */}
        {isMain ==='main' 
            && 
            <div className='inline-block items-center'>
                <div className='w-[800px]'>
                    <Slider/>
                </div>
                <div className='mt-[70px] mb-[150px] self-center'>
                    <SearchBar/>
                </div>

                {/*todo  설명이미지가 들어갈만한 자리에 샘플가안 박스 */}
                {/* <div className='mt-[50px] border-2 bg-slate-400 h-[400px] '> 사용 설명, 플랫폼 설명 이미지가 들어가면 좋겠어요 </div> */}
            </div>
        }

        {/* 유저메인화면 진입시 */}
        {isMain ==='userMain' && <Collection results={testVal}/>}

        {/* 검색화면 진입시 */}


    </div>
    );
}

export default Main;
