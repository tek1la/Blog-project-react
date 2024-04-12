import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './Slider.css'
import { Pagination, Autoplay } from 'swiper/modules'

type Props = {}
const Slider = (props: Props) => {
    const handleSwiper = (swiper: any) => {}
    return (
        <>
            <Swiper
                onSlideChange={() => console.log('slide change')}
                onSwiper={handleSwiper}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="img/img-1.webp" alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-2.webp" alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-3.webp" alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-4.webp" alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-5.webp" alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-6.webp" alt="img" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default Slider
