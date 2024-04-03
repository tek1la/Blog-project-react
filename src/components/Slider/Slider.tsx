import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './Slider.css'
import { Pagination } from 'swiper/modules'

type Props = {}
const Slider = (props: Props) => {
    const handleSwiper = (swiper: any) => {
        console.log(swiper)
    }
    return (
        <>
            <Swiper
                onSlideChange={() => console.log('slide change')}
                onSwiper={handleSwiper}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
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
            </Swiper>
        </>
    )
}
export default Slider
