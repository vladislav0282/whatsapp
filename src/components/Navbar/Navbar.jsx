import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getSettingsSelector } from '../../redux/slices/getSettings'

function Navbar() {
  const user = useSelector(getSettingsSelector)
  console.log({ user })
  return (
    <div>

      <h1>Whatsapp</h1>
      <NavLink to="chat1">
        {user ? (<p>{user}</p>) : 'User1'}
      </NavLink>
      <NavLink to="chat2">
        <p>User 2</p>
      </NavLink>
      <NavLink to="chat3">
        <p>User 3</p>
      </NavLink>
      <NavLink to="chat4">
        <p>User 4</p>
      </NavLink>
    </div>
  )
}
export default Navbar
