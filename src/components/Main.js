
import Slider from './SliderBanner';
import Collection from './Collection';
import SearchBar from './SearchBar';
import SearchMain from './SearchMain';
import { useState } from 'react';

function Main(props){


    //Todo  아래 테스트값 API와 연결하기
    const testVal =[
                    {backdrop_path : "TEST THUMNAIL.png", title: "테스트북마크에대한제목1", from: "테스트출처1"},
                    {backdrop_path : "TEST THUMNAIL-2.png", title: "테스트북마크에대한제목2", from: "테스트출처2"},
                    {backdrop_path : "TEST THUMNAIL-3.png", title: "테스트북마크에대한제목3", from: "테스트출처3"},
                    {backdrop_path : "TEST THUMNAIL.png", title: "테스트북마크에대한제목1", from: "테스트출처1"},
                    {backdrop_path : "TEST THUMNAIL-2.png", title: "테스트북마크에대한제목2", from: "테스트출처2"},
                    {backdrop_path : "TEST THUMNAIL-3.png", title: "테스트북마크에대한제목3", from: "테스트출처3"},
                    {backdrop_path : "TEST THUMNAIL.png", title: "테스트북마크에대한제목1", from: "테스트출처1"},
                    {backdrop_path : "TEST THUMNAIL-2.png", title: "테스트북마크에대한제목2", from: "테스트출처2"},
                    {backdrop_path : "TEST THUMNAIL-3.png", title: "테스트북마크에대한제목3", from: "테스트출처3"},
                ]
                
    //state에 따라서 메인배너,검색창,출력 visible을 조정한다
    const defaultMain = 'main';
    //const defaultMain = 'main';
    const [state, setState] = useState({ isMain: props.isMain || defaultMain , isShow: "beforeSearch" , isValue : "" });

    //메인화면에서 검색이 일어나는경우, 메인검색창으로 visible을 조정한다
    const changtoSearch = (searchTerm) =>{
        setState({isMain : "searchmain", isShow: "afterSearch", isValue : searchTerm});
    }

    //todo 검색API는 메인 이곳에서 처리하는게 좋지 않을까?
    const handleSearching = (searchTerm) =>{

        forSearching(searchTerm, () =>{state.isMain === 'main' && changtoSearch(searchTerm) });
    }

  return (
    <div>
        {/* 기본메인화면 진입시 */}
        {state.isMain ==='main' 
            && 
            <div>
                <div className='flex justify-center'>
                    <div className='w-3/4 self-center'>
                        <Slider/>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='mt-[70px] mb-[150px] self-center w-1/2'>
                        <SearchBar onSerchActed={handleSearching} isMain={state.isMain} isShow={state.isShow}/>
                    </div>
                </div>

                {/*todo  설명이미지가 들어갈만한 자리에 샘플가안 박스 */}
                {/* <div className='mt-[50px] border-2 bg-slate-400 h-[400px] '> 사용 설명, 플랫폼 설명 이미지가 들어가면 좋겠어요 </div> */}

            </div>
        }

        {/* 유저메인화면 진입시 */}
        {state.isMain ==='usermain' 
        && 
            <div className='m-[20px] mt-[70px]'>
                <Collection isMain={state.isMain} results={testVal}/>
            </div>

        }

        {/* 검색화면 진입시 */}
        {state.isMain ==='searchmain' && <SearchMain isMain={state.isMain} isShow={state.isShow} results={testVal} onSerchActed={handleSearching} isValue={state.isValue}/>}


    </div>
  );
}

export default Main;

//검색을 처리하는 함수
function forSearching (searchTerm, callback){

    console.log('여기서 API통신을 해야죠 : '+ searchTerm);
    callback();
}

