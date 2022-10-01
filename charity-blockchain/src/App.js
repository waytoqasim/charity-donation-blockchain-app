import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
//import Footer from './Components/Footer';
import Donate from './Components/Donate';
import About from './Components/About';
import Team from './Components/Team';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Createcampaign from './Components/Createcampaign';
import Withdrawfunds from './Components/Withdrawfunds';

function App() {
  return (
   <>
   <Router>
   <Header/>
     <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Donate" element={<Donate/>} />
    <Route path="/Team" element={<Team/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/createcampaign" element={<Createcampaign/>} />
    <Route path="/withdrawfunds" element={<Withdrawfunds/>} />
</Routes>
<Footer/>
</Router>
   </>
  );
}

export default App;
