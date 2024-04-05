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
                    <img src="img/img-1.jpeg" alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-2.jpeg" alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-3.jpeg" alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-4.jpg" alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-5.jpg" alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-6.jpg" alt="img" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default Slider
