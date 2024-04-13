import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import { useEffect, useState } from 'react'
import { Avatar, Box, IconButton, Tooltip } from '@mui/material'

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
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                    }}
                >
                    <Logo />
                    <Box>
                        <Menu
                            item={'menu-item'}
                            itemActive={'menu-item-active'}
                        />
                    </Box>
                    <Box>
                        <Tooltip title="Open settings">
                            <IconButton>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
