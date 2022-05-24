import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Register from './components/Register'
import MoreInformation from './components/MoreInformation';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
  <>
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home/>} />        
            <Route path="/MoreInformation/:id" element={<MoreInformation/>}/>
            <Route path="/Register/:name"  element={<Register/>}/>
        </Routes>
    </Router>
      </>
  );
}
export default App;
