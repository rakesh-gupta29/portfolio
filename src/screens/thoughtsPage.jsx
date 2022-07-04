
import { Title,Thought} from "../components"
import { useContext, useEffect, useState } from "react"
import loadingIcon from "../assets/loader_img.svg"
import {AppState} from '../context/appData'

const ThoughtsPage =() =>{
    const { loading ,thoughts} = AppState();
    
    return (
        <>
        <section className="   master-padding my-lg" style={{minHeight:"calc(100vh - 150px)"}}>
            <Title  text="Thoughts" />
            {loading 
            ?<img src={loadingIcon} className="loader-img" />
            :<section className="flex  mx-auto  w-800 flex-col gap-lg  my-lg py-lg">
                {thoughts.map (( i,index ) => < Thought  key={index} data={i} />)}
            </section>}
        </section>
        </>
    )
}

export default ThoughtsPage