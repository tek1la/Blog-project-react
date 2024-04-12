import { Grid, Typography } from '@mui/material'
import ArticleListItem from './ArticleListItem'
import { articleArray } from 'utils/articleArray'

type Props = {
    gridSize?: number
    articleFullStyle?: boolean
}
const ArticleList = ({ gridSize, articleFullStyle }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    fontSize: '36px',
                    color: '#151F51',
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
                        <Grid
                            item
                            xs={12}
                            sm={gridSize || 4}
                            md={gridSize || 4}
                            key={id}
                        >
                            <ArticleListItem
                                id={id}
                                title={title}
                                description={description}
                                category={category}
                                author={author}
                                date={date}
                                articleImg={articleImg}
                                articleFullStyle={articleFullStyle}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ArticleList
