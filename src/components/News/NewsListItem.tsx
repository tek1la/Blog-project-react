import { Button, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import './NewsListItem.css'

type Props = {
    id: number
    title: string
    description: string
    date: string
    newsImg: string
}
const NewsListItem = ({ id, title, description, date, newsImg }: Props) => {
    return (
        <Card className="news-list-item" variant="outlined">
            <CardContent>
                <div className="news-wraper">
                    <div className="news-img">
                        <img className="img" src={newsImg} alt={title} />
                    </div>
                    <div>
                        <h2 className="news-title">
                            <Link to={`/news/${id}`}>{title}</Link>
                        </h2>
                        <div>
                            <div className="news-date">{date}</div>
                        </div>
                        <p className="news-description">{description}</p>
                        <div className="btn-wrap">
                            <Button
                                className="btn"
                                variant="contained"
                                sx={{
                                    transition: '0.4s',
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    backgroundColor: '#D82853',
                                    padding: '5px 10px',
                                    boxShadow:
                                        '10px 10px 40px -5px rgba(216,40,83,0.2)',
                                    '&:hover': {
                                        backgroundColor: '#2E2AEA',
                                        boxShadow:
                                            '2px 2px 20px -5px rgba(46,42,234,1)',
                                    },
                                }}
                            >
                                <Link to={`/news/${id}`}>See more</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default NewsListItem
