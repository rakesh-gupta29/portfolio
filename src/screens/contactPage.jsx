
import "./styles/contactPage.css"
import { Title ,ContactForm} from "../components"
import emailIcon from "../icons/email.svg"
import callIcon from "../icons/call.svg"
import locationIcon  from "../icons/location.svg"
import linkedinIcon  from "../icons/linkedin_dark.svg"
import githubIcon  from "../icons/github_dark.svg"
import twitterIcon  from "../icons/twitter_dark.svg"

const ContactPage =() =>{

    const ContactItem =( { icon, text , value }) =>{
        return(
            <div className="flex flex-nowrap gap-md  align-center py-md mx-lg  ">
                <img src={icon} alt="" className="box" />
                <div className="flex flex-col">
                    <span className=" font-secondary  fw-bold text-secondary  fs-larger  loose-text ">{text}</span>
                    <span className=" font-primary text-gray fw-bold  loose-text text-spaced fs-small ">{value}</span>
                </div>
            </div>
        )
    }

    const Social =( { icon, target}) =>{
        return(
            <a  href={target} target="_blank" className="box  circle bg-hover pointer  grid-center ">
                <img src={icon} alt="" />
            </a>
        )

    }
    return(
        <>
        <section className=" my-lg  py-sm">
            <Title text="Get In Touch " />
            <section className="data-master-wrapper flex align-start justify-around master-padding">
            <div className="static-data-wrapper flex flex-col gap-sm align-start">
                <span className=" font-primary fs-large text-gray para-spaced py-md ">
                    Wish To Hire Me ? or get in touch with me for a project. I love to associate with people.
                </span>
                <ContactItem  icon={ locationIcon} text="Address" value="Bhilai,C.G."  />
                <ContactItem  icon={ emailIcon} text="Email" value="contactrakesh19999@gmail.com"  />
                <ContactItem  icon={ callIcon} text="Call" value="+916231173739"  />
                <div className="flex flex-nowrap gap-lg py-sm px-lg my-sm  ">
                    <Social  icon={linkedinIcon} target="https://www.linkedin.com/in/rakesh-gupta-711048203/" />
                    <Social  icon={githubIcon} target="https://github.com/rakesh-gupta-123" />
                    <Social  icon={twitterIcon} target="https://twitter.com/rakesh_gupta_12" />
                </div>
            </div>
            

            <div className="contact-form-wrapper">
                <ContactForm />

            </div>
            </section>
        </section>
        </>
    )
}

export default ContactPage

{/* <section className=" contact-data-master  flex align-center justify-center master-padding ">
                
<div className="static-data-wrapper flex flex-col flex-nowrap  gap-md align-start">
    <span className=" font-primary fs-large   text-gray text-spaced px-md ">
        Wish To Hire Me? or get in touch with me for a project. I love to associate with people.
    </span>
    <ContactItem  icon={ locationIcon} text="Address" value="Bhilai,C.G."  />
    <ContactItem  icon={ emailIcon} text="Email" value="cont.com"  />
    <ContactItem  icon={ callIcon} text="Call" value="+916231173739"  />
    <div className="flex flex-nowrap gap-lg py-sm px-lg  ">
        <Social  icon={linkedinIcon} target="https://www.linkedin.com/in/rakesh-gupta-711048203/" />
        <Social  icon={githubIcon} target="https://github.com/rakesh-gupta-123" />
        <Social  icon={twitterIcon} target="https://twitter.com/rakesh_gupta_12" />
    </div>
</div>
    <ContactForm />

</section>
 */}
