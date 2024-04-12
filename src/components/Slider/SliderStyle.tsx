import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './SliderStyle.css'
import { Autoplay } from 'swiper/modules'
import { Button } from '@mui/material'

type Props = {}
const SliderStyle = (props: Props) => {
    return (
        <>
            <div className="slider-style">
                <div>
                    <h2 className="slider-style-title">Look selection</h2>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="img/look1-1.jpeg" alt="look1" />
                        <div className="slider-style-border"></div>
                        <Button
                            variant="contained"
                            className="slyder-style-btn"
                        >
                            See more
                        </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/look2-1.jpeg" alt="look2" />
                        <div className="slider-style-border"></div>
                        <Button
                            variant="contained"
                            className="slyder-style-btn"
                        >
                            See more
                        </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/look3-1.jpeg" alt="look3" />
                        <div className="slider-style-border"></div>
                        <Button
                            variant="contained"
                            className="slyder-style-btn"
                        >
                            See more
                        </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/look1-1.jpeg" alt="look1" />
                        <div className="slider-style-border"></div>
                        <Button
                            variant="contained"
                            className="slyder-style-btn"
                        >
                            See more
                        </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/look2-1.jpeg" alt="look2" />
                        <div className="slider-style-border"></div>
                        <Button
                            variant="contained"
                            className="slyder-style-btn"
                        >
                            See more
                        </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/look3-1.jpeg" alt="look3" />
                        <div className="slider-style-border"></div>
                        <Button
                            variant="contained"
                            className="slyder-style-btn"
                        >
                            See more
                        </Button>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default SliderStyle
