import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

type Props = {}
const Menu = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button>Home</Button>
            <Button>Prodact</Button>
            <Button>Payments</Button>
            <Button>Shiping</Button>
            <Button>Cart</Button>
        </Typography>
    )
}
export default Menu
