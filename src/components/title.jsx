

const Title =( { text }) =>{
 
    return(
        <>
        <section  className=" fs-xx-large flex-center flex-col gap-sm  text-primary fw-bold  my-md  font-secondary  loose-text uppercase loose-text ">
            { text }
            <div style={{height:"4px",width:"60px"}} className=" underline-node border bg-primary "></div>
        </section>
        </>
    )
}

export default Title 