
import thanksIcon from "../icons/check.svg"

const ThanksPage =() =>{
    const styles ={
        height:"140px",
        width:"140px"
    }
    const masterStyles ={
        
    }
    return(
        <div style={{minHeight:"350px"}} className=" flex-center flex-col gap-md my-lg py-lg">
            <img style={styles} src={ thanksIcon} alt="" />
            <span className=" fs-title font-secondary  text-primary "> Thank You.</span>
            <span className=" font-primary text-spaced   text-secondary fs-x-large ">We Will Chat Soon. </span>
        </div>
    )
}

export default ThanksPage