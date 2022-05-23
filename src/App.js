import logo from './logo.svg';
import './App.css';
import Homefile from './containers/HomeContainer';
import Register from './components/Register'
import MoreInformation from './components/MoreInformation';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
  <>
    <Router>
        <Routes>
            <Route path="/" element={<Homefile/>} />        
            <Route path="/Home" element={<Homefile/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/MoreInformation/:id" element={<MoreInformation/>}/>
            <Route path="/Register/:name"  element={<Register/>}/>
        </Routes>
    </Router>
      </>
  );
}
export default App;
