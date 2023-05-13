import React from 'react'
import Navbar from './MyComponents/Navbar'
import New from './MyComponents/New'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 


function App() {
  return (
      <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element= {<New  key = "general" category = "general"/>}/>
      <Route exact path="/general" element={<New  key = "general" category = "general"/>}/>
      <Route exact path="/business" element={<New key = "business" category = "business"/>}/>
      <Route exact path="/entertainment" element={<New key = "entertainment" category = "entertainment"/>}/>
      <Route exact path="/health" element={<New key = "health" category = "health"/>}/>
      <Route exact path="/science" element={<New key = "science" category = "science"/>}/>
      <Route exact path="/sports" element={<New key = "sports" category = "sports"/>}/>
      <Route exact path="/technology" element={<New key = "technology" category = "technology"/>}/>
      </Routes>
      </Router>
      </div>
  )
}

export default App
