import "../index.css";
import { useState } from 'react';

function SearchBar(props){
    const [searchVal, setSearchVal] = useState("");

    const handleSearchValChg = (event) =>{
        setSearchVal(document.getElementById("mainsearchInput").value);
    };

    const handleSearchBarKeydown = (event) => {
        if(event.key ==='Enter') handleSearchButtonOnClick();
    };

    const handleSearchButtonOnClick = (event) => {
        //todo API로 서버와 통신

        //상위컴포넌트 호출
        const searchTerm = document.getElementById("mainsearchInput").value;
        test(searchTerm);
    }

    const test = (searchTerm) =>{
            props.onSerchActed(searchTerm);  
    }

    return (
            <div>
                <input 
                    className="rounded-md w-[400px] h-[38px] bg-white border-2 text-center"
                    id="mainsearchInput" type="text" placeholder="검색어를 입력하세요" defaultValue={""} onChange={handleSearchValChg}/>
                <button 
                    onClick={handleSearchButtonOnClick}
                    className=" ml-[3px] p-1 w-[50px] h-[36px] bg-sky-600 text-white rounded-md">
                    검색
                </button>
            </div>
    );

}

export default SearchBar;
