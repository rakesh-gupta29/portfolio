
import homeIcon from "../icons/home.svg"
import aboutIcon from "../icons/about.svg"
import skillsIcon from "../icons/skills.svg"
import projectsIcon from "../icons/projects.svg"
import thoughtsIcon from "../icons/blogs.svg"
import contactIcon from "../icons/location.svg"
import closeIcon from "../icons/x.svg"
import logo from "../assets/logo.png"

import "./styles/smNavModal.css"
import { Link} from "react-router-dom"

const SmNavModal =( { handler , isVisible}) =>{

    const SmOption =( { icon ,text , target,classes }) =>{
        return(
            <Link to={ target } className="option grid-center gap-md " >
                <img className={classes?classes:""} src={icon} alt="home" />
                <span className="fs-larger">{text}</span>
            </Link>
        )
    }
    return(
        <>
        <section className={`sm-visible sm-nav-master bg-dark font-primary text-light ${isVisible?"":"sm-navModal-hidden"}`}>
            <section className="modal-header flex  gap-lg px-lg  py-lg ">
                <button className="my-sm mx-sm dark-hover  m-left-auto " onClick={handler}>
                    <img className="box-md px-sm" src={closeIcon} alt="close"  />
                </button>
            </section>
            <section onClick={handler}>
                <div className="flex-center flex-nowrap">
                    <SmOption  text="Home" target="/" icon={homeIcon} />
                    <SmOption  text="About" target="/about" icon={aboutIcon} />
                </div>

                <div className="flex-center flex-nowrap">
                    <SmOption  text="Skills" target="/skills" classes="large-image" icon={skillsIcon} />
                    <SmOption  text="Projects" target="/projects" classes="x-large-image" icon={projectsIcon} />
                </div>

                <div  className="flex-center flex-nowrap  ">
                    <SmOption  text="Thoughts" target="/thoughts" icon={thoughtsIcon} />
                    <SmOption  text="Contact" target="/contact" icon={contactIcon} />
                </div>
            </section>

        </section>
        </>
    )
}

export default SmNavModal