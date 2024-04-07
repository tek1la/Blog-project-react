import { Grid, Typography } from '@mui/material'
import { articleArray } from 'utils/articleArray'
import ArticlePageListItem from './ArticlePageListItem'

type Props = {}
const ArticlePageList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    margin: '30px 0',
                }}
            >
                ARTICLE
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
                            <ArticlePageListItem
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
export default ArticlePageList
