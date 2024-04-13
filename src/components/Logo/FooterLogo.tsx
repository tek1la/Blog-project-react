import footerLogo from 'assets/footer-logo.png'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import './Logo.css'

type Props = {}
const FooterLogo = (props: Props) => {
    return (
        <Typography variant="h6" component="div">
            <Link className="logo-link" to="/">
                <img src={footerLogo} alt="" />
            </Link>
        </Typography>
    )
}
export default FooterLogo
