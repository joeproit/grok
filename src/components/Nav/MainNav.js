
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavElements';

const MainNav = () => {
    return (
        <>
        <Nav>
            <NavLink to='/'>Home</NavLink>
            <Bars />
            <NavMenu>
            <NavLink to='/about' activeStyle>
                About
            </NavLink>
            <NavLink to='/blog' activeStyle>
                Contact
            </NavLink>
            <NavLink to='/projects' activeStyle>
                Projects
            </NavLink>
            </NavMenu>
            <NavBtn>
            <NavBtnLink to='/contact'>Contact</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};
    
export default MainNav;
