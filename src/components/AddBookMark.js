import "../componentsCss/addBookMark.css";
import React, { useState,} from "react";
import axios from "axios";
import isEmpty from './Common/CommonFuntion'
const cheerio = require("cheerio");
let innerResponseCh = true;

function AddBookMark(){

    const [inputURLvalue, setInputURLvale]  = useState("");
    const [data, setData] = useState("");
    const [okRespons,setOkrespons] = useState(false);
    

    //url값이 바뀔때마다 확인
    const urlValueChangeHeandler = (event) => {
        //console.log(event.target.value);
        setInputURLvale(event.target.value);
    };

    //map을 state로 사용하기위한 처리
    const add = (key, value) => {
        setData((prev) => new Map([...prev, [key, value]]));
        };


    //url input 키다운 이벤트(엔터감지)
    const urlKeyDownhandle = (event) =>{
        if(event.key === 'Enter' ) SearchURLHandler();
    }
    

    //버튼 onClick이벤트
    const SearchURLHandler = async () => {

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; //todo : 임시방편임 유료프록시서버 사용하거나 자체 프록시서버를 구축해야한다
        let requestUrl;
        let alreadySetProxy;

        //네이버 블로그에 대하여 분기처리
        if(inputURLvalue.includes('naver')){
            let urlInpo = NaverAddProxy(inputURLvalue);

            requestUrl = urlInpo.get("requestUrl");
            alreadySetProxy = urlInpo.get("alreadySetProxy");
        }
        else{
            requestUrl = proxyUrl + inputURLvalue;
        }

        try {
            const response = await axios.get(requestUrl);
            
            const $ = cheerio.load(response.data);
            let scrapedTitle = $('[property="og:title"]').attr('content');
            if(isEmpty(scrapedTitle))scrapedTitle = $('title').text().replace(/<[^>]*>?/gm, '');;

            let scrapedAuthor = $('[property="og:site_name"]').attr('content');
            if(isEmpty(scrapedAuthor))scrapedAuthor = $('title').text().replace(/<[^>]*>?/gm, '');;

            let scrapedImg = $('img').attr('src');

            //iframe 화면이라면 내부 url의 것을 가져온다
            let isIframe = $('iframe');
            if(isIframe.length > 0 && !inputURLvalue.includes('tistory')){

                let iframeMap = Iframescraping(isIframe, alreadySetProxy);
                scrapedTitle = (await iframeMap).get("scrapedTitle");
                scrapedAuthor = (await iframeMap).get("scrapedAuthor");
                scrapedImg = (await iframeMap).get("scrapedImg");
            }

            add("inputURLvalue",inputURLvalue);
            add("scrapedTitle",scrapedTitle);
            add("scrapedAuthor", scrapedAuthor);
            add("scrapedImg", scrapedImg);
            if(innerResponseCh)setOkrespons(true);

          } catch (error) {
            console.error(error);
            setData('Error: Could not retrieve data.');
          }

      };


    //todo 2. API와 연결할수있게
    //todo 3. 플렉시블하게 (기능완성후에 할것)
    return (
        <form> 
        <div className=" w-[850px] h-96 bg-sky-300 m-1 p-2 rounded-md flex flex-wrap">               
            <div id="addBookMarkTopDiv" className="w-[600px]">
                <input id="addBookMarkURL" value={inputURLvalue} onChange={urlValueChangeHeandler} onKeyDown={urlKeyDownhandle} className="w-[520px] h-9 mANDp1 rounded-md" type="text" placeholder="북마크할 URL주소를 입력하세요"></input>
                <button id="searchURLbtn" onClick={SearchURLHandler} className="s_btn text-cyan-50 text-xs" type="button">URL찾기</button>
                <div className="w-[820px] h-0.5 my-3 rounded-md bg-gray-200"></div>
            </div>    
                <div id="addBookMarkLeftDiv">
                    <div className="place-content-start items-start flex w-[600px] h-36">                        
                        <div id="theThumbnailDiv" className="w-48 h-28 bg-white m-1 mt-3 rounded-md inline-block">
                            <img id="theThumbnailImg" className="w-48 h-28 rounded-md" src={okRespons ? data.get("scrapedImg") || '' : ""} alt=""/>
                        </div>
                        <div className="w-96 h-24 inline-block text-left">
                            <input id="theTitle" className="roundOneInput mANDp1  inline" placeholder="원문제목" defaultValue={okRespons ? data.get("scrapedTitle")|| '' : ''}/>
                            <input id="theAuthor" className="roundOneInput mANDp1 inline" placeholder="원문출처" defaultValue={okRespons ? data.get("scrapedAuthor")|| '' : ''}/>
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


//네이버블로그는 내부? 프록시를 사용한다
function NaverAddProxy(url){

    let requestUrl;
    let alreadySetProxy;
    let newNaverurl = url;
    let tempIndex;

    //만약 blog.naver 라면 현재의 프록시 서버를 막아놓았다. 자체 처리로 일단 접속하게 할것
    if(url.includes('m.blog.naver')){
        alreadySetProxy = '/mnaver';
        tempIndex = newNaverurl.indexOf('naver.com');
    }
    else if(newNaverurl.includes('blog.naver')){
        alreadySetProxy = '/naver';
        tempIndex = newNaverurl.indexOf('naver.com');
 
    }
    newNaverurl = newNaverurl.slice(tempIndex+9, newNaverurl.length);
    requestUrl = alreadySetProxy +newNaverurl;

    let naverMap = new Map();
    naverMap.set("alreadySetProxy", alreadySetProxy);
    naverMap.set("requestUrl",requestUrl)
    return naverMap;
}

//iframe이 있는경우 그 안의 주소에 접근한다
async function Iframescraping(isIframe, alreadySetProxy ){

    innerResponseCh = false;
    let iframeURL = isIframe[0];
    iframeURL = iframeURL.attribs.src;
    let newIframeMap = new Map();
    
    if(!isEmpty(alreadySetProxy)) iframeURL = alreadySetProxy + iframeURL;

    try{
        const secondResponse = await axios.get(iframeURL);
        const $iframeData = cheerio.load(secondResponse.data);

        let scrapedTitle = $iframeData('[property="og:title"]').attr('content');
        let scrapedAuthor = $iframeData('[property="og:site_name"]').attr('content');
        let scrapedImg = $iframeData('img').attr('src');

        if(isEmpty(scrapedAuthor) && alreadySetProxy.includes("naver"))
        {
            scrapedAuthor = $iframeData('[property="naverblog:nickname"]').attr('content');
        }
        //todo 네이버태그를 구분해서?

        
        newIframeMap.set("scrapedTitle", scrapedTitle);
        newIframeMap.set("scrapedAuthor", scrapedAuthor);
        newIframeMap.set("scrapedImg", scrapedImg);
        innerResponseCh = true;
    } catch (error) {
        console.error(error);
    }
    return newIframeMap;

}