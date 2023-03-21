import Thumbnail from "./Thumbnail";
import React, { useState, useEffect} from "react";
import isEmpty from './Common/CommonFuntion'
import "../componentsCss/addBookMark.css";

export default function ShowBookMark(){
    const [optionData, setoptionData] = useState([]);

    //셀렉트박스 불러오기 
    async function fetchOptions() {
        //테스트값
        const testVal = [[{'test1' :'테스트폴더명'}, {'test2' : '테스트폴더명2'}], [{'open':'전체공개'}, {'priv' : '비공개'}]];  
        setoptionData(testVal);
    }
    useEffect(() => {
        fetchOptions();
    }, []);

    const CopyURLHandler =() =>{
        //todo 복사가 되게 하기
    }

    const testData ={url : "www.test.com", backdrop_path : "TEST THUMNAIL.png", title: "테스트북마크에대한제목1", from: "테스트출처1", tags : "#이것은,#테스트,#입니다", memo : "testmemo"};

    const loadVal = {...testData};

    return(
        <form>
            <div className="flex justify-center items-center mt-[20px]">
                <div className="grid grid-cols-3 gap-6 w-5/6 p-[20px] rounded-lg bg-blue-400 ">
                    <div className="col-start-1 row-span-4 md:row-span-2 md:col-span-3 flex items-center" >
                        <Thumbnail backdrop_path={loadVal.backdrop_path} title={loadVal.title} />
                    </div>
                    <div className="col-start-2 col-span-2 md:col-span-3 md:col-start-1 flex items-center">
                        <div className="bg-white border-4 rounded-lg px-2 h-[36px] w-full">{loadVal.url}</div>
                        <button id="copyBtn" onClick={CopyURLHandler} className="s_btn text-cyan-50 ml-2" type="button">copy</button>
                    </div>
                    <div className="col-start-2 col-span-2 md:col-span-3 md:col-start-1 flex items-center">
                        <div className="bg-white border-4 rounded-lg w-full h-[36px] px-2">{loadVal.title}</div>
                    </div>
                    <div className="col-start-2 col-span-2 md:col-span-3 md:col-start-1">
                        <div className="bg-white border-4 rounded-lg h-[36px] px-2">{loadVal.from}</div>
                    </div>

                    <div className="col-start-2 col-span-2 md:col-span-3 md:col-start-1">
                        <textarea  id="theTags"  type="textarea" className="bg-white border-4 rounded-lg h-[56px] w-full px-2" defaultValue={loadVal.tags}/>
                    </div>

                    <div className="col-start-2 md:col-start-1">
                        <select id="userFolderSelect" className="h-[36px] w-full border-4 px-2 rounded-lg">
                            { !isEmpty(optionData) 
                                && 
                                optionData[0].map((map, index) => {
                                const key = Object.keys(map)[0];
                                const value = map[key]; 
                                return <option key={index} value={key}>{value}</option>;
                            })}
                            
                        </select>
                    </div>
                    <div>
                        <select id="userFolderSelect" className="h-[36px] w-full border-4 px-2 rounded-lg">
                        { !isEmpty(optionData) 
                                && 
                                optionData[1].map((map, index) => {
                                const key = Object.keys(map)[0];
                                const value = map[key]; 
                                return <option key={index} value={key}>{value}</option>;
                            })}
                        </select>
                    </div>

                    <div className="col-span-3">
                        <textarea type="textarea" id="newMemo"  className="bg-white border-4 rounded-lg h-[100px] w-full px-2" defaultValue={loadVal.memo}/>
                    </div>
                </div>
            </div>
        </form>
    );

}