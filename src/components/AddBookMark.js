import "../componentsCss/addBookMark.css";
import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";

//TODO 0215 : 네이버 아닌걸로 크롤링 , 네이버랑 분기나눠서 크롤링시키기
function AddBookMark(){

    //todo 1. 크롤링기능-> 웹크롤링후 화면에 뿌려주는것 까지
    const [inputURLvalue, setInputURLvale]  = useState("");
    const [data, setData] = useState("");
    const cheerio = require("cheerio");
    const iconv = require("iconv-lite");

    //url값이 바뀔때마다 확인
    const urlValueChangeHeandler = (event) => {
        console.log(event.target.value);
        setInputURLvale(event.target.value);
    };

    //todo 1-2 CORS가 막힌 사이트들이있다.. 미리 뚫어주고, 들어온 URL값을 태우기 전에 한번 확인해서 변경시킨후에 태워야한다
    //버튼 onClick이벤트
    const SearchURLHandler = () => {
        //todo 1-4 아이프레임이 있는 곳은 그안의 src에 앞부분 블로그주소를 붙여서 긁어야한다
        let testURL = "naver/siji5000/223015377877"
        axios.get(testURL)
        .then((response) =>{
            let body = response.data;
            //todo 1-3 인코딩이 필요한 화면인지 아닌지 어케 알수있을까?
            //let bodyDecoded = iconv.decode(body)
            const $ = cheerio.load(body);
            let isIframe = $('iframe').attr('src');
            let theURLtitle = $("title").text();
            let theURLauthor = $('author').text();
            if(isIframe != null && isIframe != undefined && isIframe != "")
            {
                let newSrc = "naver"+isIframe;
                axios.get(newSrc)
                .then((neResponse) =>{
                    const new$ = cheerio.load(neResponse.data);
                    //let theTags;
                    //let spans = new$("div.wrap_tag");
                    //onsole.log(spans.html());
                        
                    theURLtitle = new$('title').text();
                    theURLauthor = new$('[property="naverblog:nickname"]').attr('content');
                })
            }
        })
      };


    //todo 2. API와 연결할수있게
    //todo 3. 플렉시블하게 (기능완성후에 할것)
    return (
        <form> 
            <div className=" w-[850px] h-96 bg-sky-300 m-1 p-2 rounded-md flex flex-wrap">               
                <div id="addBookMarkTopDiv" className="w-[600px]">
                    <input id="addBookMarkURL" value={inputURLvalue} onChange={urlValueChangeHeandler} className="w-[520px] h-9 mANDp1 rounded-md" type="text" placeholder="북마크할 URL주소를 입력하세요"></input>
                    <button id="searchURLbtn" onClick={SearchURLHandler} className="s_btn text-cyan-50 text-xs" type="button">URL찾기</button>
                    <div className="w-[820px] h-0.5 my-3 rounded-md bg-gray-200"></div>
                </div>    
                    <div id="addBookMarkLeftDiv">
                        <div className="place-content-start items-start flex w-[600px] h-36">                        
                            <div id="theThumbnailDiv" className="w-48 h-28 bg-white m-1 mt-3 rounded-md inline-block">
                                <img id="theThumbnailImg" className="w-48 h-28 rounded-md" src="" alt=""/>
                            </div>
                            <div className="w-96 h-24 inline-block text-left">
                                <input id="theTitle" className="roundOneInput mANDp1  inline" placeholder="원문제목"/>
                                <input id="theAuthor" className="roundOneInput mANDp1 inline" placeholder="원문출처"/>
                                <textarea id="theTags" className="w-96 h-12 mANDp1 rounded-md" type="textarea"  placeholder="#태그"/>
                            </div>
                        </div>
                        <div className="block">
                            <textarea type="textarea" id="newMemo" className="w-[585px] h-[130px] mANDp1 rounded-md block" placeholder="북마크에대한 메모를 남겨주세요"/>
                        </div>
                    </div>
                
                <div id="addBookMarkRightDiv" className="w-[200px] h-[280px] rounded-md bg-slate-100">
                    <p className="mANDp1">폴더선택</p>
                    <select id="userFolderSelect" className="h-[26px] w-[100px] mANDp1">
                        <option>테스트옵션</option>
                    </select>
                    <p className="mANDp1">공개선택</p>
                    <select id="userFolderSelect" className="h-[26px] w-[100px] mANDp1">
                        <option>테스트옵션^^*</option>
                    </select>
                </div>  
            </div>
        </form>
    );

}

export default AddBookMark;
