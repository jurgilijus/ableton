import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { Route, Routes } from "react-router-dom";
// CSS
import "./App.css";
import MoreSubmenu from "./Components/Header/MoreSubmenu";
function App() {
  return (
    <>
      <Header />
      <MoreSubmenu />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
