import Header from './Header'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import Artice from 'pages/Article/Artice'
import About from 'pages/About/About'
import Profile from 'pages/Profile/Profile'
import ArticlePage from 'pages/Article/ArticlePage'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path="//" element={<Home />} />
                    <Route path="article" element={<Artice />} />
                    <Route path="about" element={<About />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="/article/:id" element={<ArticlePage />} />
                </Routes>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
