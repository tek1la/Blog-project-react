import MenuItem from './MenuItem'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/article">Article</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/profile">Profile</MenuItem>
        </>
    )
}
export default Menu
