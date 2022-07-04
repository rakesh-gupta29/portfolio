
import { Title } from "../components"
import { useState ,useRef, useEffect} from "react"
import "./styles/projectsPage.css"
import loadingIcon from "../assets/loader_img.svg"
import codeIcon from "../icons/code.svg"
import demoIcon from "../icons/demo.svg"
import closeIcon from "../icons/x.svg"
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';
import { AppState } from "../context/appData";

const filterOptions  =["All","Latest","MERN","React","javaScript","Layouts"]
const placeholderData=  {
    title:"NA",
    subtitle:"NA",
    preview:[],
    description:"NA",
    codeLink:"",
    demoLink:"",
    tags:[]

}

const ProjectsPage =() =>{
    const { loading ,projects} = AppState();   
    const [currentFilter , setCurrentFilter ] = useState( 0);
    const [ displayData ,setDisplayData ] = useState (projects);
    const [modalData,setModalData] = useState ( placeholderData)
    useEffect(() =>{
        setDisplayData( projects)
    },[projects])

    const { modalProps, open ,close} = useModal({
        background: '#fbfaf6',
    });
    
    const handleFilter = target=>{
        setCurrentFilter( target );
        setDisplayData(
            projects.filter ( i => i.tags.includes(String(filterOptions[target]).toLowerCase()))
          ) 
    }
    const FilterBtn =( { text , id }) =>{
        return(
            <button onClick={ () => handleFilter ( id )}   className={`${currentFilter === id ? "active-filter" : ""} font-primary  filter-btn fs-small text-dark fw-bold shadow-hover  `}>
                {text}
            </button>
        )
    }

    const FilterWrapper  =() =>{
        return(
            <div className="mx-auto   flex align-center gap-md justify-center py-md px-md my-md  filter-wrapper  ">
                {filterOptions.map( (i ,index) => <FilterBtn    id={index} text={i} key={index} />)}
            </div>
        )
    }
    const ProjectItem =( { data,openModal,target })=>{
        const { title,thumbnail  ,subtitle } = data ;
        const btnRef = useRef(null);
        const  handleClick = () => {
            setModalData(displayData[target])
            openModal(btnRef);
        }
        return(
            <div  ref={btnRef} style={{
                background: `url(${thumbnail})` 
            }} onClick={handleClick} className="project-item flex" >
                <div   className="bg-card m-top-auto w-100 px-md py-sm text-light  loose-text flex flex-col gap-sm">
                    <span className=" fs-x-large font-secondary fw-bold  ">{title}</span>
                    <span className=" fs-small font-primary text-spaced ">{subtitle}</span>
                </div>
            </div>
        )
    }

    const ModalView =() =>{
        return (
            <>
            <button onClick={() =>close()} className=" px-sm flex-center circle bg-primary shadow-hover  text-light  modal-close-btn">
                <img src={closeIcon} alt=""  />
            </button>
            
            <div className="modal-data-master flex align-start justify-center gap-lg master-padding ">
                <div  className="text-master flex flex-col gap-sm align-start gap-sm ">
                    <span  className="fs-title font-secondary text-secondary loose-text py-sm "> {modalData.title}</span>
                    <span className="font-primary text-gray fs-larger">{modalData.subtitle}</span>
                    <span className="tag-pill font-primary text-secondary fw-bold fs-small py-sm loose-text grid-center uppercase  " >{modalData.tags[0]}</span>
                    <span className="font-secondary fs-large para-spaced text-dark">{modalData.description}</span>
                    <div className="flex flex-nowrap align-center gap-lg my-lg  ">
                        <a href={modalData.codeLink} target="_blank" className="px-md py-sm flex-center rounded-md bg-hover font-primary fs-larger fw-bold  loose-text text-primary px-md "> 
                            <img src={codeIcon} alt="" className="box-sm px-sm" />
                            <span className="px-md">Source Code</span>
                        </a>
                        <a href={modalData.demoLink} target="_blank" className="px-md  py-sm flex-center  bg-hover font-primary fs-larger rounded-md fw-bold  loose-text text-primary px-md "> 
                            <img src={demoIcon} alt="" className="box-sm" />
                            <span className="px-md">Demo</span> 
                        </a>
                        
                    </div>
                </div>
                <div className="img-master flex align-center justify-center flex-col gap-lg">
                    {modalData.preview.map ( ( i,index) =>{
                        return <img  src={i} key={index} className="modal-preview-img" />
                    })}
                </div>
            </div>
            </>
        )
    }

    return(
        <>
        <Title   text="Projects" />
        <section className="projects-master master-padding ">
            {loading
                ?<img src={loadingIcon} className="loader-img" />
                :<div>
                    <FilterWrapper />
                    <div  className="flex align-center justify-center gap-lg my-lg data-wrapper ">
                        {displayData.map(( i, index ) =>
                            <ProjectItem  openModal={open}  target={index}  data={i} key={index} />
                        )}
                    </div>
                </div>
            }
            <Modal {...modalProps} className="modal-test" padding={false } closeButton={false}>
                   <div className="test-bg">
                   <ModalView />
                   </div>
            </Modal>
        </section>
        </>
    )
}


export default ProjectsPage