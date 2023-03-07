import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom";
import Navbar from './components/Navbar';
import Student from './components/Student';
import NoteState from './context/notes/NoteState';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="container">
       
        
        <ErrorBoundary>
          <Routes>
        <Route exact path="/myinfo" element={<Student />}/>
        </Routes></ErrorBoundary>
        
      </div>
      </Router>
      </>
  );
}

export default App;
