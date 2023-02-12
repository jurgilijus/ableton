import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { Route, Routes } from "react-router-dom";
// CSS
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
