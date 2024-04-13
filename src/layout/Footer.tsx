import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import Menu from 'components/Menu/Menu'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import FooterLogo from 'components/Logo/FooterLogo'

type Props = {}
const Footer = (props: Props) => {
    return (
        <AppBar
            position="static"
            sx={{
                justifyContent: 'center',
                backgroundColor: '#1E1746',
                width: '100%',
                height: '180px',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                    }}
                >
                    <FooterLogo />
                    <Box>
                        <Menu
                            item={'footer-menu-item'}
                            itemActive={'footer-menu-item-active'}
                        />
                    </Box>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: 'rgba(255,255,255,0.2)',
                            '&:hover': {
                                borderColor: 'rgba(255,255,255,0.4)',
                            },
                        }}
                    >
                        <ArrowUpwardIcon
                            sx={{
                                color: 'white',
                            }}
                        />
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Footer
