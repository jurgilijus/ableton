import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import Live from "./Components/Live/Live";
import Push from "./Components/Push/Push";
import Note from "./Components/Note/Note";
import Link from "./Components/Link/Link";
import Shop from "./Components/Shop/Shop";
import Help from "./Components/Help/Help";
import Packs from "./Components/Packs/Packs";

// CSS
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/live" element={<Live />} />
        <Route path="/push" element={<Push />} />
        <Route path="/note" element={<Note />} />
        <Route path="/link" element={<Link />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/packs" element={<Packs />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
