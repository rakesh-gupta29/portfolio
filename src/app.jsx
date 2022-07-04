
import { BrowserRouter,Routes,Route} from "react-router-dom"
import { HomePage,ThanksPage ,AboutPage,ProjectsPage, ThoughtsPage,ThoughtDetailPage, ContactPage} from "./screens"
import { NavBar,Footer} from "./components"
import  {ContextProvider}  from "./context/appData"


const App =() =>{
    return(
        <>

        <BrowserRouter>
        <ContextProvider>
            <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/thoughts" element={<ThoughtsPage /> }/>
                    <Route path="/skills" element={<AboutPage /> }/>
                    <Route path="/projects" element={<ProjectsPage /> } />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/contact/thanks" element={<ThanksPage />} />
                    <Route path="/thoughts/*" element={<ThoughtDetailPage />} />
                </Routes>
            <Footer />
            </ContextProvider>
        </BrowserRouter>
        </>
    )
}

export default App