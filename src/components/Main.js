import Slider from './SliderBanner';
import Collection from './Collection';

function Main(){

    //Todo  아래 테스트값 API와 연결하기
    const testVal =[
                    {backdrop_path : "TEST THUMNAIL.png", title: "테스트북마크에대한제목1", from: "테스트출처1"},
                    {backdrop_path : "TEST THUMNAIL-2.png", title: "테스트북마크에대한제목2", from: "테스트출처2"},
                    {backdrop_path : "TEST THUMNAIL-3.png", title: "테스트북마크에대한제목3", from: "테스트출처3"}
                ]

    return(
    <div>
        <Slider />
        <div className='relative flex items-center'>
            <Collection results={testVal}/>
        </div>
    </div>
    );
}

export default Main;