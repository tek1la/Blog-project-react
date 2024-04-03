import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

type Props = {
    showMenuItem: (
        profile: boolean,
        about: boolean,
        article: boolean,
        home: boolean
    ) => void
}
const Menu = ({ showMenuItem }: Props) => {
    const showingHome = () => {
        showMenuItem(true, false, false, false)
    }
    const showingArtical = () => {
        showMenuItem(false, true, false, false)
    }
    const showingAbout = () => {
        showMenuItem(false, false, true, false)
    }
    const showingProfile = () => {
        showMenuItem(false, false, false, true)
    }
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button onClick={showingHome}>Home</Button>
            <Button onClick={showingArtical}>Article</Button>
            <Button onClick={showingAbout}>About</Button>
            <Button onClick={showingProfile}>Profile</Button>
        </Typography>
    )
}
export default Menu
