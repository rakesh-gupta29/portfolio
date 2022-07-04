

import arrowTop from "../icons/arrowRight.svg"
import linkedinIcon from "../icons/linkedin.svg"
import githubIcon from "../icons/github.svg"
import twiiterIcon from "../icons/twitter.svg"
import "./styles/footer.css"

const Footer =() =>{
    const navigateToTop =() =>{
        document.documentElement.scrollTop=0
    }

    const AuthorLink =( { target , iconSrc}) =>{
        return(
            <a  href={target} target="_blank" className="box-lg mx-md   circle border border-hover pointer  grid-center ">
                <img src={iconSrc} alt="" />
            </a>
        )
    }

    return(
        <>
        <footer className=" bg-footer flex-center font-secondary text-light master-padding relative  flex flex-col flex-nowrap">
            <button onClick={ navigateToTop} className="footer-navigate-btn circle  px-sm bg-light dark-hover border border-light border-bold ">
                <img src={ arrowTop} alt="" />
            </button>
            <div className=" flex-center gap-lg my-lg  ">
                <AuthorLink  target="https://www.linkedin.com/in/rakesh-gupta-711048203/" iconSrc={linkedinIcon} />
                <AuthorLink  target="https://github.com/rakesh-gupta-123" iconSrc={githubIcon} />
                <AuthorLink  target="https://twitter.com/rakesh_gupta_12"  iconSrc={twiiterIcon} />
            </div>
            <div className=" flex-center gap-md  py-lg loose-text text-spaced text-spaced font-secondary  ">
                Rakesh Gupta  @2022
            </div>
        </footer>
        </>
    )
}

export default Footer 