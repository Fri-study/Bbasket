import SearchBar from "./SearchBar";
import Collection from "./Collection";
import { useState } from 'react';
import isEmpty from './Common/CommonFuntion';

function SearchMain(props){

    //todo 1. 검색창을 달아준다
    //todo 2. api값을 받아서 출력되는 콜렉션을 노출한다

    //todo 1-1 만약 아직 검색결과값이 없으면 : 검색창은 가운데에뜬다
    //todo 1-2 검색결과가 있으면 : 검색창은 위에 뜬다
    //todo 1-3 검색을 했으나 검색결과가 없으면 : 검색창은 위에 뜨고 안내 메세지가 뜬다
    //state에 따라서 검색창,출력 visible을 조정한다
    const defaultShow = 'beforeSearch';
    const [isShow, setisShow]  = useState(props.isShow|| defaultShow);

    const handleSearching= (searchTerm) => {
        props.onSerchActed(searchTerm);
      }

    return (
        <div>
            {/* 검색전 */}
            {isShow === 'beforeSearch' 
                &&
                <div className='mt-[100px] mb-[150px] self-center'>
                <SearchBar onSerchActed={handleSearching} isMain={props.isMain}/>
                <div className="test mt-[20px]">여기뭔가 검색에 대한 설명? 이 있으면?</div> 
                </div>
            }

            {/* 검색후 */}
            {isShow === 'afterSearch' 
                &&
                <div className='mt-[30px] mb-[150px] self-center'>
                    <SearchBar onSerchActed={handleSearching}  isMain={props.isMain} isValue={props.isValue}/>

                    {!isEmpty(props.results) 
                    && 
                        <div className="m-[20px] mt-[40px]">
                        <Collection results={props.results}/>
                        </div>
                    }
                    {isEmpty(props.results)
                    &&
                        <div className=" mt-[50px]">
                            <span className="text-sky-600">죄송합니다 검색 결과가 없습니다</span>
                        </div>
                    }

                </div>
            }

        </div>
    );

}

export default SearchMain;