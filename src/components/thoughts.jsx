import { useNavigate} from "react-router-dom"


const Thought =( { data})=>{
    const navigate = useNavigate();
    const { title , subtitle , readTime,date ,content  } = data
    const handleClick =() =>{
        const itemTarget= String( title).replace(/[^a-z ]/gi, '').toLowerCase().split(" ").join("+");
        navigate(itemTarget,{state:{data:data}})
    }

    return(
        <div onClick={handleClick} className="flex-col flex border-left border-hover  border-left  border-bold  border-none  gap-sm px-md py-md pointer ">
            <span className=" fs-x-large  text-spaced  font-primary  text-primary loose-text  ">{title}</span>
                <div>
                    <span className=" px-sm font-primary fw-bold  fs-small text-spaced text-dark">{date}</span>
                    <span> | </span>
                    <span className=" px-sm font-primary fw-bold fs-small text-spaced text-dark">{readTime} Min Read </span>
                </div>
            <span className=" font-secondary  text-spaced text-gray py-sm ">{subtitle}</span>
        </div>
    )

}

export default Thought