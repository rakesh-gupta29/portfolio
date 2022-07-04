

import "./styles/skills.css"
import skillsImg from "../assets/skills.png"
import bulletIcon from "../icons/bullet.svg"

const skills = [
    {
        text:"HTML5 + CSS3",
        extent:80
    },
    {
        text:"JAVASCRIPT",
        extent:75
    },
    {
        text:"REACT",
        extent:70
    },
    {
        text:"JS BASED BACKEND",
        extent:60
    },
    {
        text:"UI/UX TOOLS & LIBRARIES",
        extent:45
    },
]

const Skills = () =>{


    const SkillBar =( { text , extent }) =>{
        return(
            <div className=" flex flex-col gap-sm text-dark font-primary fw-bold ">
                <span className=" px-md  uppercase loose-text text-spaced ">{ text}</span>
                <div className=" progress-bar text-light font-secondary">
                    <div style={{width:extent+ "%"}} className=" fs-small bg-primary flex-center">
                    { extent} % 
                    </div>
                </div>
            </div>
            

        )
    }

    const SkillItem =( { text }) =>{
        return(
            <div className=" flex align-center  font-secondary fs-large  text-secondary loose-text text-spaced   fw-bold">
                <img src={ bulletIcon} alt="" className="box-sm px-sm" />
                <span>{text}</span>
            </div>
        )
    }
    return (
        <>
        <section className="skills-master master-padding flex align-center justify-around gap-lg ">
            <div className=" skills-bars-wrapper   mx-sm my-lg flex flex-col gap-md  ">
                    {skills.map( ( i ,index) =>{
                        return <SkillBar  text={i.text} key={index} delay={ index  + 1} extent={ i.extent} />
                    })}
            </div>
            <div className=" skills-data-wrapper flex flex-col  flex-nowrap gap-md my-lg align-start  ">
                <span className=" fs-xx-large  text-secondary font-secondary "> My Skills </span>
                <span className="font-primary  text-dark fs-large text-spaced para-spaced  ">
                    Semantic HTML , CSS  and its addons :Sass or Less, <strong>
                    JavaScript</strong>  : Vanilla or its libraries : <b>ReactJS</b> ,State Mangagement : Redux ,Full Stack Web Tools : <b>MERN Stack</b>, {"("} MongoDB & Express{")"}. I am currently learning  JS Based Animation Libraries and Java.
                    <br />
                   Moreover,I am always eager to learn new and emerging languages and technolgies .
                </span>
                <div className=" flex flex-col gap-sm flex-nowrap my-sm">
                    <SkillItem text="Front-End Web" />
                    <SkillItem text="ReactJS and NextJS" />
                    <SkillItem text="JS Backed Backend" />
                    <SkillItem text="MERN Stack" />
                </div>
               
               
            </div>
        </section>
       
        </>
    )
}

export default Skills 