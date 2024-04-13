import { Grid, Typography } from '@mui/material'
import NewsListItem from './NewsListItem'
import { newsArray } from 'utils/newsArray'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'

type Props = {}
const NewsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginTop: '70px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    fontSize: '36px',
                    color: '#151F51',
                }}
            >
                Blog news
            </Typography>
            <Grid
                sx={{
                    marginBottom: '70px',
                }}
            >
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
                    className="mySwiper news-slider"
                >
                    {newsArray.map(
                        ({ id, title, description, date, newsImg }) => (
                            <SwiperSlide>
                                <NewsListItem
                                    id={id}
                                    title={title}
                                    description={description}
                                    date={date}
                                    newsImg={newsImg}
                                />
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </Grid>
        </>
    )
}
export default NewsList
