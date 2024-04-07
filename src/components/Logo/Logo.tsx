import logo from 'assets/logo.svg'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import './Logo.css'

type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="logo-link" to="/">
                <img src={logo} alt="" />
            </Link>
        </Typography>
    )
}
export default Logo
