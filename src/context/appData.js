import { createContext, useContext, useEffect, useState } from "react"

const appInitData = {
    projects:[],
    thoughts :[],
    loading:true
}

const appContext = createContext()
const fetchCall = async  (  target,type)  =>{
    try {
        return  await (  await  fetch(target ,{
        headers:{
            "secret-key":"$2b$10$oQcuv9eapkNrUX.A/O9L9e9TpgW0qPMkf20jLS0vz.ju/mYrqPruO",
        },
        })).json()
        
    } catch {
        return [] ;
    }


}

const  ContextProvider =( { children}) =>{
    const [appData , setAppData] = useState ( appInitData)
    useEffect(() =>{
        (async () =>{
           const projectsData = await fetchCall("https://api.jsonbin.io/b/6214d2101b38ee4b33c864a2/latest")
           const blogsData = await fetchCall("https://api.jsonbin.io/b/620d2bb6ca70c44b6e9ade9a/latest")
            setAppData({
                loading:false ,
                projects:projectsData,
                thoughts:blogsData
            })
        })()
    },[])

    return (
        <appContext.Provider value={appData}>
            {children}
        </appContext.Provider>
    )
}
const AppState =  () => useContext( appContext)
export { AppState,ContextProvider};