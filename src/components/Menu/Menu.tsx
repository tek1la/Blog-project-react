import MenuItem from './MenuItem'

type Props = {
    item: string
    itemActive: string
}
const Menu = ({ item, itemActive }: Props) => {
    return (
        <>
            <MenuItem item={item} itemActive={itemActive} to="/">
                Home
            </MenuItem>
            <MenuItem item={item} itemActive={itemActive} to="/article">
                Article
            </MenuItem>
            <MenuItem item={item} itemActive={itemActive} to="/about">
                About
            </MenuItem>
            <MenuItem item={item} itemActive={itemActive} to="/profile">
                Profile
            </MenuItem>
        </>
    )
}
export default Menu
