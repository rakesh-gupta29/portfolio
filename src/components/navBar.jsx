
import "./styles/navBar.css"

import logo from "../assets/logo.png"
import menuIcon from "../icons/menu.svg"

import {Link,  NavLink} from "react-router-dom"
import { useState } from "react"
import { SmNavModal} from "../components"

const NavBar = () =>{
    const [ optionsModal ,setOptionsModal] = useState ( false )

    const Option = ( { target , text }) =>{
        return(
            <NavLink  className={navData =>
                "nav-link"  + (navData.isActive ? " navLink-active" : "")
              }  to={ target } >
                <span className="px-sm py-sm f ">{ text }</span>
            </NavLink>
        )
    }
    const modalViewHandler =() => setOptionsModal ( !optionsModal)
    return(
        <>
        <nav className="flex align-center gap-lg master-padding justify-between">

           <Link to="/">
                <img src={ logo}  className="logo-wrapper " />
           </Link>

            <div className="flex  flex-nowrap font-primary   gap-lg fw-bold  text-gray loose-text  sm-hidden">
                <Option  target="/" text="Home" />
                <Option  target="/about" text="About" />
                <Option  target="/projects" text="Projects" />
                <Option  target="/thoughts" text="Thoughts" />
                <Option  target="/contact" text="Contact" />
            </div>

            <div onClick={modalViewHandler} className="box pointer  grid-center circle  sm-visible bg-hover  mx-sm">
                <img src={ menuIcon} alt=""/>
            </div>
        </nav>
        <SmNavModal handler={modalViewHandler} isVisible={optionsModal} />
        </>
    )
}

export default NavBar 