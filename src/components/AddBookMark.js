import "../componentsCss/addBookMark.css";
import React, { useState, useEffect} from "react";
import axios from "axios";
import isEmpty from './Common/CommonFuntion'
import Navbar from "./Navbar";
import Footer from "./Footer";

const cheerio = require("cheerio");
let innerResponseCh = true;
//todo 브런치 사이트 , 동적사이트 크롤링 이슈
function AddBookMark(){

    const [inputURLvalue, setInputURLvale]  = useState("");
    const [data, setData] = useState("");
    const [okRespons,setOkrespons] = useState(false);
    const [optionData, setoptionData] = useState([]);
    
//셀렉트박스옵션값이 없는 경우(첫진입)에만 API통신을 한다
    //todo API통신 여기서 일어남
    async function fetchOptions() {
        //테스트값
        const testVal = [[{'test1' :'테스트폴더명'}, {'test2' : '테스트폴더명2'}], [{'open':'전체공개'}, {'priv' : '비공개'}]];  
        setoptionData(testVal);
    }
    useEffect(() => {
        fetchOptions();
    }, []);

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
            let scrapedTags = $('div.tags > a').map(function() {
                return $(this).text();
              }).get();

            //태그는 해시태그를 추가한다
            let hashtaggedTags = scrapedTags.map(tag => {
                if (tag.startsWith('#')) {
                  return tag;
                } else {
                  return `#${tag}`;
                }
              }).join(' ');

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
            add("scrapedTags", hashtaggedTags);
            if(innerResponseCh)setOkrespons(true);

          } catch (error) {
            console.error(error);
            setData('Error: Could not retrieve data.');
          }

      };


    //todo 2. API와 연결할수있게
    return (
        <form> 
            <Navbar/>
            <h4>개발용 프록시 사용을 위해 아래 링크에서 버튼을 눌러주세요(하루에 한번정도만 누르면 OK)</h4>
            <a className='bg-slate-200 w-[200px] h-[30px] border-4 border-cyan-900' href='https://cors-anywhere.herokuapp.com/'> 개발용프록시 활성화하러가기</a>
            {/* 위에는 테스트용 입니다 */}

            <div className="w-full flex flex-wrap justify-centert text-center justify-center mt-[20px]"> 
                <div className=" w-[600px] h-96 bg-blue-400 m-1 p-2 rounded-md flex flex-wrap">               
                    <div id="addBookMarkTopDiv" className="w-[600px]">
                        <input id="addBookMarkURL" value={inputURLvalue} onChange={urlValueChangeHeandler} onKeyDown={urlKeyDownhandle} className="w-[500px] h-9 mANDp1 rounded-lg border-4" type="text" placeholder="북마크할 URL주소를 입력하세요"></input>
                        <button id="searchURLbtn" onClick={SearchURLHandler} className="s_btn text-cyan-50 text-xs" type="button">URL찾기</button>
                        <div className="w-full h-0.5 my-3 rounded-md bg-gray-200"></div>
                    </div>    
                    <div id="addBookMarkLeftDiv">
                        <div className="place-content-start items-start flex w-[600px] h-36">                        
                            <div id="theThumbnailDiv" className="w-48 h-28 bg-white m-1 mt-3 rounded-md inline-block">
                                {okRespons 
                                && <img id="theThumbnailImg" className="w-48 h-28 rounded-md" src={okRespons ? data.get("scrapedImg") || '' : ""} alt=""/>
                                }
                            </div>
                            <div className="w-96 h-24 inline-block text-left">
                                <input id="theTitle" className="roundOneInput border-4 mANDp1  inline" placeholder="원문제목" defaultValue={okRespons ? data.get("scrapedTitle")|| '' : ''}/>
                                <input id="theAuthor" className="roundOneInput border-4 mANDp1 inline" placeholder="원문출처" defaultValue={okRespons ? data.get("scrapedAuthor")|| '' : ''}/>
                                <textarea id="theTags" className="w-[370px] h-12 border-4 mANDp1 rounded-lg" type="textarea"  placeholder="#태그" 
                                    defaultValue={okRespons ? data.get("scrapedTags")|| '' : ''}/>
                            </div>
                        </div>
                        <div className="block">
                            <textarea type="textarea" id="newMemo" className="w-[570px] h-[130px] border-4 mANDp1 rounded-lg block" placeholder="북마크에대한 메모를 남겨주세요"/>
                        </div>
                    </div>  
                </div>


            <div id="addBookMarkRightDiv" className="w-[200px] h-[200px] m-1 p-2 rounded-md bg-slate-100">
                <p className="mANDp1">폴더선택</p>
                <select id="userFolderSelect" className="h-[36px] w-[120px] border-4 mANDp1 rounded-lg">
                    { !isEmpty(optionData) 
                        && 
                        optionData[0].map((map, index) => {
                        const key = Object.keys(map)[0];
                        const value = map[key]; 
                        return <option key={index} value={key}>{value}</option>;
                    })}
                    
                </select>
                <p className="mANDp1">공개선택</p>
                <select id="userFolderSelect" className="h-[36px] w-[120px] border-4 mANDp1 rounded-lg">
                { !isEmpty(optionData) 
                        && 
                        optionData[1].map((map, index) => {
                        const key = Object.keys(map)[0];
                        const value = map[key]; 
                        return <option key={index} value={key}>{value}</option>;
                    })}
                </select>
            </div>
        </div>  
        <Footer/>
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

