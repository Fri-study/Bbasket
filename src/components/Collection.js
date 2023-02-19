 
 import Thumbnail from "./Thumbnail";
 
 function Collection({results}){

    return (
        <div className='relative items-center flex flex-wrap'>
            {results.map((val) => (
                <div key={val.title} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 inline-block cursor-point relative p-2
                rounded-[4px] hover:bg-sky-300 hover:opacity-80'>
                    <Thumbnail backdrop_path={val.backdrop_path} title={val.title} />
                    <div>
                        <div className="text-lg font-bold top-200 w-full h-full text-black">{val.title}</div>
                        <div className="text-sm top-300 w-full h-full text-gray-700">{val.from}</div>
                    </div>
                </div>
            ))}
        </div>
    );
 }

 export default Collection;
 