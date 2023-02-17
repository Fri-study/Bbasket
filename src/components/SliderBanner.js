import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Slider(){

    return <section>
        <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
            <div>
                {/* 이미지배너 */}
                <img loading="lazy" src="/images/TEST BANNER.png" alt=""/>
            </div>
            <div>
                <img loading="lazy" src="images/TEST BANNER-2.png" alt=""/>
            </div>
            <div>
                <img loading="lazy" src="images/TEST BANNER-3.png" alt=""/>
            </div>
        </Carousel>
    </section>
}

export default Slider;


