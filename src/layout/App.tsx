import Header from './Header'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import Artice from 'pages/Article/Artice'
import About from 'pages/About/About'
import Profile from 'pages/Profile/Profile'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path="about" element={<About />} />
                </Routes>
                <Container maxWidth="lg">
                    <Routes>
                        <Route path="//" element={<Home />} />
                        <Route path="article" element={<Artice />} />
                        <Route path="profile" element={<Profile />} />
                    </Routes>
                </Container>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
