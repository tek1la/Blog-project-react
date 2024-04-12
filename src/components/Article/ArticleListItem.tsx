import { Button, Card, CardContent } from '@mui/material'
import './ArticleListItem.css'
import { Link } from 'react-router-dom'

type ArticleListItemType = {
    id: number
    title: string
    description: string
    category: string
    author: string
    date: string
    articleImg: string
    articleFullStyle?: boolean
}
const ArticleListItem = ({
    id,
    title,
    description,
    category,
    author,
    date,
    articleImg,
    articleFullStyle,
}: ArticleListItemType) => {
    return (
        <Card className="article-list-item" variant="outlined">
            <CardContent>
                <div
                    className={
                        articleFullStyle
                            ? 'article-page-wraper'
                            : 'article-wraper'
                    }
                >
                    <div
                        className={
                            articleFullStyle
                                ? 'article-page-img'
                                : 'article-img'
                        }
                    >
                        <img className="img" src={articleImg} alt={title} />
                    </div>
                    <div>
                        <div className={category + ' article-category'}>
                            {category}
                        </div>
                        <h2 className="article-title">{title}</h2>
                        <p className="article-description">{description}</p>
                        <div className="card-info">
                            <div>
                                <div className="article-author">{author}</div>
                                <div className="article-date">{date}</div>
                            </div>
                            <div className="btn-wrap">
                                <Button className="btn" variant="outlined">
                                    <Link to={`/article/${id}`}>See more</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ArticleListItem
