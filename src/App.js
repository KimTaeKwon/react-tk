import { useState } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Nav from "./component/Nav";
import Main from "./pages/Main";
import Ca from "./pages/Ca";
import Cl from "./pages/Cl";



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="/Ca" element={<Ca></Ca>}></Route>
      <Route path="/Cl" element={<Cl></Cl>}></Route>
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   {/* <Nav></Nav> */}
    //   <Switch>
    //     <Route path="/">
    //       <Ca></Ca>
    //     </Route>
    //     <Route path="/Cl">
    //       <Cl></Cl>
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
  );
}
export default App;