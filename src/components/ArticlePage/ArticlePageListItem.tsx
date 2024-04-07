import { Button, Card, CardContent } from '@mui/material'
import './ArticlePageListItem.css'

type Props = {
    title: string
    description: string
    category: string
    author: string
    date: string
    articleImg: string
}

const ArticlePageListItem = ({
    title,
    description,
    category,
    author,
    date,
    articleImg,
}: Props) => {
    return (
        <Card className="article-list-item" variant="outlined">
            <CardContent>
                <div className="article-page-wraper">
                    <div className="article-page-img">
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
                                    See more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default ArticlePageListItem
