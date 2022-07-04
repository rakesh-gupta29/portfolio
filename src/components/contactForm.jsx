
import "./styles/contactForm.css"

const ContactForm =() =>{
    return(
        <form action="https://formsubmit.co/contactrakesh.rkgupta@gmail.com" method="POST" className="flex flex-col gap-md  my-md w-100 contact-form-wrapper ">
                <input size="3" name="email" type="email" placeholder="Email" />
            <div className=" flex  gap-md field-wrapper  ">
                <input size="3" name="name" type="text" placeholder="Name"  className="flex-1" />
                <input size="3" name="subject" type="text" placeholder="Subject"  className="flex-1" />
                <input size="1" type="hidden" hidden name="_subject" value="Portfolio Submission"/>
                <input size="1" type="hidden" name="_next" value="http://localhost:3000/contact/thanks" />
                <input size="1" type="text" name="_honey" style={{display:"none"}} />
                <input size="1" type="hidden" name="_captcha" value="false" />
            </div>
        
            <textarea name="message" className="w-100" cols="1" rows="7" placeholder="Message"></textarea>
            <div className="flex justify-end mx-md my-sm ">
                <button  className="bg-primary dark-hover rounded-sm text-light  fs-large py-md px-lg m-left-auto " style={{height:"50px",minWidth:"100px"}}>
                   Submit
                </button>
            </div>

        </form>
    )
}

export default ContactForm

{/* <input name="email" type="email" placeholder="Email" />
            <div className=" flex flex-nowrap gap-md ">
                <input name="name" type="text" placeholder="Name"  className="flex-1" />
                <input name="subject" type="text" placeholder="Subject"  className="flex-1" />
                <input type="hidden" name="_subject" value="Portfolio Submission"/>
                <input type="hidden" name="_next" value="http://localjost:30000/contact/thanks" />
                <input type="text" name="_honey" style="display:none" />
                <input type="hidden" name="_captcha" value="false" />
            </div>
            <textarea name="message" cols="30" rows="7" placeholder="Message"></textarea>
            <div className="flex justify-end mx-md my-sm ">
                <button  className="bg-primary dark-hover rounded-sm text-light  fs-large py-md px-lg m-left-auto " style={{height:"50px",minWidth:"100px"}}>
                    {loading?<img  src={loadingIcon} />:"Submit"}
                </button>
            </div> */}