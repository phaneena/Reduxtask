import Quizlist from "./components/Quiz/Quizlist"
import { Routes,Route } from "react-router-dom"
import Show from "./components/Quiz/Show"


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Quizlist />} />
      <Route path="/show" element={<Show />} />
     </Routes>
    </>
  )
}

export default App
