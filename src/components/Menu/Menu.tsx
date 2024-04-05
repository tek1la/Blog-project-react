import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

type Props = {}
const Menu = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button>
                <Link to="/">Home</Link>
            </Button>
            <Button>
                <Link to="/article">Article</Link>
            </Button>
            <Button>
                <Link to="/about">About</Link>
            </Button>
            <Button>
                <Link to="/profile">Profile</Link>
            </Button>
        </Typography>
    )
}
export default Menu
