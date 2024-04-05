import { Button, Grid } from '@mui/material'
import ArticleList from 'components/Article/ArticleList'
import Slider from 'components/Slider/Slider'
import './Home.css'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Grid
                container
                spacing={2}
                sx={{
                    alignItems: 'center',
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
                        variant="contained"
                        color="success"
                        sx={{
                            transition: '0.4s',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'white',
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
                        Lorem ipsum
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
            <ArticleList />
        </>
    )
}
export default Home
