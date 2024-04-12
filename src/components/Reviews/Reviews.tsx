import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import './Reviews.css'

type Props = {}
type Review = {
    name: string
    text: string
}
const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jack',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, deserunt, odio nobis provident consequuntur rem nisi nesciunt in adipisci reprehenderit quo est eveniet saepe modi aspernatur dignissimos tempore necessitatibus repudiandae.',
        },
        {
            name: 'Jone',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
    ]
    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required!')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }
    console.log(newReview)
    return (
        <>
            <Typography
                variant="h4"
                component={'h2'}
                sx={{
                    margin: '30px 0',
                }}
            >
                Reviews
            </Typography>
            <Grid container spacing={4}>
                {reviews.map(({ name, text }, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Card variant="outlined">
                            <CardContent>
                                <h4>Name: {name}</h4>
                                <p>Comment: {text}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Grid
                container
                sx={{
                    margin: '30px 0',
                }}
            >
                <form onSubmit={onSend}>
                    <h3 className="review-title">Please leave a review</h3>
                    <div className="review-wraper">
                        <div>
                            <TextField
                                label="Your Name"
                                size="small"
                                onChange={handleChangeName}
                                value={newReview.name}
                            />
                        </div>
                        <div className="review-text-area-wraper">
                            <TextareaAutosize
                                placeholder="Your text"
                                onChange={handleChangeText}
                                value={newReview.text}
                                className="review-text-area"
                            />
                        </div>
                        <div>
                            <Button type="submit" variant="outlined">
                                Send
                            </Button>
                        </div>
                    </div>
                </form>
            </Grid>
        </>
    )
}
export default Reviews
