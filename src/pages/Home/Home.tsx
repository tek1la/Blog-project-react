import ArticleList from 'components/Article/ArticleList'
import Slider from 'components/Slider/Slider'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Slider />
            <ArticleList />
        </>
    )
}
export default Home
