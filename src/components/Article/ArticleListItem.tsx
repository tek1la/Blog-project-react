import { Button, Card, CardContent } from '@mui/material'
import './ArticleListItem.css'

type ArticleListItemType = {
    title: string
    description: string
    category: string
    author: string
    date: string
    articleImg: string
}
const ArticleListItem = ({
    title,
    description,
    category,
    author,
    date,
    articleImg,
}: ArticleListItemType) => {
    return (
        <Card className="article-list-item" variant="outlined">
            <CardContent>
                <div>
                    <div className="article-img">
                        <img
                            className="img"
                            src={articleImg}
                            alt=""
                            width="100px"
                            height="100px"
                        />
                    </div>
                    <div>
                        <div className="article-category">{category}</div>
                        <h2 className="article-title">{title}</h2>
                        <p className="article-description">{description}</p>
                        <div>
                            <div className="article-author">{author}</div>
                            <div className="article-date">{date}</div>
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

export default ArticleListItem
