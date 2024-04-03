import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

type Props = {
    menuShow: {
        onProfile: boolean
        onAbout: boolean
        onArticle: boolean
        onHome: boolean
    }
}
const Main = ({ menuShow }: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
        >
            {menuShow.onHome ? <Home /> : null}
        </Container>
    )
}
export default Main
