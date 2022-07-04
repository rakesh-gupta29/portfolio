
import { useLocation ,useNavigate} from "react-router-dom"
import { useEffect,useState} from "react"
import { Editor } from "../components"
const ThoughtDetailPage =() =>{

    const location = useLocation();
    const navigate = useNavigate ();
    const [ { title , date ,subtitle ,content } , setDisplayData] = useState ( location.state? location.state.data:"" )
    useEffect(() =>{
        if ( !location.state ){
            navigate("/thoughts")
        }
    },[])
    return(
        <>
        <section style={{marginTop:"45px"}} className="w-800  mx-auto px-sm  ">
            <div className=" flex flex-col border-bottom  py-sm px-sm">
                <span className=" font-secondary  text-secondary  fs-xx-large para-spaced  loose-text ">{ title }</span>
                <span className=" font-primary  text-gray fw-bold px-md text-spaced py-md " >{date}</span>
                <span className=" font-primary text-secondary fs-large  text-spaced  text-gray py-sm ">{ subtitle }</span>
            </div>
            <Editor data={content} />
        </section>
        </>
    )
}
export default ThoughtDetailPage