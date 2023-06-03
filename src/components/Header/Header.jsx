import { NavLink } from 'react-router-dom'
import headerStyles from './header.module.css'

function Header() {
  return (
    <div className={headerStyles.menu}>
      <NavLink to="/">
        <h5>About</h5>
      </NavLink>
      <NavLink to="/">
        <h5>SignIn</h5>
      </NavLink>
      <NavLink to="/">
        <h5>SignUp</h5>
      </NavLink>
    </div>
  )
}

export default Header
