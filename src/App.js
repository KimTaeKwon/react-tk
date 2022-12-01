import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from "./component/Nav";
import Main from "./pages/Main";
import Ca from "./pages/Ca";
import Cl from "./pages/Cl";
import Til from "./pages/Til";
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
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}
export default App;