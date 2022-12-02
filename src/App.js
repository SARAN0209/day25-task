import "./App.css";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from "./Components/login";
import Dashboard from "./Components/dashboard";
import Buttons from "./Components/button";
import Cards from "./Components/cards";
import Table from "./Components/table";
import Chart from "./Components/chart";
import Color from "./Components/colors";
import Border from "./Components/borders";
import Animations from "./Components/animation";
import Other from "./Components/other";


function App() {
  return (  
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/button" element={<Buttons/>}/>
      <Route path="/cards" element={<Cards/>}/>
      <Route path="/table" element={<Table/>}/>
      <Route path="/chart" element={<Chart/>}/>
      <Route path="/color" element={<Color/>}/>
      <Route path="/border" element={<Border/>}/>
      <Route path="/animation" element={<Animations/>}/>
      <Route path="/other" element={<Other/>}/>
      
      
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;
