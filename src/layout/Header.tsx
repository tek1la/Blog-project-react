import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'

type Props = {
    showMenuItem: (
        profile: boolean,
        about: boolean,
        article: boolean,
        home: boolean
    ) => void
}
const Header = ({ showMenuItem }: Props) => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'white',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <Logo />
                    <Menu showMenuItem={showMenuItem} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
