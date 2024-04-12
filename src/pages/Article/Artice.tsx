import { Container, Grid } from '@mui/material'
import ArticleList from 'components/Article/ArticleList'

type Props = {}
const Artice = (props: Props) => {
    const gridSize = 12
    const articleFullStyle = true
    return (
        <>
            <Container maxWidth="lg">
                <Grid
                    sx={{
                        padding: '70px 0',
                    }}
                >
                    <ArticleList
                        gridSize={gridSize}
                        articleFullStyle={articleFullStyle}
                    />
                </Grid>
            </Container>
        </>
    )
}
export default Artice
