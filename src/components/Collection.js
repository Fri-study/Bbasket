 
 import Thumbnail from "./Thumbnail";
 import { useEffect, useState, useRef} from "react";
 
 function Collection({ results }) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false); //현재불러오는 아이템이 있는지 상태
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null); //Intersection Observe를 사용하여 불러올 아이템이 있는지를 감지하기 위함
  
    //컴포넌트마운트, isLoading, hasMore 변경시에 옵저버 등록/해제
    const loadMoreItems = () => {
        setIsLoading(true);

        //setIsLoading과 동기적으로 실행되지 않도록 하기위한 지연설정
        setTimeout(() => {
          const numItemsToLoad = 2; //test 갯수
          const startIndex = items.length;
          const endIndex = Math.min(startIndex + numItemsToLoad, results.length);
          const newItems = results.slice(startIndex, endIndex);
          setItems((prevItems) => [...prevItems, ...newItems]);
          setIsLoading(false);
          setHasMore(endIndex < results.length);
        }, 200);
      };
    
      useEffect(() => {
        loadMoreItems();
      }, []);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry], observer) => {
            if (entry.isIntersecting && !isLoading && hasMore) {
              loadMoreItems();
            }
          },
          {
            //디폴트옵션상태
            root: null,
            rootMargin: "0px",
            threshold: 0,
          }
        );
        if (loaderRef.current) {
          observer.observe(loaderRef.current);
        }
        return () => {
          const currentLoaderRef = loaderRef.current;
          if (currentLoaderRef) {
            observer.unobserve(currentLoaderRef);
          }
        };
      }, [isLoading, hasMore, loadMoreItems]);
  
    return (
      <div>
     <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map((val, index) => (
          <li key={index} style={{ height:"auto" }} className="sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 w-full ">
            <div className="inline-block cursor-point relative p-2 rounded-[4px] hover:bg-sky-300 hover:opacity-80">
              <Thumbnail backdrop_path={val.backdrop_path} title={val.title} />
              <div>
                <div className="text-lg font-bold top-200 w-full h-full text-black">{val.title}</div>
                <div className="text-sm top-300 w-full h-full text-gray-700">{val.from}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
        {isLoading && <div>Loading...</div>}
        {!isLoading && hasMore && (
          <div ref={loaderRef}>Loading..</div>
        )}
        {!isLoading && !hasMore && <div>더이상 북마크가 없어요</div>}
      </div>
    );
  }
  
  export default Collection;

 