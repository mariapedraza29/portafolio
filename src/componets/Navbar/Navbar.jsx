import { NavLink } from "react-router-dom"
export const Navbar = ({ anchor, path}) => {
  return (   
    <li><NavLink to={path}>{anchor}</NavLink></li>
  )
}