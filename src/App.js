import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar, SideBarMobile } from "./components";
import { data } from "./data";
import {Home, SinglePage} from "./pages";

function App() {


  return (
    <BrowserRouter>
        <SideBar />
        <SideBarMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<SinglePage />} />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
