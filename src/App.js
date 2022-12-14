import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from "./component/Nav";
import Main from "./pages/Main";
import Ca from "./pages/Ca";
import Cl from "./pages/Cl";
import Til from "./pages/Til";

import Soaple from "./pages/soaple/Soaple";
import SoapleLibrary from "./pages/soaple/SoapleLibrary";

import MainPage from "./pages/soaple/SoapleBlog/page/MainPage";
// import './App.css';
import './App.scss';

const Wrapper = ({children}) => {
  const style = {
    border : '1px solid red',
    padding : '1em'
  }
  return (
    <div style={style}>{children}</div>
  )
}

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/Ca" element={<Ca></Ca>}></Route>
          <Route path="/Cl" element={<Cl></Cl>}></Route>
          <Route path="/Til" element={<Til></Til>}></Route>
          <Route path="/soaple/Soaple" element={<Soaple></Soaple>}></Route>
          <Route path="/soaple/SoapleLibrary" element={<SoapleLibrary></SoapleLibrary>}></Route>
          <Route path="/soaple/SoapleBlog/page/MainPage" element={<MainPage></MainPage>}></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}
export default App;