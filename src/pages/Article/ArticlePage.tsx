import { Container, Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Article, articleArray, getArticlesObject } from 'utils/articleArray'
import './ArticlePage.css'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    articleObject?: {
        [id: number]: Article
    }
}

const ArticlePage = ({
    articleObject = getArticlesObject(articleArray),
}: Props) => {
    const { id } = useParams()
    console.log(id)
    return (
        <Container maxWidth="lg">
            <Grid
                sx={{
                    marginTop: '100px',
                }}
            >
                <div className="article-item-wraper">
                    <h2 className="article-item-title">
                        {articleObject[+id!].title}
                    </h2>
                    <div className="article-item-info">
                        <div
                            className={
                                articleObject[+id!].category +
                                ' article-category'
                            }
                        >
                            {articleObject[+id!].category}
                        </div>

                        <div className="article-item-author">
                            {articleObject[+id!].author}
                        </div>
                        <div className="article-item-date">
                            {articleObject[+id!].date}
                        </div>
                    </div>
                    <div className="article-item-img">
                        <img
                            className="img"
                            src={`../${articleObject[+id!].articleImg}`}
                            alt={articleObject[+id!].title}
                        />
                    </div>
                    <div>
                        <p className="article-text">
                            {articleObject[+id!].text}
                        </p>
                    </div>
                </div>
            </Grid>
            <Grid>
                <Reviews />
            </Grid>
        </Container>
    )
}
export default ArticlePage
