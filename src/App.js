import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import axios from "axios";


import Nav from "./Components/Nav/Nav";
import Homepage from "./Components/HomePage/Homepage";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import MyProfile from "./Components/Profile/myProfile"
import MyQuestions from "./Components/Questions/myQuestions"
import AddQuestion from "./Components/Questions/addQuestion"
import Questions from "./Components/Questions/Questions";

function App() {
  const [name, setName] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("");
      setName(data.Name)
    }
    fetchData();
    return () => {
      //
    }
  }, [])

  return (
      <Router>
        <div className="App">
          <Nav name={name} setName={setName}/>

          <div>
            <Routes>
              <Route exact path="/" element={<Homepage/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/homepage" element={<Homepage/>} />
              <Route path="/profile" element={<MyProfile/>} />
              <Route path="/myquestions" element={<MyQuestions/>} />
              <Route path="/add-question" element={<AddQuestion/>} />
              <Route path="/questions" element={<Questions/>} />
            </Routes>
          </div>
        </div>
      </Router>

  );
}

export default App;
