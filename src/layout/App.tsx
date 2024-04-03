import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}
type MenuShowType = {
    onProfile: boolean
    onAbout: boolean
    onArticle: boolean
    onHome: boolean
}
const App = (props: Props) => {
    const [menuShow, setMenuShow] = useState<MenuShowType>({
        onProfile: false,
        onAbout: false,
        onArticle: false,
        onHome: true,
    })
    const showMenuItem = (
        home: boolean,
        article: boolean,
        about: boolean,
        profile: boolean
    ) => {
        setMenuShow((prevState) => ({
            ...prevState,
            onProfile: profile ? true : false,
            onAbout: about ? true : false,
            onArticle: article ? true : false,
            onHome: home ? true : false,
        }))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header showMenuItem={showMenuItem} />
                <Main menuShow={menuShow} />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
