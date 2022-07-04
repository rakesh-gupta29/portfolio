
import "./styles/about.css"
import Title from "./title"
import aboutImg from "../assets/about_page.svg"



const About =() =>{
    return(
        <>
        <Title  text="About" />
        <section className="about-content-master master-padding flex  gap-lg justify-around align-center  ">
            <div className="about-text-wrapper text-dark fs-large  flex flex-col gap-md align-start my-lg para-spaced   ">
                <span className="font-primary">
                    Hello. I am Rakesh Gupta. I am a mechanical Engineering Graduate of 2021 Turned a techie. I am currently learning JavaScript and React & building Web Applications.
                </span>
                <span></span>
                <span className="font-primary">
                    Ardent in Nature, I like to take up new challenges and learn consistently.Love developing everything related with this part of web.I have keen interest in learning about buzzing technologies about front web dev.
                </span>
                <button onClick={()=>window.open("https://rakesh-gupta-123.github.io/resume/","_blank")} target="_blank"  className="fw-bold text-primary font-primary text-spaced fs-large">Download CV</button>
            </div>
            <div className="about-img-wrapper my-lg ">
                <img src={aboutImg} alt="" />
            </div>
        </section>

        </>
    )
}

export default About