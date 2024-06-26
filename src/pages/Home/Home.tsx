import { Button, Container, Grid } from '@mui/material'
import ArticleList from 'components/Article/ArticleList'
import Slider from 'components/Slider/Slider'
import './Home.css'
import SliderStyle from 'components/Slider/SliderStyle'
import { Link } from 'react-router-dom'
import NewsList from 'components/News/NewsList'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        paddingTop: '140px',
                    }}
                >
                    <Grid item xs={4}>
                        <h1 className="title">Lorem ipsum dolor</h1>
                        <div className="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Nam laudantium recusandae nisi porro ipsum
                            numquam.
                        </div>
                        <Button
                            className="cta-btn"
                            variant="contained"
                            sx={{
                                transition: '0.4s',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                backgroundColor: '#D82853',
                                padding: '10px 48px',
                                boxShadow:
                                    '10px 10px 40px -5px rgba(216,40,83,0.2)',
                                '&:hover': {
                                    backgroundColor: '#2E2AEA',
                                    boxShadow:
                                        '2px 2px 20px -5px rgba(46,42,234,1)',
                                },
                            }}
                        >
                            <Link to="/about">Lorem ipsum</Link>
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={8}
                        sx={{
                            position: 'relative',
                        }}
                    >
                        <div className="border"></div>
                        <Slider />
                    </Grid>
                </Grid>
                <Grid>
                    <SliderStyle />
                </Grid>
                <ArticleList />
                <NewsList />
            </Container>
        </>
    )
}
export default Home
