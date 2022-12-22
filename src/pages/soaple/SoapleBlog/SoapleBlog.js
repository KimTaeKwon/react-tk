import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/soaple/SoapleBlog/page/MainPage";
// import MainPage from "./page/Mainpage";


// import MainPage from "./pages/soaple/SoapleBlog/page/MainPage";

function SoapleBlog(props) {
  return (
    // <p>Blog</p>
    <MainPage></MainPage>

    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<MainPage></MainPage>}></Route>
    //   </Routes>
    // </BrowserRouter>
    // <>
    // <p>SoapleBlog</p>
    // </>
  );
}
export default SoapleBlog;