 
 import Thumbnail from "./Thumbnail";
 
 function Collection({results}){

    return (
        <div className='relative flex items-center'>
            {results.map((val) => (
                <div key={val.title} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-point relative p-2'>
                    <Thumbnail backdrop_path={val.backdrop_path} title={val.title} />
                    <div>
                        <div className="text-lg font-bold top-200 w-full h-full hover:bg-gray-700 text-black">{val.title}</div>
                        <div className="text-sm top-300 w-full h-full text-gray-700">{val.from}</div>
                    </div>
                </div>
            ))}
        </div>
    );
 }

 export default Collection;
 