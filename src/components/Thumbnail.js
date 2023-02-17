
function Thumbnail(result){
    //const BASE_URL = "https://baseURL";
    //TODO 아래 테스트샘플내용 실제링크로 변경
    const TEST_BASE_URL = "/images/test sample/"
    let test_full_url = TEST_BASE_URL + result.backdrop_path;

    return (
        <div>
            <a 
            href={test_full_url}
            >
                <img className="w-full h-auto block" 
                    //src='${BASE_URL}${result.backdrop_path}'
                    //테스트이미지
                    src={test_full_url}
                    width={320}
                    height={210}
                    alt={result.title}
                />
            </a>
        </div>
        
    );
}

export default Thumbnail;
