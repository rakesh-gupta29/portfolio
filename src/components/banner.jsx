
import "./styles/banner.css"
import arrowRight from "../icons/arrow-right.svg"
import bannertextSVG from "../assets/banner_text.svg"
import { useNavigate} from "react-router-dom"
const Banner =() =>{
    const navigate = useNavigate()
    const handleExplore =() =>{
        navigate("/projects")

    }
    return(
        <>
        <section className="banner-master flex align-center  text-center flex-col flex-nowrap gap-md  fw-bold loose-text text-spaced ">
            <div className="banner-master-text"> 
                <img src={ bannertextSVG}  alt="" />

            </div>
            <span className="font-secondary text-secondary fs-larger ">Front-End Developer </span>
            <div onClick={handleExplore} className=" border border-hover flex-center px-lg gap-sm my-sm py-sm  font-primary text-gray fs-large pointer banner-btn ">
                Explore Projects
                <img src={ arrowRight} alt="" className="box-sm px-sm" />
            </div>
        </section>
        </>
    )
}

export default Banner 