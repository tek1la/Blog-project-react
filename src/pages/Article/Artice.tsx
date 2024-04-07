import { Grid } from '@mui/material'
import ArticlePageList from 'components/ArticlePage/ArticlePageList'

type Props = {}
const Artice = (props: Props) => {
    return (
        <>
            <Grid
                sx={{
                    padding: '70px 0',
                }}
            >
                <ArticlePageList />
            </Grid>
        </>
    )
}
export default Artice
