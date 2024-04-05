import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import { useEffect, useState } from 'react'

type Props = {}
const Header = (props: Props) => {
    const [headerStyle, setHeaderStyle] = useState({
        top: '0',
        opacity: '1',
        transition: '0.2s',
    })

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 50) {
                setHeaderStyle({
                    ...headerStyle,
                    top: '-50px',
                    opacity: '0.4',
                })
            } else {
                setHeaderStyle({
                    ...headerStyle,
                    top: '0',
                    opacity: '1',
                })
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [headerStyle])
    return (
        <AppBar
            position="static"
            sx={{
                justifyContent: 'center',
                backgroundColor: 'white',
                position: 'fixed',
                zIndex: '100',
                width: '100%',
                '&:hover': {
                    opacity: '1',
                    top: '0',
                },
                ...headerStyle,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <Logo />
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
