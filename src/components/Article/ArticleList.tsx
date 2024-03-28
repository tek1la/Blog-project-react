import { Grid, Typography } from '@mui/material'
import ArticleListItem from './ArticleListItem'
import { articleArray } from 'utils/articleArray'

type Props = {}
const ArticleList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" component="h1">
                List of Products
            </Typography>
            <Grid container spacing={4}>
                {articleArray.map(
                    ({
                        id,
                        title,
                        description,
                        category,
                        author,
                        date,
                        articleImg,
                    }) => (
                        <Grid item xs={12} sm={12} md={12} key={id}>
                            <ArticleListItem
                                title={title}
                                description={description}
                                category={category}
                                author={author}
                                date={date}
                                articleImg={articleImg}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ArticleList
